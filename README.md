# ALUVA — Sitio web

Sitio web de **ALUVA**, emprendimiento de Los Andes (Región de Valparaíso) que diseña, confecciona y distribuye **ropa de trabajo, vestuario corporativo y elementos de protección personal (EPP)**, con personalización de marca.

Proyecto final de la asignatura **Diseño Web**.

## Enlaces

- **Sitio desplegado (Netlify):** _[pegar aquí la URL de Netlify]_
- **Repositorio (GitHub):** _[pegar aquí la URL del repositorio]_

## Objetivo

Presentar la empresa (quiénes son, misión y visión, servicios), mostrar el catálogo 2026 con precios referenciales y facilitar que empresas y personas soliciten cotizaciones o personalicen sus prendas.

## Contenido y funcionalidades

- **Diseño responsivo** sobre el template estándar Bootstrap 5, con estilos propios basados en la identidad del catálogo (índigo y ámbar).
- **Catálogo 2026:** 32 productos con referencia, tallas y precio, filtro por categoría y búsqueda por nombre o referencia (eventos `click` e `input`). Incluye el catálogo completo en PDF.
- **Cotización rápida:** cada producto tiene un botón que arma el mensaje con su nombre y referencia.
- **Formulario de contacto** con validación en vivo (`input`, `blur`, `submit`) y contador de caracteres.
- **Testimonios** de clientes con fotografías.
- **Menú con sección activa** y botón "volver arriba" (evento `scroll`); aparición suave de secciones (`IntersectionObserver`) que respeta `prefers-reduced-motion`.
- Accesibilidad básica: enlace "saltar al contenido", etiquetas en formularios, foco visible, textos alternativos, SEO básico (title, description, Open Graph).

## Configurar WhatsApp

Las consultas se envían por correo hasta que se configure el número. En `js/main.js`:

```js
const NUMERO_WHATSAPP = '569XXXXXXXX';   // solo dígitos, con código de país
```

Con el número definido, los botones y el formulario abren WhatsApp con el mensaje redactado.

## Tecnologías

HTML5 · CSS3 · JavaScript · [Bootstrap 5.3](https://getbootstrap.com/) (CDN, licencia MIT)

## Estructura

```
├── index.html
├── css/estilos.css
├── js/
│   ├── main.js          eventos y lógica
│   └── productos.js     datos del catálogo
├── img/                 logo, fotografías y productos
├── docs/catalogo-aluva-2026.pdf
├── netlify.toml
└── README.md
```

## Cómo verlo en local

Abrir `index.html` en el navegador (requiere internet para cargar Bootstrap).

## Historial

1. Evaluación 2: página en HTML y CSS.
2. Evaluación 3: migración a un template estándar (Bootstrap).
3. Examen final: JavaScript (eventos), contenido y catálogo reales del emprendimiento, GitHub y Netlify.
