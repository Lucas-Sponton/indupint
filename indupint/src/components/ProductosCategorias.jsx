import React from "react";
import { NavLink } from "react-router-dom";
import MenuHamburguesa from "./MenuHamburguesa";

// como estaba antes

const ProductosCategorias = ({ categorias, onCategoriaClick }) => {
    return (
        <div>
            <h1 className="mb-2">¡Garantizamos la mas alta calidad en toda nuestra línea de productos!</h1>
            <MenuHamburguesa categorias={categorias} onCategoriaClick={onCategoriaClick} />
            <div className="categorias-display">
                <ul className="nav justify-content-center ">
                    <li className="nav-item mx-1 my-1">
                        <NavLink to={"/productos/desoxidantes-y-desengrasantes"} className="btn colorbotones fs-5">|Desoxidantes y Desengrasantes|</NavLink>
                    </li>
                    <li className="nav-item mx-1 my-1">
                        <NavLink to={"/productos/fondos-anticorrosivos-y-antioxidos"} className="btn colorbotones fs-5">|Fondos Anticorrosivos y Antióxidos|</NavLink>
                    </li>
                    <li className="nav-item mx-1 my-1">
                        <NavLink to={"/productos/esmaltes-sinteticos-nitro-y-cauchos-clorados"} className="btn colorbotones fs-5">|Esmaltes sintéticos, Nitro y Cauchos Clorados|</NavLink>
                    </li>
                    <li className="nav-item mx-1 my-1">
                        <NavLink to={"/productos/esmaltes-revestimientos-epoxi-y-poliuretanos-bi-componentes"} className="btn colorbotones fs-5">|Esmaltes, Revestimientos Epoxi y Poliuretanos Bi Componentes|</NavLink>
                    </li>
                    <li className="nav-item mx-1 my-1">
                        <NavLink to={"/productos/esmalte-y-revestimiento-frigorifica-y-alimenticia"} className="btn colorbotones fs-5">|Esmalte y revestimiento industria Frigorífica y Alimenticia en general|</NavLink>
                    </li>
                    <li className="nav-item mx-1 my-1">
                        <NavLink to={"/productos/esmaltes-sinteticos-nitro-y-cauchos-clorados-dos"} className="btn colorbotones fs-5">|Esmaltes Sintéticos, Nitro y Cauchos Clorados 2|</NavLink>
                    </li>
                    <li className="nav-item mx-1 my-1">
                        <NavLink to={"/productos/esmaltes-usos-especiales"} className="btn colorbotones fs-5">|Esmaltes usos especiales|</NavLink>
                    </li>
                    <li className="nav-item mx-1 my-1">
                        <NavLink to={"/productos/aluminios-y-barnices"} className="btn colorbotones fs-5">|Aluminios y Barnices|</NavLink>
                    </li>
                    <li className="nav-item mx-1 my-1">
                        <NavLink to={"/productos/impermeabilizante-y-recubrimiento-acrilico"} className="btn colorbotones fs-5">|Impermeabilizante y Recubrimiento Acrilico|</NavLink>
                    </li>
                    <li className="nav-item mx-1 my-1">
                        <NavLink to={"/productos/esmaltes-especificos-removedor-y-diluyentes"} className="btn colorbotones fs-5">|Esmaltes específicos, Removedor y Diluyentes|</NavLink>
                    </li>
                    <li className="nav-item mx-1 my-1">
                        <NavLink to={"/productos/varios"} className="btn colorbotones fs-5">|Varios|</NavLink>
                    </li>
                </ul>
                <NavLink className="btn btn-danger" to="/productos">Ver todos</NavLink>
            </div>
            <p className="fs-3"><b>Nuestros Productos</b></p>
        </div>
    )
}

export default ProductosCategorias