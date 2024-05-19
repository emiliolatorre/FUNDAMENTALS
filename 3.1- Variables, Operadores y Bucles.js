//Variables
//Declara una variable var "numeroUno" y asígnale un valor numérico
var numeroUno = 2;

//Declara una variable let "texto" y asígnale una cadena de texto
let texto = 'Hola, mundo!';

//cambia el valor de la variable "numeroUno" por otro número
numeroUno = 3;

//Declara una variable const "array" y asígnale un array de números y cadena de texto
const array = [0, 'cero'];

//Crea una variable let "numeroDos" y asígnale otro número
let numeroDos = 2;
numeroDos = 3;

//Operadores
//Suma la variable "numeroUno" a "numeroDos" y saca el resultado por consola
console.log(numeroUno + numeroDos);

//Multiplica la variable "numeroUno" a "numeroDos" y saca el resultado por consola
console.log(numeroUno * numeroDos);

//Resta la variable "numeroUno" a "numeroDos" y saca el resultado por consola
console.log(numeroUno - numeroDos);

//Divide la variable "numeroUno" a "numeroDos" y saca el resultado por consola
console.log(numeroUno / numeroDos);

//Eleva al cubo la variable "numeroUno" saca el resultado por consola
console.log(numeroUno **3);

//Obten el resto de la variable "numeroUno" entre "numeroDos" y saca el resultado por consola
console.log(numeroUno % numeroDos);

//Bucles
//Crea una variable con un array que se llame "numeros" y añade números dentro
const numeros = [0, 1, 2, 3, 4, 5, 6];

//Calcular su suma de todos los números del array "numeros". Saca el resultado en un console.log()
let suma = 0;
for (let i=0; i<numeros.length; i++) {
    suma += numeros[i];
    };

console.log(`la suma de los numeros es: ${suma}.`);

//Consigue el número más alto del array "numeros". Saca el resultado en un console.log()
let numeroAlto = Math.max(...numeros);
console.log(numeroAlto);

//Suma 1 a cada número si es 5 o mayor de 5 y resta 1 si es menor de 5. Saca el resultado en un console.log() saca el resultado uno a uno por consola, donde diga lo que ha hecho (Por ejemplo si ha sumado 1 a 6 debería aparecer: "ELEMENTO ITERADO" es mayor a 5. El resultado es "ELEMENTO ITERADO + 1" ).
numeros.forEach(numero => {
    if (numero >= 5) {
            console.log(`${numero} es mayor que 5. El resultado es ${numero + 1}.`);
    } else {
            console.log(`${numero} es menor que 5. El resultado es ${numero - 1}.`);
    }
});

//Cuenta cuantos elementos hay en el array. Saca el resultado en un console.log()
console.log(numeros.length);

//Cuenta cuantas veces se repiten las palabras. Saca el resultado en un console.log()
const palabras = ['hola', 'mundo', 'hola', 'mundo', 'hola', 'hola'];
const repeticiones = {};

palabras.forEach((palabra) => {
  repeticiones[palabra] = (repeticiones[palabra] || 0) + 1;
});

console.log('Repeticiones de palabras:', repeticiones);