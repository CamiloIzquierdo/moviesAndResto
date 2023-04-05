import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
    return (
        <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
            <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                <div className="relative rounded-md shadow-md">
                    <img
                        className="relative rounded-md shadow-md h-64 w-full object-cover"
                        src="/img/featured-product.jpg"
                        alt="Featured product"
                    />
                    <div className="absolute inset-0 flex items-end px-6 py-6">
                        <div className="bg-white rounded-md px-4 py-3 shadow-md text-sm leading-5 font-medium text-gray-700">
                            Nuevo lanzamiento
                        </div>
                    </div>
                    <div className="absolute inset-0 flex items-start px-6 py-6">
                        <div className="bg-white rounded-md px-4 py-3 shadow-md text-lg leading-5 font-medium text-gray-900">
                            Producto destacado
                        </div>
                    </div>
                </div>
                <div className="mt-10 lg:mt-0">
                    <div className="text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9">
                        ¡Bienvenido a nuestra tienda en línea!
                    </div>
                    <p className="mt-3 text-lg leading-7 text-gray-500">
                        Aquí encontrarás una amplia selección de productos de
                        alta calidad a precios muy competitivos. Nuestro equipo
                        de expertos está siempre dispuesto a ayudarte a
                        encontrar lo que necesites. ¡Visítanos hoy mismo y
                        encuentra lo que estás buscando!
                    </p>
                    <div className="mt-8">
                        <div className="rounded-md shadow-sm">
                            <Link
                                to="/products"
                                className="flex items-center justify-center w-full px-5 py-3 text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo transition duration-150 ease-in-out"
                            >
                                Ver productos
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="mt-10 lg:mt-0">
                    <div className="text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9">
                        ¿Por qué elegirnos?
                    </div>
                    <ul className="mt-8 space-y-8 text-base leading-6 text-gray-500">
                        <li>
                            <div className="flex">
                                <div className="flex-shrink-0 h-6 w-6">
                                    <svg
                                        className="h-6 w-6 text-indigo-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                </div>
                                <p className="ml-3">Precios competitivos</p>
                            </div>
                        </li>
                        <li>
                            <div className="flex">
                                <div className="flex-shrink-0 h-6 w-6">
                                    <svg
                                        className="h-6 w-6 text-indigo-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                </div>
                                <p className="ml-3">Envío rápido y seguro</p>
                            </div>
                        </li>
                        <li>
                            <div className="flex">
                                <div className="flex-shrink-0 h-6 w-6">
                                    <svg
                                        className="h-6 w-6 text-indigo-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                </div>
                                <p className="ml-3">
                                    Equipo de expertos dispuesto a ayudarte
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="flex">
                                <div className="flex-shrink-0 h-6 w-6">
                                    <svg
                                        className="h-6 w-6 text-indigo-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                </div>
                                <p className="ml-3">
                                    Garantía de satisfacción del 100%
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
