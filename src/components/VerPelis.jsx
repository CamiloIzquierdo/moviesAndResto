import { useEffect, useState } from "react";
import Spinner from "./Spinner/Spinner";
import { usersService } from "./postapi";

export const VerPelis = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        usersService.getPelis().then((data) => setItems(data));
    }, []);

    console.log(items);
    return (
        <div className="text-2xl w-full flex items-center flex-col">
            <h1 className="w-full flex justify-center font-bold my-4 text-4xl">
                Listado peliculas 📼
            </h1>
            {!loading ? (
                <div className="flex flex-col gap-10 md:flex-row flex-wrap justify-center">
                    {items.map((lista) => (
                        <ul
                            key={lista.id}
                            className="flex relative max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
                        >
                            <li className="group box-border">
                                <img
                                    className="rounded-lg w-[333px] object-cover h-[500px] group-hover:blur-sm "
                                    src={`data:image/png;base64,${lista.imagen}`}
                                    alt=""
                                />
                                <ul
                                    className={`rounded-lg overflow-hidden px-5 absolute bg-black/60 bottom-0 w-full h-[0%] group-hover:h-full opacity-100 group-hover:opacity-100 transition duration-150 ease-out hover:ease-in`}
                                >
                                    <li className="pt-5">
                                        <h5 className="mb-2 text-3xl font-bold tracking-tight text-white dark:text-white">
                                            {lista.nombre}
                                        </h5>
                                    </li>
                                    <div className="flex gap-10">
                                        <li>
                                            <p className="mb-3 font-normal text-white dark:text-gray-400">
                                                👩 {lista.puntajeElla}
                                            </p>
                                        </li>
                                        <li>
                                            <p className="mb-3 font-normal text-white dark:text-gray-400">
                                                🧑 {lista.puntajeEl}
                                            </p>
                                        </li>
                                    </div>
                                    <li>
                                        <p className="mb-3 font-normal text-white dark:text-gray-400 text-base">
                                            {lista.comentario}
                                        </p>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    ))}
                </div>
            ) : (
                <Spinner />
            )}
        </div>
    );
};
