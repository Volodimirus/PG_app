import React from "react";
import type { RootState } from "../../../redux/store";
import { useSelector } from "react-redux";
import "./PortfolioAside.css";

/**
 * Renders the portfolio aside with personal details of the user.
 * @returns The portfolio aside component.
 */

export default function PortfolioAside(): JSX.Element {
    const { address, phone, email, photo } = useSelector(
        (state: RootState) => state.personalInfo
    );

    return (
        <aside className="portfolio_aside d-flex flex-column gap-4">
            <img
                src={
                    photo
                        ? photo
                        : "https://lively-begonia-680727.netlify.app/assets/avatar-placeholder-c2326214.png"
                }
                alt="user avatar"
            />
            <div className="portfolio_aside__person_info d-flex flex-column">
                <h3 className="portfolio_aside__personal_details border-bottom fs-4 lh-lg">
                    Personal details
                    <div className="fs-6 lh-base fw-normal"></div>
                </h3>
                <h4 className="portfolio_aside__address">
                    Address
                    <div className="fs-6 lh-base fw-normal">{address}</div>
                </h4>
                <h4 className="portfolio_aside__phone">
                    Phone number
                    <div className="fs-6 lh-base fw-normal">{phone}</div>
                </h4>
                <h4 className="portfolio_aside__email">
                    Email
                    <div className="fs-6 lh-base fw-normal">{email}</div>
                </h4>
            </div>
        </aside>
    );
}
