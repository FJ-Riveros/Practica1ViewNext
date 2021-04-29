//Array donde almacenamos las entradas
var entradas = [];

//Función que recibe los .value del form y los formatea a JSON para añadirlos a las entradas
let creaNuevaEntrada = (
  nombreInput,
  descripcionInput,
  precioInput,
  stockInput
) => {
  let nuevoItem = {
    nombre: nombreInput,
    descripcion: descripcionInput,
    precio: precioInput,
    stock: stockInput,
  };

  //LLamamos a la función que agrega el new item a nuestro registro
  addNuevaEntrada(nuevoItem);
};

//Añade la nueva entrada al array de entradas
let addNuevaEntrada = (nuevaEntrada) => entradas.push(nuevaEntrada);

//Devolvemos el registro
var obtenerEntradas = () => entradas;
