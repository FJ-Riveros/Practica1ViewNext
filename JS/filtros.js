import {
  adjuntaError,
  eliminaError,
  campoCorrecto,
} from "./modificadoresVisualesCampos.js";
import { campoVacio } from "./compruebaCampos.js";

//Aplica la validación del campo del formulario nombre junto con el mensaje de error
export function aplicaValidacionCaracteres(idElemento, mensaje) {
  $(`${idElemento}`).focusout(() => {
    eliminaError(idElemento);
    if (filtroSoloLetras(idElemento)) {
      campoCorrecto(idElemento);
    } else if (!campoVacio(idElemento)) {
      adjuntaError(idElemento, mensaje);
    }
  });
}

//Filtro especifico para el campo descripcion (textArea)(menos de 100 carácteres, sólo letras y tildes)
export function filtroTextArea(idElemento) {
  $(`${idElemento}`).focusout(() => {
    eliminaError(idElemento);
    if (!filtroLongitud(idElemento)) {
      adjuntaError(
        idElemento,
        "La longitud de la descripción debe de ser de 100 caracteres como máximo"
      );
    } else if (!filtroSoloLetras(idElemento) && !campoVacio(idElemento)) {
      adjuntaError(
        idElemento,
        "La descripción no puede contener números o carácteres especiales"
      );
    } else if (!campoVacio(idElemento)) {
      campoCorrecto(idElemento);
    }
  });
}

//Filtro especifico para el campo Stock(solo enteros)
export function filtroStock(idElemento) {
  $(`${idElemento}`).focusout(() => {
    eliminaError(idElemento);
    if (filtroSoloEnteros(idElemento)) {
      campoCorrecto(idElemento);
    } else if (!campoVacio(idElemento)) {
      adjuntaError(idElemento, "Este campo solo admite enteros");
    }
  });
}

//Filtro especifico para el campo Precio(pueden ser enteros o decimales)
export function filtroPrecio(idElemento) {
  $(`${idElemento}`).focusout(() => {
    eliminaError(idElemento);
    if (filtroSoloNúmerosEnterosODecimales(idElemento)) {
      campoCorrecto(idElemento);
    } else if (!campoVacio(idElemento)) {
      adjuntaError(idElemento, "Este campo solo admite enteros o decimales");
    }
  });
}

/*Filtra devolviendo true si el campo que se le pasa solo contiene letras con espacios y tildes
devuelve false si no lo cumple*/
function filtroSoloLetras(idElemento) {
  var filtro = /^[a-zA-Zá-ýÁ-Ý\s]+$/;
  if ($(`${idElemento}`).val().match(filtro)) {
    return true;
  } else {
    return false;
  }
}

/*Filtra devolviendo true si el campo que se le pasa contiene una longitud de carácteres
menor a la indicada, devuelve false si es mayor*/
function filtroLongitud(idElemento) {
  if ($(`${idElemento}`).val().length < 100) return true;
  return false;
}

//Devuelve true si el value del campo indicado sólo contiene enteros
function filtroSoloEnteros(idElemento) {
  let filtroEnteros = /^[0-9]+$/;
  if ($(`${idElemento}`).val().match(filtroEnteros)) {
    return true;
  } else {
    return false;
  }
}

//Devuelve true si el value del campo indicado contiene enteros o decimales
function filtroSoloNúmerosEnterosODecimales(idElemento) {
  let filtroEnteros = /^[0-9.]+$/;
  if ($(`${idElemento}`).val().match(filtroEnteros)) {
    return true;
  } else {
    return false;
  }
}
