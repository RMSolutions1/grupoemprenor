import mysql from 'mysql2/promise';

const env = process.env;

function getConfig() {
  const host = env.DB_HOST || 'localhost';
  const user = env.DB_USER;
  const password = env.DB_PASSWORD;
  const database = env.DB_NAME;

  if (!user || !database) {
    throw new Error(
      'Faltan variables de entorno de base de datos: DB_USER, DB_NAME (y opcionalmente DB_HOST, DB_PASSWORD).'
    );
  }

  return {
    host,
    user,
    password: password || undefined,
    database,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    charset: 'utf8mb4',
  };
}

let pool: mysql.Pool | null = null;

export function getPool(): mysql.Pool {
  if (!pool) {
    pool = mysql.createPool(getConfig());
  }
  return pool;
}

export async function query<T = unknown>(
  sql: string,
  params?: (string | number | null)[]
): Promise<T> {
  const connection = getPool();
  const [rows] = await connection.execute(sql, params);
  return rows as T;
}

export async function queryOne<T = unknown>(
  sql: string,
  params?: (string | number | null)[]
): Promise<T | null> {
  const rows = await query<unknown[]>(sql, params);
  return rows && rows[0] != null ? (rows[0] as T) : null;
}
