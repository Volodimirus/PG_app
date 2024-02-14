import React from "react";
import "./PgForm.css";
import PgFormSection from "./pgFormSection/PgFormSection";

export default function PgForm() {
    return (
        <form name="pg" className="pg-form w-100 shadow-lg d-flex flex-column">
            <PgFormSection />
        </form>
    );
}
