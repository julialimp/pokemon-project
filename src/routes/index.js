import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Pokemons } from "../pages/pokemons";
import { Pokemon } from "../pages/pokemon-details";
import { Header } from "../components/header";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route exact path="/" element={<Pokemons />} />
                <Route exact path="/pokemon/:name" element={<Pokemon />} />
            </Routes>
        </BrowserRouter>
    )
}

export { AppRoutes }