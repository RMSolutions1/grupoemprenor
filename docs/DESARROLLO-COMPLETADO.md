# Desarrollo completado – Panel admin y APIs

Resumen de lo implementado como desarrollador senior: nuevas rutas, APIs, funcionalidades y uso de tablas existentes en Neon.

---

## 1. APIs creadas (admin)

Todas requieren **Authorization: Bearer &lt;token&gt;** y rol **administración**.

| Recurso | GET | POST | PATCH | DELETE |
|---------|-----|------|-------|--------|
| **/api/admin/services** | Listar servicios | Crear servicio | — | — |
| **/api/admin/services/[id]** | — | — | Editar servicio | Eliminar |
| **/api/admin/projects** | Listar proyectos | Crear proyecto | — | — |
| **/api/admin/projects/[id]** | — | — | Editar proyecto | Eliminar |
| **/api/admin/blog** | Listar entradas | Crear entrada | — | — |
| **/api/admin/blog/[id]** | — | — | Editar entrada | Eliminar |
| **/api/admin/offices** | Listar oficinas | Crear oficina | — | — |
| **/api/admin/offices/[id]** | — | — | Editar oficina | Eliminar |
| **/api/admin/site-config** | Obtener key-value | — | Actualizar keys | — |
| **/api/admin/users** | Listar usuarios (con rol) | — | — | — |
| **/api/admin/users/[id]** | — | — | Editar rol/activo | — |

- **Servicios:** slug, title, short_title, description, long_description, icon, order_index, active.
- **Proyectos:** title, slug, description, image_url, division_slug, project_date, order_index, active.
- **Blog:** title, slug, excerpt, content, image_url, published_at, active.
- **Oficinas:** city, address, zip, phone, order_index.
- **Site config:** objeto clave-valor (name, legalName, tagline, email, phone, whatsapp, address, etc.).
- **Usuarios:** solo edición de role_id, active, full_name, phone, company_name (no contraseña).

---

## 2. Páginas del panel admin

- **/dashboard/admin** – Inicio con tarjetas a todas las secciones.
- **/dashboard/admin/contactos** – (ya existía) Mensajes del formulario.
- **/dashboard/admin/solicitudes** – (ya existía) Solicitudes de cotización.
- **/dashboard/admin/servicios** – Listar, crear, editar y eliminar servicios.
- **/dashboard/admin/proyectos** – Listar, crear, editar y eliminar proyectos.
- **/dashboard/admin/blog** – Listar, crear, editar y eliminar entradas.
- **/dashboard/admin/oficinas** – Listar, crear, editar y eliminar oficinas.
- **/dashboard/admin/usuarios** – Listar usuarios y editar rol/activo.
- **/dashboard/admin/configuracion** – Formulario con todas las keys de `site_config` y guardar cambios.

---

## 3. Layout del panel

- Menú lateral con: **Inicio, Contactos, Solicitudes, Servicios, Proyectos, Blog, Oficinas, Usuarios, Configuración**.
- Página principal del panel con tarjetas que enlazan a cada sección.

---

## 4. Base de datos

- No se crearon tablas nuevas. Se usan las ya definidas en **database/schema-neon.sql**:
  - **services**, **projects**, **blog_posts**, **offices**, **site_config**, **users** (con **roles**).

---

## 5. Próximos pasos opcionales

- Hacer que el sitio público lea **servicios** y **proyectos** desde la BD (vía API pública o server components) en lugar de `lib/*-data.ts`.
- Añadir **subida de imágenes** (ej. a Vercel Blob o S3) para proyectos y blog.
- **Exportar** contactos/solicitudes a CSV desde el panel.

Todo lo anterior compila y está listo para desplegar (push a `main` y deploy en Vercel).
