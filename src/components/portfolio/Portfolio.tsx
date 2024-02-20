import React from "react";
import PortfolioHeader from "./portfolioHeader/PortfolioHeader";
import PortfolioMain from "./portfolioMain/PortfolioMain";
import PortfolioAside from "./portfolioAside/PortfolioAside";
import "./Portfolio.css";

/**
 * Renders the portfolio page.
 * @returns The portfolio page component.
 */

export default function Portfolio(): JSX.Element {
    return (
        <div className="portfolio w-100 d-grid">
            <PortfolioHeader />
            <PortfolioMain />
            <PortfolioAside />
        </div>
    );
}
