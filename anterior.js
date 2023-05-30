/*
    
let promedio

let totalPromedio=0
let cantidadEstudiantes=0

function calcularProm(nombre, nota1, nota2, nota3){
    let promedio = (nota1+nota2+nota3)/3;
    totalPromedio+= promedio;
    cantidadEstudiantes+=1;
    return console.log(`El promedio de ${nombre} es: ${promedio.toFixed(2)}`);
} 

while(consulta){
let nombre = prompt("Nombre del estudiante:");
let nota1 = parseInt(prompt("Ingresa la primera nota:"));
let nota2 = parseInt(prompt("Ingresa la segunda nota:"));
let nota3 = parseInt(prompt("Ingresa la tercera nota:"));


calcularProm(nombre, nota1, nota2, nota3);

consulta = confirm("¿Desea agregar un nuevo estudiante?");


}

let promedioGeneral = totalPromedio / cantidadEstudiantes;
console.log("El promedio general de los estudiantes ingresados es: "+promedioGeneral.toFixed(2));
console.log("El total de estudiantes ingresados es " +cantidadEstudiantes);*/

/*
function agregarMateria(){
    const nombreMateria = prompt("Ingrese el nombre de su materia");
    const nombreProfesor = prompt("Ingrese nombre del profesor a cargo de la materia");

const notas =[];
let notaActual;
let notaValida;
do {
    notaActual = prompt("Ingrese una nota, o fin para terminar");

    if (notaActual !=="fin"){
        const notaNumerica = parseFloat(notaActual);

        if (!isNaN(notaNumerica)) {
            notas.push(notaNumerica);
            notaValida = true;
        } else {
            notaValida = false;
            alert("Nota errónea. Ingrese una nota valida")  
            break;
        }  
    }else {
        notaValida = true;
    }
    
} while (!notaValida || notaActual !=="fin");

if (notaValida){
    const nuevaMateria = new Materia(nombreMateria, nombreProfesor, notas);
    materias.push(nuevaMateria)
    }  
}

 let agregarNuevaMateria = confirm("¿Desea agregar una nueva materia?");

    while (agregarNuevaMateria){
        agregarMateria();
        agregarNuevaMateria = confirm("¿Desea agregar otra materia?")
        }

function mostrarPromedioMaterias (){
    materias.forEach((materia)=> {materia.promedio(); materia.mostrarProfesor();})
} */

// El promedio de ${this.nombre} es: ${promedio.toFixed(2)} ,la nota máxima es ${notaMaxima} y la mínima ${notaMinima}`

/* notaMasAlta(){
    const notaMaxima = Math.max(...this.notas)
    return `La nota mas alta de la materia es ${notaMaxima}`
}

notaMasBaja(){
    const notaMinima = Math.min(...this.notas)
    return `La nota mas baja de la materia es ${notaMinima}`
} */