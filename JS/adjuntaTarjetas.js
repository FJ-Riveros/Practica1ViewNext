import { vaciarCampos, eliminaError } from "./modificadoresVisualesCampos.js";
import { creaNuevaEntrada, obtenerEntradas } from "./manipuladorJSON.js";
//Obtiene los valores del form, los introduce en el registro y resetea el form
export function generadorCard() {
  //Obtenemos los valores del registro
  let values = getValues();

  //Introducimos la nueva entrada en el registro
  creaNuevaEntrada(values[0], values[1], values[2], values[3]);

  //Obtenemos todos los valores del registro
  let entradas = obtenerEntradas();

  //Elimina el display de las Cards
  destruyeDisplayCards();

  //Muestra las Cards alojadas en el registro
  muestraCardsActuales(entradas);

  //Listenner del contenido de las cards
  listennerCard(".card");

  //Vaciamos todos los campos
  vaciarCampos(".form-control");

  //Reseteamos los colores y mensajes del form
  eliminaError(".form-control");
}

//Introduzce los valores de los input en un Array
function getValues() {
  let valores = [];
  let i = 0;
  (valores[i++] = $("#nombre").val()),
    (valores[i++] = $("#descripcion").val()),
    (valores[i++] = $("#precio").val()),
    (valores[i++] = $("#stock").val());
  return valores;
}

//Crea el cuerpo de las entradas
export const adjuntarTarjeta = (registro, numRegistro) => {
  var imagenDelete = "media/basura.png";
  var imagenModificar = "media/pencil.png";
  $(".tarjetas").append(
    `
    <div class="col-sm-4 mb-4">
      <div class="card shadow" id=Card-${numRegistro}>
        <div class="card-header p-2 font-weight-bold light-gray">${registro.nombre}<img src="${imagenDelete}" width="32px" height="32px" class="delete">
        <img src="${imagenModificar}" widht="30px" height="30px" class="modify"></div>
        <div class=" text-secondary p-2 min-height texto-principal">
          <p class="card-text">${registro.descripcion}</p>
        </div>
        <div class="row justify-content-between p-2 text-secondary">
          <div class="col-4 font-weight-medium">
              ${registro.precio}€
            </div>
            <div class=" col-5 flex-end font-weight-medium ">
              Cantidad: ${registro.stock}
            </div>
          </div>
      </div>
    </div>
    `
  );
};

//Recorre el registro y muestra todas las Cards
function muestraCardsActuales(entradas) {
  for (let i = 0; i < entradas.length; i++) {
    adjuntarTarjeta(entradas[i], i + 1);
  }
}

//Elimina la visualización de las Cards
function destruyeDisplayCards() {
  $(".tarjetas").html("");
}

//Aplica los listenners de las Cards
export function listennerCard(idCard) {
  $(`${idCard} div.card-header img.modify`).click(function () {
    let id = $(this).parents(".card").attr("id").slice(5);
    console.log(id);
  });
  $(`${idCard} div.card-header img.delete`).click(function () {
    let id = $(this).parents(".card").attr("id").slice(5);
    console.log(id);
  });
  $(idCard).hover(
    function () {
      // over
      $(`#${$(this).attr("id")} div.card-header img`).css("display", "unset");
    },
    function () {
      // out
      $(`#${$(this).attr("id")} div.card-header img`).css("display", "none");
    }
  );
}
