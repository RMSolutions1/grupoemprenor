# Cómo subir la web al hosting – Paso a paso

Su sitio está hecho con **Next.js** (Node.js). No todos los hostings lo soportan. Siga según su caso.

---

## ¿Usa Ferozo (DonWeb)?

Si su hosting es **[Ferozo](https://ferozo.host/)** (panel de DonWeb), tiene una guía específica:

→ **[Subir la web a Ferozo (DonWeb) – Paso a paso](SUBIR-A-FEROZO-DONWEB.md)**

Ahí se explica cómo desplegar en Cloud Server con SSH (instalar Node.js, PM2, proxy) y qué hacer si solo tiene cuenta de hosting.

---

## Antes de empezar

- La **base de datos** ya está en su hosting (MySQL, usuario `c2751446_grupoar`, base `c2751446_grupoar`, servidor `localhost`).
- Necesita un lugar donde ejecutar **Node.js**. Opciones:
  1. **Hosting con Node.js** (VPS, o plan que diga “Node.js” / “Aplicaciones Node”).
  2. **Vercel** (gratis, ideal para Next.js) y conectar a su MySQL si el hosting permite **acceso remoto** a la base de datos.

---

## OPCIÓN A – Hosting con Node.js (cPanel, VPS, etc.)

### Paso 1 – Generar la build en su PC

1. Abra una terminal en la carpeta del proyecto:
   ```bash
   cd "c:\Users\Windows\Desktop\GRUPO EMPRENOR\emprenor-website"
   ```
2. Instale dependencias y genere la build:
   ```bash
   npm install
   npm run build
   ```
3. Si no da errores, se habrá creado la carpeta **`.next`** con el sitio listo para producción.

### Paso 2 – Subir archivos al servidor

Depende de su hosting:

- **Por FTP (FileZilla, WinSCP, etc.):**
  1. Conéctese con el usuario y contraseña que le dio el hosting.
  2. Suba **todo el contenido** de la carpeta `emprenor-website` (incluido `.next`, `node_modules` si el hosting no tiene Node, o solo lo que le indique el panel).
  3. Muchos hostings piden que la app esté en una carpeta tipo `public_html` o `nodeapp`. Use la ruta que le indiquen.

- **Por “Administrador de archivos” (cPanel):**
  1. Entrar a “Administrador de archivos” o “File Manager”.
  2. Ir a la carpeta donde deba estar la app (ej. `public_html` o la que indique el hosting para Node).
  3. Subir un ZIP del proyecto, luego descomprimirlo en el servidor.

- **Por Git (si el hosting lo permite):**
  1. Suba el código a GitHub/GitLab.
  2. En el panel del hosting use “Deploy from Git” o “Clonar repositorio” y luego en el servidor ejecute:
     ```bash
     npm install
     npm run build
     ```

### Paso 3 – Variables de entorno en el hosting

En el panel del hosting busque **“Variables de entorno”**, **“Environment”** o **“.env”** y configure:

| Nombre        | Valor              |
|---------------|--------------------|
| `DB_HOST`     | `localhost`        |
| `DB_USER`     | `c2751446_grupoar` |
| `DB_PASSWORD` | `34diziliRU`       |
| `DB_NAME`     | `c2751446_grupoar` |
| `JWT_SECRET`  | Una frase larga y aleatoria (ej. `miClaveSecretaEmprenor2024NoCompartir`) |

Si el hosting no tiene pantalla de variables, cree un archivo **`.env`** o **`.env.production`** en la **misma carpeta donde está la app** en el servidor, con ese contenido (sin comillas, una variable por línea). No suba ese archivo a redes ni lo comparta.

### Paso 4 – Ejecutar la aplicación en el servidor

- Si el panel tiene **“Iniciar aplicación Node”** o **“Run Node app”**:
  - Comando de inicio: `npm run start` o `node .next/standalone/server.js` (si usó `output: 'standalone'`).
  - Carpeta de la app: la ruta donde subió el proyecto (ej. `public_html/emprenor-website`).

- Si tiene **SSH** (acceso por consola):
  ```bash
  cd /ruta/donde/subio/la/app
  npm install --production
  npm run build
  npm run start
  ```
  Para dejarla siempre encendida suelen usar **PM2**:
  ```bash
  npm install -g pm2
  pm2 start npm --name "emprenor" -- start
  pm2 save
  pm2 startup
  ```

### Paso 5 – Dominio y puerto

- Algunos hostings asignan un **puerto** (ej. 3000). En el panel suele decir “Acceda a su app en: https://tudominio.com:3000” o similar.
- Si puede configurar **proxy o “Application URL”**, apunte el dominio (ej. `https://www.emprenor.com`) a esa aplicación Node.

---

## OPCIÓN B – Vercel (recomendado si su hosting no tiene Node.js)

Vercel es gratuito para proyectos personales y entiende Next.js muy bien.

### Paso 1 – Cuenta y proyecto en Vercel

1. Entrar en [vercel.com](https://vercel.com) y crear cuenta (con GitHub si puede).
2. Instalar Vercel en su PC (opcional pero útil):
   ```bash
   npm install -g vercel
   ```
3. En la carpeta del proyecto:
   ```bash
   cd "c:\Users\Windows\Desktop\GRUPO EMPRENOR\emprenor-website"
   vercel
   ```
4. Seguir las preguntas: enlace a un repositorio Git o “Upload” del proyecto. Vercel detectará Next.js y hará la build.

### Paso 2 – Variables de entorno en Vercel

1. En el proyecto en Vercel: **Settings → Environment Variables**.
2. Añadir las mismas variables (Production y Preview si quiere):
   - `DB_HOST`
   - `DB_USER`
   - `DB_PASSWORD`
   - `DB_NAME`
   - `JWT_SECRET`

**Importante:** En Vercel, la app **no** está en el mismo servidor que su MySQL. Por tanto **no** puede usar `DB_HOST=localhost`. Debe usar el **host remoto** que le dé su hosting para MySQL (ej. `mysql.sudominio.com` o la IP/host que figure en el panel). Si su hosting **no permite conexiones remotas a MySQL**, esta opción no funcionará y deberá usar la **Opción A** en un servidor con Node.js.

### Paso 3 – Dominio en Vercel

En **Settings → Domains** puede añadir su dominio (ej. `www.emprenor.com`) y seguir las instrucciones de DNS que le indique Vercel.

---

## Después de subir la web

1. **Crear el administrador:** abra en el navegador:
   - `https://su-dominio.com/login/setup`
   Complete nombre, email y contraseña y pulse “Crear administrador”.

2. **Iniciar sesión:** vaya a:
   - `https://su-dominio.com/login`
   Entre con ese email y contraseña. Será redirigido al panel de administración.

3. **Panel admin:** en `https://su-dominio.com/dashboard/admin` podrá ver contactos y gestionar el sitio.

---

## Resumen rápido

| Paso | Acción |
|------|--------|
| 1 | Tener la base de datos y el SQL ya ejecutado en el hosting (hecho). |
| 2 | Elegir: **Hosting con Node.js** (Opción A) o **Vercel** (Opción B). |
| 3 | Hacer `npm run build` y subir el proyecto (o conectar Git). |
| 4 | Configurar en el servidor/Vercel: `DB_HOST`, `DB_USER`, `DB_PASSWORD`, `DB_NAME`, `JWT_SECRET`. |
| 5 | En Node: ejecutar `npm run start` (o PM2). En Vercel: se despliega solo. |
| 6 | Ir a **/login/setup** y crear el primer administrador. |
| 7 | Entrar por **/login** y usar **/dashboard/admin**. |

Si me dice el **nombre de su hosting** (ej. Hostinger, DonWeb, cPanel, etc.), puedo ajustarle los pasos exactos para ese panel.
