import React from "react";
import { render, screen } from "@testing-library/react";
import PgFormSectionField from "./PersonalDetailsFormSectionField";

describe("PgFormSectionField", () => {
    it("renders a textarea element when type is textarea", () => {
        const dispatchAction = jest.fn();
        render(
            <PgFormSectionField
                id="test-id"
                name="test-name"
                placeholder="test-placeholder"
                type="textarea"
                action={dispatchAction}
            />
        );

        const textarea = screen.getByRole("textbox", { name: /textarea/i });
        expect(textarea).toBeInTheDocument();
    });

    it("renders an input element when type is not textarea", () => {
        const dispatchAction = jest.fn();
        render(
            <PgFormSectionField
                id="test-id"
                name="test-name"
                placeholder="test-placeholder"
                type="text"
                action={dispatchAction}
            />
        );

        const input = screen.getByRole("textbox", { name: /input/i });
        expect(input).toBeInTheDocument();
    });
});
