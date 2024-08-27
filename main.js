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
                                <div class="info">
                                    <h1 class="card-title fs-4">${producto.nombre}</h1>
                                    <h2 class="card-subtitle mb-2 fs-5 tituloProducto"><b>${producto.rendimiento}</b></h2>
                                    <button class="boton">Información</button>
                                </div>
                                <div class="descripcion" style="display:none;">
                                    <p class="card-text">${producto.descripcion}</p>
                                    <button class="volver"> Volver atrás</button>
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
                    descripcion.classList.add('animacion');                
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





//animacion pasar página
                    //descripcion.classList.add('animacion');
                    //setTimeout(() => {
                    //    descripcion.classList.remove('animacion');
                    //}, 1000)