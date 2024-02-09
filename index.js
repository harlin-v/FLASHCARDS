/*A continuacion crearemos las variables a las que les asignaremos los valores que tienen nuestros elementos en html.
Es importante recordar que cuando utilizamos el metodo "getElementsByClassName" debemos especificar su indice entre brakets*/
const targetasJs = document.getElementsByClassName("targetas")[0];

const crearCajaJs = document.getElementsByClassName("crearCaja")[0];

const preguntaJs = document.getElementById("pregunta");

const respuestaJs = document.getElementById("respuesta");



/*La siguente linea de codigo nos permite almacenar datos de manera local en nuestro browser. Todo lo anterior con el atributo
localStorage y el metodo getItem. */
let contenidoArreglo = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

/*A continuacion crearemos una funcion que nos permita borrar el contenedo almacenado en "localStorage", los datos que se 
encuentren en la caja de texto y  el contenido de nuestro arreglo "contenidoArreglo" */
function borrarTargeta(){
    localStorage.clear();
    targetasJs.innerHTML = "";
    contenidoArreglo = [];
}

/* */
contenidoArreglo.forEach(creadorDeElementos)

function creadorDeElementos(texto){
    var elementoHTML = document.createElement("div");
    
    var PreguntaH2 = document.createElement("h2");
    var respuestaH2 = document.createElement("h2");

    elementoHTML.className = "targetas";

    PreguntaH2.setAttribute("style", "width: 100%; padding: 15px; margin-top: 1px; background-color: lightblue");
    PreguntaH2.innerHTML = texto.miPregunta;

    respuestaH2.setAttribute("style", "border-top: 2px solid red; padding: 10px; text-align: center; display: none; color: red; margin-top: 1px;");
    respuestaH2.innerHTML = texto.miRespuesta;

    elementoHTML.appendChild(PreguntaH2);
    elementoHTML.appendChild(respuestaH2);

    elementoHTML.addEventListener("click", function(){
        if(respuestaH2.style.display == "none")
        respuestaH2.style.display = "block";
        else
        respuestaH2.style.display == "none";
    });

    targetasJs.appendChild(elementoHTML);

}

console.log(preguntaJs)
function agregarTargeta(){
    var informacionTargeta = {
        'miPregunta' : preguntaJs.value,
        'miRespuesta' : respuestaJs.value
    }

    contenidoArreglo.push(informacionTargeta);
    localStorage.setItem('items', JSON.stringify(contenidoArreglo));

    creadorDeElementos(contenidoArreglo[contenidoArreglo.length -1]);
    preguntaJs.value = '';
    respuestaJs.value = '';
}

function mostrarCrearTargeta(){
    crearCajaJs.style.display = "block"
}

function esconderCrearCaja(){
    crearCajaJs.style.display = "none";
}