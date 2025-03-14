import { Routes, Route, useLocation } from 'react-router-dom';
import Productos from "./Productos";
import Bienvenida from "./Bienvenida";
import Footer from './Footer'
import NavBar from './Navbar'
import ItemDetailContainer from './ItemDetailContainer';
import { useEffect, useState } from 'react';
import GetFondo from './GetFondo';

const PaginaActual = () => {
    const [paginaActual, setPaginaActual] = useState("");
    const location = useLocation();

    useEffect(() => {
        setPaginaActual(location.pathname);
    }, [location])

    return (
        <div className={`text-center ${GetFondo(location.pathname)}`}>

            <NavBar />
            <Routes>
                <Route path={"/"} element={<Bienvenida />} />
                <Route path={"/productos"} element={<Productos />} />
                <Route path={"/productos/:id"} element={<Productos />} />
                <Route path={"/item/:id"} element={<ItemDetailContainer />} />



            </Routes>
            <Footer />
        </div>
    )
}

export default PaginaActual