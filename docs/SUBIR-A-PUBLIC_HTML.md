# Cómo abrir la web desde public_html (sin Node.js)

Si subió todos los archivos del proyecto a **public_html** y la web no se ve, es porque Next.js **no** se ejecuta como PHP: necesita un servidor Node.js. En hostings que solo tienen Apache/PHP (como muchas cuentas en Ferozo), puede usar esta opción:

---

## Opción: versión estática solo para ver la web

Puede generar una **carpeta con HTML/CSS/JS estáticos** y subir **solo eso** a `public_html`. Así la web se verá al entrar a su dominio.

### Paso 1 – Generar la carpeta estática (en su PC)

En la carpeta del proyecto ejecute:

```bash
npm run build:static
```

Se creará la carpeta **`out`** con todo el sitio en estático.

### Paso 2 – Subir a public_html

1. Abra **public_html** en su hosting (FTP o administrador de archivos).
2. **Suba el contenido** de la carpeta **`out`** (no la carpeta “out” en sí).
   - Es decir: todo lo que hay **dentro** de `out` (archivos `index.html`, carpetas `nosotros`, `servicios`, `contacto`, etc.) debe quedar **directamente** dentro de `public_html`.
3. Resultado esperado:
   - `public_html/index.html` → página de inicio
   - `public_html/nosotros/index.html` → Nosotros
   - `public_html/contacto/index.html` → Contacto
   - etc.

### Paso 3 – Probar

Entre a **https://su-dominio.com** (o la URL que use su hosting para `public_html`). Debería verse la web: inicio, nosotros, servicios, proyectos, blog, contacto, divisiones, etc.

---

## Qué SÍ y qué NO funciona en esta versión

| Funciona | No funciona (sin Node) |
|----------|-------------------------|
| Ver todas las páginas (inicio, nosotros, servicios, contacto, etc.) | Enviar el formulario de contacto (no se guarda) |
| Navegar por divisiones y blog | Iniciar sesión / Crear administrador |
| Enlaces y menús | Panel de administración (/dashboard/admin) |

Para que funcionen el **formulario de contacto**, el **login** y el **panel de administración**, la aplicación debe ejecutarse con **Node.js** en el servidor (o en otro servicio como Vercel). Ver **SUBIR-A-FEROZO-DONWEB.md** y **SUBIR-WEB-AL-HOSTING.md**.

---

## Resumen

1. En su PC: `npm run build:static`
2. Suba **el contenido de la carpeta `out`** a **public_html**
3. Abra su dominio: la web se verá; formulario, login y panel no funcionarán hasta que tenga Node.js para la app completa.
