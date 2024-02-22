import React from "react";
import type { RootState } from "../../../redux/store";
import { useSelector } from "react-redux";
import "./PortfolioMain.css";

/**
 * Renders the portfolio main content with the portfolio details.
 * @returns The portfolio main content component.
 */

export default function PortfolioMain(): JSX.Element {
    const { about } = useSelector((state: RootState) => state.personalInfo);
    const { experience } = useSelector((state: RootState) => state.experience);

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
                <span className="portfolio_main__content">
                    {experience.length
                        ? experience.map((item, i: number) => {
                              return (
                                  <div
                                      className="experience d-flex gap-5"
                                      key={i}
                                  >
                                      <p className="experience__years fs-5 lh">
                                          {item?.fromYear} - {item?.toYear}
                                      </p>
                                      <div className="d-flex flex-column gap-2">
                                          <h4 className="experience__job fs-5">
                                              {item?.position}
                                          </h4>
                                          <p className="experience__city_and_company fs-5">
                                              {item?.company}, {item?.city}
                                          </p>
                                      </div>
                                  </div>
                              );
                          })
                        : "-"}
                </span>
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
