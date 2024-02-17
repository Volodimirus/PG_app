import React from "react";
import { PortfolioMainProps } from "./PortfolioMainProps";
import "./PortfolioMain.css";

/**
 * Renders the portfolio main content with the portfolio details.
 * @param props The portfolio main props includin the personal user details.
 * (first name, second name, job title, photo, address, phone, email, about).
 * @returns The portfolio main content component.
 */

export default function PortfolioMain(props: PortfolioMainProps): JSX.Element {
    const { about } = props;

    return (
        <div className="portfolio_main d-flex flex-column">
            <div className="portfolio_main__top d-flex flex-column">
                <h3 className="portfolio_main__title border-bottom fs-4 lh-lg">
                    About
                </h3>
                <span className="portfolio_main__content fst-italic">
                    {about ? about : "-"}
                </span>
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
