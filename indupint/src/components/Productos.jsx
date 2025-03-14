import { useEffect, useState } from "react";
import arrayProductos from "../productos.json";
import ItemProductos from "./ItemProductos";
import ProductosCategorias from "./ProductosCategorias";
import { useParams } from "react-router-dom";
import MenuHamburguesa from "./MenuHamburguesa";


const Productos = () => {
    const [items, setItems] = useState([]);
    const [categorias, setCategorias] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const promesa = new Promise(resolve => {
            setTimeout(() => {
                resolve(id ? arrayProductos.filter(item => item.categoria == id) : arrayProductos)
            }, 2000);
        })

        promesa.then(response => {
            setItems(response)
        })
    }, [id]);

    useEffect(() => {
        const categorias = [
            {id: "desoxidantes-y-desengrasantes", nombre: "Desoxidantes y Desengrasantes", productos: arrayProductos.filter((item) => item.categoria === "desoxidantes-y-desengrasantes")},
            {id: "fondos-anticorrosivos-y-antioxidos", nombre: "Fondos Anticorrosivos y Antióxidos", productos: arrayProductos.filter((item) => item.categoria === "fondos-anticorrosivos-y-antioxidos")},
            {id: "esmaltes-sinteticos-nitro-y-cauchos-clorados", nombre: "Esmaltes sintéticos, Nitro y Cauchos Clorados", productos: arrayProductos.filter((item) => item.categoria === "esmaltes-sinteticos-nitro-y-cauchos-clorados")},
            {id: "esmaltes-revestimientos-epoxi-y-poliuretanos-bi-componentes", nombre: "Esmaltes, Revestimientos Epoxi y Poliuretanos Bi Componentes", productos: arrayProductos.filter((item) => item.categoria === "esmaltes-revestimientos-epoxi-y-poliuretanos-bi-componentes")},
            {id: "esmalte-y-revestimiento-frigorifica-y-alimenticia", nombre: "Esmalte y revestimiento industria Frigorífica y Alimenticia en general", productos: arrayProductos.filter((item) => item.categoria === "esmalte-y-revestimiento-frigorifica-y-alimenticia")},
            {id: "esmaltes-sinteticos-nitro-y-cauchos-clorados-dos", nombre: "Esmaltes Sintéticos, Nitro y Cauchos Clorados 2", productos: arrayProductos.filter((item) => item.categoria === "esmaltes-sinteticos-nitro-y-cauchos-clorados-dos")},
            {id: "esmaltes-usos-especiales", nombre: "Esmaltes usos especiales", productos: arrayProductos.filter((item) => item.categoria === "esmaltes-usos-especiales")},
            {id: "aluminios-y-barnices", nombre: "Aluminios y Barnices", productos: arrayProductos.filter((item) => item.categoria === "aluminios-y-barnices")},
            {id: "impermeabilizante-y-recubrimiento-acrilico", nombre: "Impermeabilizante y Recubrimiento Acrilico", productos: arrayProductos.filter((item) => item.categoria === "impermeabilizante-y-recubrimiento-acrilico")},
            {id: "esmaltes-especificos-removedor-y-diluyentes", nombre: "Esmaltes específicos, Removedor y Diluyentes", productos: arrayProductos.filter((item) => item.categoria === "esmaltes-especificos-removedor-y-diluyentes")},
            {id: "varios", nombre: "Varios", productos: arrayProductos.filter((item) => item.categoria === "varios")}
        ];
        setCategorias(categorias);
    }, []);

    const handleCategoriaClick = (categoriaId) => {
        const productosFiltrados = arrayProductos.filter((item) => item.categoria === categoriaId);
        setItems(productosFiltrados);
    };

    return (
        <div className="container my-2">
            <div className="row d-none d-md-block">
                <ProductosCategorias categorias={categorias} onCategoriaClick={handleCategoriaClick} />
            </div>
            <div className="row d-block d-md-none">
                <MenuHamburguesa categorias={categorias} onCategoriaClick={handleCategoriaClick} additionalClass="menu-hamburguesa" />
            </div>
            <div className="row d-none d-md-block">
                <ItemProductos items={items} />
            </div>
        </div>

    )
}

export default Productos