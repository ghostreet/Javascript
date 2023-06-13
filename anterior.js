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

/* intento de obtencion de citas desde wikiquote, tuve error cors, asi es que lo deje hasta ahi

const getRandomQuote = async (section) =>{
    const API_URL = "https://es.wikiquote.org/w/api.php";
    const params = {
        format: "json",
        action: "parse",
        prop: "text",
        section: section,
        disablelimitreport: true,
        disableeditsection: true,
        disabletoc: true,
        disableeditlinks: true
    };

    const url = `${API_URL}?${formatParams(params)}`;

    try{
        const response = await fetch(url);
        const data = await response.jason();
        const content = data.parse.text["*"];
        const quote = extractQuote(content);
        const author = extractAuthor(content);
        return { quote, author };
    } catch (error){
        throw new Error("Fallo la carga de la cita")
    }
};

const formatParams = (params) => {
    return Object.keys(params)
    .map(key => `${key}=${encodeURIComponent(params[key])}`)
    .join("&");
};

const extractQuote = (content) => {
    const quoteRegex = /<li>(.*?)<\/li>/g;
    const quoteMatch = quoteRegex.exec(content)
    return quoteMatch ? quoteMatch[1] : "";
};

const extractAuthor = (content) => {
    const authorRegex = /<li><a href="\/wiki\/.*?" .*? title=".*?">(.*?)<\/a><\/li>/g;
    const authorMatch = authorRegex.exec(content);
    return authorMatch ? authorMatch[1] : "";
};

const quoteElement = document.querySelector("#cita");
const authorElement = document.querySelector("#autor");

const handlerError = (error) => {
    console.log("error en la obtencion de la cita", error);
};

const updateCita = (quote, author) =>{
    quoteElement.innerHTML = result.quote;
    authorElement.innerHTML = result.author;
};

const fetchCita = () => {
    getRandomQuote("Docentes")
        .then((result) =>{
            const { quote, author } = result;
            updateCita(quote, author);
        })
        .catch(handlerError);
}

fetchCita(); */