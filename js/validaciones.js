export function validarCampoRequerido(input) {
  console.log(input);
  console.log(input.value);
  if (input.value.trim().length > 0 && input.value.trim().length >= 3) {
    // trim es la función que
    //quita los espacios vacíos delante de una cadena de texto.
    console.log("el dato es correcto");
    input.className = "form-control is-valid"; // para evitar sobreescritura rportamos todas las
    //características de la clase de html.
    return true;
  } else {
    console.log("dato erróneo");
    input.className = "form-control is-invalid";
    return false;
  }
}

export function validarNumeros(input) {
  // validar con expresiones regulares, que son un patrón.
  let patron = /^[0-9]{1,5}$/; // el ^ indica cantidad máxima y mínima; los  valores dentro de los []
  // indican que queremos usar exclusivamente caracteres numéricos.
  // Los valores entre {} indican el número mín. y max. de caracteres; el símbolo $ indica el final
  //de la expresión. Toda la expresión ha de escribirse dentro dos //.
  if (patron.test(input.value)) {
    input.className = "form-control is-valid";
    return true;
  } else {
    input.className = "form-control is-invalid";
    return false;
  } // .test testea una variable, para ver si cumple con la función, o sea con la expresión regular.
}

export function validarCodigo(input) {
  //Con input y textarea se usa el value, no el innerHtml!!
  // Validar que tenga al menos 3 caracteres
  if (input.value.trim() != "" && input.value.trim().length >= 3) {
    /*!="" quiere decir es diferente de una cadena de texto. Significado de este if: si el value del 
     parámetro input, sin espacio anterior(trim) es diferente de una cadena de texto, y la longitud de 
     este input.value.trim() es >= a 3, el campo es válido. Viceversa (else), es inválido  */

    input.className = "form-control is-valid";
    return true;
  } else {
    input.className = "form-control is-invalid";
    return false; // modiqué la función poniendole los valores de retorno para luego trabajar en la
    // función de validación general.
  }
}

 export function validadURL(input) {
  let patron = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/; // En la página donde está esta expresión regular,
  // pegué una imagen cuyo url copié desde la página pexel.es. Así copio y pego acá la expresión.
  if (input.value.trim() != "" && patron.test(input.value.trim())) {
    /*Significado: si el parámetro input con su valor es diferente de una cadena de texto vacía, y si
        el test de la variable patron que contiene la expresión regular, sobre el input value va bien
        entonces el campo es válido; viceversa es inválido. */
    input.className = "form-control is-valid";
    return true;
  } else {
    input.className = "form-control is-invalid";
    return false;
  }
}

 export function validarGeneral() {  // se ha borrado la e porque ahora en admin.js es la función 
  //validarProducto en manejador de evento submit del formulario, no es más validarGeneral.
  // Valida el submit, o sea todos los campos del formulario cuando se hace clic
  // en el botón guardar del formulario. El parámetro event (e) se escribe para capturar el objeto event.
  //e.preventDefault(); //el método .preventDefault() le dice al objeto event que no refresque la página
  // al hacer el submit para ver bien todas las validaciones.
  console.log("desde validar general");
  //console.log(e);
  let alerta = document.querySelector("#msjAlerta");   // traigo el id del alert que inserté en el código.
  if (
    validarCodigo(document.querySelector("#codigo")) &&
    validarCampoRequerido(document.querySelector("#producto")) &&
    validarCampoRequerido(document.querySelector("#descripcion")) &&
    validarNumeros(document.querySelector("#cantidad")) &&
    validadURL(document.querySelector("#url"))
  ) {
    // Si la función de validación del campo código,
    // traido con document.querySelector, da true, entonce un console.log dice que es correcto, sino
    // otro console.log dice que la validación es incorrecta.
    console.log("validación correcta");
    alerta.className = "alert alert-danger mt-4 d-none" // Traigo en js también la característica de 
    //ocultar el alerta, par estar seguro de que funcione.
    return true
  } else {
    console.log("validación errónea");
    alerta.className = "alert alert-danger mt-4" // En caso que algo falle, indico nuevamente el alert, pero
    // esta vez quiero que aparezca, por ello le saco de la clase el d-4.
    return false
  }
}

let producto = document.querySelector("#producto");
console.log(producto);

let cantidad = document.querySelector("#cantidad");
console.log(cantidad);

let codigo = document.querySelector("#codigo");

let descripcion = document.querySelector("#descripcion");

let url = document.querySelector("#url");

let formulario = document.querySelector("#formProducto"); // traje el id del formulario en una variable.
console.log(formulario);








//Agrego elemento desde javascript.
// Agregar eventos desde javascript, en vez que en html
//producto.addEventListener("blur", ()=>{validarCampoRequerido(producto)})  //se escribe la variable que trae el id desde html. assEventListener es
//lo que agrega los eventos. El nombre del evento se escribe sin el prefijo on- (blur y no onblur).
// Se usa una función anónima y entre paréntesis se pone la variable que trae el id, para que la función sea
// llamada y actúe sobre el input producto. La función addEventListener agrega el manejador de eventos.


//producto.addEventListener("blur", () => {
//  validarCampoRequerido(producto);
//});

//cantidad.addEventListener("blur", () => {
 // validarNumeros(cantidad);
//});

//descripcion.addEventListener("blur", () => {
  //validarCampoRequerido(descripcion);
//});

//codigo.addEventListener("blur", () => {
  //validarCodigo(codigo);
//});

//url.addEventListener("blur", () => {
 // validadURL(url);
//});

//formulario.addEventListener("submit", validarGeneral); // En este caso usamos el evento submit y no blur,
// y siendo la fución de validación una función SIN PARÁMETRO, se puede escribir en forma normal sin flecha y
// y sin paréntesis.
