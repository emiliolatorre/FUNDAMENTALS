//1. Escribe una función llamada 'calcularMedia' que tome un array de números como parámetro y calcule la media de los números. La función debe devolver la media. Imprime el resultado en consola.
const numeros = [1, 3, 5, 6, 7, 9];
function calcularMedia() {
    let suma = numeros.reduce((accumulator, currentValue) => accumulator + currentValue)
    return suma / numeros.length
}

//2. Escribe un programa que calcule la suma de los números pares del 1 al 100 y la imprima en la consola.
const numeroCien = [];
for (let i=1; i<=100; i++) {
    numeroCien.push(i);
}
console.log(numeroCien)

function calcularPares(array) {
    let sumaPares = 0;
    for(let i=0; i<array.length; i++) {
        if (array[i] % 2 === 0) {
            sumaPares+=array[i];
        }
    }
    return sumaPares
}

console.log(calcularPares(numeroCien))

//3. Escribe una función que tome un string como parámetro y devuelva un nuevo string que sea la versión invertida del string original (si el parámetro es 'The Bridge', debe devolver 'egdirB ehT'.
function invertir(frase) {
    let fraseInvertida = frase.split('');
    fraseInvertida.reverse();
    fraseInvertida.join('');
    return fraseInvertida
}

invertir('The Bridge')

//4. Declara una variable de tipo string y cuenta cuantas veces aparece la letra "a" en el string.
let string = 'Hola, estoy estudiando en The Bridge'
function contarLetraA(frase) {
    let contarA = 0
    for (let i=0; i<frase.length; i++) {
        if (frase[i] === 'a') {
            contarA++
        }
    }
    return contarA
}

console.log(contarLetraA(string))

//5. Asigna a una variable con nombre "names" un array de al menos 5 nombres. Crea una función llamada "findLongestName" que encuentre y devuelva el nombre más largo del array.
const names = ['Emilio', 'Julito', 'Marina', 'Jessica', 'Gonzalin'];
function findLongestName(array) {
    let nombreMasLargo = '';
    for (element of array) {
        if (element.length > nombreMasLargo.length) {
            nombreMasLargo = element
        }
    }
    return nombreMasLargo
}

console.log(findLongestName(names))

//6. Declara un array de 10 números y realiza lo siguiente:
// - Añade un nuevo número al principio del array.
// - Imprime por consola la longitud del array.
// - Invierte el orden de los elementos en el array.
const numeros10 = [1, 3, 2, 3, 4, 6, 7, 4, 5, 22];
numeros10.unshift(0);
console.log(numeros10.length);
numeros10.reverse();
console.log(numeros10)

//7. Declara un array de 10 frutas y realiza lo siguiente:
// - Ordena las frutas en orden alfabético.
// - Crea un nuevo array que contenga solo las frutas que tengan exactamente 4 caracteres.
// - Concatena todas las frutas en una sola cadena separadas por comas.
const frutas = ['naranja', 'melon', 'melocoton', 'platano', 'nispero', 'paraguaya', 'uvas', 'manzana', 'mandarina', 'mango'];
frutas.sort();
console.log(frutas)
const frutasDeCuatroLetras = frutas.filter(fruta => fruta.length === 4)
console.log(frutasDeCuatroLetras)
frutas.join(', ')