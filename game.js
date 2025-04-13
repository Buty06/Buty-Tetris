//?Obtenemos el contexto del otro canvas
const gameCanvas = document.getElementById("gameCanvas");
const ctxGame = gameCanvas.getContext("2d");
const ramdonPice = Math.round(Math.random() * 7);

//?Para dibujar una cuadricula en el canva
//*Tamanio de los bloques
const blockSize = 29.2; // Tamaño de cada casilla (en píxeles)

//*Funcion de dibujado
function drawGrid(ctxGame, canvasWidth, canvasHeight, blockSize) {
  ctxGame.strokeStyle = "rgb(24, 24, 24)"; // Color de las líneas de la cuadrícula
  ctxGame.lineWidth = 1; // Grosor de las líneas

  // Dibujar líneas verticales
  for (let x = 0; x <= canvasWidth; x += blockSize) {
    ctxGame.beginPath();
    ctxGame.moveTo(x, 0); // Línea desde el borde superior
    ctxGame.lineTo(x, canvasHeight); // Hasta el borde inferior
    ctxGame.stroke();
  }

  // Dibujar líneas horizontales
  for (let y = 0; y <= canvasHeight; y += blockSize) {
    ctxGame.beginPath();
    ctxGame.moveTo(0, y); // Línea desde el borde izquierdo
    ctxGame.lineTo(canvasWidth, y); // Hasta el borde derecho
    ctxGame.stroke();
  }
}
drawGrid(ctxGame, 266, 556, blockSize);

//?Array que contiene todas las piezas
const pices = [
  {
    x: 1, // Posición en columnas
    y: 0, // Posición en filas
    shape: [
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1],
    ], // Matriz que representa la forma
    color: "blue", // Color de la ficha
  },
  {
    x: 8, // Posición en columnas
    y: 0, // Posición en filas
    shape: [
      [1, 0, 0],
      [1, 0, 0],
      [1, 0, 0],
    ], // Matriz que representa la forma
    color: "blue", // Color de la ficha
  },
  {
    x: 3, // Posición en columnas
    y: 0, // Posición en filas
    shape: [
      [1, 1, 0],
      [1, 1, 0],
    ], // Matriz que representa la forma
    color: "blue", // Color de la ficha
  },
  {
    x: 5, // Posición en columnas
    y: 0, // Posición en filas
    shape: [
      [0, 1, 1],
      [1, 1, 0],
    ], // Matriz que representa la forma
    color: "blue", // Color de la ficha
  },
  {
    x: 6, // Posición en columnas
    y: 0, // Posición en filas
    shape: [
      [1, 1, 0],
      [0, 1, 1],
    ], // Matriz que representa la forma
    color: "blue", // Color de la ficha
  },
  {
    x: 4, // Posición en columnas
    y: 0, // Posición en filas
    shape: [
      [1, 0, 0],
      [1, 0, 0],
      [1, 1, 0],
    ], // Matriz que representa la forma
    color: "blue", // Color de la ficha
  },
  {
    x: 4, // Posición en columnas
    y: 0, // Posición en filas
    shape: [
      [0, 0, 1],
      [0, 0, 1],
      [0, 1, 1],
    ], // Matriz que representa la forma
    color: "blue", // Color de la ficha
  },
  {
    x: 6, // Posición en columnas
    y: 0, // Posición en filas
    shape: [
      [1, 1, 1],
      [0, 1, 0],
    ], // Matriz que representa la forma
    color: "blue", // Color de la ficha
  },
];

//*Creamos una funcion para definir la ficha
function drawPiece(ctxGame, piece) {
  piece.shape.forEach((row, rowIndex) => {
    // Recorrer cada fila
    row.forEach((cell, colIndex) => {
      // Recorrer cada columna
      if (cell) {
        // Si la celda tiene un "1", se dibuja
        ctxGame.fillStyle = piece.color; // Establece el color
        ctxGame.fillRect(
          (piece.x + colIndex) * blockSize, // Posición en X
          (piece.y + rowIndex) * blockSize, // Posición en Y
          blockSize, // Ancho del bloque
          blockSize // Alto del bloque
        );
      }
    });
  });
}
drawPiece(ctxGame, pices[ramdonPice]);
console.log(ramdonPice);
