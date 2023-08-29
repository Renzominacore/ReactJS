import {Link, NavLink} from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">SAS Clinica Medica</Link>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/category/estetoscopios">Estetoscopios</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/category/tensiometros">Tensiometros</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/category/oximetros">Oximetros</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/category/termometros">Termometros</NavLink>    
                    </li>
                </ul>
            </div>
            {/*CartWidget*/}
            <CartWidget/>
        </nav>
    );
};

export default NavBar;