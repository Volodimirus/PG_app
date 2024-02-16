import React from "react";
import "./Footer.css";

export default function Footer() {
    return (
        <footer className="app_footer w-100 py-3 d-flex justify-content-center align-items-center gap-3">
            <span className="app_footer__copyright">
                Copyright © 2024 Vladimir Ekimtsov
            </span>
            <a className="app_footer__github d-block"></a>
        </footer>
    );
}
