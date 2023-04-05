import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "../node_modules/bootstrap/dist/js/bootstrap";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDtyaPizRUJOYo23_iQM4tPcmCxpP4wdaM",
    authDomain: "appgod-691c5.firebaseapp.com",
    projectId: "appgod-691c5",
    storageBucket: "appgod-691c5.appspot.com",
    messagingSenderId: "998271966244",
    appId: "1:998271966244:web:09fe948d0b9589e59f8cb1",
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
