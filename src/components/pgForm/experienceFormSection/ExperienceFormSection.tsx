import React, { useState } from "react";
import FormSectionField from "../formSectionField/FormSectionField";
import { setExperienceItem } from "../../../redux/reducers/experienceSlice";
import { ExperienceItemState } from "../../../redux/reducers/experienceSlice";
import { useDispatch } from "react-redux";
import "./ExperienceFormSection.css";

export default function ExperienceFormSection(): JSX.Element {
    const dispatch = useDispatch();

    const [experienceDetails, setExperienceDetails] =
        useState<ExperienceItemState>({
            position: "",
            company: "",
            city: "",
            fromYear: 0,
            toYear: 0,
        });
    const [isOpen, toggleOpen] = useState<boolean>(false);

    return (
        <fieldset className="experience d-flex flex-column">
            <legend className="fs-4 lh-lg">Experience</legend>
            {isOpen ? (
                <>
                    <FormSectionField
                        type="text"
                        name="position"
                        placeholder="Position"
                        id="751cfacc"
                        action={(value: string) => {
                            setExperienceDetails({
                                ...experienceDetails,
                                position: value,
                            });
                        }}
                    />
                    <FormSectionField
                        type="text"
                        name="company"
                        placeholder="Company"
                        id="4f245f8c"
                        action={(value: string) =>
                            setExperienceDetails({
                                ...experienceDetails,
                                company: value,
                            })
                        }
                    />
                    <FormSectionField
                        type="text"
                        name="city"
                        placeholder="City"
                        id="aa4e795b"
                        action={(value: string) =>
                            setExperienceDetails({
                                ...experienceDetails,
                                city: value,
                            })
                        }
                    />
                    <FormSectionField
                        type="number"
                        name="fromYear"
                        placeholder="From (year)"
                        id="702cecf1"
                        action={(value: string) =>
                            setExperienceDetails({
                                ...experienceDetails,
                                fromYear: +value,
                            })
                        }
                    />
                    <FormSectionField
                        type="number"
                        name="toYear"
                        placeholder="To (year)"
                        id="495ebd24"
                        action={(value: string) =>
                            setExperienceDetails({
                                ...experienceDetails,
                                toYear: +value,
                            })
                        }
                    />
                    <button
                        type="button"
                        className="w-100 fs-4 px-3"
                        onClick={() => {
                            setExperienceDetails({
                                position: "",
                                company: "",
                                city: "",
                                fromYear: 0,
                                toYear: 0,
                            });

                            toggleOpen(false);
                        }}
                    >
                        Delete
                    </button>
                </>
            ) : null}
            <button
                type="button"
                className="w-100 fs-4 px-3"
                onClick={() => {
                    toggleOpen(true);

                    if (
                        experienceDetails.city &&
                        experienceDetails.fromYear &&
                        experienceDetails.toYear &&
                        experienceDetails.position &&
                        experienceDetails.city &&
                        experienceDetails.company
                    ) {
                        dispatch(setExperienceItem(experienceDetails));

                        toggleOpen(false);

                        setExperienceDetails({
                            position: "",
                            company: "",
                            city: "",
                            fromYear: 0,
                            toYear: 0,
                        });
                    }
                }}
            >
                Add
            </button>
        </fieldset>
    );
}
