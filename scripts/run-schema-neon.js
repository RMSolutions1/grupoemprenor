/**
 * Ejecuta database/schema-neon.sql en la base Neon.
 * Carga variables desde .env.local (DATABASE_URL o POSTGRES_URL).
 * Uso: node scripts/run-schema-neon.js
 */

const path = require('path');
const fs = require('fs');
const { Pool } = require('pg');

const projectRoot = path.resolve(__dirname, '..');

function loadEnvLocal() {
  const envPath = path.join(projectRoot, '.env.local');
  if (!fs.existsSync(envPath)) return;
  const content = fs.readFileSync(envPath, 'utf8');
  for (const line of content.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eq = trimmed.indexOf('=');
    if (eq <= 0) continue;
    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'")))
      value = value.slice(1, -1);
    process.env[key] = value;
  }
}

loadEnvLocal();

const connectionString = process.env.DATABASE_URL || process.env.POSTGRES_URL || process.env.POSTGRES_PRISMA_URL;
if (!connectionString) {
  console.error('Falta DATABASE_URL o POSTGRES_URL. Añádela en .env.local o en el entorno.');
  process.exit(1);
}

const schemaPath = path.join(projectRoot, 'database', 'schema-neon.sql');
const sql = fs.readFileSync(schemaPath, 'utf8');

async function run() {
  const pool = new Pool({
    connectionString,
    ssl: { rejectUnauthorized: false },
  });
  try {
    await pool.query(sql);
    console.log('Schema Neon ejecutado correctamente.');
  } catch (err) {
    console.error('Error ejecutando schema:', err.message);
    process.exit(1);
  } finally {
    await pool.end();
  }
}

run();
