import React from "react";
import "./Portfolio.css";

export default function Portfolio() {
    return (
        <div className="portfolio w-100 d-grid">
            <div className="portfolio_header d-flex flex-column justify-content-center">
                <h2 className="portfolio_header__item name fw-bold lh-1">
                    Name
                </h2>
                <p className="portfolio_header__item job">Job</p>
            </div>
            <div className="portfolio_main d-flex flex-column">
                <div className="portfolio_main__top d-flex flex-column">
                    <h3 className="portfolio_main__title border-bottom fs-4 lh-lg">
                        About
                    </h3>
                    <span className="portfolio_main__content fst-italic">
                        -
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
            <aside className="portfolio_aside d-flex flex-column gap-4">
                <img
                    src="https://lively-begonia-680727.netlify.app/assets/avatar-placeholder-c2326214.png"
                    alt="user avatar"
                />
                <div className="portfolio_aside__person_info d-flex flex-column">
                    <h3 className="portfolio_aside__personal_details border-bottom fs-4 lh-lg">
                        Personal details
                        <div className="fs-6 lh-base fw-normal"></div>
                    </h3>
                    <h4 className="portfolio_aside__address">
                        Address
                        <div className="fs-6 lh-base fw-normal"></div>
                    </h4>
                    <h4 className="portfolio_aside__phone">
                        Phone number
                        <div className="fs-6 lh-base fw-normal"></div>
                    </h4>
                    <h4 className="portfolio_aside__email">
                        Email
                        <div className="fs-6 lh-base fw-normal"></div>
                    </h4>
                </div>
            </aside>
        </div>
    );
}
