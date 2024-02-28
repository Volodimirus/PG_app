import React from "react";
import { useDispatch } from "react-redux";
import { useReactToPrint } from "react-to-print";
import PersonalDetailsFormSection from "./personalDetailsFormSection/PersonalDetailsFormSection";
import ExperienceFormSection from "./experienceFormSection/ExperienceFormSection";
import EducationDetailsFormSection from "./educationDetailsFormSection/EducationDetailsForm";
import { resetPersonalInfo } from "../../redux/reducers/personalInfoSlice";
import { resetEducation } from "../../redux/reducers/educationSlice";
import { resetExperience } from "../../redux/reducers/experienceSlice";
import "./PgForm.css";

/**
 * Renders the PgForm component.
 * @returns The PgForm component.
 */
export default function PgForm(props: any): JSX.Element {
    const dispatch = useDispatch();

    // Triggers print function for portfolio component.
    const handlePrint = useReactToPrint({
        content: (): any => props.componentRef.current
    })

    // Reset the personal info form.
    const resetFormDetails = () => {
        dispatch(resetPersonalInfo());
        dispatch(resetExperience());
        dispatch(resetEducation());
    }

    return (
        <form name="pg" className="pg_form w-100 shadow-lg d-flex flex-column">
            <PersonalDetailsFormSection />
            <ExperienceFormSection />
            <EducationDetailsFormSection />
            <div className="pg_form__buttons flex flex-column">
                <button
                    type="reset"
                    className="pg_form__btn reset w-100 fs-4 lh-lg"
                    onClick={resetFormDetails}
                >
                    Reset
                </button>
                <button
                    type="button"
                    className="pg_form__btn pdf w-100 fs-4 lh-lg"
                    onClick={handlePrint}
                >
                    Generate PDF
                </button>
            </div>
        </form>
    );
}
