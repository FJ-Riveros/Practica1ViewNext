import { vaciarCampos, eliminaError } from "./modificadoresVisualesCampos.js";
import { creaNuevaEntrada, obtenerEntradas } from "./manipuladorJSON.js";
//Obtiene los valores del form, los introduce en el registro y resetea el form
export function generadorCard() {
  let values = getValues();
  creaNuevaEntrada(values[0], values[1], values[2], values[3]);
  let entradas = obtenerEntradas();
  destruyeDisplayCards();
  muestraCardsActuales(entradas);
  console.log(entradas);

  //Añadir Event Listenner a la tarjeta
  /*listennerCard(`#Card-${entradas.length}`);
  $(`#Card-${entradas.length} div.card-header img.modify`).click(() =>
    console.log("modify")
  );
  $(`#Card-${entradas.length} div.card-header img.delete`).click(() =>
    console.log("delete")
  );
  function listennerCard(idCard) {
    $(idCard).hover(
      function () {
        // over
        $(`${idCard} div.card-header img`).css("display", "unset");
      },
      function () {
        // out
        $(`${idCard} div.card-header img`).css("display", "none");
      }
    );
  }*/
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

//Crea el cuerpo de la entrada nueva
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

function muestraCardsActuales(entradas) {
  for (let i = 0; i < entradas.length; i++) {
    adjuntarTarjeta(entradas[i], i + 1);
  }
}

function destruyeDisplayCards() {
  $(".tarjetas").html("");
}
/*$(".tarjetas").append(
    `
    <div class="col-sm-4 mb-4">
      <div class="card shadow" id=Card-${registro.length}>
        <div class="card-header p-2 font-weight-bold light-gray">${
          registro[registro.length - 1].nombre
        }<img src="media/basura.png" width="32px" height="32px" class="delete">
        <object data="media/modify.svg" class="modify" type="image/svg+xml"></object></div>
        <div class=" text-secondary p-2 min-height texto-principal">
          <p class="card-text">${registro[registro.length - 1].descripcion}</p>
        </div>
        <div class="row justify-content-between p-2 text-secondary">
          <div class="col-4 font-weight-medium">
              ${registro[registro.length - 1].precio}€
            </div>
            <div class=" col-5 flex-end font-weight-medium ">
              Cantidad: ${registro[registro.length - 1].stock}
            </div>
          </div>
      </div>
    </div>
    `
  );*/
