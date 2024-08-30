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
                                <div class="info alturaCard">
                                    <div>
                                        <h1 class="card-title fs-5 text-center">${producto.nombre}</h1>
                                    </div>
                                    <div class="mx-4 main__productCard--contenedorH2">
                                        <h2 class="card-subtitle mb-2 main__productCard--h2"><b>${producto.rendimiento}</b></h2>
                                    </div>
                                    <div class="d-flex align-item-end">
                                        <button type="button" class="boton btn btn-outline-info main__productCard-botonInfo w-50 position-fixed bottom-0 start-50">Información</button>
                                    </div>
                                </div>
                                <div class="descripcion alturaDescripcion">
                                    <p class="card-text text-center main__productCard--h2 animacion">${producto.descripcion}</p>
                                    <button type="button" class="volver btn btn-outline-info main__productCard-botonVolver w-50 position-fixed bottom-0 end-50">Volver</button>
                                </div>
                            </div>
                        </div>
                                `
                contenedorProductos.appendChild(card);
                const boton = card.querySelector('.boton');
                const descripcion = card.querySelector('.descripcion');
                const volver = card.querySelector('.volver');
                const info = card.querySelector('.info');

                boton.addEventListener('click', () => {
                    info.style.display = 'none';
                    descripcion.style.display = 'block';
                    
                    boton.style.display = 'none';

                    setTimeout(() => {
                        descripcion.classList.remove('animacion');
                        descripcion.style.display = 'none';
                        info.style.display = 'block';
                        boton.style.display = 'block';
                    }, 15000);


                });

                volver.addEventListener('click', () => {
                    descripcion.style.display = 'none';
                    info.style.display = 'block';
                    boton.style.display = 'block';
                });
            });
        })
}

cargarProductos();



