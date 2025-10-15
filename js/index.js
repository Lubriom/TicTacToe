const tablero = document.getElementById("table");
const botones = document.querySelectorAll(".table__cell");

const overlay = document.getElementById("overlay");
const overlayMessage = document.getElementById("overlay__message");

const restartButton = document.getElementById("restart");
const restartButtonOverlay = document.getElementById("restartOverlay");
const turnoElement = document.getElementById("turn");

var turno = "X";
var ganador = false;

turnoElement.innerHTML = "jugador 1";

const combinacionesGanadoras = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    if (ganador) return;

    if (boton.innerHTML !== "") return;
    boton.innerHTML = turno;
    boton.style.color = turno === "X" ? "red" : "blue";

    for (let i = 0; i < combinacionesGanadoras.length; i++) {
      const [a, b, c] = combinacionesGanadoras[i];
      if (
        botones[a].innerHTML === botones[b].innerHTML &&
        botones[a].innerHTML === botones[c].innerHTML &&
        botones[a].innerHTML !== ""
      ) {
        ganador = true;
        setTimeout(() => {
          overlay.style.display = "flex";
          overlayMessage.innerText = `El Ganador es:  ${
            turno === "X" ? " Jugador 1 (X)" : "Jugador 2 (O)"
          }`;
        }, 200);
        return;
      }
    }

    turno = turno === "X" ? "O" : "X";
    turnoElement.innerHTML = turno === "X" ? "Jugador 1 (X)" : "Jugador 2 (O)";
  });
});

// tablero.addEventListener("click", (e) => {
//   let cellsFull,
//     cellIsClicked = true;

//   // Comprobamos si esta vacio o no el tablero
//   document.querySelectorAll(".table__cell").forEach((e) => {
//     e.innerHTML !== "" ? (cellsFull = true) : (cellsFull = false);
//   });

//   // Comprobamos si la celda esta vacia
//   if (e.target.classList.contains("table__cell") && e.target.innerHTML === "")
//     cellIsClicked = false;

//   console.log(cellsFull);
//   console.log(cellIsClicked);

//   if (
//     e.target.classList.contains("table__cell") ||
//     !cellsFull ||
//     !cellIsClicked
//   )
//     return;

//   e.target.innerHTML = turno;
//   e.target.style.color = turno === "X" ? "red" : "blue";
//   turno = turno === "X" ? "O" : "X";

//   turnoElement.innerHTML = turno === "X" ? "Jugador 1 (X)" : "Jugador 2 (O)";
// });

restartButton.addEventListener("click", () => {
  restart();
});

restartButtonOverlay.addEventListener("click", () => {
  reiniciarJuego();
});

function reiniciarJuego() {
  overlay.style.display = "none";

  ganador = false;
  turno = "X";
  turnoElement.innerHTML = "jugador 1";

  document.querySelectorAll(".table__cell").forEach((element) => {
    element.innerHTML = "";
  });
}

function restart() {
  document.querySelectorAll(".table__cell").forEach((element) => {
    element.innerHTML = "";
  });
}
