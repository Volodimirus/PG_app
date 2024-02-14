import React from "react";
import "./PgFormSectionField.css";

interface Props {
    type: string;
    id: string;
    name: string;
    placeholder: string;
}

export default function PgFormSectionField(props: Props) {
    const { type, id, name, placeholder } = props;

    return (
        <>
            {type === "textarea" ? (
                <textarea
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    className="pg-form_section__field"
                ></textarea>
            ) : (
                <input
                    type={type}
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    className="pg-form_section__field"
                />
            )}
        </>
    );
}
