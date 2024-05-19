//Arrays
//Asigna a una variable con nombre "numeros" un array de números (5 números)
const numeros = [0, 1, 2, 3, 4, 5];

//Asigna a una variable con nombre "texto" un array de palabras (20 números tipo string). Haz que alguna se repita.
const texto = ['uno', 'dos', 'uno', 'trece', 'cinco', 'cincuenta', 'tres', 'cuarentaydos', 'cuatro', 'siete', 'diez', 'siete', 'doce', 'setenta', 'trece', 'ocho', 'diecisiete', 'veintiuno', 'dos', 'cero'];

//Asigna a una variable un array con nombre "mixto" con elementos mixtos (cadena de texto, números, boleanos, ... )
const mixto = [true, 'pelota', 45, false, 'elefante']

//Funciones
//Crea una funcion "suma" que sume dos argumentos. Dentro de la funcion hay que validar si los parametros que se les pasa son números. Si son números el resultado será la suma, si no un número saltará un mensaje de error.
function suma(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
      return a + b;
    } else {
      console.error('Los parámetros deben ser números.');
      return NaN;
    }
  }

//Crea una función que al pasarle una palabra valide si existe dentro del array "texto"
function buscar (palabra) {
    for (let i=0; i<texto; i++) {
        if (texto[i] === palabra) {
            return true
            break
        } else {
            false
        }
    }
}

//o también podriamos hacer directamente
function validarPalabra(palabra) {
    return texto.includes(palabra);
  }

//Crea una función que valide si el resultado de la suma de todos los números del array "numeros" es igual al número que se pasa como argumento a la función.

function validarSuma(numero) {
    const numerosTotal = numeros.reduce((accumulator, currentValue) =>
        accumulator + currentValue);
    return numero === numerosTotal
}