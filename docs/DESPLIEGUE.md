# Despliegue – Grupo Emprenor

Para dejar el sitio y los dashboards funcionando en su hosting, siga estos pasos. **Solo debe ejecutar el SQL y configurar variables de entorno.**

## 1. Ejecutar el SQL en la base de datos

1. Entrar a **phpMyAdmin** (o consola MySQL) de su hosting.
2. Seleccionar la base de datos del proyecto (ej. `c2751446_grupoar`).
3. Ir a la pestaña **SQL**.
4. Abrir el archivo **`database/schema.sql`** del proyecto, copiar todo su contenido y pegarlo en el cuadro SQL.
5. Pulsar **Continuar** / **Ejecutar**.

Con esto se crean todas las tablas y los datos iniciales (roles, servicios, configuración del sitio, oficinas). No es necesario ejecutar ningún otro script.

## 2. Variables de entorno en el hosting

En el panel de su hosting (o en el archivo `.env` / `.env.local` si el servidor lo permite), configure:

| Variable     | Descripción                          | Ejemplo           |
|-------------|--------------------------------------|-------------------|
| `DB_HOST`   | Host de MySQL (en local puede ser `source`) | `localhost`       |
| `DB_USER`   | Usuario de la base de datos          | `c2751446_grupoar` |
| `DB_PASSWORD` | Contraseña de la base de datos    | (su contraseña)   |
| `DB_NAME`   | Nombre de la base de datos           | `c2751446_grupoar` |
| `JWT_SECRET` | Clave secreta para las sesiones (login) | Una frase o string largo y aleatorio |

Puede generar un valor seguro para `JWT_SECRET` con:  
`openssl rand -base64 32` (en consola) o cualquier generador de contraseñas.

## 3. Desplegar la aplicación

- Subir el código del proyecto al hosting (por FTP, Git, o el método que use).
- Asegurarse de que el servidor ejecute **Node.js** y que el sitio Next.js se inicie con `npm run build` y `npm run start` (o el proceso que configure su proveedor).
- No suba el archivo `.env.local` si contiene datos sensibles; use las variables de entorno del panel del hosting.

## 4. Crear el primer administrador

1. Una vez desplegado, abra en el navegador: **`https://su-dominio.com/login/setup`**
2. Complete: nombre, email y contraseña del primer usuario administrador.
3. Pulse **Crear administrador**.
4. Si todo es correcto, será redirigido al login. Entre con ese email y contraseña; accederá al **Panel de administración** en `/dashboard/admin`.

A partir de ahí puede gestionar **Contactos** (mensajes del formulario) y, en futuras fases, solicitudes, servicios, proyectos, blog y configuración del sitio, todo sin editar código.

## Resumen

1. Ejecutar **`database/schema.sql`** en MySQL (phpMyAdmin o consola).  
2. Configurar **DB_HOST**, **DB_USER**, **DB_PASSWORD**, **DB_NAME** y **JWT_SECRET** en el hosting.  
3. Desplegar la app (Node.js + Next.js).  
4. Ir a **/login/setup** y crear el primer administrador.  
5. Iniciar sesión en **/login** y usar el panel en **/dashboard/admin**.

No hace falta tocar la base de datos manualmente después del paso 1; el administrador trabaja solo desde el panel.
