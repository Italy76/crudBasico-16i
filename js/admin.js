import {validarCampoRequerido, validarCodigo, validarGeneral, validadURL, validarNumeros} from "./validaciones.js" // importo funciones desde archivo de validaciones.js

//declarar variables
let listaProductos = []

//este archivo tendrá toda la lógica del ADM o CRUD

import{Producto} from "./productoClass.js"

let producto = document.querySelector("#producto");
console.log(producto);

let cantidad = document.querySelector("#cantidad");
console.log(cantidad);

let codigo = document.querySelector("#codigo");

let descripcion = document.querySelector("#descripcion");

let url = document.querySelector("#url");

let formulario = document.querySelector("#formProducto"); // traje el id del formulario en una variable.
console.log(formulario);

producto.addEventListener("blur", () => {
    validarCampoRequerido(producto);
  }); // Esto no se puede hacer. Javascript lee las funciones dentro del archivo en que has sido hechas. Si 
  // las copiamos en otro archivo no las lee. Po eso hay que usar los módulos.
  cantidad.addEventListener("blur", () => {
    validarNumeros(cantidad);
  });
  
  descripcion.addEventListener("blur", () => {
    validarCampoRequerido(descripcion);
  });
  
  codigo.addEventListener("blur", () => {
    validarCodigo(codigo);
  });
  
  url.addEventListener("blur", () => {
    validadURL(url);
  });
  
  formulario.addEventListener("submit", guardarProducto); // En el addEventListener he cambiado la función
  // que maneja el evento submit: en lugar de validarGeneral puse la nueva guardarProducto. Acordarse de que en este caso el nombre de la función se debe escribir SIN LOS PARÉNTESIS.

  // verificar si hay datos en localstorage
  cargaInicial()

  function guardarProducto(event){  //Borrar el event en la función validacionGeneral en el archivo 
    //validaciones.js!!
      event.preventDefault(); // El preventDefault solo va donde hay el evento submit.
      // validar los datos del formulario
       if(validarGeneral()){
           // crear nuevo producto
           console.log("Debería crear un producto")
           agregarProducto();
       }else{
          console.log(" aquí solo mostrar el cartel de error")
       }     
  }

  function agregarProducto(){
      let productoNuevo = new Producto(codigo.value, producto.value, descripcion.value, cantidad.value, url.value)
      console.log(productoNuevo);
      //guardar el producto en el arreglo de arriba listaProductos
      listaProductos.push(productoNuevo); // nombré al arreglo creado arriba, listaProductos, el .push es para enviar el objeto (productoNuevo) al mismo arreglo que creé más arriba.
      console.log(listaProductos)
      // guardar en el Local Storage: localStorage.setItem para guardar, entre paréntesis indicar un nombre de key que inventemos.
      localStorage.setItem("listaProductosKey", JSON.stringify(listaProductos)); // el comando stringify transforma en formato JSON lo que indica entre paréntesis, en este caso el arreglo que contiene todos los productos creados, para que se guarden el Local Storage.
      // limpiar el formulario
      limpiarFormulario(); // llamamos la función que limpia de los datos el formulario
      // dibujar fila en la tabla
      crearFila(productoNuevo);
  }

  function cargaInicial(){
    // si hay algo en localstorage lo guardo en el arreglo, sino dejo el arreglo vacío.
      listaProductos = JSON.parse(localStorage.getItem("listaProductosKey")) || []; //para evitar la pérdida de los objetos guardados en Local Storage: creo una función con los siguientes comandos. JSON.parse para convertir en lenguaje para javascript lo qu está en lenguaje JSON (es el contrario de stringify). localStorage.getItem: para traer a nuestro archivo javascript el arreglo de objetos guardado en Local Storage. Entre paréntesis hay que transcribir el nombre de la clave con que lo guardamos en Local Storage. Lógica: es cierto que en Local storage hay algo lo convierto en formato para js, y lo traigo acá, sino la función devuelve un arreglo vacío.
      console.log(listaProductos);

      //llamar a la función que crea filas.
      // forEach: es un for más sencillo, recorre todo un arreglo, objeto por objeto y por cada un código.
      //Se inventa un nombre de un parámetro y de hace una anónima.
      listaProductos.forEach(itemProducto => {
        crearFila(itemProducto); // pasamos el nuevo parámetro a la función crearfila. 
      })
      
  }

  function crearFila(itemProducto){ // damos el parámetro que agregamos en el forEach a la funcón crearfila.
    console.log(itemProducto)
    //traigo el nodo padre que sería el tbody.
    let tabla = document.querySelector("#tablaProductos");
     console.log(tabla);
    tabla.innerHTML += `<tr>
     <th scope="row">${itemProducto.codigo}</th>
     <td>${itemProducto.nombreProducto}</td>
     <td>${itemProducto.descripcion}</td>
     <td>${itemProducto.cantidad}</td>
     <td>${itemProducto.url}</td> 
     <td>
       <button class="btn btn-warning">Editar</button>
       <button class="btn btn-danger">Borrar</button>
     </td>
   </tr>`
  } // agregué en nombre de objeto (itemProducto) con respectivas propiedades a mostrar en la tabla.

  function limpiarFormulario(){
    // limpia los value de los elementos del formulario. Se usa el método de js reset()
    formulario.reset();
    //limpiar las clases de cada elemento del formulario.
    codigo.className = "form-control" //al objeto codigo le sacamos la clase is-valid/is-invalid
    //tendríamos que hacerlo con todos los demás productos
  }