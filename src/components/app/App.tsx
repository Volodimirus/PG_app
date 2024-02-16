import React from "react";
import "./App.css";
import Header from "../header/Header";
import PgForm from "../pgForm/PgForm";
import Portfolio from "../portfolio/Portfolio";
import Footer from "../footer/Footer";

function App() {
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
