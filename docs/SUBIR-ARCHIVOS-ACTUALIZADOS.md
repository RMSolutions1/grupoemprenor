# Cómo subir los archivos actualizados

Depende de cómo esté publicada su web: **solo estática en public_html** o **app completa con Node.js**.

---

## Opción 1 – Web estática en public_html (sin Node)

Si ya subió el **contenido de la carpeta `out`** a `public_html` y solo quiere actualizar la web cuando cambie algo:

### Pasos cada vez que actualice

1. **En su PC**, en la carpeta del proyecto:
   ```bash
   cd "c:\Users\Windows\Desktop\GRUPO EMPRENOR\emprenor-website"
   npm run build:static
   ```
   Esto regenera la carpeta **`out`** con la versión actual del sitio.

2. **Subir solo lo que cambió** (o todo de nuevo):
   - Por **FTP** (FileZilla, WinSCP, etc.): conéctese a su hosting, vaya a `public_html` y **reemplace** los archivos que haya modificado, o borre el contenido actual de `public_html` y suba de nuevo **todo el contenido** de `out`.
   - Por **administrador de archivos** del panel: borre el contenido actual de `public_html` (o las carpetas/archivos que quiera actualizar) y suba el contenido nuevo de `out`.

3. No hace falta subir el resto del proyecto (código fuente, `node_modules`, etc.); solo el **contenido de `out`**.

**Resumen:** Cambios en PC → `npm run build:static` → subir contenido de `out` a `public_html`.

---

## Opción 2 – App completa con Node.js en el servidor

Si tiene la app corriendo con Node (por SSH, PM2, etc.) y quiere actualizar el servidor:

### Primera vez (subir todo el proyecto)

1. En su PC:
   ```bash
   npm install
   npm run build
   ```
2. Suba por **FTP** o **Git** al servidor:
   - **Por FTP:** Carpeta del proyecto **sin** `node_modules` y sin `.next` (opcional: sin `out`). En el servidor ejecutará `npm install` y `npm run build`.
   - **Por Git:** Suba los cambios a GitHub/GitLab y en el servidor haga `git pull`, luego `npm install` y `npm run build`.

### Cada vez que actualice

1. En su PC: haga sus cambios y (si usa Git) `git add`, `git commit`, `git push`.
2. En el **servidor** (por SSH o por la opción que use el hosting):
   ```bash
   cd /ruta/donde/esta/la/app
   git pull
   npm install
   npm run build
   pm2 restart emprenor
   ```
   (Si no usa Git, suba por FTP los archivos que cambió y luego en el servidor: `npm run build` y `pm2 restart emprenor`.)

**No suba** a producción: `node_modules`, `.env.local` (las variables las configura en el servidor), ni la carpeta `.git` si no usa Git en el servidor.

---

## Qué herramienta usar para subir

| Método | Uso típico |
|--------|------------|
| **FTP** (FileZilla, WinSCP) | Conectar a su hosting con usuario/contraseña, arrastrar archivos a `public_html` o a la carpeta de la app. |
| **Administrador de archivos** (panel Ferozo/cPanel) | Entrar al panel → Archivos → `public_html` → Subir / Reemplazar archivos. |
| **Git** | Si el hosting tiene Git: en el servidor `git pull` para bajar los cambios; luego `npm run build` y reiniciar la app. |

---

## Resumen rápido

- **Solo public_html (estática):** `npm run build:static` → subir **contenido de `out`** a `public_html`.
- **App con Node:** subir código (FTP o Git) → en el servidor `npm install`, `npm run build`, reiniciar (ej. `pm2 restart`).
