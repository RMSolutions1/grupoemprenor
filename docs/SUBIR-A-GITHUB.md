# Subir el proyecto a GitHub desde aquí

## Datos que necesitas tener

Antes de ejecutar los comandos, ten a mano:

| Dato | Dónde conseguirlo | Ejemplo |
|------|-------------------|---------|
| **Usuario de GitHub** | Tu cuenta en [github.com](https://github.com) | `angelromero` |
| **Nombre del repositorio** | Lo creas en GitHub (New repository) | `emprenor-web` |
| **Token de acceso (PAT)** | GitHub → Settings → Developer settings → Personal access tokens | `ghp_xxxxxxxxxxxx` |

GitHub **ya no acepta tu contraseña** para `git push`. Debes usar un **Personal Access Token**:

1. En GitHub: click en tu foto (arriba derecha) → **Settings**.
2. Abajo a la izquierda: **Developer settings**.
3. **Personal access tokens** → **Tokens (classic)** → **Generate new token (classic)**.
4. Pon un nombre (ej. "Emprenor") y marca el permiso **repo**.
5. **Generate token** y **copia el token** (solo se muestra una vez). Guárdalo como si fuera tu contraseña.

---

## Si el repositorio **aún no existe** en GitHub

1. Entra a [github.com/new](https://github.com/new).
2. **Repository name:** por ejemplo `emprenor-web`.
3. Elige **Private** si no quieres que sea público.
4. **No** marques "Add a README" ni ".gitignore".
5. **Create repository**.
6. No clones todavía; usa los comandos de abajo desde tu carpeta del proyecto.

---

## Comandos para subir desde tu PC

Abre **PowerShell** o **Símbolo del sistema** y ejecuta **en este orden** (cambia `TU-USUARIO` y `emprenor-web` por tu usuario y nombre del repo):

```bash
cd "c:\Users\Windows\Desktop\GRUPO EMPRENOR\emprenor-website"
```

Si es la **primera vez** que usas Git en esta PC (solo una vez):

```bash
git config --global user.email "tu@email.com"
git config --global user.name "Tu Nombre"
```

Inicializar y hacer el primer commit:

```bash
git init
git add .
git commit -m "Sitio EMPRENOR - primer subida"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/emprenor-web.git
git push -u origin main
```

Cuando pida **usuario**: tu usuario de GitHub.  
Cuando pida **contraseña**: pega tu **Personal Access Token** (no tu contraseña de GitHub).

---

## Resumen de datos para “subir directamente desde aquí”

- **Usuario GitHub:** el que usas para entrar a github.com.
- **Nombre del repo:** el que creaste (ej. `emprenor-web`).
- **URL del remoto:** `https://github.com/TU-USUARIO/emprenor-web.git`.
- **Contraseña para push:** el **token** (PAT) que generaste, no la contraseña de la cuenta.

El archivo **.env.local** no se sube (está en .gitignore); las variables de base de datos las configuras en Vercel o en el servidor donde despliegues.
