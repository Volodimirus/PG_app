import React from "react";
import "./PortfolioMain.css";

export default function PortfolioMain() {
    return (
        <div className="portfolio_main d-flex flex-column">
            <div className="portfolio_main__top d-flex flex-column">
                <h3 className="portfolio_main__title border-bottom fs-4 lh-lg">
                    About
                </h3>
                <span className="portfolio_main__content fst-italic">-</span>
            </div>
            <div className="portfolio_main__mid d-flex flex-column">
                <h3 className="portfolio_main__title border-bottom fs-4 lh-lg">
                    Experience
                </h3>
                <span className="portfolio_main__content">-</span>
            </div>
            <div className="portfolio_main__bottom d-flex flex-column">
                <h3 className="portfolio_main__title border-bottom fs-4 lh-lg">
                    Education
                </h3>
                <span className="portfolio_main__content">-</span>
            </div>
        </div>
    );
}