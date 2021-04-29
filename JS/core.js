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
import { adjuntarTarjeta } from "./adjuntaTarjetas.js";
import { vaciarCampos, eliminaError } from "./modificadoresVisualesCampos.js";

$().ready(() => {
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

  //Listener del envio del form
  $("#enviar").click((e) => {
    e.preventDefault();
    if (
      compruebaCampos(".campoInvalido") &&
      compruebaCamposVacios(".form-control")
    ) {
      getValues();
    } else {
      exponeCamposVacios(".form-control");
    }
  });
});

//Obtiene los valores del form, los introduce en el registro y resetea el form
function getValues() {
  let nombre = $("#nombre").val(),
    descripcion = $("#descripcion").val(),
    precio = $("#precio").val(),
    stock = $("#stock").val();
  creaNuevaEntrada(nombre, descripcion, precio, stock);
  adjuntarTarjeta(obtenerEntradas());
  vaciarCampos(".form-control");
  eliminaError(".form-control");
}
