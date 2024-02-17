import React from "react";
import Header from "../header/Header";
import PgForm from "../pgForm/PgForm";
import Portfolio from "../portfolio/Portfolio";
import Footer from "../footer/Footer";
import "./App.css";

// Renders the main application component.
// @returns The main application component.

function App(): JSX.Element {
    return (
        <div className="app min-vh-100 d-flex flex-column align-items-center gap-5">
            <Header />
            <PgForm />
            <Portfolio />
            <Footer />
        </div>
    );
}

export default App;
