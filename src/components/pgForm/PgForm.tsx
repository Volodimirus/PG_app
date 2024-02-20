import React from "react";
import PersonalDetailsFormSection from "./personalDetailsFormSection/PersonalDetailsFormSection";
import ExperienceFormSection from "./experienceFormSection/ExperienceFormSection";
import "./PgForm.css";

/**
 * Renders the PgForm component.
 * @returns The PgForm component.
 */

export default function PgForm(): JSX.Element {
    return (
        <form name="pg" className="pg-form w-100 shadow-lg d-flex flex-column">
            <PersonalDetailsFormSection />
            <ExperienceFormSection />
        </form>
    );
}
