import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import CustomModal from "./Modal/CustomModal";
import Spinner from "./Spinner/Spinner";
import { usersService } from "./postapi";

export const Inicio = () => {
    const [nombre, setNombre] = useState();
    const [image, setImage] = useState("");
    const [formSpinner, setFormSpinner] = useState(false);
    const [listado, setListado] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [modalImg, setModalImg] = useState("");
    const [loading, setLoading] = useState(false);

    const now = new Date();
    const fechaHora = now.toISOString();

    const handleTest = (event) => {
        event.preventDefault();
        setNombre({
            nombre: event.target.elements.contenido.value,
        });
        event.target.reset();
    };

    const postPeli = async () => {
        if (nombre) {
            setFormSpinner(true);
            const body = {
                data: {
                    contenido: nombre.nombre,
                    imagen: image,
                    fecha: fechaHora,
                },
            };

            const response = await usersService.postInicio(body);

            if (response) {
                toast.success("Publicacion agregada");
                setFormSpinner(false);
                setRefresh(true);
            } else {
                toast.error("Ocurrio un error!!");
                setFormSpinner(false);
            }
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
    const getPelis = async () => {
        const response = await usersService
            .getInicio()
            .then((data) => setListado(data));
        setLoading(false);
    };
    console.log(listado);

    const openImg = (props) => {
        setShowModal(true);
        setModalImg(props);
    };

    useEffect(() => {
        getPelis();
        setRefresh(false);
        setLoading(true);
    }, [refresh]);

    useEffect(() => {
        postPeli();
    }, [nombre]);

    return (
        <>
            <div className="flex flex-col mt-4 gap-5 md:px-5">
                <form
                    onSubmit={(event) => handleTest(event)}
                    className="flex flex-1 min-w-[350px]"
                >
                    <legend className="d-flex justify-content-center">
                        Publica lo que quieras ! ! !
                    </legend>
                    {!formSpinner ? (
                        <div className="flex flex-col gap-3">
                            <div className="">
                                <label htmlFor="contenido"></label>
                                <textarea
                                    autoFocus
                                    required
                                    placeholder="Publica lo que quieras"
                                    type="text"
                                    id="contenido"
                                    className="input w-full min-h-[100px]"
                                />
                            </div>

                            <div className="">
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
                </form>
            </div>
            <div className="w-full scrollbar flex flex-col gap-5 bg-white h-[500px] p-5 rounded-md overflow-y-scroll  my-7 ">
                <h1 className="text-black font-bold bg-white ">
                    Publicaciones
                </h1>
                {!loading ? (
                    <div className="flex flex-col-reverse">
                        {listado.map((l) => (
                            <ul
                                key={l.id}
                                className="flex gap-2 w-full justify-between border-b-[1px] border-b-gray-400 p-2"
                            >
                                <li className="font-semibold flex flex-col break-all flex-1">
                                    {l.contenido}
                                </li>
                                <li className="min-h-[80px]">
                                    {l.imagen && (
                                        <img
                                            className="rounded-sm w-[100px] object-cover h-[80px] group-hover:blur-sm "
                                            src={`data:image/png;base64,${l.imagen}`}
                                            alt=""
                                            onClick={() =>
                                                openImg(
                                                    `data:image/png;base64,${l.imagen}`
                                                )
                                            }
                                        />
                                    )}
                                </li>
                            </ul>
                        ))}
                    </div>
                ) : (
                    <Spinner />
                )}
            </div>
            <CustomModal
                visible={showModal}
                onClose={() => setShowModal(false)}
            >
                <div className="max-w-[300px] max-h-[500px]">
                    <img src={modalImg} alt="" />
                </div>
            </CustomModal>
        </>
    );
};
