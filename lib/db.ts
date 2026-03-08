import { Pool } from 'pg';

const connectionString =
  process.env.DATABASE_URL ||
  process.env.POSTGRES_URL ||
  process.env.POSTGRES_PRISMA_URL;

function getConnectionString(): string {
  if (!connectionString) {
    throw new Error(
      'Falta la URL de base de datos. Configure DATABASE_URL o POSTGRES_URL (Neon) en Vercel o .env.local.'
    );
  }
  return connectionString;
}

/** Convierte placeholders MySQL (?) a PostgreSQL ($1, $2, ...) */
function toPgPlaceholders(sql: string): string {
  let i = 0;
  return sql.replace(/\?/g, () => `$${++i}`);
}

let pool: Pool | null = null;

function getPgPool(): Pool {
  if (!pool) {
    pool = new Pool({
      connectionString: getConnectionString(),
      ssl: { rejectUnauthorized: false },
      max: 10,
      idleTimeoutMillis: 10000,
    });
  }
  return pool;
}

export type DbClient = {
  execute(
    sql: string,
    params?: (string | number | null)[]
  ): Promise<[Record<string, unknown>[], unknown]>;
};

/**
 * Cliente compatible con el uso anterior (pool.execute → [rows, fields]).
 * Usa PostgreSQL (Neon) con DATABASE_URL o POSTGRES_URL.
 */
export function getPool(): DbClient {
  const pgPool = getPgPool();
  return {
    async execute(
      sql: string,
      params: (string | number | null)[] = []
    ): Promise<[Record<string, unknown>[], unknown]> {
      const pgSql = toPgPlaceholders(sql);
      const result = await pgPool.query(pgSql, params);
      return [result.rows as Record<string, unknown>[], result.fields];
    },
  };
}

export async function query<T = Record<string, unknown>>(
  sql: string,
  params?: (string | number | null)[]
): Promise<T[]> {
  const client = getPool();
  const [rows] = await client.execute(sql, params);
  return rows as T[];
}

export async function queryOne<T = Record<string, unknown>>(
  sql: string,
  params?: (string | number | null)[]
): Promise<T | null> {
  const rows = await query<T>(sql, params);
  return rows?.[0] ?? null;
}
