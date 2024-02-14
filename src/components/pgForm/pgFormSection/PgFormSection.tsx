import React from "react";
import "./PgFormSection.css";
import PgFormSectionField from "./pgFormSectionField/PgFormSectionField";

export default function PgFormSection() {
    return (
        <fieldset className="personal_info d-flex flex-column">
            <legend className="fs-4 lh-lg">Personal Information</legend>
            <PgFormSectionField
                type="text"
                id="lslqzcmc"
                name="firstName"
                placeholder="First Name"
            />
            <PgFormSectionField
                type="text"
                id="lslqzcmd"
                name="lastName"
                placeholder="Last Name"
            />
            <PgFormSectionField
                type="text"
                id="lslqzcme"
                name="jobTitle"
                placeholder="Job Title"
            />
            <PgFormSectionField
                type="url"
                id="lslqzcmf"
                name="photo"
                placeholder="Your photo (URL)"
            />
            <PgFormSectionField
                type="text"
                id="lslqzcmg"
                name="address"
                placeholder="Address"
            />
            <PgFormSectionField
                type="tel"
                id="lslqzcmh"
                name="phone"
                placeholder="Phone Number"
            />
            <PgFormSectionField
                type="email"
                id="lslqzcmi"
                name="email"
                placeholder="Email"
            />
            <PgFormSectionField
                type="textarea"
                id="lslqzcmj"
                name="about"
                placeholder="About yourself"
            />
        </fieldset>
    );
}
