import React from "react";
import { render, screen } from "@testing-library/react";
import PgFormSectionField from "./PgFormSectionField";

describe("PgFormSectionField", () => {
    it('renders an <input> element when the type prop is set to "text"', () => {
        render(
            <PgFormSectionField
                type="text"
                id="test-id"
                name="test-name"
                placeholder="test-placeholder"
            />
        );

        const input = screen.getByRole("textbox");

        expect(input).toBeInTheDocument();
        expect(input).toHaveAttribute("id", "test-id");
        expect(input).toHaveAttribute("name", "test-name");
        expect(input).toHaveAttribute("placeholder", "test-placeholder");
        expect(input).toHaveClass("w-100 fs-5 py-2 px-3 rounded-4");
        expect(input).toHaveStyle({
            lineHeight: "1.75rem",
            borderRadius: "0.5rem",
        });
    });

    it('renders an <textarea> element when the type prop is set to "textarea"', () => {
        render(
            <PgFormSectionField
                type="textarea"
                id="test-id"
                name="test-name"
                placeholder="test-placeholder"
            />
        );

        const textarea = screen.getByRole("textbox", {
            name: "test placeholder",
        });

        expect(textarea).toBeInTheDocument();
        expect(textarea).toHaveAttribute("id", "test-id");
        expect(textarea).toHaveAttribute("name", "test-name");
        expect(textarea).toHaveAttribute("placeholder", "test-placeholder");
        expect(textarea).toHaveClass("w-100 fs-5 py-2 px-3 rounded-4");
        expect(textarea).toHaveStyle({
            lineHeight: "1.75rem",
            borderRadius: "0.5rem",
        });
    });

    it("has an id attribute that matches the id prop", () => {
        const id = "test-id";

        render(
            <PgFormSectionField
                type="text"
                name="test-name"
                id={id}
                placeholder="test-placeholder"
            />
        );

        const input = screen.getByRole("textbox");

        expect(input).toHaveAttribute("id", id);
    });

    it("has a name attribute that matches the name prop", () => {
        const name = "test-name";

        render(
            <PgFormSectionField
                type="text"
                name={name}
                id="test-id"
                placeholder="test-placeholder"
            />
        );

        const input = screen.getByRole("textbox");

        expect(input).toHaveAttribute("name", name);
    });

    it("has a placeholder attribute that matches the placeholder prop", () => {
        const placeholder = "test-placeholder";

        render(
            <PgFormSectionField
                type="text"
                name="test-name"
                id="test-id"
                placeholder={placeholder}
            />
        );

        const input = screen.getByRole("textbox");

        expect(input).toHaveAttribute("placeholder", placeholder);
    });

    it("has a class attribute that includes the w-100 and fs-5 classes", () => {
        render(
            <PgFormSectionField
                type="text"
                id="test-id"
                name="test-name"
                placeholder="test-placeholder"
            />
        );

        const input = screen.getByRole("textbox");

        expect(input).toHaveClass("w-100 fs-5");
    });
});
