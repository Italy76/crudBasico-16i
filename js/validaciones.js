function validarCampoRequerido(input){
     console.log(input);
     console.log(input.value);
     if(input.value.trim().length > 0 && input.value.trim().length >= 3){   // trim es la función que 
        //quita los espacios vacíos delante de una cadena de texto.
         console.log("el dato es correcto");
         input.className = "form-control is-valid"  // para evitar sobreescritura rportamos todas las 
         //características de la clase de html.
     }else{
         console.log("dato erróneo");
         input.className = "form-control is-invalid" 
        }
}

let producto = document.querySelector("#producto");
console.log(producto);

// Agregar eventos desde javascript, en vez que en html
producto.addEventListener("blur", ()=>{validarCampoRequerido(producto)})  //se escribe la variable que trae el id desde html. assEventListener es
//lo que agrega los eventos. El nombre del evento se escribe sin el prefijo on- (blur y no onblur).
// Se usa una función anónima y entre paréntesis se pone la variable que trae el id, para que la función sea
// llamada y actúe sobre el input producto.

let cantidad = document.querySelector("#cantidad");
console.log(cantidad);

function validarNumeros(input){
    // validar con expresiones regulares, que son un patrón.
    let patron = /^[0-9]{1,5}$/; // el ^ indica cantidad máxima y mínima; los  valores dentro de los [] 
    // indican que queremos usar exclusivamente caracteres numéricos.
    // Los valores entre {} indican  el valor m´nimo y el valor máximo; el símbolo $ indica el final 
    //de la expresión  //. Toda la expresión // ha de escribirse dentro dos //.
    if(patron.test(input.value)){    
        input.className = "form-control is-valid"
    }else{
        input.className = "form-control is-invalid"
    } // .test testea una variable, para ver si cumple con la función, o sea con la expresión regular.
}
 //Agrego elemento desde javascript
 cantidad.addEventListener("blur",()=>{validarNumeros(cantidad)});