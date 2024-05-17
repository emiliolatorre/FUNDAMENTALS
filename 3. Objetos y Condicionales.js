//Objetos
//Crea un objeto que represente una persona. El objeto debe tener las siguientes propiedades:
//nombre: el nombre de la persona
//edad: la edad de la persona
//altura: la altura de la persona
//trabajo: lugar de trabajo

const persona = {
    nombre: 'Emilio',
    edad: 28,
    altura: '1,80cm',
    trabajo: 'The Bridge',
    presentar: function() {console.log(`${this.nombre} tiene ${this.edad} años, mide ${this.altura} y trabaja en ${this.trabajo}.`)}
}


//Crea un método dentro del objeto para añadir los siguientes datos en una sola frase "nombre" + tiene + "edad" + mide + "altura" y trabaja en "trabajo"
console.log(persona.presentar())

//Crea 3 objetos con la estructura anterior pero con diferentes valores
const persona2 = {
    nombre: 'Marcos',
    edad: 28,
    altura: '1,60cm',
    trabajo: 'el Campo',
    presentar: function() {console.log(`${this.nombre} tiene ${this.edad} años, mide ${this.altura} y trabaja en ${this.trabajo}.`)}
}

const persona3 = {
    nombre: 'Jessica',
    edad: 36,
    altura: '1,90cm',
    trabajo: 'The Bridge, ya no',
    presentar: function() {console.log(`${this.nombre} tiene ${this.edad} años, mide ${this.altura} y trabaja en ${this.trabajo}.`)}
}

//Crea una variable y asignale un array donde irán los 3 objetos que creaste antes
const personas = [persona, persona2, persona3]
console.log(personas)

//Recorre el array y saca por consola solo los resultados con edad superior a 35. Los datos que deben aparecer son el nombre y la edad de cada uno. Puedes crear un método dentro de cada objeto o unificarlo en un sring.
const personasMayores = personas.filter(elemento => elemento.edad > 35)
console.log(personasMayores)

//aqui tambien lo podriamos hacer con forEach

personas.forEach(elemento => {
    if (elemento.edad > 35)
        console.log(`${elemento.nombre} tiene ${elemento.edad} años.`);
  })