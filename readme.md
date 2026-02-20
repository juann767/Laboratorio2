# Laboratorio 2 – Programación Computacional IV

## Descripción del proyecto
Este proyecto consiste en una página web interactiva desarrollada con HTML, CSS y JavaScript, en la cual se manipulan distintos elementos del DOM utilizando diferentes tipos de selectores de JavaScript. El sitio incluye interacciones dinámicas como cambio de tema, manejo de eventos, lista de tareas y una barra de progreso.

El proyecto fue publicado utilizando GitHub Pages para su visualización en línea.

---

## Tabla de selectores utilizados

| Tipo de selector | Elemento afectado | Descripción de la tarea que realiza el elemento |
|------------------|------------------|------------------------------------------------|
| getElementById | `<h1>` | Cambia dinámicamente el texto del título al mostrar un saludo personalizado |
| getElementById | `<input>` | Captura la información ingresada por el usuario |
| getElementById | `<button>` | Ejecuta acciones como saludar, cambiar el tema y avanzar el progreso |
| querySelector | `<body>` | Aplica o elimina la clase para activar el modo oscuro |
| querySelector | `<ul>` | Detecta eventos de clic dentro de la lista de tareas |
| querySelectorAll | `<li>` | Permite manipular múltiples elementos al marcarlos como completados |
| getElementById | `<progress>` | Incrementa visualmente el avance de una actividad |
| getElementById | `<p>` | Muestra mensajes dinámicos y el porcentaje de progreso |

---

## Preguntas

### ¿Cuál es la ventaja de utilizar getElementById frente a querySelector?
La ventaja de getElementById es que permite seleccionar un elemento de forma directa y eficiente mediante su identificador único, lo que mejora el rendimiento y la claridad del código.

### ¿En qué situación es preferible usar querySelectorAll en lugar de querySelector?
Es preferible usar querySelectorAll cuando se necesita seleccionar varios elementos que comparten un mismo selector.

- querySelector devuelve un solo elemento.
- querySelectorAll devuelve una NodeList que contiene todos los elementos coincidentes.

---

## Publicación
El proyecto fue desplegado utilizando GitHub Pages, lo que permite acceder a la página web mediante un enlace público sin necesidad de un servidor adicional.