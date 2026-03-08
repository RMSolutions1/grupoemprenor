# Desplegar en hosting gratuito (Vercel) – Paso a paso

**Vercel** es gratuito para proyectos personales y está pensado para Next.js. No necesitas configurar servidor ni SSH: conectas tu código (GitHub) y Vercel despliega solo.

---

## Qué necesitas

1. Cuenta en **GitHub** (gratis): [github.com](https://github.com)
2. Cuenta en **Vercel** (gratis): [vercel.com](https://vercel.com)
3. Tu proyecto en una **carpeta** en tu PC (el de Grupo Emprenor)

---

## Paso 1 – Subir el proyecto a GitHub

### 1.1 Crear repositorio en GitHub

1. Entra a [github.com](https://github.com) e inicia sesión.
2. Click en **“+”** (arriba derecha) → **New repository**.
3. Nombre del repositorio: por ejemplo `emprenor-web`.
4. Elige **Private** si no quieres que sea público.
5. **No** marques “Add a README” (ya tienes código).
6. Click en **Create repository**.

### 1.2 Subir el código desde tu PC

Abre **PowerShell** o **Símbolo del sistema** en la carpeta del proyecto:

```bash
cd "c:\Users\Windows\Desktop\GRUPO EMPRENOR\emprenor-website"
```

Si **no** tienes Git instalado, instálalo: [git-scm.com/download/win](https://git-scm.com/download/win). Luego ejecuta:

```bash
git init
git add .
git commit -m "Primer commit - sitio EMPRENOR"
```

(Si te pide configurar nombre y email la primera vez:  
`git config --global user.email "tu@email.com"`  
`git config --global user.name "Tu Nombre"`)

Crea la rama principal y enlaza con GitHub (cambia `TU-USUARIO` y `emprenor-web` por tu usuario de GitHub y el nombre del repo):

```bash
git branch -M main
git remote add origin https://github.com/TU-USUARIO/emprenor-web.git
git push -u origin main
```

Te pedirá usuario y contraseña de GitHub. Para contraseña, usa un **Personal Access Token** (GitHub ya no acepta contraseña normal): en GitHub → Settings → Developer settings → Personal access tokens → Generate new token, y úsalo donde pida contraseña.

---

## Paso 2 – Conectar el proyecto con Vercel

1. Entra a [vercel.com](https://vercel.com) y **Sign up** (puedes usar “Continue with GitHub”).
2. Click en **Add New…** → **Project**.
3. En la lista verás tus repos de GitHub. Elige **emprenor-web** (o el nombre que hayas puesto).
4. Click en **Import**.

---

## Paso 3 – Configurar variables de entorno (base de datos)

Antes de dar a **Deploy**, en la pantalla de importación:

1. Baja a **Environment Variables**.
2. Añade estas variables (con **tus** datos):

| Name         | Value                    |
|-------------|---------------------------|
| `DB_HOST`   | Host de tu MySQL          |
| `DB_USER`   | c2751446_grupoar          |
| `DB_PASSWORD` | Tu contraseña de la BD  |
| `DB_NAME`   | c2751446_grupoar          |
| `JWT_SECRET` | Una frase larga y secreta (ej. `claveSecretaEmprenor2024NoCompartir`) |

**Importante sobre la base de datos:**

- Tu MySQL está en **Ferozo**. Para que Vercel (en la nube) se conecte, el hosting debe permitir **conexiones remotas** a MySQL.
- Si Ferozo **no** permite conexiones desde fuera, el formulario de contacto y el login **no** funcionarán en Vercel. En ese caso puedes:
  - Preguntar a DonWeb si activan acceso remoto a MySQL y qué **host** usar (no `localhost`), y poner ese host en `DB_HOST`; o
  - Usar una base de datos gratuita en la nube (por ejemplo **PlanetScale** o **Vercel Postgres**) y ejecutar ahí el `database/schema.sql` (adaptado si hace falta).

Si dejas las variables en blanco o con un host que no permita conexión, la web se verá bien pero login y formulario fallarán.

---

## Paso 4 – Desplegar

1. Click en **Deploy**.
2. Vercel construye el proyecto (1–3 minutos).
3. Al terminar te da una URL: **https://emprenor-web-xxx.vercel.app** (o similar).

Ahí ya tienes la web desplegada en un hosting gratuito.

---

## Paso 5 – Usar tu propio dominio (opcional)

1. En el proyecto en Vercel, ve a **Settings** → **Domains**.
2. Añade tu dominio (ej. **www.emprenor.com.ar**).
3. Vercel te indica qué registros DNS crear (CNAME o A). Configúralos en el panel donde gestiones el dominio (DonWeb, NIC, etc.).
4. Cuando el DNS propague, el sitio quedará en tu dominio con HTTPS.

---

## Actualizar el sitio cuando cambies algo

1. En tu PC, en la carpeta del proyecto:
   ```bash
   git add .
   git commit -m "Descripción del cambio"
   git push
   ```
2. Vercel detecta el push y **vuelve a desplegar solo**. En 1–2 minutos la web estará actualizada.

---

## Resumen

| Paso | Acción |
|------|--------|
| 1 | Subir el proyecto a GitHub (crear repo, `git init`, `git add`, `git commit`, `git push`). |
| 2 | En Vercel: Add New → Project → Import desde GitHub. |
| 3 | Añadir variables: DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, JWT_SECRET. |
| 4 | Deploy. Usar la URL que te da Vercel. |
| 5 | (Opcional) Settings → Domains → añadir tu dominio. |

**Ventajas:** Gratis, sin configurar servidor, despliegue automático al hacer push, HTTPS y CDN incluidos.  
**Limitación:** La base de datos debe ser accesible desde internet (MySQL remoto o base en la nube) para que funcionen login, contacto y panel admin.
