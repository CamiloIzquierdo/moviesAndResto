import { Link } from "react-router-dom";
import "../css/Header.css";
import { Divide as Hamburger } from "hamburger-react";
function Header() {
    return (
        <header className="sticky-top align-items-center d-flex">
            <nav className="navbar navbar-expand-sm ">
                <div className="container-fluid navbar-mia">
                    <Link to="/">❤</Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <Hamburger />
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav me-auto mb-lg-0 d-flex align-items-center justify-content-center">
                            <li className="nav-item">
                                <Link to="/">Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/spotify">Spotify</Link>
                            </li>
                            <li className="nav-item dropdown flex-column">
                                <Link
                                    className="nav-link dropdown-toggle navbar-navegacion"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Puntajes
                                </Link>
                                <ul
                                    className="dropdown-menu navbar-menu-desplegable flex-column"
                                    aria-labelledby="navbarDropdown"
                                >
                                    <div className="d-flex flex-column">
                                        <li>
                                            <Link to="/formulario">
                                                <p>Formulario peliculas</p>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/formularioresto">
                                                <p>Formulario restaurantes</p>
                                            </Link>
                                        </li>
                                    </div>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
