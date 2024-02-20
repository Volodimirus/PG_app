import React from "react";
import PgFormSectionField from "./pgFormSectionField/PgFormSectionField";
import {
    setFirstName,
    setSecondName,
    setAddress,
    setEmail,
    setJobTitle,
    setPhone,
    setPhoto,
    setAbout,
} from "../../../redux/reducers/personalInfoSlice";
import "./PgFormSection.css";

/**
 * Renders the PgFormSection component.
 * @returns The PgFormSection component.
 */

export default function PgFormSection(): JSX.Element {
    return (
        <fieldset className="personal_info d-flex flex-column">
            <legend className="fs-4 lh-lg">Personal Information</legend>
            <PgFormSectionField
                type="text"
                id="lslqzcmc"
                name="firstName"
                placeholder="First Name"
                action={setFirstName}
            />
            <PgFormSectionField
                type="text"
                id="lslqzcmd"
                name="lastName"
                placeholder="Last Name"
                action={setSecondName}
            />
            <PgFormSectionField
                type="text"
                id="lslqzcme"
                name="jobTitle"
                placeholder="Job Title"
                action={setJobTitle}
            />
            <PgFormSectionField
                type="url"
                id="lslqzcmf"
                name="photo"
                placeholder="Your photo (URL)"
                action={setPhoto}
            />
            <PgFormSectionField
                type="text"
                id="lslqzcmg"
                name="address"
                placeholder="Address"
                action={setAddress}
            />
            <PgFormSectionField
                type="tel"
                id="lslqzcmh"
                name="phone"
                placeholder="Phone Number"
                action={setPhone}
            />
            <PgFormSectionField
                type="email"
                id="lslqzcmi"
                name="email"
                placeholder="Email"
                action={setEmail}
            />
            <PgFormSectionField
                type="textarea"
                id="lslqzcmj"
                name="about"
                placeholder="About yourself"
                action={setAbout}
            />
        </fieldset>
    );
}
