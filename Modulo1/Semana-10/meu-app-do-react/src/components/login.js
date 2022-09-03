import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
const Rotas = () => {
    return (
    <BrowserRouter>
    <Routes>
    <Route path = "/login" element = {<Home />} />
    <Route path = "/entrar" element = {<Home />} />
    </Routes>
    </BrowserRouter>)}
    