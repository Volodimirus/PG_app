import React, { ChangeEventHandler } from "react";

interface Props {
    type: string;
    id: string;
    name: string;
    placeholder: string;
    onChange: (prop: string) => void;
}

/**
 * Renders a form field for a section in a form.
 * @param props - The properties of field, including its type, ID, name, placeholder and onChange func.
 * @returns The form field, which can be a text area or input element.
 */

export default function PgFormSectionField(props: Props): JSX.Element {
    const { type, id, name, placeholder, onChange } = props;

    return (
        <>
            {type === "textarea" ? (
                <textarea
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    className="w-100 fs-5 py-2 px-3 rounded-4"
                    style={{ lineHeight: "1.75rem", borderRadius: "0.5rem" }}
                    onChange={(e) => onChange(e.target.value)}
                ></textarea>
            ) : (
                <input
                    type={type}
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    className="w-100 fs-5 py-2 px-3 rounded-4"
                    style={{ lineHeight: "1.75rem", borderRadius: "0.5rem" }}
                    onChange={(e) => onChange(e.target.value)}
                />
            )}
        </>
    );
}
