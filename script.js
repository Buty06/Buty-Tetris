//?Primero que nada accedemos al canvas y obtenemos el contexto del dibujo
const canvas = document.getElementById("mainCanvas");
const ctx = canvas.getContext("2d");

//?Base para el tetris
ctx.strokeStyle = "rgb(44, 44, 44)";
ctx.lineWidth = 8;
ctx.strokeRect(0, 0, 400, 600);

//?Linea de arriba
ctx.beginPath(); // Comienza un nuevo camino de dibujo
ctx.moveTo(0, 40); // Punto inicial de la línea
ctx.lineTo(400, 40); // Punto final de la línea
ctx.strokeStyle = "rgb(24, 24, 24)"; // Color de la línea
ctx.lineWidth = 4; // Grosor de la línea
ctx.stroke(); // Dibuja la línea

//?linea separatoria del medio
ctx.beginPath(); // Comienza un nuevo camino de dibujo
ctx.moveTo(270, 40); // Punto inicial de la línea
ctx.lineTo(270, 600); // Punto final de la línea
ctx.strokeStyle = "rgb(24, 24, 24)"; // Color de la línea
ctx.lineWidth = 6; // Grosor de la línea
ctx.stroke(); // Dibuja la línea

//?Lineas separatorias en el aside
ctx.beginPath(); // Comienza un nuevo camino de dibujo
ctx.moveTo(270, 250); // Punto inicial de la línea
ctx.lineTo(400, 250); // Punto final de la línea
ctx.strokeStyle = "rgb(24, 24, 24)"; // Color de la línea
ctx.lineWidth = 4; // Grosor de la línea
ctx.stroke(); // Dibuja la línea

//?Lineas separatorias en el aside
ctx.beginPath(); // Comienza un nuevo camino de dibujo
ctx.moveTo(270, 420); // Punto inicial de la línea
ctx.lineTo(400, 420); // Punto final de la línea
ctx.strokeStyle = "rgb(24, 24, 24)"; // Color de la línea
ctx.lineWidth = 4; // Grosor de la línea
ctx.stroke(); // Dibuja la línea

//?Texto de titulo
ctx.beginPath();
ctx.font = "20px Times New Roman"; // Fuente y tamaño
ctx.fillStyle = "purple"; // Color del texto
ctx.fillText("BUTY TETRIS", 140, 28);

////?Texto de proxima ficha
ctx.beginPath();
ctx.font = "20px Times New Roman"; // Fuente y tamaño
ctx.fillStyle = "purple"; // Color del texto
ctx.fillText("NEXT:", 307, 80);

////?Texto de tiempo
ctx.beginPath();
ctx.font = "20px Times New Roman"; // Fuente y tamaño
ctx.fillStyle = "purple"; // Color del texto
ctx.fillText("TIME:", 307, 290);

////?Texto de SCORE(record)
ctx.beginPath();
ctx.font = "20px Times New Roman"; // Fuente y tamaño
ctx.fillStyle = "purple"; // Color del texto
ctx.fillText("SCORE:", 300, 460);
