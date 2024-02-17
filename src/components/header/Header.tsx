import React from "react";
import "./Header.css";

/**
 * Return an element that displays the application title.
 * @return {JSX.Element} The application title.
 */

export default function Header(): JSX.Element {
    return (
        <header className="app_header container-fluid d-flex align-items-center justify-content-center">
            <h1 className="app_title fw-bolder">PG APP</h1>
        </header>
    );
}
