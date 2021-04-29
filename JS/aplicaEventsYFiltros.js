import {
  aplicaValidacionCaracteres,
  filtroTextArea,
  filtroPrecio,
  filtroStock,
} from "./filtros.js";
import {
  compruebaCampos,
  compruebaCamposVacios,
  exponeCamposVacios,
} from "./compruebaCampos.js";
import { generadorCard } from "./adjuntaTarjetas.js";
export let aplicaEventListennersYFiltros = () => {
  //Validamos el campo nombre y aplicamos el event listenner
  aplicaValidacionCaracteres(
    "#nombre",
    "La descripción no puede contener números o carácteres especiales"
  );
  //Validamos el campo descripcion y aplicamos el event listenner
  filtroTextArea("#descripcion");

  //Validamos el campo Precio y aplicamos el event listenner
  filtroPrecio("#precio");

  //Validamos el campo Stock y aplicamos el event listenner
  filtroStock("#stock");

  /*Listener del envio del form, inserta el nuevo artículo si todos los campos
  son válidos y no hay ninguno vacio, de lo contrario expone los campos vacios
  */
  $("#enviar").click((e) => {
    e.preventDefault();
    if (
      compruebaCampos(".campoInvalido") &&
      compruebaCamposVacios(".form-control")
    ) {
      //Comienza el proceso de generación de la Card
      generadorCard();
    } else {
      //Señala los campos vacios del form
      exponeCamposVacios(".form-control");
    }
  });
};
