/*
    Codigo hecho con full chatgpt 
*/
const fs = require('node:fs');

// Función para imprimir el tablero
function imprimirTablero(tablero) {
    for (let i = 0; i < 3; i++) {
        console.log(tablero[i].join(' '));
    }
}

// Función para verificar si alguien ha ganado
function verificarGanador(tablero, jugador) {
    // Verificar filas
    for (let i = 0; i < 3; i++) {
        if (tablero[i][0] === jugador && tablero[i][1] === jugador && tablero[i][2] === jugador) {
            return true;
        }
    }

    // Verificar columnas
    for (let j = 0; j < 3; j++) {
        if (tablero[0][j] === jugador && tablero[1][j] === jugador && tablero[2][j] === jugador) {
            return true;
        }
    }

    // Verificar diagonales
    if (tablero[0][0] === jugador && tablero[1][1] === jugador && tablero[2][2] === jugador) {
        return true;
    }
    if (tablero[0][2] === jugador && tablero[1][1] === jugador && tablero[2][0] === jugador) {
        return true;
    }

    return false;
}

const tablero = [
    ['0', '0', '0'],
    ['0', '0', '0'],
    ['0', '0', '0']
];

let turnoX = true; // Iniciar con el turno del jugador X

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// Historial de movimientos
const movimientos = [];

function jugarTurno() {
    imprimirTablero(tablero);

    const jugadorActual = turnoX ? 'X' : 'O';

    readline.question(`Turno ${jugadorActual}, ingresa la posición ej: 1 1 (fila columna): `, (posicion) => {
        const [fila, columna] = posicion.split(' ').map(Number);

        if (fila >= 0 && fila < 3 && columna >= 0 && columna < 3 && tablero[fila][columna] === '0') {
            tablero[fila][columna] = jugadorActual;

            movimientos.push({ jugador: jugadorActual, fila, columna });

            if (verificarGanador(tablero, jugadorActual)) {
                imprimirTablero(tablero);
                console.log(`¡Jugador ${jugadorActual} ha ganado!`);
                guardarMovimientosEnArchivo(movimientos);
                readline.close();
                return;
            }

            // Cambiar de turno
            turnoX = !turnoX;
            jugarTurno();
        } else {
            console.log('Movimiento no válido. Inténtalo de nuevo.');
            jugarTurno();
        }
    });
}

function guardarMovimientosEnArchivo(movimientos) {
    const movimientosTexto = movimientos.map(({ jugador, fila, columna }) => `Turno ${jugador}: ${fila} ${columna}`).join('\n');
    fs.writeFileSync('gatoh.txt', movimientosTexto);
    console.log('Historial de movimientos guardado en "gatoh.txt".');
}

console.log('¡Bienvenido al juego del gato!');
jugarTurno();
