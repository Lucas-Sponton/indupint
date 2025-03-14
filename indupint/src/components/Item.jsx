import { useState, useEffect } from "react"
import DetailContainer from "./DetailContainer";


const Item = ({ item, additionalClass }) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        let timeoutId;
        if (isOpen) {
            const timeoutDuration = window.innerWidth < 768 ? null : window.innerWidth < 1024 ? 9000 : 12000;
            if (timeoutDuration !== null) {
                timeoutId = setTimeout(() => {
                    setIsOpen(false);
                }, timeoutDuration);
            }
        }
        return () => clearTimeout(timeoutId);
    }, [isOpen]);

    const cerrarDetalles = () => {
        setIsOpen(false)
    }

    return (
        <div className={`col-sm-6 col-md-4 col-lg-3 mb-4 d-inline-block ${additionalClass}-card`}>
            <div className={`card main__productCard ${additionalClass}`}>
                <div className={`card-body ${additionalClass}`}>
                    <div className="altura-h1-cards">
                        <h1 className="card-title fs-6 cardTamañoTitulo">{item.nombre}</h1>
                    </div>
                    <div className="alturaDiv-img">
                        <img src={`${item.image}`} alt={`${item.nombre}`} className={`img-fluid alturaContenedor-img ${additionalClass}`} />
                    </div>
                    <button type="button" className="boton btn colorbotones main__productCard-botonInfo w-50 position-fixed bottom-0 start-50" onClick={() => setIsOpen(true)}>Información</button>
                </div>
            </div>
            <DetailContainer item={item} isOpen={isOpen} onClose={cerrarDetalles} />
        </div>

    )
}

export default Item