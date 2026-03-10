# Funcionalidades pendientes – Grupo Emprenor

Revisión realizada sobre la web en línea (https://grupoemprenor.vercel.app) y el código actual.

---

## Lo que ya funciona

- **Sitio público:** Inicio, Nosotros, Servicios, divisiones, Proyectos, Blog, Contacto, Calculadora (página estática).
- **Formulario de contacto** (`/contacto`): envía a `/api/contacts`, se guarda en Neon (tabla `contacts`).
- **Login único** (`/login`): email + contraseña, JWT, redirección por rol.
- **Setup primer admin** (`/login/setup`): crea el primer usuario administración.
- **Panel admin** (`/dashboard/admin`): solo accesible con rol administración.
  - **Contactos** (`/dashboard/admin/contactos`): listar mensajes del formulario, cambiar estado (nuevo/leído/respondido/archivado) y notas internas.

---

## Funcionalidades faltantes (para desarrollar)

### 1. Solicitudes / Cotizaciones ✅ (implementado en el repo)

- **Tabla en Neon:** `requests` ya existe.
- **Implementado:**
  - **API:** `POST /api/requests` (crear), `GET /api/requests` (admin), `PATCH /api/admin/requests/[id]`.
  - **Página admin:** `/dashboard/admin/solicitudes` (listar y editar estado/notas).
  - **Calculadora:** formulario en `/calculadora` que envía a `POST /api/requests` con `source: 'calculadora'`.
  - Menú admin actualizado con enlace a Solicitudes.
- Tras push a `main`, la web en línea tendrá esta funcionalidad.

### 2. Contenido editable desde el panel (prioridad media)

- **Servicios, Proyectos, Blog, Config del sitio** están en Neon (`services`, `projects`, `blog_posts`, `site_config`) pero el sitio hoy usa datos en código (`lib/*-data.ts`, `lib/constants.ts`).
- **Falta:** pantallas en el panel admin para listar/editar (y opcionalmente que el sitio lea de la BD o de una API que consulte Neon).

### 3. Mejoras opcionales

- **Rate limiting** en formularios (contacto y solicitudes) por IP.
- **Límite de intentos** en login.

---

## Próximo paso recomendado

- **Solicitudes** ya está implementado en el código (ver sección 1 arriba). Subir cambios a `main` para que la web en línea lo tenga.
- **Siguiente:** ver **docs/ESTADO-Y-PROXIMOS-PASOS.md** para el orden de desarrollo (Servicios, Config, Proyectos, Blog en el panel admin).
