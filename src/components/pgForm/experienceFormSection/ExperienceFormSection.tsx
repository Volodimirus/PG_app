import React, { useState, useId } from "react";
import FormSectionField from "../formSectionField/FormSectionField";
import { setExperienceItem } from "../../../redux/reducers/experienceSlice";
import { ExperienceItemState } from "../../../redux/reducers/experienceSlice";
import { useDispatch } from "react-redux";

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
        <fieldset className="pg_form__section experience d-flex flex-column">
            <legend className="fs-4 lh-lg">Experience</legend>
            {isOpen ? (
                <>
                    <FormSectionField
                        type="text"
                        name="position"
                        placeholder="Position"
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
