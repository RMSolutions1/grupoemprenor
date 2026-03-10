# Estado actual y próximos pasos (desarrollo sobre web en línea)

Documento extraído del repositorio para seguir desarrollando en el mismo código que está desplegado en **https://grupoemprenor.vercel.app** (Vercel + Neon). Las variables de entorno y la base de datos están configuradas y funcionando.

---

## 1. Repositorio y despliegue

- **Repo:** `https://github.com/RMSolutions1/grupoemprenor` (rama `main`).
- **Despliegue:** Vercel despliega automáticamente desde `main`. Cualquier push a `main` actualiza la web en línea.
- **Base de datos:** Neon (PostgreSQL). Tablas: `roles`, `users`, `contacts`, `requests`, `services`, `projects`, `blog_posts`, `site_config`, `offices`.

---

## 2. Lo que ya está en línea (según último deploy)

- Sitio público: Inicio, Nosotros, Servicios, divisiones, Proyectos, Blog, Contacto, Calculadora.
- Formulario de contacto → `/api/contacts` → tabla `contacts`.
- Login (`/login`), setup primer admin (`/login/setup`), JWT y redirección por rol.
- Panel admin (`/dashboard/admin`): **Contactos** (listar, editar estado y notas). Solicitudes aún no desplegadas si no se ha hecho push de los últimos cambios.

---

## 3. Cambios listos para subir (en este workspace)

Implementados en el código local y listos para push para que pasen a estar “en línea”:

- **Solicitudes / cotizaciones**
  - `POST /api/requests` – crear solicitud (público).
  - `GET /api/requests` – listar (solo admin).
  - `PATCH /api/admin/requests/[id]` – actualizar estado y notas.
  - Página admin **Solicitudes** (`/dashboard/admin/solicitudes`): listar y editar (nuevo, en proceso, cotizado, cerrado).
  - Menú admin: enlace a Solicitudes; tarjeta en inicio del panel.
  - **Calculadora** (`/calculadora`): formulario que envía a `POST /api/requests` con `source: 'calculadora'`.

Tras hacer **commit y push** de estos archivos, la web desplegada tendrá Solicitudes y el formulario de calculadora funcionando.

---

## 4. Próximas secciones/páginas a desarrollar (según documentación)

Referencia: **PLAN-DASHBOARDS-Y-ADMIN.md**, **FUNCIONALIDADES-PENDIENTES.md**.

### 4.1 Panel Admin – Contenido (CMS) – prioridad siguiente

- **Servicios:** listar/editar en admin (título, slug, descripción, orden, activo). Hoy los datos están en `lib/*-data.ts`; la tabla `services` existe en Neon.
- **Proyectos:** CRUD en admin (título, descripción, imagen, división, fecha). Tabla `projects` en Neon.
- **Blog:** CRUD de entradas (título, slug, resumen, cuerpo, imagen, fecha). Tabla `blog_posts` en Neon.
- **Configuración del sitio:** editar nombre, tagline, teléfono, email, WhatsApp, dirección, etc. Tabla `site_config` en Neon; hoy se usa `lib/constants.ts`.
- **Oficinas:** listar/editar sedes. Tabla `offices` en Neon.

### 4.2 Dashboards por rol (Fase 4 del plan)

- **Cliente:** mis solicitudes, estado de cotizaciones, mensajes, mi perfil.
- **Proveedor / Empleado / Empresa:** según plan (ofertas, tareas, proyectos, documentos, etc.).

### 4.3 Mejoras opcionales

- Rate limiting en formularios (contacto y solicitudes).
- Límite de intentos en login.
- Exportar contactos/solicitudes a CSV.

---

## 5. Orden recomendado para seguir desarrollando

1. **Subir a `main`** los cambios de Solicitudes (APIs, página admin, calculadora) para que la web en línea los tenga.
2. **Siguiente:** implementar en el panel admin el módulo de **Servicios** (lectura desde Neon + pantalla de listado/edición), para que el contenido de servicios sea editable sin tocar código.
3. Luego **Configuración del sitio** (site_config) y después **Proyectos** y **Blog** según prioridad.

Todas las modificaciones se hacen en este mismo repositorio; al hacer push a `main`, Vercel actualiza la web desplegada.
