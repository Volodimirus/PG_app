import React from "react";
import "./Portfolio.css";
import PortfolioHeader from "./portfolioHeader/PortfolioHeader";
import PortfolioMain from "./portfolioMain/PortfolioMain";
import PortfolioAside from "./portfolioAside/PortfolioAside";

export default function Portfolio() {
    return (
        <div className="portfolio w-100 d-grid">
            <PortfolioHeader />
            <PortfolioMain />
            <PortfolioAside />
        </div>
    );
}
