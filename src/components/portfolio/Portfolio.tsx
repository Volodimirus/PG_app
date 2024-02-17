import React from "react";
import PortfolioHeader from "./portfolioHeader/PortfolioHeader";
import PortfolioMain from "./portfolioMain/PortfolioMain";
import PortfolioAside from "./portfolioAside/PortfolioAside";
import { PortfolioProps } from "./PortfolioProps";
import "./Portfolio.css";

/**
 * Renders the portfolio page.
 * @param props the portfolio props including the personal user details
 * (first name, second name, email, job title, phone, photo, about).
 * @returns The portfolio page component.
 */

export default function Portfolio(props: PortfolioProps): JSX.Element {
    const { personalDetails } = props;
    const {
        firstName,
        secondName,
        jobTitle,
        photo,
        address,
        phone,
        email,
        about,
    } = personalDetails;

    return (
        <div className="portfolio w-100 d-grid">
            <PortfolioHeader
                firstName={firstName}
                secondName={secondName}
                jobTitle={jobTitle}
            />
            <PortfolioMain about={about} />
            <PortfolioAside
                address={address}
                phone={phone}
                email={email}
                photo={photo}
            />
        </div>
    );
}
