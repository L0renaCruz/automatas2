//se requiere una funcion para ver si existen valores duplicados en un array, 
// debe de devolver todos los datos duplicados, en base a filtro

const arreglo_nombres = ["ana", "juan", "pedro", "maria", "carmen", "ana", "juan"];
const arreglo_numeros = [1, 2, 3, 4, 5];

// FILTRO PARA DUPLICADOS
const duplicados = arreglo_nombres.filter((item, index) => arreglo_nombres.indexOf(item) !== index);
const duplicadosNumeros = arreglo_numeros.filter((item, index) => arreglo_numeros.indexOf(item) !== index);

if (duplicados.length > 0) {
  console.log("Sí existen datos duplicados en los nombres y son los siguientes:", duplicados);
} else {
  console.log("No existen datos duplicados en los nombres.");
}

if (duplicadosNumeros.length > 0) {
  console.log("Sí existen datos duplicados en los números.");
} else {
  console.log("No existen datos duplicados en los números.", duplicadosNumeros);
}

console.log("\n///////////////////////////////////////////////////////////////////////////////////////////////////////////\n");

////////////SOME - REVISAR SI ALGÚN ELEMENTO CUMPLE CON LA CONDICIÓN//////////
const Numeros = [3, 7, 10, 18, 21];

const mayor = Numeros.some((num) => num > 15);
console.log("¿Existe algún número mayor que 15?:", mayor);

const Par = Numeros.some((num) => num % 2 === 0);
console.log("¿Existe algún número par?:", Par);

console.log("\n////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\n");

///////////////EVERY - REVISAR SI TODOS LOS ELEMENTOS CUMPLEN CON LA CONDICIÓN//////////
const edades = [18, 22, 30, 25, 19];

const todosMayores = edades.every((edad) => edad >= 18);
console.log("¿Todos son mayores o iguales a 18?:", todosMayores);

const todosPares = edades.every((edad) => edad % 2 === 0);
console.log("¿Todos los números son pares?:", todosPares);

console.log("\n////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\n");

///////////////FILL - RELLENAR UN ARRAY CON UN VALOR ESPECÍFICO//////////
let letras = ['a', 'b', 'c', 'd', 'e'];

letras.fill('x', 0, 3);
console.log("Las tres primeras posiciones con 'x':", letras);

letras.fill('z', 2, 5);
console.log("Las posiciones de 2 a 4 con 'z':", letras);

console.log("\n/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\n");

///////////////FILTER - CREAR UN NUEVO ARRAY CON LOS ELEMENTOS QUE CUMPLEN LA CONDICIÓN//////////
const productos = [
  { nombre: 'Laptop', precio: 1200 },
  { nombre: 'Mouse', precio: 25 },
  { nombre: 'Teclado', precio: 75 },
  { nombre: 'Monitor', precio: 300 }
];

const productosCaros = productos.filter((producto) => producto.precio > 100);
console.log("Productos que cuestan más de 100:", productosCaros);

const productosNombreLargo = productos.filter((producto) => producto.nombre.length > 5);
console.log("Productos cuyo nombre tiene más de 5 letras:", productosNombreLargo);

console.log("\n/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\n");

///////////////FIND - ENCONTRAR EL PRIMER ELEMENTO QUE CUMPLE LA CONDICIÓN//////////
const alumnos = [
  { nombre: 'Ana', edad: 17 },
  { nombre: 'Luis', edad: 20 },
  { nombre: 'Carmen', edad: 19 }
];

const alumnoMayor = alumnos.find((alumno) => alumno.edad > 18);
console.log("Primer alumno mayor de 18 años:", alumnoMayor);

const alumnoLuis = alumnos.find((alumno) => alumno.nombre === 'Luis');
console.log("Alumno cuyo nombre es Luis:", alumnoLuis);

console.log("\n/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\n");

///////////////FINDINDEX - ENCONTRAR EL ÍNDICE DEL PRIMER ELEMENTO QUE CUMPLE LA CONDICIÓN//////////
const frutas = ['manzana', 'plátano', 'pera', 'fresa', 'uva'];

const indicePera = frutas.findIndex((fruta) => fruta === 'pera');
console.log("El índice de 'pera' es:", indicePera);

const indiceFrutaLarga = frutas.findIndex((fruta) => fruta.length > 5);
console.log("El índice de la primera fruta con más de 5 letras es:", indiceFrutaLarga);

console.log("\n/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\n");

//////////////SET - ESTRUCTURA DE DATOS PARA ALMACENAR VALORES ÚNICOS//////////
const numerosDuplicados = [1, 2, 2, 3, 4, 4, 5];

const numerosSet = new Set(numerosDuplicados);
console.log("Set sin duplicados:", numerosSet);

const numerosSinDuplicados = [...numerosSet];
console.log("Arreglo sin duplicados:", numerosSinDuplicados);

const nuevoNumero = 3;

if (numerosSet.has(nuevoNumero)) {
  console.log(`El número ${nuevoNumero} ya existe en el Set.`);
} else {
  numerosSet.add(nuevoNumero);
  console.log(`El número ${nuevoNumero} fue agregado al Set.`);
}

console.log("Set final:", numerosSet);

console.log("\n/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\n");

//////////////PRACTICA FINAL - MÉTODOS APLICADOS A UN ARREGLO DE OBJETOS//////////
const personas = [
  { nombre: "Ana", edad: 17, ciudad: "México" },
  { nombre: "Luis", edad: 22, ciudad: "Madrid" },
  { nombre: "Carmen", edad: 30, ciudad: "México" },
  { nombre: "Pedro", edad: 25, ciudad: "Buenos Aires" },
  { nombre: "María", edad: 19, ciudad: "Madrid" }
];

const mayoresDeEdad = personas.filter((persona) => persona.edad > 18);
console.log("Personas mayores de 18 años:", mayoresDeEdad, "\n");

const hayDeMadrid = personas.some((persona) => persona.ciudad === "Madrid");
console.log("¿Hay alguien de Madrid?:", hayDeMadrid, "\n");

const mayores = personas.every((persona) => persona.edad >= 18);
console.log("¿Todos son mayores de edad?:", mayores, "\n");

const primeraDeMexico = personas.find((persona) => persona.ciudad === "México");
console.log("Primera persona de México:", primeraDeMexico, "\n");

const indiceAna = personas.findIndex((persona) => persona.nombre === "Ana");
console.log("Índice (posición) de Ana:", indiceAna, "\n");


