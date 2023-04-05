import React, { useEffect, useState } from "react";
import Spinner from "../../components/Spinner/Spinner";
import { usersService } from "../../components/postapi";
import "../Form/Formulario.css";

export const FormResto = () => {
    const [nombre, setNombre] = useState();
    const [image, setImage] = useState("");
    const [formSpinner, setFormSpinner] = useState(false);

    const now = new Date();
    const fechaHora = now.toISOString();

    const handleTest = (event) => {
        event.preventDefault();
        setNombre({
            nombre: event.target.elements.restaurante.value,
            puntajeella: event.target.elements.puntajeella.value,
            puntajeel: event.target.elements.puntajeel.value,
            comentario: event.target.elements.comentario.value,
        });
        event.target.reset();
    };

    const postResto = async () => {
        if (nombre) {
            const restaurante = await usersService.postResto({
                resto: {
                    nombre: nombre.nombre,
                    puntajeella: nombre.puntajeella,
                    puntajeel: nombre.puntajeel,
                    comentario: nombre.comentario,
                    imagen: image,
                    fecha: fechaHora,
                },
            });
        }
    };
    const handleImage = (file) => {
        Array.from(file).forEach((f) => {
            const reader = new FileReader();
            reader.readAsDataURL(f);
            reader.onload = function () {
                let array = [];
                let base64 = reader.result;
                array = base64.split(",");
                setImage(array[1]);
            };
        });
    };

    useEffect(() => {
        postResto();
    }, [nombre]);

    return (
        <div className="form-pelicula">
            <form onSubmit={(event) => handleTest(event)}>
                <fieldset>
                    <legend className="d-flex justify-content-center">
                        Puntaje del restaurante
                    </legend>
                    {!formSpinner ? (
                        <div className="flex flex-col gap-3">
                            <div className="group">
                                <label htmlFor="restaurante">🍔</label>
                                <input
                                    autoFocus
                                    required
                                    placeholder="Restaurante"
                                    type="text"
                                    id="restaurante"
                                    className="input"
                                />
                            </div>

                            <div className="group">
                                <label htmlFor="puntajeella">👩</label>
                                <input
                                    autoFocus
                                    required
                                    placeholder="Puntaje Gorda"
                                    type="number"
                                    id="puntajeella"
                                    className="input"
                                />
                            </div>

                            <div className="group">
                                <label htmlFor="puntajeel">🧑</label>
                                <input
                                    autoFocus
                                    required
                                    placeholder="Puntaje Gordo"
                                    type="number"
                                    id="puntajeel"
                                    className="input"
                                />
                            </div>
                            <div className="group">
                                <label htmlFor="file"></label>
                                <input
                                    autoFocus
                                    placeholder="comentario"
                                    type="file"
                                    id="file"
                                    className="input"
                                    accept=".jpg, .png|image/*"
                                    onChange={(event) =>
                                        handleImage(event.target.files)
                                    }
                                />
                            </div>
                            <div className="group">
                                <label htmlFor="comentario">🤔</label>
                                <textarea
                                    autoFocus
                                    required
                                    placeholder="Opiniones"
                                    type="text"
                                    id="comentario"
                                    className="input w-full min-h-[100px]"
                                />
                            </div>
                            <div className="flex gap-5 w-full justify-end">
                                <button className="bg-sky-600 text-white px-2 rounded-md font-bold py-1">
                                    Publicar
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <Spinner />
                        </div>
                    )}
                </fieldset>
            </form>
        </div>
    );
};
