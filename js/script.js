"use strict";

/* ==========================================================================
   Contador de Likes - Manipulación del DOM con JavaScript puro
   Secciones: 1) Selección de elementos  2) Estado  3) Funciones auxiliares
              4) Acciones del usuario  5) Eventos
   ========================================================================== */

/* 1) SELECCIÓN DE ELEMENTOS DEL DOM --------------------------------------- */
const textoContador = document.getElementById("contador");
const botonLike = document.getElementById("btn-like");
const botonRestar = document.getElementById("btn-restar");
const botonReiniciar = document.getElementById("btn-reiniciar");
const cuerpoTabla = document.getElementById("tabla-registros");

/* 2) ESTADO ---------------------------------------------------------------- */
const LIMITE_CAMBIO_COLOR = 10; // el estilo cambia cuando los likes SUPERAN este valor

let likes = 0;       // valor que se muestra en el contador (sube, baja y se reinicia)
let totalClics = 0;  // número de clics en "Dar Like" (alimenta la tabla; no se reinicia)

/* 3) FUNCIONES AUXILIARES --------------------------------------------------- */

// Devuelve la hora actual del sistema como texto "HH:MM:SS".
function obtenerHoraActual() {
  const ahora = new Date();
  const horas = String(ahora.getHours()).padStart(2, "0");
  const minutos = String(ahora.getMinutes()).padStart(2, "0");
  const segundos = String(ahora.getSeconds()).padStart(2, "0");
  return `${horas}:${minutos}:${segundos}`;
}

// Crea una fila <tr> con dos celdas <td>: número de clic y hora.
function crearFilaRegistro(numeroClic, hora) {
  const fila = document.createElement("tr");

  const celdaNumero = document.createElement("td");
  celdaNumero.textContent = numeroClic;

  const celdaHora = document.createElement("td");
  celdaHora.textContent = hora;

  fila.append(celdaNumero, celdaHora);
  return fila;
}

// Refleja el valor de "likes" en pantalla y aplica el estilo según el umbral.
function actualizarContador() {
  textoContador.textContent = likes;
  textoContador.classList.toggle("contador-alto", likes > LIMITE_CAMBIO_COLOR);
}

/* 4) ACCIONES DEL USUARIO --------------------------------------------------- */

function darLike() {
  likes++;
  totalClics++;
  actualizarContador();

  const fila = crearFilaRegistro(totalClics, obtenerHoraActual());
  cuerpoTabla.prepend(fila); // el registro más reciente queda en la primera fila
}

function restarLike() {
  if (likes > 0) {
    likes--;
  }
  actualizarContador();
}

function reiniciarContador() {
  likes = 0;
  actualizarContador(); // el historial de la tabla no se toca
}

/* 5) EVENTOS ---------------------------------------------------------------- */
botonLike.addEventListener("click", darLike);
botonRestar.addEventListener("click", restarLike);
botonReiniciar.addEventListener("click", reiniciarContador);

// Estado inicial en pantalla
actualizarContador();
