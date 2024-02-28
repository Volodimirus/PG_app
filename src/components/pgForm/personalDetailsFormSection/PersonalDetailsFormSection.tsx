import React from "react";
import FormSectionField from "../formSectionField/FormSectionField";
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
            <FormSectionField
                type="text"
                name="firstName"
                placeholder="First Name"
                action={setFirstName}
            />
            <FormSectionField
                type="text"
                name="lastName"
                placeholder="Last Name"
                action={setSecondName}
            />
            <FormSectionField
                type="text"
                name="jobTitle"
                placeholder="Job Title"
                action={setJobTitle}
            />
            <FormSectionField
                type="url"
                name="photo"
                placeholder="Your photo (URL)"
                action={setPhoto}
            />
            <FormSectionField
                type="text"
                name="address"
                placeholder="Address"
                action={setAddress}
            />
            <FormSectionField
                type="tel"
                name="phone"
                placeholder="Phone Number"
                action={setPhone}
            />
            <FormSectionField
                type="email"
                name="email"
                placeholder="Email"
                action={setEmail}
            />
            <FormSectionField
                type="textarea"
                name="about"
                placeholder="About yourself"
                action={setAbout}
            />
        </fieldset>
    );
}
