import React from "react";
import PersonalDetailsFormSectionField from "../formSectionField/FormSectionField";
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
/**
 * Renders the PgFormSection component.
 * @returns The PgFormSection component.
 */

export default function PersonalDetailsFormSection(): JSX.Element {

    return (
        <fieldset className="pg_form__section personal_info d-flex flex-column">
            <legend className="fs-4 lh-lg">Personal Information</legend>
            <PersonalDetailsFormSectionField
                type="text"
                name="firstName"
                placeholder="First Name"
                action={setFirstName}
            />
            <PersonalDetailsFormSectionField
                type="text"
                name="lastName"
                placeholder="Last Name"
                action={setSecondName}
            />
            <PersonalDetailsFormSectionField
                type="text"
                name="jobTitle"
                placeholder="Job Title"
                action={setJobTitle}
            />
            <PersonalDetailsFormSectionField
                type="url"
                name="photo"
                placeholder="Your photo (URL)"
                action={setPhoto}
            />
            <PersonalDetailsFormSectionField
                type="text"
                name="address"
                placeholder="Address"
                action={setAddress}
            />
            <PersonalDetailsFormSectionField
                type="tel"
                name="phone"
                placeholder="Phone Number"
                action={setPhone}
            />
            <PersonalDetailsFormSectionField
                type="email"
                name="email"
                placeholder="Email"
                action={setEmail}
            />
            <PersonalDetailsFormSectionField
                type="textarea"
                name="about"
                placeholder="About yourself"
                action={setAbout}
            />
        </fieldset>
    );
}
