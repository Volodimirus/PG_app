import React from "react";
import { render, screen } from "@testing-library/react";
import PgFormSectionField from "./PgFormSectionField";

describe("PgFormSectionField", () => {
    it("renders a textarea element when type is textarea", () => {
        const onChange = jest.fn();
        render(
            <PgFormSectionField
                id="test-id"
                name="test-name"
                placeholder="test-placeholder"
                type="textarea"
            />
        );

        const textarea = screen.getByRole("textbox", { name: /textarea/i });
        expect(textarea).toBeInTheDocument();
    });

    it("renders an input element when type is not textarea", () => {
        const onChange = jest.fn();
        render(
            <PgFormSectionField
                id="test-id"
                name="test-name"
                placeholder="test-placeholder"
                type="text"
            />
        );

        const input = screen.getByRole("textbox", { name: /input/i });
        expect(input).toBeInTheDocument();
    });
});
