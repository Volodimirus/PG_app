import React, { useState } from "react";
import { useDispatch } from "react-redux";
import FormSectionField from "../formSectionField/FormSectionField";
import { addEducation } from "../../../redux/reducers/educationSlice";
import { EducationItemState } from "../../../redux/reducers/educationSlice";
import { educationItemsInfo } from "./educationItemsInfo";

export default function EducationDetailsFormSection() {
    const [educationDetails, setEducationDetails] = useState<EducationItemState>({
        university: "",
        degree: "",
        fromYear: 0,
        toYear: 0,
        city: "",
        subject: ""
    });
    const [isOpen, toggleOpen] = useState<boolean>(false);

    const resetEducationDetails = () => {
        setEducationDetails({
            university: "",
            degree: "0",
            fromYear: 0,
            toYear: 0,
            city: "",
            subject: ""
        })
    }

    const dispatch = useDispatch();

    return (
        <fieldset className="pg_form__section education d-flex flex-column">
            <legend className="fs-4 lh-lg">Education</legend>
            {isOpen ? educationItemsInfo.map(({ type, name, placeholder }, i) => {
                return (
                    <FormSectionField
                        type={type}
                        name={name}
                        placeholder={placeholder}
                        action={(value: string) => {
                            setEducationDetails({
                                ...educationDetails,
                                [`${name}`]: value,
                            });
                        }}
                        key={i}
                    />)
            }) : null}
            {isOpen ? (
                <button
                    type="button"
                    className="w-100 fs-4 px-3"
                    onClick={() => {
                        resetEducationDetails()

                        toggleOpen(false);
                    }}
                >
                    Delete
                </button>
            ) : null}
            <button type="button" className="w-100 fs-4 px-3" onClick={() => {
                toggleOpen(true);

                if (
                    educationDetails.city &&
                    educationDetails.fromYear &&
                    educationDetails.toYear &&
                    educationDetails.degree &&
                    educationDetails.subject &&
                    educationDetails.university
                ) {
                    dispatch(addEducation(educationDetails));

                    toggleOpen(false);

                    resetEducationDetails();
                }
            }}
            >Add</button>
        </fieldset >
    )
}