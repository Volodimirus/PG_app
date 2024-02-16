import React from "react";
import "./PortfolioHeader.css";

export default function PortfolioHeader() {
    return (
        <div className="portfolio_header d-flex flex-column justify-content-center">
            <h2 className="portfolio_header__item name fw-bold lh-1">Name</h2>
            <p className="portfolio_header__item job">Job</p>
        </div>
    );
}
