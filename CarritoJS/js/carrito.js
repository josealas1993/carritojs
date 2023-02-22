const carrito = docuemnt.getElemtById('carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarrito = document.getElementById('vaciar-carrito');
const listasCursos = document.querySelector('#lista-cursos');
const listaCursos = document.querySelector('lista-curso');

let articulosCarrito = [];

cargarEventos();

function cargarEventos(){
    listaCursos.addEventListener('click', agregarCurso);

}

function agregarCurso(e){
//Evitamos que la etiqueta <a> redireccione, cancelando su evento por defecto
    e.preventDefault()

    if(e.target.classList.cotains('agregar-carrito')){
        console.log(e.target);
        const cursoSeleccionado = e.target.parentElement.parentElement;
        console.log(cursoSeleccionado);
    }
}

function leerDatosCurso(curso){
    
}