import CartWidget from "../CartWidget/CartWidget";
const NavBar = () => {
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a href="#" className="navbar-brand">SAS Clinica Medica</a>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Estetoscopios</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Tensiometros</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Oximetros</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Termometros</a>
                    </li>
                </ul>
            </div>
            {/*CartWidget*/}
            <CartWidget/>
        </nav>
    );
};

export default NavBar;