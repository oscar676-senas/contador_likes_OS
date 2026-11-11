# Contador de Likes

Aplicación web de una sola vista que demuestra la **manipulación del DOM** con JavaScript puro.
Corresponde a la **Parte 1** del taller *"De la Web al Móvil: Creando tu primer Contador de clics"*
(SENA – Análisis y Desarrollo de Software, competencia: Codificar los módulos del software).

## Descripción

- Un botón **Dar Like** incrementa un contador y registra en una tabla el número del clic y la hora exacta (`HH:MM:SS`).
- Un botón **Restar Like** disminuye el contador sin bajar de 0 (no agrega filas a la tabla).
- Un botón **Reiniciar** lleva el contador a 0 (el historial de la tabla se conserva).
- Cuando el contador **supera 10**, el número cambia de color y de fondo (clase CSS `contador-alto`); al volver a 10 o menos recupera el estilo original.
- La tabla muestra primero el registro más reciente. Los registros son temporales: se pierden al recargar la página.

> Nota sobre la columna **Nº Clic**: es el consecutivo de clics en "Dar Like" desde que se abrió la página, y no se reinicia con el botón *Reiniciar*. Así el historial nunca repite números y el estado del contador queda separado del historial.

## Tecnologías

- HTML5 (estructura semántica)
- CSS3 (diseño, variables CSS, diseño adaptable)
- JavaScript puro / Vanilla JS (lógica, eventos y DOM)

Sin React, sin frameworks, sin librerías externas y sin bases de datos.

## Estructura del proyecto

```text
contador-likes/
├── index.html          Estructura: encabezado, contador, botones y tabla
├── css/
│   └── styles.css      Estilos, estados visuales y diseño adaptable
├── js/
│   └── script.js       Selección del DOM, estado, eventos y registro de horas
├── assets/             Reservada para recursos gráficos (actualmente vacía)
└── README.md
```

## Requisitos

- Un navegador moderno (Chrome, Edge, Firefox o Safari).
- No requiere instalación, servidor ni conexión a internet.

## Cómo ejecutarlo

1. Descarga o clona la carpeta `contador-likes`.
2. Abre el archivo `index.html` con doble clic (o arrástralo al navegador).

Opcional, con un servidor local si tienes Python instalado:

```bash
cd contador-likes
python -m http.server 8000
# luego abre http://localhost:8000
```

## Conceptos de JavaScript aplicados

| Concepto | Dónde se ve en `script.js` |
|---|---|
| Selección de elementos | `document.getElementById(...)` |
| Variable de estado | `let likes`, `let totalClics` |
| Eventos | `addEventListener("click", ...)` |
| Texto dinámico | `textContent` |
| Creación de elementos | `document.createElement("tr")` y `"td"` |
| Inserción al inicio | `cuerpoTabla.prepend(fila)` |
| Fecha y hora | `new Date()` + `padStart` |
| Clases CSS dinámicas | `classList.toggle("contador-alto", ...)` |

## Equivalencias para la Parte 2 (React Native + Expo)

| Desarrollo web | React Native |
|---|---|
| `div`, `h1`, `p` | `View`, `Text` |
| `button` | `TouchableOpacity` |
| `addEventListener` | `onPress` |
| Manipulación directa del DOM | Estado con `useState` |
| CSS | `StyleSheet.create()` |
| Navegador | Android / iOS |

## Control de versiones

Este proyecto se entrega preparado para Git; 
Consulta la sección de procedimiento en  el próximo documento a construir `BITACORA.md` para registrar cada commit.
