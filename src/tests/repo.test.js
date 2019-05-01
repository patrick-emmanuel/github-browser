import React from "react";
import { render, cleanup } from "react-testing-library";
import Repos from "../components/repos";
import "react-testing-library/cleanup-after-each";
import "jest-dom/extend-expect";

afterEach(cleanup);

describe("Repos", () => {
  describe("Search Form", () => {
    it("Should contain input element", () => {
      const { getByTestId, getByLabelText } = render(<Repos />);

      const formElement = getByTestId("search-form");
      const inputElement = getByLabelText("username");

      expect(formElement).toContainElement(inputElement);
    });
    it("Should be visible", () => {
      const { getByTestId } = render(<Repos />);

      const formElement = getByTestId("search-form");

      expect(formElement).toBeVisible();
    });
  });

  describe("Search Input", () => {
    it("Should not be disabled", () => {
      const { getByLabelText } = render(<Repos />);

      const element = getByLabelText("username");

      expect(element).not.toBeDisabled();
    });
    it("Should be visible", () => {
      const { getByLabelText } = render(<Repos />);

      const element = getByLabelText("username");

      expect(element).toBeVisible();
    });
    it("Should have attribute of type text", () => {
      const { getByLabelText } = render(<Repos />);

      const element = getByLabelText("username");

      expect(element).toHaveAttribute("type", "text");
    });
    it("Should not have focus focus", () => {
      const { getByLabelText } = render(<Repos />);

      const element = getByLabelText("username");

      expect(element).not.toHaveFocus();
    });
  });
  describe("Logo", () => {
    it("Should be rendered", () => {
      const { getByTestId } = render(<Repos />);

      const logoElement = getByTestId("logo");

      expect(logoElement).not.toBeNull();
    });
    it("Should have logo class", () => {
      const { getByTestId } = render(<Repos />);

      const logoElement = getByTestId("logo");

      expect(logoElement).toHaveClass("logo");
    });
    it("Should contain a tag line", () => {
      const { getByTestId, getByLabelText } = render(<Repos />);

      const logoElement = getByTestId("logo");
      const logoTagLine = getByLabelText("logo-tagline");

      expect(logoElement).toContainElement(logoTagLine);
    });
    it("Should have a tagline 'GitHub Users'", () => {
      const { getByLabelText } = render(<Repos />);

      const logoTagLine = getByLabelText("logo-tagline");

      expect(logoTagLine).toHaveTextContent("GitHub Users");
    });
  });
});
