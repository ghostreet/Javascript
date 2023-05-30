console.log("Bienvenido/a a tu pagina de administración");

//Obtención de los datos del formulario HTML
const formulario = document.querySelector("#formulario");
const nombreInput = document.querySelector("#materiaForm");
const profesorInput = document.querySelector("#nombreProfe");
const notasInput = document.querySelector("#notas");
const resultadoDiv = document.querySelector("#resultado");
const promedioGeneralDiv = document.querySelector("#resPromGen");

formulario.addEventListener("submit", (e)=>{
    e.preventDefault();
    
    const materia = nombreInput.value;
    const profesor = profesorInput.value;
    const notas = notasInput.value.split(" ").map(parseFloat);

    const nuevaMateria = new Materia(materia, profesor, notas)
    materias.push(nuevaMateria);

    formulario.reset();
    mostrarPromedioMaterias();
    guardarMateriasLS();
});
//definición de la clase cosntructora
class Materia {
    constructor(nombre, profesor, notas){
        this.nombre = nombre
        this.profesor = profesor
        this.notas = notas
    }

    promedio(){ 
        const prom = this.notas.reduce ((acumulador, valor) => acumulador + valor, 0)
        const promedio = prom / this.notas.length;
        const notaMaxima = Math.max(...this.notas)
        const notaMinima = Math.min(...this.notas)
        return {
            promedio: promedio.toFixed(2),
            notaMaxima,
            notaMinima,
        }
    }

    mostrarProfesor(){
        return `El profesor de ${this.nombre} es: ${this.profesor}`
    }
}

const materias =[];
//función para mostrar los promedios en el DOM
function mostrarPromedioMaterias() {
    let resultadoHTML = "";
    materias.forEach((materia) => {
        const promedioMateria = materia.promedio();
        resultadoHTML += `<p>El promedio de ${materia.nombre} es: ${promedioMateria.promedio}, la nota máxima es ${promedioMateria.notaMaxima} y la nota mínima es ${promedioMateria.notaMinima}</p>`;
        resultadoHTML += `<p>${materia.mostrarProfesor()}</p>`;
    });
    resultadoDiv.innerHTML = resultadoHTML;
}

function calcularPromedio(notas){
    const prom = notas.reduce((acumulador, valor) => acumulador + valor, 0);
    const promedio = prom /notas.length;
    return promedio; 
}
//botón para motrar le promedio general en el DOM
const promedioGeneralBtn = document.querySelector(".pgen");
promedioGeneralBtn.addEventListener("click", mostrarPromedioGeneral);
//funcionamiento
function mostrarPromedioGeneral(){
    const promedios = materias.map((materia) => {
        const prom = materia.notas.reduce((acumulador, valor) => acumulador + valor, 0);
        return prom / materia.notas.length;
    })

    const promedioGeneral = promedios.reduce((acumulador, valor) => acumulador + valor, 0) / promedios.length;
    
    const resPromGenDiv = document.querySelector("#resPromGen")
    promedioGeneralDiv.textContent = `El promedio de todas las materias es: ${promedioGeneral.toFixed(2)}`;
}
//botón para ver el detalle d ela snotas de cada materia
const detalleNotasBtn = document.querySelector(".detalle");
detalleNotasBtn.addEventListener("click", mostrarDetalleNotas)
//funcionamiento
function mostrarDetalleNotas(){
    let detalleHTML = "";
    materias.forEach((materia)=> {
        detalleHTML += `<p>Las notas de ${materia.nombre}</p>`;
        materia.notas.forEach((nota, index)=> {
            detalleHTML += `<p>Nota ${index + 1}: ${nota} </p>`;
        })
    })
    resultadoDiv.innerHTML = detalleHTML;
}
//botón para volver a la vista anterior
const volverPromBtn = document.querySelector(".inicioProm");
volverPromBtn.addEventListener("click", mostrarPromedioMaterias)

//almacenamiento de las materias con sus datos en el LS
function guardarMateriasLS(){
    localStorage.setItem("materias", JSON.stringify(materias));
}
//función para obtener las materias guardadas en LS
function cargarMateriasLS(){
    const materiaStorage = localStorage.getItem("materias");
    if (materiaStorage) {
        materias = JSON.parse(materiaStorage)
        mostrarPromedioMaterias();
    }
}

cargarMateriasLS();