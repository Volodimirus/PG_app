import React from "react";
import PgFormSection from "./pgFormSection/PgFormSection";
import { PgFormProps } from "./PgFormProps";
import "./PgForm.css";

/**
 * Renders the PgForm component.
 * @param props The properties of field, including its type, ID, name, placeholder and onChange func.
 * @returns The PgForm component.
 */

export default function PgForm(props: PgFormProps): JSX.Element {
    const {
        setFirstName,
        setSecondName,
        setEmail,
        setJobTitle,
        setPhoto,
        setAddress,
        setPhone,
        setAbout,
    } = props;

    return (
        <form name="pg" className="pg-form w-100 shadow-lg d-flex flex-column">
            <PgFormSection
                setFirstName={setFirstName}
                setSecondName={setSecondName}
                setEmail={setEmail}
                setJobTitle={setJobTitle}
                setPhoto={setPhoto}
                setAddress={setAddress}
                setPhone={setPhone}
                setAbout={setAbout}
            />
        </form>
    );
}
