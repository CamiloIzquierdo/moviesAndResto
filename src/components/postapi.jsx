import {
    addDoc,
    collection,
    getDocs,
    getFirestore,
    orderBy,
    query,
} from "firebase/firestore";

const getPelis = async () => {
    const db = getFirestore();
    const productsCollection = collection(db, "pelis");
    const dataOrder = query(productsCollection, orderBy("fecha", "desc")); // Ordena los documentos por el campo "fecha" en orden descendente
    const snapshot = await getDocs(dataOrder);

    const products = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));

    return products;
};

const getResto = async () => {
    const db = getFirestore();
    const productsCollection = collection(db, "restaurantes");
    const dataOrder = query(productsCollection, orderBy("fecha", "desc")); // Ordena los documentos por el campo "fecha" en orden descendente
    const snapshot = await getDocs(dataOrder);

    const products = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));

    return products;
};

const getInicio = async () => {
    const db = getFirestore();
    const productsCollection = collection(db, "inicio");
    const dataOrder = query(productsCollection, orderBy("fecha", "asc")); // Ordena los documentos por el campo "fecha" en orden descendente
    const snapshot = await getDocs(dataOrder);

    const products = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));

    return products;
};

const postPelis = async ({ peli }) => {
    const db = getFirestore();
    const comprarOrder = collection(db, "pelis");
    const orderStatus = await addDoc(comprarOrder, peli);

    return orderStatus;
};

const postResto = async ({ resto }) => {
    const db = getFirestore();
    const comprarOrder = collection(db, "restaurantes");
    const orderStatus = await addDoc(comprarOrder, resto);

    return orderStatus;
};

const postInicio = async ({ data }) => {
    const db = getFirestore();
    const comprarOrder = collection(db, "inicio");
    const orderStatus = await addDoc(comprarOrder, data);

    return orderStatus;
};

export const usersService = {
    getPelis,
    postPelis,
    postResto,
    getResto,
    postInicio,
    getInicio,
};
