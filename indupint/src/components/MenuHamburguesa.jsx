//prueba del menu hamburguesa
import React, { useEffect, useRef, useState } from "react";
import ItemProductos from "./ItemProductos";

const MenuHamburguesa = ({ categorias, onCategoriaClick, additionalClass }) => {
    const [activeCategoria, setActiveCategoria] = useState(null);
    const productosRef = useRef(null);

    useEffect(() => {
        if (productosRef.current && activeCategoria !== null) {
            productosRef.current.scrollIntoView({ behavior: 'smooth', block: 'start'});
        }
    }, [activeCategoria]);

    const handleCategoriaClick = (categoriaId) => {
        setActiveCategoria(categoriaId === activeCategoria ? null : categoriaId);
        onCategoriaClick(categoriaId);
    };

    return (
        <div className="contenedor__menuHamburguesa--height">
            <h1 className={`d-block d-md-none ${additionalClass}-h1`}>¡Garantizamos la mas alta calidad en toda nuestra línea de productos!</h1>
            <div className="hamburguesa-container">
                <div className="d-grid gap-3 my-4">
                    {categorias.map((categoria) => (
                        <div key={categoria.id}>
                            <button className={`btn btn-outline-warning w-100 ${additionalClass}-boton-categorias sticky-top`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${categoria.id}`} aria-expanded={activeCategoria === categoria.Id} aria-controls={`#collapse${categoria.id}`} onClick={() => handleCategoriaClick(categoria.id)}>
                                {categoria.nombre}
                            </button>
                            <div className={`collapse ${activeCategoria === categoria.id ? 'show' : ''}`} id={`collapse${categoria.id}`} ref={activeCategoria === categoria.id ? productosRef : null}>
                                <div className={`card card-body ${additionalClass} ${additionalClass}-cards`}>
                                    <ItemProductos items={categoria.productos} additionalClass={additionalClass} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MenuHamburguesa