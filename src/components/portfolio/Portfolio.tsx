import React, { Ref } from "react";
import PortfolioHeader from "./portfolioHeader/PortfolioHeader";
import PortfolioMain from "./portfolioMain/PortfolioMain";
import PortfolioAside from "./portfolioAside/PortfolioAside";
import "./Portfolio.css";

/**
 * Renders the portfolio page.
 * @returns The portfolio page component.
 */

export const Portfolio = React.forwardRef((props, ref: any) => {
    return (
        <div className="portfolio w-100 d-grid" ref={ref}>
            <PortfolioHeader />
            <PortfolioMain />
            <PortfolioAside />
        </div>
    );
})
