# BITÁCORA DE DESARROLLO

> Plantilla para completar. Los campos entre corchetes `[...]` son para que los llenes tú.
> Solo escribe lo que realmente hiciste y observaste; no copies resultados que no hayas comprobado.

---

## 1. Datos personales del aprendiz

| Campo | Dato |
|---|---|
| Nombre completo | Oscar Andrés Navarro Ochoa |
| Programa de formación | Análisis y Desarrollo de Software |
| Ficha | 3407184 |
| Instructor | Jhonny Guerrero|
| Centro de formación | SENA CGMLTI calle 52 |
| Correo | navarroochoaoscarandres13@gmail.com |
| Fecha de entrega | 11/11/26 |

## 2. Información de la actividad

- **Nombre de la actividad:** De la Web al Móvil: Creando mi primer Contador de clics
- **Parte desarrollada en este documento:** Parte 1 – La Web y la manipulación del DOM
- **Proyecto formativo:** Desarrollo de software para el control de procesos orientados a microservicios
- **Resultado de aprendizaje:** 04 – Codificar el software de acuerdo con el diseño establecido

## 3. Objetivo del desarrollo

Crear una aplicación web "Contador de Likes" con HTML, CSS y JavaScript puro, que permita comprender cómo
JavaScript busca elementos en el DOM y los modifica en vivo cuando el usuario hace clic, registrando en una
tabla el número y la hora exacta de cada clic.

## 4. Herramientas utilizadas

| Herramienta | Uso | Versión |
|---|---|---|
| HTML5 | Estructura de la página | — |
| CSS3 | Estilos y diseño adaptable | — |
| JavaScript (Vanilla) | Lógica, eventos y DOM | — |
| Editor de código |  Visual Studio Code | — |
| Navegador | Brave | — |
| Git | Control de versiones | —  |
| Repositorio remoto | GitHub | — |

## 5. Estructura de archivos

```text
contador-likes/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assets/
├── README.md
└── BITACORA.md
```

| Archivo | Responsabilidad |
|---|---|
| `index.html` | Estructura semántica: título, contador, botones y tabla |
| `css/styles.css` | Estilos, estados visuales y diseño adaptable |
| `js/script.js` | Selección del DOM, estado, eventos, contador y registro de horas |
| `assets/` | Recursos gráficos (reservada) |
| `README.md` | Descripción y pasos para ejecutar |

## 6. Procedimiento paso a paso

Comandos utilizados para cada commit:

```bash
git add .
git commit -m "Mensaje del commit"
git push
git log --oneline          # para ver el hash de cada commit
```

## 7. Explicación del código

### 7.1 HTML (`index.html`)
- Usa etiquetas semánticas: `main`, `header`, `section`, `table`, `thead` y `tbody`.
- Enlaza `css/styles.css` en el `<head>` y `js/script.js` con `defer`, para que el script se ejecute cuando el HTML ya está cargado.
- Los elementos que usa JavaScript tienen `id`: `contador`, `btn-like`, `btn-restar`, `btn-reiniciar` y `tabla-registros`.
- El `<tbody>` empieza vacío: las filas las crea JavaScript.

### 7.2 CSS (`css/styles.css`)
- Variables CSS en `:root` para colores y medidas.
- Fondo gris claro y tarjeta blanca centrada con bordes redondeados y `box-shadow`.
- Contador grande en azul; botón principal verde con efecto *hover*; botones secundarios grises.
- Tabla con líneas divisorias sutiles y filas alternas.
- La clase `.contador-alto` cambia el color y el fondo del número cuando los likes superan 10.
- `@media` para tablets y teléfonos; la tabla tiene un contenedor con `overflow-x: auto` para evitar desbordamientos.

### 7.3 JavaScript (`js/script.js`)
- `getElementById` selecciona el contador, los tres botones y el `<tbody>`.
- `let likes` guarda el valor del contador; `let totalClics` guarda el consecutivo de la tabla.
- `addEventListener("click", ...)` conecta cada botón con su función.
- `textContent` actualiza el número en pantalla.
- `new Date()` obtiene la hora; `padStart(2, "0")` completa los ceros para el formato `HH:MM:SS`.
- `createElement("tr")` y `createElement("td")` crean las filas; `prepend()` las inserta al inicio del `<tbody>`.
- `classList.toggle("contador-alto", likes > 10)` agrega o quita el estilo especial.

### 7.4 Concepto clave: el DOM
[el Doom es una representación que un navegador hace al interpretar un html, el cual JavaScript puede leer y modificar.]

## 8. Funcionamiento de cada característica

| Característica | Cómo funciona | Reto de la guía |
|---|---|---|
| Dar Like | Suma 1 al contador, crea una fila con Nº de clic y hora, y la pone primera en la tabla | Actividad base |
| Restar Like | Resta 1 sin bajar de 0; no agrega filas | Reto 1 |
| Reiniciar | Lleva el contador a 0; la tabla se conserva | Reto 1 |
| Cambio de color | Con más de 10 likes, el contador cambia de color y fondo | Reto 2 |
| Diseño adaptable | Se ajusta a computador, tablet y móvil | — |

## 9. Pruebas realizadas

Marca con `[x]` solo las pruebas que realmente ejecutaste y anota el resultado que observaste.

| N.º | Prueba | ¿Realizada? | Resultado observado |
|---|---|---|---|
| 1 | `index.html` abre directamente en el navegador | [ ] | [ ] |
| 2 | CSS y JS están vinculados (se ven estilos y funcionan los botones) | [ ] | [ ] |
| 3 | "Dar Like" incrementa el contador de 1 en 1 | [ ] | [ ] |
| 4 | "Restar Like" nunca deja el contador en negativo | [ ] | [ ] |
| 5 | "Reiniciar" deja el contador en 0 | [ ] | [ ] |
| 6 | Cada like crea una fila con Nº de clic y hora `HH:MM:SS` | [ ] | [ ] |
| 7 | El registro más reciente aparece en la primera fila | [ ] | [ ] |
| 8 | La tabla conserva sus filas al restar o reiniciar | [ ] | [ ] |
| 9 | El cambio de color ocurre solo con más de 10 likes (en 11, no en 10) | [ ] | [ ] |
| 10 | No hay errores en la consola del navegador (F12 → Console) | [ ] | [ ] |
| 11 | Se ve bien en pantalla ancha, tablet y móvil (F12 → modo dispositivo) | [ ] | [ ] |

## 10. Evidencias que debes adjuntar

Toma las capturas tú mismo y pégalas en el documento final (Word o PDF):

- [ ] Estructura de carpetas en el editor.
- [ ] Aplicación en estado inicial (contador en 0).
- [ ] Aplicación con varios likes y la tabla con registros.
- [ ] Contador con más de 10 likes (cambio de color).
- [ ] Prueba de "Restar Like" en 0 (se mantiene en 0).
- [ ] Prueba de "Reiniciar" con la tabla conservada.
- [ ] Vista en tamaño móvil.
- [ ] Consola del navegador sin errores.
- [ ] Historial de commits (`git log --oneline`) con mínimo 10 commits.
- [ ] Repositorio en la plataforma remota (página principal).

## 11. Dificultades encontradas y soluciones

| Dificultad | Solución aplicada |
|---|---|
| costó entender realmente las funcionalidades que iban con el DOM, pero fue una experiencia que dejó muchos aprendizajes| ver tutoriales y reforzar con Inteligencia Artificial |
| [ ] | [ ] |

## 12. Repositorio Git

- **Enlace del repositorio:** https://github.com/oscar676-senas/contador_likes_OS.git
- **Rama(s):**  `main` / `web`
- **Cantidad de commits:** en proceso


