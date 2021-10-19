// VARIABLES==================

// 2.- y 3.- Determina el nombre y tipo de dato para almacenar en variabbles la siguiente informacion.

let nombre = "Daniel"; // string
let apellido = "San"; //string
let nombreDeusuarioEnPlatzi = "Daniel San"; // strind
let edad = 33; // int
let correoElectronico = "daniel@gmail.com"; //string
let mayorDeEdad = true; // boolean 
let dineroAhorrado = 0.0; // float
let deudas = 20000; // int 😥😓

// 4.-Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior. 

// Nombre completo (nombre y apellido)
let nombreCompleto = nombre + apellido;
console.log(nombreCompleto);

// dinero real (dinero ahorrado menos deudas) 😥😰

let dineroReal = dineroAhorrado - deudas;
console.log(dineroReal); //😥😭



// FUNCIONES==============

// 2.- Convierte el siguiente codigo en una Funcion, pero, cambiando cuando sea necesario las variables constantes por parametros y argumentos en una funcion.


function ejemploDeFuncion (name, lastname, nickname)
{
    const completeName = name + lastname;
    console.log("Mi nombre es "+completeName+", pero prefiero que me digas " +nickname+ ".");
}

ejemploDeFuncion ("daniel", "san", "danny");




// CONSICIONALES=========
// 2.- Replica el comportamiento del siguiente codigo que usa la sentencia switch utilizando if, else, y else if.

const tipoDeSuscripcion = "ExpertPlus";

if (tipoDeSuscripcion === "Free"){
    console.log("Solo puedes tomar los cursos gratis");
}else if(tipoDeSuscripcion === "Basic"){
    console.log("Puedes tomar casi todos los Cursos de Platzi durante un mes");
}else if(tipoDeSuscripcion === "Expert"){
    console.log("Puedes tomar casi todos los curso de Platzi durante un an~o");
}else if (tipoDeSuscripcion === "ExpertPlus"){
    console.log("Tu y alguien mas pueden tomar TODOS los curos de Platzi durante un an~o");
}

// solo con if, else 

if (tipoDeSuscripcion === "Basic"){
    console.log("Solo puedes tomar los cursos gratis");
}else{
    if(tipoDeSuscripcion === "Free"){
        console.log("Puedes tomar casi todos los Cursos de Platzi durante un mes");
    }
    else {
        if(tipoDeSuscripcion === "Expert"){
            console.log("Puedes tomar casi todos los curso de Platzi durante un an~o");
        }
        else {
            if(tipoDeSuscripcion === "ExpertPlus"){
                console.log("Tu y alguien mas pueden tomar TODOS los curos de Platzi durante un an~o");
            }
        }
    }
}

// 3️.- Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if)
// solo con if

if(tipoDeSuscripcion === "Basic"){
    console.log("Solo puedes tomar los cursos gratis");
}
if(tipoDeSuscripcion === "Free"){
    console.log("Puedes tomar casi todos los Cursos de Platzi durante un mes");
}
if(tipoDeSuscripcion === "Expert"){
    console.log("Puedes tomar casi todos los curso de Platzi durante un an~o");
}
if(tipoDeSuscripcion === "ExpertPlus"){
    console.log("Tu y alguien mas pueden tomar TODOS los curos de Platzi durante un an~o");
}

// bonus=======

const plan = [
    {
        plan : "Basic",
        mensaje : "Solo puedes tomar los cursos gratis"
    },
    {
        plan: "Free",
        mensaje: "Puedes tomar casi todos los Cursos de Platzi durante un mes"
    },
    {
        plan: "Expert",
        mensaje: "Puedes tomar casi todos los curso de Platzi durante un an~o"
    },
    {
        plan: "ExpertPlus",
        mensaje: "Tu y alguien mas pueden tomar TODOS los curos de Platzi durante un an~o"
    }
];

plan.forEach((tipo)=>{
    if(tipoDeSuscripcion === tipo.plan){
        console.log(tipo.mensaje +" 😎");
        return;
    }
});




// CICLOS============

// 2.- Replica el comportamiento de los siguientes ciclos  for Utilizando ciclos while

let i = 0;
while(i < 5){
    i++;
    console.log("El valor de i es: " + i);
}

let ii = 10;
while(ii >= 2){
    ii--;
    console.log("El valor de ii es:" + ii);
}


// 3.- Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

// Pista: puedes usar la función prompt de JavaScript.
let contador = true;
while(contador)
{
    let respuestaUsuario = Number(window.prompt("Cuanto es (2 + 2) ?"));
    
    if (respuestaUsuario == 4){
        alert (" Acertaste!!!!, bien echo eres un crack.");
        contador = false;
    }else{
        alert("Es incorrecto, intentalo de nuevo");
    }
}


// LISTAS===================

// 1.- Responde las siguientes preguntas en la sección de comentarios:


// 2.- Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

miArray = ["carro", "moto", "bicicleta", "monopatin"];

function miFuncionArray (unArray){
    console.log(unArray[2]);
}
miFuncionArray(miArray);


// 3.- Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

function miFuncionArray2(unArray){
    unArray.forEach(function (elemento){
        console.log(elemento);
    });
}
miFuncionArray2(miArray);

// 4.- Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).
const elObjeto = {
    nombre : "carro",
    tipo: "vehiculo automotor",
    color: "rojo",
    marca: "Patito"
}

function recibeObjeto(miObjeto){
    for(const propiedades in miObjeto){
        console.log(`${propiedades}: ${miObjeto[propiedades]}`);
    }
}
recibeObjeto(elObjeto);