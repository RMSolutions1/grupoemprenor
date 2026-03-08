# Despliegue – Grupo Emprenor

El proyecto usa **PostgreSQL en Neon** (recomendado para Vercel). Solo hay que ejecutar el SQL en Neon y configurar dos variables de entorno.

## 1. Base de datos en Neon

1. Crear una base de datos en [Neon](https://neon.tech) (o usar la que ya tenga).
2. En el panel de Neon, abrir **SQL Editor**.
3. Copiar todo el contenido de **`database/schema-neon.sql`** del proyecto y pegarlo en el editor.
4. Ejecutar el script. Se crearán las tablas y los datos iniciales (roles, servicios, configuración, oficinas).

## 2. Variables de entorno (Vercel)

En **Vercel** → su proyecto → **Settings** → **Environment Variables**, añada:

| Variable        | Descripción |
|-----------------|-------------|
| `DATABASE_URL`  | URL de conexión de Neon (recomendada la **pooled** con `?sslmode=require`). Se obtiene en Neon → Connection string. |
| `JWT_SECRET`     | Clave para firmar sesiones (login). Ejemplo: `openssl rand -base64 32` |

Puede usar en lugar de `DATABASE_URL` la variable `POSTGRES_URL` si su panel la ofrece; la aplicación acepta ambas.

**Importante:** no suba `.env.local` al repositorio; en producción use solo las variables del panel de Vercel.

## 3. Desplegar

- Conectar el repo (GitHub, etc.) a Vercel y desplegar, o hacer push para redeploy.
- Asegurarse de que en el build estén definidas `DATABASE_URL` y `JWT_SECRET`.

## 4. Crear el primer administrador

1. Abra **`https://su-dominio.vercel.app/login/setup`** (o su dominio).
2. Complete nombre, email y contraseña del primer administrador.
3. Pulse **Crear administrador**.
4. Inicie sesión en **/login** y acceda al panel en **/dashboard/admin**.

A partir de ahí puede gestionar **Contactos** y el resto de datos desde el panel.

## Resumen

1. Ejecutar **`database/schema-neon.sql`** en el SQL Editor de Neon.  
2. Configurar **DATABASE_URL** (o **POSTGRES_URL**) y **JWT_SECRET** en Vercel.  
3. Desplegar la app.  
4. Ir a **/login/setup** y crear el primer administrador.
