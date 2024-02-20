import React from "react";
import type { RootState } from "../../../redux/store";
import { useSelector } from "react-redux";
import "./PortfolioHeader.css";

/**
 * Renders the portfolio header with the name and job of the user.
 * @returns The portfolio header component.
 */

export default function PortfolioHeader(): JSX.Element {
    const { firstName, secondName, jobTitle } = useSelector(
        (state: RootState) => state.personalInfo
    );

    return (
        <div className="portfolio_header d-flex flex-column justify-content-center">
            <h2 className="portfolio_header__item name fw-bold lh-1">
                {firstName || secondName
                    ? `${firstName} ${secondName}`
                    : "Name"}
            </h2>
            <p className="portfolio_header__item job">
                {jobTitle ? jobTitle : "Job"}
            </p>
        </div>
    );
}
