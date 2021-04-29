export const adjuntarTarjeta = (registro) => {
  $(".tarjetas").append(
    `
    <div class="col-sm-4 mb-4">
      <div class="card shadow">
        <div class="card-header p-2 font-weight-bold light-gray">${
          registro[registro.length - 1].nombre
        }</div>
        <div class=" text-secondary p-2 min-height">
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
