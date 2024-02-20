import React from "react";
import FormSectionField from "../formSectionField/FormSectionField";
import {
    setPosition,
    setCompany,
    setCity,
    setFromYear,
    setToYear,
} from "../../../redux/reducers/experienceSlice";
import "./ExperienceFormSection.css";

export default function ExperienceFormSection(): JSX.Element {
    return (
        <fieldset className="experience d-flex flex-column">
            <legend className="fs-4 lh-lg">Experience</legend>
            <FormSectionField
                type="text"
                name="position"
                placeholder="Position"
                id="751cfacc"
                action={setPosition}
            />
            <FormSectionField
                type="text"
                name="company"
                placeholder="Company"
                id="4f245f8c"
                action={setCompany}
            />
            <FormSectionField
                type="text"
                name="city"
                placeholder="City"
                id="aa4e795b"
                action={setCity}
            />
            <FormSectionField
                type="number"
                name="fromYear"
                placeholder="From (year)"
                id="702cecf1"
                action={setFromYear}
            />
            <FormSectionField
                type="number"
                name="toYear"
                placeholder="To (year)"
                id="495ebd24"
                action={setToYear}
            />
            <button type="button" className="w-100 fs-4 px-3">
                Delete
            </button>
            <button type="button" className="w-100 fs-4 px-3">
                Add
            </button>
        </fieldset>
    );
}
