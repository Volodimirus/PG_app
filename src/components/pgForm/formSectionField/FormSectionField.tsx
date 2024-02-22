import React from "react";
import { useDispatch } from "react-redux";

interface Props {
    type: string;
    id: string;
    name: string;
    placeholder: string;
    action: Function;
}

/**
 * Renders a form field for a section in a form.
 * @param props - The properties of field, including its type, ID, name, placeholder and reducer action.
 * @returns The form field, which can be a text area or input element.
 */

export default function FormSectionField(props: Props): JSX.Element {
    const { type, id, name, placeholder, action } = props;
    const dispatch = useDispatch();

    return (
        <>
            {type === "textarea" ? (
                <textarea
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    className="w-100 fs-5 py-2 px-3 rounded-4"
                    style={{ lineHeight: "1.75rem", borderRadius: "0.5rem" }}
                    onChange={(e) => {
                        if (action() == undefined) {
                            action(e.target.value)
                        } else {
                            dispatch(action(e.target.value));
                        }
                    }}
                    required
                ></textarea>
            ) : (
                <input
                    type={type}
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    className="w-100 fs-5 py-2 px-3 rounded-4"
                    style={{ lineHeight: "1.75rem", borderRadius: "0.5rem" }}
                    onChange={(e) => {
                        if (action() == undefined) {
                            action(e.target.value);
                        } else {
                            dispatch(action(e.target.value));
                        }
                    }}
                    required
                />
            )}
        </>
    );
}
