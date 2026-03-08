/**
 * Genera una versión estática para subir a public_html.
 * Excluye API y dashboard (no funcionan sin Node). Solo páginas públicas.
 */
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, '..');
const apiPath = path.join(appDir, 'app', 'api');
const dashboardPath = path.join(appDir, 'app', 'dashboard');
const apiBak = path.join(appDir, 'app', '_api_bak');
const dashboardBak = path.join(appDir, 'app', '_dashboard_bak');
const nextConfig = path.join(appDir, 'next.config.js');
const nextConfigExport = path.join(appDir, 'next.config.export.js');
const nextConfigFull = path.join(appDir, 'next.config.full.js');

function rename(from, to) {
  if (fs.existsSync(from)) {
    if (fs.existsSync(to)) fs.rmSync(to, { recursive: true });
    fs.renameSync(from, to);
  }
}

console.log('Preparando build estático (sin API ni dashboard)...');

// Guardar config completo y usar config de export
rename(nextConfig, nextConfigFull);
rename(nextConfigExport, nextConfig);

// Ocultar api y dashboard para que no entren en el build
rename(apiPath, apiBak);
rename(dashboardPath, dashboardBak);

try {
  execSync('npm run build', { cwd: appDir, stdio: 'inherit' });
  console.log('\n✓ Build estático listo. Carpeta: out/');
  console.log('  Suba el CONTENIDO de "out" a public_html (no la carpeta "out" misma).');
  console.log('  Nota: formulario de contacto, login y panel admin NO funcionarán (requieren Node).');
} finally {
  // Restaurar
  rename(apiBak, apiPath);
  rename(dashboardBak, dashboardPath);
  rename(nextConfig, nextConfigExport);
  rename(nextConfigFull, nextConfig);
  console.log('Configuración restaurada.');
}
