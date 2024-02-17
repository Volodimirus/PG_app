import React from "react";
import PgFormSection from "./pgFormSection/PgFormSection";
import "./PgForm.css";

/**
 * Renders the PgForm component.
 * @returns The PgForm component.
 */

export default function PgForm(): JSX.Element {
    return (
        <form name="pg" className="pg-form w-100 shadow-lg d-flex flex-column">
            <PgFormSection />
        </form>
    );
}
