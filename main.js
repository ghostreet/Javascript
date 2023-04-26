console.log("Bienvenido/a a la calculadora de notas 2023")

let consulta = confirm("¿Ingresar nuevo estudiante?")


let nombre
let nota1
let nota2
let nota3
let promedio

let totalPromedio=0
let cantidadEstudiantes=0


while(consulta){
nombre = prompt("Nombre del estudiante:");
nota1 = parseInt(prompt("Ingresa la primera nota:"));
nota2 = parseInt(prompt("Ingresa la segunda nota:"));
nota3 = parseInt(prompt("Ingresa la tercera nota:"));

function calcularProm(){
    let promedio = (nota1+nota2+nota3)/3;
    totalPromedio+= promedio;
    cantidadEstudiantes+=1;
    return console.log(`El promedio de ${nombre} es: ${promedio.toFixed(2)}`);
} 
calcularProm();

if (consulta = confirm("¿Desea agregar un nuevo estudiante?"));


}

let promedioGeneral = totalPromedio / cantidadEstudiantes;
console.log("El promedio general de los estudiantes ingresados es: "+promedioGeneral.toFixed(2));
console.log("El total de estudiantes ingresados es " +cantidadEstudiantes);


