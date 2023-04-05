import React, { useEffect, useState } from "react";
import { usersService } from "../../components/postapi";
import "./Formulario.css";

export const FormPeli = () => {
    const [peli, setPeli] = useState();
    const [image, setImage] = useState("");

    const now = new Date();
    const fechaHora = now.toISOString();

    const handleTest = (event) => {
        event.preventDefault();
        setPeli({
            nombre: event.target.elements.pelicula.value,
            puntajeella: event.target.elements.puntajeella.value,
            puntajeel: event.target.elements.puntajeel.value,
            comentario: event.target.elements.comentario.value,
        });
        event.target.reset();
    };

    console.log(peli);

    const postPeli = async () => {
        if (peli) {
            const pelicula = await usersService.postPelis({
                peli: {
                    nombre: peli.nombre,
                    puntajeElla: peli.puntajeella,
                    puntajeEl: peli.puntajeel,
                    comentario: peli.comentario,
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
        postPeli();
    }, [peli]);

    return (
        <div className="form-pelicula">
            <form onSubmit={(event) => handleTest(event)}>
                <fieldset>
                    <legend className="d-flex justify-content-center">
                        Puntaje de la pelicula
                    </legend>
                    <div className="group">
                        <label htmlFor="pelicula">🎬</label>
                        <input
                            autoFocus
                            required
                            placeholder="Pelicula"
                            type="text"
                            id="pelicula"
                            className="input"
                        />
                    </div>

                    <div className="group">
                        <label htmlFor="puntajeella">👩</label>
                        <input
                            autoFocus
                            required
                            placeholder="Puntaje Ella"
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
                            placeholder="Puntaje El"
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
                            onChange={(event) => {
                                handleImage(event.target.files);
                            }}
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
                </fieldset>
                <div className="flex gap-5 w-full justify-end">
                    <button className="bg-sky-600 text-white px-2 rounded-md font-bold py-1">
                        Publicar
                    </button>
                </div>
            </form>
        </div>
    );
};
