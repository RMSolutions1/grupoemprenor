# Base de desarrollo – Sin inconsistencias

**Objetivo:** Que el código local sea una sola copia fiel del repositorio desplegado (`origin/main`) y que todo desarrollo nuevo se haga sobre esta base **sin dañar** lo ya desplegado.

---

## 1. Sincronización realizada

- Se ejecutó **`git fetch origin`** y **`git reset --hard origin/main`**.
- El directorio de trabajo local queda **igual** al estado de la rama `main` en GitHub.
- Cualquier cambio local previo que no estuviera en el remoto fue descartado.
- **Vercel** despliega desde `main`; por tanto, lo que está en `origin/main` es la base del sitio en https://grupoemprenor.vercel.app.

---

## 2. Estructura actual (lo que está en el repo / desplegado)

### Panel admin (`app/dashboard/admin/`)

- **layout.tsx** – Menú: Inicio, Contactos, Solicitudes.
- **page.tsx** – Página principal del panel (tarjetas Contactos y Solicitudes).
- **contactos/page.tsx** – Listado y edición de mensajes del formulario de contacto.
- **solicitudes/page.tsx** – Listado y edición de solicitudes de cotización.

### APIs (`app/api/`)

- **auth:** `setup`, `login`, `me`.
- **contacts:** GET (admin), POST (público).
- **admin/contacts/[id]:** PATCH (estado y notas).
- **requests:** GET (admin), POST (público).
- **admin/requests/[id]:** PATCH (estado y notas).

### Base de datos (Neon)

- Tablas: `roles`, `users`, `contacts`, `requests`, `services`, `projects`, `blog_posts`, `site_config`, `offices`.
- Schema: `database/schema-neon.sql`.

### Sitio público

- Inicio, Nosotros, Servicios, divisiones, Proyectos, Blog, Contacto, Calculadora (con formulario a `/api/requests`).

---

## 3. Cómo seguir desarrollando sin dañar lo desplegado

1. **Siempre partir de `main` actualizado:** antes de crear ramas o features, hacer `git pull origin main` (o `git fetch` + `merge`/`rebase` según flujo).
2. **No modificar a la ligera:** layout del admin, rutas de APIs existentes y nombres de tablas/columnas ya usados en producción. Si hace falta cambiar algo, hacerlo de forma compatible (ej. añadir campos, no borrar los que usa el front).
3. **Probar en local:** `npm run build` y revisar que no se rompan las páginas/APIs actuales antes de hacer push.
4. **Desarrollos nuevos:** añadir nuevas rutas (ej. `/dashboard/admin/servicios`), nuevas APIs (ej. `GET/POST /api/services`) y nuevos componentes, sin tocar la lógica ya usada por Contactos y Solicitudes salvo que sea necesario y esté probado.

---

## 4. Próximos desarrollos sugeridos (sin tocar lo ya desplegado)

- **Servicios en el admin:** nueva página `app/dashboard/admin/servicios/page.tsx` y APIs para listar/crear/editar desde la tabla `services`.
- **Proyectos en el admin:** nueva página y APIs para `projects`.
- **Configuración:** página y API para leer/editar `site_config`.
- **Blog y Oficinas:** igual patrón cuando se prioricen.

Todo ello se puede hacer **añadiendo** archivos y rutas nuevas, manteniendo intactas las estructuras actuales del dashboard y de las APIs de contactos y solicitudes.
