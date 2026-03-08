# Lista para producción – Grupo Emprenor

Compruebe estos puntos antes de dar por cerrado el despliegue en producción.

---

## Listo de fábrica

- Variables sensibles en `.env` / `.env.local` (no subidas a Git).
- `.gitignore` incluye `.env.local`, `node_modules`, `.next`, `out`.
- Base de datos: `database/schema.sql` listo para ejecutar una vez en MySQL.
- APIs con validación básica (setup, login, contactos).
- Contraseñas con hash (bcrypt) y sesiones con JWT.
- Cabeceras de seguridad en Next.js (X-Frame-Options, X-Content-Type-Options, Referrer-Policy).
- Metadata y SEO en layout (title, description, Open Graph, robots).
- Sin `console.log` en código de la app (solo en scripts de build).

---

## Debe hacer usted (antes de producción)

| Punto | Acción |
|-------|--------|
| **JWT_SECRET** | En producción use una clave larga y aleatoria (ej. `openssl rand -base64 32`). No use la de desarrollo. |
| **Variables de entorno** | Configure en el hosting (Vercel, Ferozo, etc.): `DB_HOST`, `DB_USER`, `DB_PASSWORD`, `DB_NAME`, `JWT_SECRET`. |
| **Base de datos** | Ejecute `database/schema.sql` en MySQL del servidor/hosting. |
| **Primer admin** | Tras desplegar, entre a `/login/setup` y cree el primer usuario administrador. |
| **HTTPS** | Asegúrese de que el dominio use HTTPS (Vercel y la mayoría de hostings lo dan por defecto). |

---

## Opcional (recomendado a medio plazo)

- **Límite de intentos** en login (evitar fuerza bruta) o uso de un servicio de auth.
- **Límite de envíos** del formulario de contacto por IP (rate limiting).
- **Backups** de la base de datos de forma periódica.
- **Monitoreo** (errores, disponibilidad) si el sitio es crítico.

---

## Resumen

La aplicación está **lista para desplegar** siempre que:

1. Configure las variables de entorno en el entorno de producción.
2. Ejecute el SQL en la base de datos.
3. Use un `JWT_SECRET` fuerte y distinto al de desarrollo.
4. Cree el primer administrador en `/login/setup` después del primer despliegue.

No es obligatorio cambiar código para un primer despliegue en producción.
