

const Bienvenida = () => {
    return (
        <>
        <section className="d-flex justify-content-center">
            <div className="main__divStart--estilos">
                <p>
                    <b>
                        Somos una empresa vanguardista en la elaboración tecnológica de pinturas para la industria
                        vitivinícola, frutícola, olivinícola y conservera. Dedicada al mantenimiento de empresas líderes
                        en el país. Nuestros 30 años de trayectoria nos respalda y trabajamos en conjunto con las
                        mejores compañías del sector.
                    </b>
                </p>
            </div>
        </section>
        <section className="row justify-content-evenly marginDivBienvenida">
            <div className="col-6 d-flex align-items-center bienvenida__mainDiv--responsive">
                <div className=" main__divMid--estilos">
                    <h2 className="my-3 bienvenida__mainDiv--font"><b>Formas de comunicarte con nosotros</b></h2>
                    <div className="d-flex justify-content-evenly bienvenida__mainDiv--flex">
                        <div>
                            <h3 className="bienvenida__mainDiv--font"><b> Vía E-MAIL:</b></h3>
                            <ul className="bienvenida__listStyle">
                                <li className="my-1 bienvenida__fontLi">indupint@indupint.com.ar</li>
                                <li className="my-1 bienvenida__fontLi">ventas@indupint.com.ar</li>
                                <li className="my-1 bienvenida__fontLi">pinturas@indupint.com.ar</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="bienvenida__mainDiv--font"><b>Vía Telefónica:</b></h3>
                            <ul className="bienvenida__listStyle">
                                <li className="my-3 bienvenida__fontLi">011-4657-2793</li>
                                <li className="my-3 bienvenida__fontLi">011-4657-1983</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-5 d-flex align-items-center bienvenida__mainDiv2--responsive">
                <div className="main__divMid2--estilos">
                    <h2 className="bienvenida__mainDiv--font">¿Donde podés encontrarnos?</h2>
                    <div>
                        <h3 className="bienvenida__mainDiv--font"><b>Administración y Ventas</b></h3>
                        <ul className="bienvenida__listStyle">
                            <li className="bienvenida__fontLi">Granaderos 267 - Ciudadela (Buenos Aires)</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="bienvenida__mainDiv--font"><b>Planta Industrial</b></h3>
                        <ul className="bienvenida__listStyle">
                            <li className="bienvenida__fontLi">Caseros 4683 (B1678HLS) - Caseros (Buenos Aires)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Bienvenida

