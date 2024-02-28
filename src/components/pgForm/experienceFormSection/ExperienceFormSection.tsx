import React, { useState, useId } from "react";
import { useDispatch } from "react-redux";
import FormSectionField from "../formSectionField/FormSectionField";
import { setExperienceItem } from "../../../redux/reducers/experienceSlice";
import { ExperienceItemState } from "../../../redux/reducers/experienceSlice";
import { experienceItemsInfo } from "./experienceItemsInfo";

export default function ExperienceFormSection(): JSX.Element {
    const [experienceDetails, setExperienceDetails] =
        useState<ExperienceItemState>({
            position: "",
            company: "",
            city: "",
            fromYear: 0,
            toYear: 0,
        });
    const [isOpen, toggleOpen] = useState<boolean>(false);

    const resetExperienceDetails = () => {
        setExperienceDetails({
            position: "",
            company: "",
            city: "",
            fromYear: 0,
            toYear: 0,
        });
    }

    const dispatch = useDispatch();

    return (
        <fieldset className="pg_form__section experience d-flex flex-column">
            <legend className="fs-4 lh-lg">Experience</legend>
            {isOpen ? experienceItemsInfo.map(({ type, name, placeholder }) => (
                <>
                    <FormSectionField
                        type={type}
                        name={name}
                        placeholder={placeholder}
                        action={(value: string) => {
                            setExperienceDetails({
                                ...experienceDetails,
                                [`${name}`]: value,
                            });
                        }}
                    />
                </>
            )
            ) : null}
            {isOpen ? (
                <button
                    type="button"
                    className="w-100 fs-4 px-3"
                    onClick={() => {
                        resetExperienceDetails()

                        toggleOpen(false);
                    }}
                >
                    Delete
                </button>
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

                        resetExperienceDetails()
                    }
                }}
            >
                Add
            </button>
        </fieldset>
    );
}
