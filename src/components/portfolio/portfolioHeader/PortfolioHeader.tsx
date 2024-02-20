import React from "react";
import "./PortfolioHeader.css";

/**
 * Renders the portfolio header with the name and job of the user.
 * @returns The portfolio header component.
 */

export default function PortfolioHeader(): JSX.Element {
    return (
        <div className="portfolio_header d-flex flex-column justify-content-center">
            <h2 className="portfolio_header__item name fw-bold lh-1">Name</h2>
            <p className="portfolio_header__item job">Job</p>
        </div>
    );
}
