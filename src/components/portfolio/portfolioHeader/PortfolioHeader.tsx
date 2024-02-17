import React from "react";
import { PortfolioHeaderProps } from "./PortfolioHeaderProps";
import "./PortfolioHeader.css";

/**
 * Renders the portfolio header with the name and job of the user.
 * @param props The portfolio header props including the first name, second name and job of the user.
 * @returns The portfolio header component.
 */

export default function PortfolioHeader(
    props: PortfolioHeaderProps
): JSX.Element {
    const { firstName, secondName, jobTitle } = props;

    return (
        <div className="portfolio_header d-flex flex-column justify-content-center">
            <h2 className="portfolio_header__item name fw-bold lh-1">
                {firstName ? firstName : "Name"} {secondName ? secondName : ""}
            </h2>
            <p className="portfolio_header__item job">
                {jobTitle ? jobTitle : "Job"}
            </p>
        </div>
    );
}
