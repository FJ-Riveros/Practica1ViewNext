import { vaciarCampos, eliminaError } from "./modificadoresVisualesCampos.js";
import { creaNuevaEntrada, obtenerEntradas } from "./manipuladorJSON.js";
//Obtiene los valores del form, los introduce en el registro y resetea el form
export function generadorCard() {
  let values = getValues();
  creaNuevaEntrada(values[0], values[1], values[2], values[3]);
  let entradas = obtenerEntradas();
  adjuntarTarjeta(entradas);

  //Añadir Event Listenner a la tarjeta
  listennerCard(`#Card-${entradas.length}`);
  function listennerCard(idCard) {
    $(idCard).hover(
      function () {
        // over
        //$(`${idCard}`).css("cursor", "pointer");
        $(`${idCard} div.card-header img`).css("display", "unset");
        $(`${idCard} div.card-header object`).click(() => console.log("hola"));
      },
      function () {
        // out
        $(`${idCard} div.card-header object`).css("display", "none");
      }
    );
  }
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
export const adjuntarTarjeta = (registro) => {
  $(".tarjetas").append(
    `
    <div class="col-sm-4 mb-4">
      <div class="card shadow" id=Card-${registro.length}>
        <div class="card-header p-2 font-weight-bold light-gray">${
          registro[registro.length - 1].nombre
        }<img src="media/basura.png" width="32px" height="32px" class="delete">
        <img src="media/pencil.png" widht="30px" height="30px" class="modify"></div>
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
  );
};

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
