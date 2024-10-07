alert("lo que sea");

let nombre = prompt ("¡Escribe tu nombre!");
console.log(nombre)

let edad = prompt ("¿Qué edad tienes?");
console.log(edad)

let estudiaste = true

let saludo = `¡Hola Soy ${nombre} y tengo ${edad} años😎!`;
console.log(saludo)


let si = `¡${nombre} si estudiaste! ¡Aprobarás la materia!`

let no = `¡${nombre} no estudiaste! ¡Reprobarás la materia!`

if (estudiaste > true)
{
  alert (no);
} else {
  alert (si);
}