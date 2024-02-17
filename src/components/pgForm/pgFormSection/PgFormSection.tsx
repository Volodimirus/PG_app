import React from "react";
import PgFormSectionField from "./pgFormSectionField/PgFormSectionField";
import { PgFormProps } from "../PgFormProps";
import "./PgFormSection.css";

/**
 * Renders the PgFormSection component.
 * @param props The properties of field, including setters for first name, second name, email, job title, photo, address, phone and about me.
 * @returns The PgFormSection component.
 */

export default function PgFormSection(props: PgFormProps): JSX.Element {
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
        <fieldset className="personal_info d-flex flex-column">
            <legend className="fs-4 lh-lg">Personal Information</legend>
            <PgFormSectionField
                type="text"
                id="lslqzcmc"
                name="firstName"
                placeholder="First Name"
                onChange={setFirstName}
            />
            <PgFormSectionField
                type="text"
                id="lslqzcmd"
                name="lastName"
                placeholder="Last Name"
                onChange={setSecondName}
            />
            <PgFormSectionField
                type="text"
                id="lslqzcme"
                name="jobTitle"
                placeholder="Job Title"
                onChange={setJobTitle}
            />
            <PgFormSectionField
                type="url"
                id="lslqzcmf"
                name="photo"
                placeholder="Your photo (URL)"
                onChange={setPhoto}
            />
            <PgFormSectionField
                type="text"
                id="lslqzcmg"
                name="address"
                placeholder="Address"
                onChange={setAddress}
            />
            <PgFormSectionField
                type="tel"
                id="lslqzcmh"
                name="phone"
                placeholder="Phone Number"
                onChange={setPhone}
            />
            <PgFormSectionField
                type="email"
                id="lslqzcmi"
                name="email"
                placeholder="Email"
                onChange={setEmail}
            />
            <PgFormSectionField
                type="textarea"
                id="lslqzcmj"
                name="about"
                placeholder="About yourself"
                onChange={setAbout}
            />
        </fieldset>
    );
}
