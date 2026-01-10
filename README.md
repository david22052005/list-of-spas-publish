# Frontend Test – React + Vite + Tailwind CSS

Proyecto frontend desarrollado con **React** y **Vite**, utilizando **Tailwind CSS** para estilos.  
Incluye **modo oscuro**, **highlight de búsqueda**, **skeleton loaders** y **scroll infinito** consumiendo una API pública.

> ⚠️ **Nota importante**  
> Tailwind CSS **ya está instalado y configurado** en el proyecto.  
> No es necesario instalarlo manualmente.

---

## 🚀 Tecnologías y versiones usadas

- **React:** 19.2.0  
- **React DOM:** 19.2.0  
- **Vite:** 7.2.4  
- **TypeScript:** 5.9.3  
- **Tailwind CSS:** 3.4.17  
- **PostCSS:** 8.5.6  
- **Autoprefixer:** 10.4.23  
- **Node.js:** 18+ (recomendado)

---


## 🧠 Decisiones técnicas

- **React + Vite**  
  Se eligió Vite por su arranque rápido, HMR eficiente y configuración mínima, ideal para pruebas técnicas donde se prioriza productividad y claridad.

- **TypeScript**  
  Utilizado para mejorar la mantenibilidad del código, evitar errores comunes y dejar claras las estructuras de datos (ej. `Post`).

- **Tailwind CSS**  
  Permite construir una UI limpia y consistente rápidamente, evitando CSS innecesario.  
  Se combinó con estilos base personalizados para mantener control visual global.

- **Dark Mode (class strategy)**  
  Se implementó usando la estrategia `class` de Tailwind para tener control explícito del estado del tema y evitar dependencias externas.

- **Scroll infinito con IntersectionObserver**  
  Se prefirió sobre paginación clásica para mejorar la experiencia de usuario y demostrar manejo de APIs modernas del navegador.

- **Skeleton loaders**  
  Usados en lugar de spinners para dar una percepción de carga más fluida y profesional.

- **Filtro con highlight de texto**  
  El resaltado de coincidencias se implementó de forma segura (sin `dangerouslySetInnerHTML`) para evitar problemas de XSS.

- **Separación de componentes**  
  Se dividió la lógica en componentes pequeños (`PostList`, `PostFilter`, `PostModal`, etc.) para facilitar lectura, escalabilidad y testing futuro.

--

## 📦 Instalación del proyecto

Clona el repositorio e instala las dependencias:

```bash
git clone https://github.com/david22052005/list-of-spas-publish.git
cd frontend-test
npm install

