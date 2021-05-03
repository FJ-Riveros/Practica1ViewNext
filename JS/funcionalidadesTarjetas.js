import { entradas, eliminaEntrada } from "./manipuladorJSON.js";
import { adjuntarTarjeta } from "./adjuntaTarjetas.js";
import { obtenerEntradas } from "./manipuladorJSON.js";

//Recorre el registro y muestra todas las Cards
export function muestraCardsActuales(registro) {
  for (let i = 0; i < registro.length; i++) {
    adjuntarTarjeta(entradas[i], i + 1);
  }
}

//Elimina la visualización de las Cards
export function destruyeDisplayCards() {
  $(".tarjetas").html("");
}

//Aplica los listenners de las Cards
export function listennerCard(idCard) {
  $(`${idCard} div.card-header img.modify`).click(function (e) {
    let id = $(this).parents(".card").attr("id").slice(5);
    console.log(id);
  });
  $(`${idCard} div.card-header img.delete`).click(function () {
    let id = $(this).parents(".card").attr("id").slice(5);
    //Eliminamos la entrada
    eliminaRegistro(id);
    //Presentamos las entradas
    presentacionCards(obtenerEntradas(), ".card");
  });
  $(idCard).hover(
    function () {
      // over
      $(`#${$(this).attr("id")} div.card-header img`).css("display", "unset");
      $(`#${$(this).attr("id")} div.card-header span`).css("display", "unset");
    },
    function () {
      // out
      $(`#${$(this).attr("id")} div.card-header img`).css("display", "none");
      $(`#${$(this).attr("id")} div.card-header span`).css("display", "none");
    }
  );
}

//Elimina el registro totalmente
function eliminaRegistro(id) {
  eliminaEntrada(id - 1);
}

export function presentacionCards(entradasActuales, nameCard) {
  //Elimina el display de las Cards
  destruyeDisplayCards();

  //Muestra las Cards alojadas en el registro
  muestraCardsActuales(entradasActuales);

  //Listenner del contenido de las cards
  listennerCard(nameCard);
}
