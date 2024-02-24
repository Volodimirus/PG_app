import React from "react";
import "./Footer.css";

/**
 * Renders the footer.
 * @returns The Footer component.
 */

export default function Footer(): JSX.Element {
    return (
        <footer className="app_footer w-100 py-3 d-flex justify-content-center align-items-center gap-3">
            <span className="app_footer__copyright">
                Copyright © 2024 Vladimir Ekimtsov
            </span>
            <a className="app_footer__github d-block" href="https://github.com/Volodimirus/"></a>
        </footer>
    );
}
