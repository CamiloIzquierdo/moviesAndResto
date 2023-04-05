import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Principal from "./components/Principal";
import "./css/App.css";
import { FormPeli } from "./pages/Form/Formulario";
import { FormResto } from "./pages/FormResto/FormResto";
import { VerPelis } from "./components/VerPelis";
import { VerResto } from "./components/VerResto";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Inicio } from "./components/Inicio";
import LandingPage from "./components/LandingPage";

function App() {
    return (
        <>
            <Header />
            <div className="flex items-center flex-col md:flex-row md:justify-between md:items-start gap-5">
                <Routes>
                    <Route path="/principal" element={<Principal />} />
                    <Route path="/" element={<Inicio />} />
                    <Route path="/formulariopelis" element={<FormPeli />} />
                    <Route path="/formularioresto" element={<FormResto />} />
                    <Route path="/verresto" element={<VerResto />} />
                    <Route path="/verpelis" element={<VerPelis />} />
                    <Route path="/landing" element={<LandingPage />} />
                </Routes>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />{" "}
        </>
    );
}

export default App;
