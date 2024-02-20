import React from "react";
import PersonalDetailsFormSectionField from "./personalDetailsFormSectionField/PersonalDetailsFormSectionField";
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
import "./PersonalDetailsFormSection.css";

/**
 * Renders the PgFormSection component.
 * @returns The PgFormSection component.
 */

export default function PersonalDetailsFormSection(): JSX.Element {
    return (
        <fieldset className="personal_info d-flex flex-column">
            <legend className="fs-4 lh-lg">Personal Information</legend>
            <PersonalDetailsFormSectionField
                type="text"
                id="lslqzcmc"
                name="firstName"
                placeholder="First Name"
                action={setFirstName}
            />
            <PersonalDetailsFormSectionField
                type="text"
                id="lslqzcmd"
                name="lastName"
                placeholder="Last Name"
                action={setSecondName}
            />
            <PersonalDetailsFormSectionField
                type="text"
                id="lslqzcme"
                name="jobTitle"
                placeholder="Job Title"
                action={setJobTitle}
            />
            <PersonalDetailsFormSectionField
                type="url"
                id="lslqzcmf"
                name="photo"
                placeholder="Your photo (URL)"
                action={setPhoto}
            />
            <PersonalDetailsFormSectionField
                type="text"
                id="lslqzcmg"
                name="address"
                placeholder="Address"
                action={setAddress}
            />
            <PersonalDetailsFormSectionField
                type="tel"
                id="lslqzcmh"
                name="phone"
                placeholder="Phone Number"
                action={setPhone}
            />
            <PersonalDetailsFormSectionField
                type="email"
                id="lslqzcmi"
                name="email"
                placeholder="Email"
                action={setEmail}
            />
            <PersonalDetailsFormSectionField
                type="textarea"
                id="lslqzcmj"
                name="about"
                placeholder="About yourself"
                action={setAbout}
            />
        </fieldset>
    );
}
