*  **Frontend: React.js vs Vue.js**



React es más flexible y escalable, pero requiere más configuración y librerías externas. Vue es más sencillo de aprender y trae muchas herramientas integradas. Usaría React en proyectos grandes o a largo plazo, y Vue en proyectos pequeños cuando se necesita avanzar rápido.



*  **Móvil: Flutter vs React Native**



Flutter tiene mejor rendimiento porque no depende de un puente con componentes nativos y sus animaciones son más fluidas. Para una app de alto rendimiento elegiría Flutter. React Native lo usaría si el equipo ya trabaja con React y JavaScript.



*  **Estado: Redux, Context, Provider, Riverpod y Bloc**



Context API y Provider son buenos para estados simples. Redux, Riverpod y Bloc están pensados para aplicaciones grandes. En proyectos grandes usaría Redux Toolkit en React y Riverpod o Bloc en Flutter por su escalabilidad y mantenimiento.



*  **Rendimiento: Buenas prácticas**



Evitar renders innecesarios, usar lazy loading, optimizar listas grandes y manejar bien el estado. En Flutter y React Native es clave reducir reconstrucciones y usar componentes optimizados.



* **Despliegue**



En web, genero el build y despliego en Firebase o AWS (S3 + CloudFront). Para móvil, genero el build, lo subo a TestFlight para iOS y a Play Console para Android, y espero la revisión antes de publicar.

