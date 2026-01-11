# Frontend Test – React + Vite + Tailwind CSS

Este es un pequeño proyecto frontend que armé usando **React** y **Vite**, con **Tailwind CSS** para los estilos.  
La idea era practicar cómo consumir una API pública mientras aplicaba buenas prácticas modernas: tiene **modo oscuro**, **búsqueda con resaltado de coincidencias**, **skeleton loaders** y **scroll infinito**.

## Las respuestas a la preguntas realizadas se encuentran en el achivo RespuestaPreguntas.md

> ℹ️ Nota rápida  
> Ya dejé Tailwind CSS instalado y configurado, así que no necesitas hacer nada extra al respecto.

---

## 🚀 Tecnologías que usé

- React 19.2.0  
- Vite 7.2.4 (porque arranca súper rápido y el HMR es increíble)  
- TypeScript 5.9.3 — me ayuda a no meter la pata con tipos  
- Tailwind CSS 3.4.17 + unos estilos base propios para mantener cierto control visual  
- Node.js 18+ (recomendado)

---

## 🧠 ¿Por qué tomé estas decisiones?

- **Vite en vez de Create React App**: quería algo más ágil y sin tanto boilerplate.  
- **TypeScript**: sí, agrega un poco más de trabajo al principio, pero evita dolores de cabeza después.  
- **Modo oscuro con la estrategia `class` de Tailwind**: así controlo el tema directamente desde el estado de la app, sin depender de librerías externas.  
- **Scroll infinito con `IntersectionObserver`**: me pareció más fluido que botones de “cargar más”. Además, es una buena forma de practicar APIs del navegador.  
- **Skeletons en vez de spinners**: dan la sensación de que la app ya está “armándose”, no solo esperando.  
- **Búsqueda segura**: resalto coincidencias en título y contenido, pero sin usar `dangerouslySetInnerHTML` (¡nada de XSS!).  
- **Componentes pequeños y separados**: `PostList`, `PostFilter`, `PostModal`… así el código es más fácil de leer, testear y escalar si crece el proyecto.

---

## ▶️ Cómo probarlo

Clona el repo e instala las dependencias:

```bash
git clone https://github.com/david22052005/list-of-spas-publish.git  
cd list-of-spas-publish
npm install
npm run dev
