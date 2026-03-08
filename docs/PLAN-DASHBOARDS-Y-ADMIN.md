# Plan de desarrollo: Dashboards y panel de administración

## 1. Resumen

- **Un solo login** en el header para todos los perfiles: **Cliente**, **Proveedor**, **Empleado**, **Empresa** y **Administración**.
- Tras iniciar sesión, el sistema redirige al **dashboard correspondiente** según el rol del usuario.
- El **panel de Administración** es el único panel de control general: permite gestionar **toda** la información del sitio (contactos, solicitudes, servicios, proyectos, blog, configuración, etc.) **sin editar código**.

---

## 2. Base de datos

### 2.1 Conexión

- Base de datos MySQL indicada para el proyecto.
- Las credenciales **no** se guardan en el código; se usan **variables de entorno** (`.env.local`).
- En entornos locales se puede usar `source` como host si así está configurado en el servidor.

Archivo de ejemplo: **`.env.example`** (copiar a `.env.local` y completar con los valores reales):

```env
# Base de datos MySQL (no subir .env.local al repositorio)
DB_HOST=localhost
DB_USER=tu_usuario
DB_PASSWORD=tu_password
DB_NAME=tu_base_datos
```

Para producción/hosting, usar las variables que proporcione el proveedor (ej. `c2751446_grupoar`, etc.).

### 2.2 Acceso a la base

- **Next.js**: API Routes (o Route Handlers) que se conecten a MySQL con un driver en Node (por ejemplo `mysql2`).
- Opción alternativa: backend en PHP que ya use la conexión actual y exponer endpoints que el frontend consuma.
- El panel de administración **solo** usa estas APIs y la interfaz web; el administrador **nunca** necesita entrar a phpMyAdmin para gestionar contactos, solicitudes o contenidos del sitio.

---

## 3. Roles y tipos de acceso

| Rol              | Descripción breve                    | Dashboard propio |
|------------------|--------------------------------------|------------------|
| **Cliente**      | Personas que contratan servicios     | Sí               |
| **Proveedor**    | Proveedores de la empresa            | Sí               |
| **Empleado**     | Personal interno                     | Sí               |
| **Empresa**      | Otras empresas (alianzas, contratos) | Sí               |
| **Administración** | Control total del sitio y datos    | Sí (panel único) |

Un mismo usuario tiene **un** rol; el login es único y la aplicación redirige según ese rol.

---

## 4. Plan por dashboard

### 4.1 Dashboard **Cliente**

- **Inicio**: resumen (mis solicitudes, estado de cotizaciones, últimos mensajes).
- **Mis proyectos**: proyectos o trabajos asociados al cliente, estado, fechas.
- **Solicitudes y cotizaciones**: listado de solicitudes enviadas (formulario web, calculadora, etc.), estado (pendiente, en proceso, cotizado, rechazado).
- **Mensajes / contacto**: historial de consultas y respuestas.
- **Mi perfil**: datos personales o de la empresa, cambiar contraseña, preferencias de contacto.
- **Funcionalidades**: ver detalle de cada solicitud, descargar cotizaciones (PDF si se implementa), reabrir o cerrar consultas.

### 4.2 Dashboard **Proveedor**

- **Inicio**: resumen de ofertas, órdenes pendientes, alertas.
- **Ofertas**: ofertas enviadas a EMPRENOR, estado (pendiente, aceptada, rechazada).
- **Órdenes de compra / trabajo**: órdenes asignadas, plazos, estado.
- **Facturación**: facturas enviadas, cobros, estado de pago (listado básico).
- **Mi perfil**: datos de la empresa proveedora, contacto, documentos (CUIT, etc.).
- **Funcionalidades**: actualizar estado de entregas, subir comprobantes, ver historial.

### 4.3 Dashboard **Empleado**

- **Inicio**: tareas del día, proyectos asignados, avisos internos.
- **Tareas**: listado de tareas asignadas, prioridad, estado, fechas.
- **Proyectos asignados**: proyectos en los que participa, hitos, documentación interna.
- **Reportes**: envío de reportes o novedades (tiempo, incidencias, avances).
- **Mi perfil**: datos personales, cambio de contraseña.
- **Funcionalidades**: marcar tareas completadas, adjuntar fotos o archivos, ver calendario o plazos.

### 4.4 Dashboard **Empresa**

- **Inicio**: resumen de proyectos conjuntos, contratos activos, documentación pendiente.
- **Proyectos conjuntos**: proyectos con EMPRENOR, estado, responsables.
- **Contratos**: contratos vigentes, renovaciones, anexos.
- **Documentación**: espacio para compartir documentos (contratos, certificados, planos).
- **Mi perfil**: datos de la empresa, contactos autorizados.
- **Funcionalidades**: subir documentos, ver estado de facturación o entregas acordadas.

### 4.5 Dashboard **Administración** (panel de control general)

Objetivo: **administrar el 100% del contenido y la información del sitio y de la operación** desde la web, sin tocar código ni base de datos manualmente.

#### A. Contactos y solicitudes

- **Contactos**: todos los envíos del formulario de contacto (nombre, email, mensaje, fecha, estado).
- **Solicitudes / leads**: solicitudes de cotización, calculadora, formularios de divisiones; estado (nuevo, en proceso, respondido, cerrado).
- Acciones: ver, marcar como leído/respondido, asignar a empleado, eliminar o archivar.
- Exportar a CSV/Excel si se requiere.

#### B. Contenido del sitio (CMS)

- **Servicios**: listado de servicios/divisiones; editar título, slug, descripción corta y larga, orden, activo/inactivo (sin editar código).
- **Proyectos**: alta, edición y baja de proyectos destacados; título, descripción, imagen, categoría/división, fecha, enlace.
- **Blog / noticias**: crear, editar, publicar y despublicar entradas; título, slug, resumen, cuerpo, imagen, fecha.
- **Páginas**: edición de textos de Nosotros, Misión, Visión, Valores, FAQ; contacto (textos legales o avisos); cualquier bloque de texto que hoy esté en el sitio.
- **Configuración del sitio**: nombre de la empresa, tagline, descripción, teléfono, email, WhatsApp, dirección, horarios, emergencias, redes sociales, etc. (equivalente a lo que hoy está en `SITE_CONFIG` y similares).

#### C. Usuarios y roles

- **Usuarios**: listado de usuarios (cliente, proveedor, empleado, empresa, admin); alta, edición, desactivar; asignación de rol.
- **Roles**: los cinco roles fijos; permisos (qué puede ver/editar cada rol) definidos en código pero gestionados desde un único panel.

#### D. Otros módulos útiles

- **Oficinas/sedes**: mantener direcciones, teléfonos y datos de cada sede (equivalente a `OFFICES`).
- **Slider / hero**: textos e imágenes del hero de la home (si se guardan en BD).
- **Menú y footer**: si en el futuro los ítems del menú o del footer se guardan en BD, editarlos desde aquí.

Todas las pantallas de administración deben ser **formularios y tablas en la web**, con subida de imágenes si aplica; **ninguna acción debe requerir editar código ni entrar a phpMyAdmin**.

---

## 5. Flujo técnico sugerido

1. **Login**  
   - Formulario actual en `/login` (usuario/email + contraseña + tipo de acceso opcional en UI).  
   - Backend valida contra la tabla de usuarios en MySQL y devuelve token (JWT) o sesión, **incluyendo el rol**.

2. **Redirección por rol**  
   - Tras login exitoso:
     - Cliente → `/dashboard` o `/dashboard/cliente`
     - Proveedor → `/dashboard/proveedor`
     - Empleado → `/dashboard/empleado`
     - Empresa → `/dashboard/empresa`
     - Administración → `/dashboard/admin`

3. **Protección de rutas**  
   - Middleware o HOC que compruebe sesión y rol; si no corresponde, redirigir a login o a “sin permiso”.

4. **APIs**  
   - Rutas en Next.js (o backend PHP) que:
     - Se conecten a MySQL con las variables de entorno.
     - Para **admin**: CRUD de contactos, solicitudes, servicios, proyectos, blog, configuración, usuarios.
     - Para **cliente/proveedor/empleado/empresa**: solo los datos que correspondan a su rol y a su usuario.

5. **Base de datos**  
   - Diseñar tablas para: usuarios, roles, contactos, solicitudes, servicios (contenido), proyectos, entradas de blog, configuración del sitio, oficinas, etc.  
   - Mantener compatibilidad con la base real (`c2751446_grupoar` o la que se use) y con phpMyAdmin para tareas técnicas puntuales; el uso diario del administrador es **solo el dashboard**.

---

## 6. Orden de implementación sugerido

1. **Fase 1 – Base**  
   - Variables de entorno y conexión a MySQL desde Next.js (o API PHP).  
   - Tablas: `users`, `roles`; registro y login con contraseña hasheada; JWT o sesión con rol.  
   - Redirección después del login según rol a la ruta del dashboard correspondiente.

2. **Fase 2 – Admin: contactos y solicitudes**  
   - Tablas para contactos y solicitudes (formulario web, calculadora, etc.).  
   - API: listar, marcar estado, eliminar/archivar.  
   - Pantallas en `/dashboard/admin` para contactos y solicitudes.

3. **Fase 3 – Admin: contenido (CMS)**  
   - Servicios, proyectos, blog, textos de páginas y configuración del sitio en BD (o migrar desde `constants`/archivos).  
   - APIs CRUD y pantallas de administración para cada bloque.  
   - Que el sitio público lea desde API o desde BD vía API para mostrar contenido actualizado.

4. **Fase 4 – Dashboards cliente, proveedor, empleado, empresa**  
   - Estructura de cada dashboard (layout, menú lateral).  
   - Módulos por rol según secciones descritas arriba.  
   - APIs que filtren por usuario y rol.

5. **Fase 5 – Pulido**  
   - Permisos finos, exportación de datos, subida de archivos/imágenes, notificaciones, auditoría de cambios si se requiere.

---

## 7. Notas importantes

- **Seguridad**: contraseñas hasheadas (bcrypt o similar), HTTPS en producción, validación y sanitización en backend, no exponer credenciales de BD en el frontend.
- **Panel único**: el único panel de control “global” es el de **Administración**; el resto son dashboards por rol con alcance limitado a su contexto.
- El administrador debe poder **gestionar contactos, solicitudes y todo el contenido del sitio al 100% desde el navegador**, sin necesidad de editar código ni entrar a la base de datos cada vez que necesite información.

Este documento sirve como plan de desarrollo de referencia para implementar los dashboards y el panel de administración sobre la base de datos real del proyecto.
