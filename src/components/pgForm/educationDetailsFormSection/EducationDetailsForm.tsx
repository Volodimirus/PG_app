import React, { useState } from "react";
import { useDispatch } from "react-redux";
import FormSectionField from "../formSectionField/FormSectionField";
import { addEducation } from "../../../redux/reducers/educationSlice";
import { EducationItemState } from "../../../redux/reducers/educationSlice";

export default function EducationDetailsFormSection() {
    const [educationDetails, setEducationDetails] = useState<EducationItemState>({
        univercity: "",
        degree: "",
        fromYear: 0,
        toYear: 0,
        city: "",
        subject: ""
    });
    const [isOpen, toggleOpen] = useState<boolean>(false);

    const dispatch = useDispatch();

    return (
        <fieldset className="pg_form__section education d-flex flex-column">
            <legend className="fs-4 lh-lg">Education</legend>
            {isOpen ? (
                <>
                    <FormSectionField
                        type="text"
                        name="univercity"
                        placeholder="University"
                        action={(value: string) => {
                            setEducationDetails({
                                ...educationDetails,
                                univercity: value,
                            });
                        }}
                    />
                    <FormSectionField
                        type="text"
                        name="degree"
                        placeholder="Degree"
                        action={(value: string) => {
                            setEducationDetails({
                                ...educationDetails,
                                degree: value,
                            });
                        }}
                    />
                    <FormSectionField
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        action={(value: string) => {
                            setEducationDetails({
                                ...educationDetails,
                                subject: value,
                            });
                        }}
                    />
                    <FormSectionField
                        type="text"
                        name="city"
                        placeholder="City"
                        action={(value: string) => {
                            setEducationDetails({
                                ...educationDetails,
                                city: value,
                            });
                        }}
                    />
                    <FormSectionField
                        type="number"
                        name="fromYear"
                        placeholder="From (year)"
                        action={(value: string) => {
                            setEducationDetails({
                                ...educationDetails,
                                fromYear: +value,
                            });
                        }}
                    />
                    <FormSectionField
                        type="number"
                        name="toYear"
                        placeholder="To (year)"
                        action={(value: string) => {
                            setEducationDetails({
                                ...educationDetails,
                                toYear: +value,
                            });
                        }}
                    />
                    <button
                        type="button"
                        className="w-100 fs-4 px-3"
                        onClick={() => {
                            setEducationDetails({
                                univercity: "",
                                degree: "",
                                fromYear: 0,
                                toYear: 0,
                                city: "",
                                subject: ""
                            });

                            toggleOpen(false);
                        }}
                    >
                        Delete
                    </button>
                </>
            ) : null}
            <button type="button" className="w-100 fs-4 px-3" onClick={() => {
                toggleOpen(true);

                if (
                    educationDetails.city &&
                    educationDetails.fromYear &&
                    educationDetails.toYear &&
                    educationDetails.degree &&
                    educationDetails.subject &&
                    educationDetails.univercity
                ) {
                    dispatch(addEducation(educationDetails));

                    toggleOpen(false);

                    setEducationDetails({
                        univercity: "",
                        degree: "",
                        fromYear: 0,
                        toYear: 0,
                        city: "",
                        subject: ""
                    });
                }
            }}
            >Add</button>
        </fieldset>
    )
}