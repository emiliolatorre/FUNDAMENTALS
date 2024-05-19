//1. Escribe un programa que solicite al usuario ingresar dos números y determine cuál de los dos números es mayor. Imprime por consola lo siguiente:
// Si el primer número es mayor: El número 'NUMERO 1' es mayor.
// Si el segundo número es mayor: El número 'NUMERO 2' es mayor.
// Si ambos números son iguales: Los números son iguales.
// Utiliza 'prompt()'.
function numeroMayor () {
    let numero1 = Number(prompt('Ingreso tu numero 1', 'number'));
    let numero2 = Number(prompt('Ingreso tu numero 1', 'number'));
    if (!isNaN(numero1) && !isNaN(numero2)) {
        if (numero1 > numero2) {
            console.log(`El número ${numero1} es mayor.`)
        } else if (numero2 > numero1) {
            console.log(`El número ${numero2} es mayor.`)
        } else {
            console.log('Los números son iguales.')
        }
    } else {
        console.log('Por favor, ingresa un número.')
    }
}

numeroMayor()

//2. Asigna a una variable llamada 'number' un número. Escribe un programa que determine si ese número es positivo, negativo o igual a cero. Imprime por consola lo siguiente:
//'NUMERO' es un número positivo.
//'NUMERO' es un número negativo.
//'NUMERO' es igual a cero.
let number = 22;
function signoNumero () {
    if (number > 0) {
        console.log(`${number} es un número positivo.`)
    } else if (number < 0) {
        console.log(`${number} es un número negativo.`)
    } else {
        console.log(`${number} es igual a cero.`)
    }
}

signoNumero(number)

//3. Crea un objeto llamado 'persona' que represente a una persona con propiedades como 'nombre', 'edad', 'profesión', y un método llamado 'saludar' que imprima un saludo con el nombre de la persona. Por ejemplo: Hola, mi nombre es 'NOMBRE' y tengo 'EDAD' años.
const persona = {
    nombre: 'Emilio',
    edad: '31',
    saludar: function () {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`)
    }
}

console.log(persona.saludar())

//4. Crea un objeto llamado 'coche' con propiedades 'marca', 'modelo' y 'velocidad', y un método llamado 'acelerar' que incremente la velocidad del coche en 10 km/h.
const coche = {
    marca: 'Volvo',
    modelo: '3X',
    velocidad: 129,
    acelerar: function(){
        this.velocidad += 10
    }
}

coche.acelerar()
console.log(coche.velocidad)

//5. Crea un objeto llamado 'fruta' con propiedades como 'nombre', 'color' y 'precio'. Luego, crea un método llamado 'descuento' que aplique un descuento del 10% al precio y muestre el precio con descuento.
const fruta = {
    nombre: 'mango',
    color: 'amarillo',
    precio: 3,
    descuento: function (){
        this.precio *= 0.9
    }
}

fruta.descuento();
console.log(fruta.precio)

//6. Escribe un programa que determine si una persona puede obtener una licencia de conducir. Declara dos variables: una llamada edad y otra llamada tieneMultas. A esta última asígnale un valor booleano. Debe cumplir con dos condiciones: ser mayor de 18 años y no tener multas pendientes. Muestra en consola un mensaje distinto para cada caso.
function validarParaConducir () {
    let edad = Number(prompt('Escribe tu edad', 'edad'));
    let tieneMultas = prompt('¿Has tenido multas antes? ingrese true o false');
    if (!isNaN(edad) && (tieneMultas.toLocaleLowerCase() === 'true' || tieneMultas.toLocaleLowerCase() === 'false')) {
        if (edad >= 18 && tieneMultas === 'false') {
            console.log('Esta persona sí puede obtener una licencia de conducir.')
        } else {
        console.log('Esta persona NO puede obtener una licencia de conducir.')
    }}
    else {
        console.log('Por favor, escriba un número para edad y true o false para la respuesta de ¿tiene multas?')
    }
}

validarParaConducir()