import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

function Header() {
    const [open, setOpen] = useState(false);
    return (
        <nav className="p-3 border-gray-200 md:rounded bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            <div className="container items-center justify-center mx-auto flex-wrap md:flex-nowrap md:justify-between contents md:flex">
                <div className="flex items-center justify-center">
                    <Link to="/" className="flex items-center">
                        <img
                            src={Logo}
                            className="h-6 mr-3 sm:h-10"
                            alt="Flowbite Logo"
                        />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                            AppGod
                        </span>
                    </Link>
                    <button
                        data-collapse-toggle="navbar-solid-bg"
                        type="button"
                        className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-solid-bg"
                        aria-expanded="true"
                        onClick={() => setOpen(!open)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-6 h-6"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </button>
                </div>
                <div
                    className={`md:block md:w-fit" id="navbar-solid-bg ${
                        open ? "" : "hidden"
                    }`}
                >
                    <ul
                        className="flex flex-col rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700"
                        onClick={() => setOpen(false)}
                    >
                        <li>
                            <Link
                                to="/"
                                className="block py-2 pl-3 pr-4  rounded md:bg-transparent md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent"
                                aria-current="page"
                            >
                                Inicio
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/verpelis"
                                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >
                                Lista de peliculas
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/verresto"
                                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >
                                Lista de restaurantes
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/formulariopelis"
                                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >
                                Agregar pelicula
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/formularioresto"
                                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >
                                Agregar restaurantes
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
