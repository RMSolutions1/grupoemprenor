# Verificación del Dashboard Admin (en línea)

**URL:** [https://grupoemprenor.vercel.app/dashboard/admin](https://grupoemprenor.vercel.app/dashboard/admin)  
**Fecha de verificación:** Marzo 2026

---

## 1. Estructura del panel (menú lateral)

El dashboard en línea incluye:

| Sección        | Ruta                          | Estado en línea |
|----------------|-------------------------------|------------------|
| **Dashboard**  | `/dashboard/admin`            | ✅ Implementado  |
| **Contactos**  | `/dashboard/admin/contactos`  | ✅ Con datos     |
| **Solicitudes**| `/dashboard/admin/solicitudes`| ✅ Implementado  |
| **Servicios**  | `/dashboard/admin/servicios`  | ✅ Implementado  |
| **Proyectos**  | `/dashboard/admin/proyectos`  | ✅ Implementado  |
| **Blog**       | `/dashboard/admin/blog`       | En menú          |
| **Oficinas**   | `/dashboard/admin/oficinas`   | En menú          |
| **Usuarios**   | `/dashboard/admin/usuarios`   | En menú          |
| **Configuración** | `/dashboard/admin/configuracion` | ✅ Implementado |
| **Ver Sitio Web** | (enlace externo)           | ✅               |
| **Cerrar Sesión** | —                          | ✅               |

Agrupación en el menú: Principal, Comunicaciones, Contenido, Organización, Sistema.

---

## 2. Página principal (Dashboard)

- Título: **Panel de Administración** – “Bienvenido al panel de control…”
- **Resumen:** tarjetas con contadores:
  - Contactos (0 pendientes)
  - Solicitudes (0 pendientes)
  - Proyectos (0 activos)
  - Servicios (0 activos)
  - Blog (0 publicados)
  - Oficinas (0 activas)
  - Usuarios (0 activos)
  - Configuración (Ajustes del sitio)
- **Acciones rápidas:**  
  Ver Mensajes de Contacto, Ver Solicitudes de Cotización, Gestionar Proyectos, Gestionar Blog.
- **Resumen del sistema:** “Estado general del sitio web”.

---

## 3. Contactos ✅ (con datos reales)

- **Título:** Contactos – “Mensajes recibidos desde el formulario del sitio.”
- **Contenido:** listado de mensajes con nombre, email, teléfono, mensaje, fecha, estado (Nuevo / Leído / Respondido / Archivado), notas internas.
- **Acciones:** botón **Editar** por contacto.
- **Verificado:** se muestran 2 contactos reales (con datos y fechas 8/3/2026); estados “Respondido” y “Leído”; una nota “ATENDER NUEVO CLIENTES.”.
- **Conclusión:** sección operativa y conectada a la base de datos.

---

## 4. Solicitudes ✅

- **Título:** Solicitudes de Cotización – “Gestiona las solicitudes de cotización recibidas”.
- **UI:** buscador “Buscar por nombre, email o empresa…”.
- **Contenido:** “Solicitudes (0)” – “No hay solicitudes.”
- **Conclusión:** pantalla implementada y lista para mostrar datos cuando existan solicitudes (calculadora, cotizaciones, etc.).

---

## 5. Servicios ✅

- **Título:** Servicios – “Gestiona los servicios ofrecidos en el sitio web”.
- **UI:** botón **Nuevo Servicio**, listado “Servicios (0)” – “No hay servicios.”
- **Conclusión:** interfaz lista; los 0 pueden deberse a que la API aún no usa la tabla `services` de Neon o a que no hay registros cargados para el admin.

---

## 6. Proyectos ✅

- **Título:** Proyectos – “Gestiona el portafolio de proyectos”.
- **UI:** botón **Nuevo Proyecto**, campo “Buscar proyectos…”, “Proyectos (0)” – “No hay proyectos.”
- **Conclusión:** interfaz implementada; falta contenido o conexión con BD según implementación actual.

---

## 7. Configuración ✅

- **Título:** Configuración – “Ajustes generales del sitio web”.
- **Secciones y campos:**
  - **Datos de la Empresa:** nombre, eslogan, descripción, URL del logo.
  - **Información de Contacto:** email, teléfono, WhatsApp, dirección.
  - **Redes Sociales:** Facebook, Instagram, LinkedIn, Twitter, YouTube.
  - **SEO y Metadatos:** título SEO, descripción SEO, palabras clave.
- **Acciones:** “Agregar Campo”, “Guardar Cambios” (al verificar, Guardar aparecía deshabilitado hasta que haya cambios).
- **Conclusión:** formulario completo de configuración del sitio implementado.

---

## 8. Resumen

| Funcionalidad   | ¿Hecho? | ¿Con datos/acción? |
|-----------------|--------|---------------------|
| Menú y layout   | ✅     | Sí                  |
| Dashboard home  | ✅     | Contadores y enlaces|
| Contactos       | ✅     | Sí, con 2 mensajes  |
| Solicitudes     | ✅     | Sí, 0 solicitudes   |
| Servicios       | ✅     | UI lista, 0 ítems   |
| Proyectos       | ✅     | UI lista, 0 ítems   |
| Configuración   | ✅     | Formulario completo |
| Blog / Oficinas / Usuarios | En menú | No verificado en detalle |

La web desplegada en [grupoemprenor.vercel.app](https://grupoemprenor.vercel.app/dashboard/admin) tiene un panel de administración ampliado respecto al código base que solo incluía Inicio, Contactos y Solicitudes: en línea están ya Servicios, Proyectos, Configuración, y referencias a Blog, Oficinas y Usuarios. Contactos y Solicitudes están operativos; Servicios y Proyectos tienen UI lista; Configuración tiene formulario completo.
