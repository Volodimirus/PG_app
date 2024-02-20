import React, { useState } from "react";
import Header from "../header/Header";
import PgForm from "../pgForm/PgForm";
import Portfolio from "../portfolio/Portfolio";
import Footer from "../footer/Footer";
import "./App.css";

/**
 * Renders the main application component.
 * @returns The main application component.
 */

interface personalDetailsTypes {
    firstName: string;
    secondName: string;
    jobTitle: string;
    photo: string;
    address: string;
    phone: string;
    email: string;
    about: string;
}

interface experienceDetailsTypes {
    position: string;
    company: string;
    city: string;
    fromYear: number;
    toYear: number;
}

function App(): JSX.Element {
    const [personalDetails, setPersonalDetails] =
        useState<personalDetailsTypes>({
            firstName: "",
            secondName: "",
            jobTitle: "",
            photo: "",
            address: "",
            phone: "",
            email: "",
            about: "",
        });

    const [experienceDetails, setExperienceDetails] =
        useState<experienceDetailsTypes>({
            position: "",
            company: "",
            city: "",
            fromYear: 0,
            toYear: 0,
        });

    const setFirstName = (firstName: string) =>
        setPersonalDetails({ ...personalDetails, firstName });
    const setSecondName = (secondName: string) =>
        setPersonalDetails({ ...personalDetails, secondName });
    const setJobTitle = (jobTitle: string) =>
        setPersonalDetails({ ...personalDetails, jobTitle });
    const setPhoto = (photo: string) =>
        setPersonalDetails({ ...personalDetails, photo });
    const setAddress = (address: string) =>
        setPersonalDetails({ ...personalDetails, address });
    const setPhone = (phone: string) =>
        setPersonalDetails({ ...personalDetails, phone });
    const setEmail = (email: string) =>
        setPersonalDetails({ ...personalDetails, email });
    const setAbout = (about: string) =>
        setPersonalDetails({ ...personalDetails, about });

    return (
        <div className="app min-vh-100 d-flex flex-column align-items-center gap-5">
            <Header />
            <PgForm
                setFirstName={setFirstName}
                setSecondName={setSecondName}
                setJobTitle={setJobTitle}
                setPhoto={setPhoto}
                setAddress={setAddress}
                setPhone={setPhone}
                setEmail={setEmail}
                setAbout={setAbout}
            />
            <Portfolio personalDetails={personalDetails} />
            <Footer />
        </div>
    );
}

export default App;
