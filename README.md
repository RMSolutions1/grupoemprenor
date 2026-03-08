# GRUPO EMPRENOR - Sitio web corporativo

Sitio web corporativo para Grupo Emprenor. Next.js 14 (App Router), React, Tailwind CSS, Framer Motion y TypeScript.

## Estructura

- `/app` – Páginas (App Router)
- `/components` – Componentes reutilizables (navbar, footer, hero, services, projects, cards, gallery, cta, testimonials)
- `/lib` – Constantes y datos
- `/public/images` – Imágenes locales (el sitio usa también Unsplash/Pexels vía URL)
- `/styles` – Referencia a estilos globales en `app/globals.css`

## Desarrollo

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Páginas

- **Inicio** (`/`) – Hero, presentación, divisiones, servicios, proyectos destacados, sectores, ventajas, proceso, testimonios, CTA, contacto rápido
- **Grupo Emprenor** (`/grupo-emprenor`) – Quiénes somos, historia, misión, visión, valores, sectores, certificaciones
- **Arquitectura y Construcción** (`/arquitectura-construccion`) – Servicios, metodología, proyectos, galería
- **Ingeniería** (`/ingenieria`)
- **Refrigeración** (`/refrigeracion`)
- **Viviendas** (`/viviendas`)
- **Solución Integral** (`/solucion-integral`)
- **Soluciones Eléctricas** (`/soluciones-electricas`)
- **Proyectos** (`/proyectos`) – Portafolio con tarjetas
- **Blog** (`/blog`) – Listado y entradas por slug
- **Contacto** (`/contacto`) – Formulario, email, teléfono, WhatsApp, mapa

## Paleta

- Primario: azul oscuro (`#0f172a`)
- Secundario: gris acero
- Fondo: blanco
- Acento: naranja (`#ea580c`)

## Imágenes

Las imágenes usan URLs de Unsplash. Para producción puede reemplazarlas por archivos en `/public/images` y actualizar las rutas en `lib/home-data.ts`, `lib/arquitectura-data.ts` y en los componentes.
