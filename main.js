const contenedorProductos = document.getElementById("contenedorProductos");

function cargarProductos() {
    fetch('../productos.json')
        .then(respuesta => respuesta.json())
        .then(productos => {
            productos.forEach(producto => {
                const card = document.createElement("div");
                card.classList.add("col-3");
                card.innerHTML = `
                        <div class="card main__productCard">
                            <div class="card-body">
                                <h1 class="card-title fs-4">${producto.nombre}</h1>
                                <h2 class="card-subtitle mb-2 fs-5 tituloProducto"><b>${producto.rendimiento}</b></h2>
                                <p class="card-text">${producto.descripcion}</p>
                            </div>
                        </div>
                                `
                contenedorProductos.appendChild(card);

            });
        })
}

cargarProductos();

