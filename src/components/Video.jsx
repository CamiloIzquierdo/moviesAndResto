import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import "../css/Video.css";
import { PostApi } from "./postapi";

function Video() {
    const [data, setData] = useState([]);
    const peticion = async () => {
        const response = await axios.get(
            "https://data.mongodb-api.com/app/data-vugsc/endpoint/data/v1"
        );
        setData(response);
    };
    console.log(data);
    useEffect(() => {
        peticion();
    }, []);
    return (
        <>
            <form
                method="POST"
                className="d-flex flex-column align-items-center"
            >
                <label htmlFor="pelicula">Pelicula</label>
                <input type="text" name="name" />

                <label htmlFor="pelicula">Puntaje Gorda</label>
                <input type="text" name="puntajegordo" />

                <label htmlFor="pelicula">Puntaje Gordo</label>
                <input type="text" name="puntajegorda" />

                <label htmlFor="pelicula">Comentario</label>
                <input type="text" name="comentario" />

                <input type="submit" value="enviar" />
            </form>
            <PostApi />
        </>
    );
}

export default Video;
