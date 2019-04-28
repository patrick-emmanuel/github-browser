import React from "react";
import {
  render,
  fireEvent,
  waitForElement,
  cleanup,
  act
} from "react-testing-library";
import Repos from "../components/repos";
import "react-testing-library/cleanup-after-each";
import "jest-dom/extend-expect";

afterEach(cleanup);

describe("Branches", () => {
  it("Should render branches when a repo is clicked on", async () => {
    const { getAllByTestId, getByTestId, getByText, getByLabelText } = render(
      <Repos />
    );
    const inputElement = getByLabelText("username");
    const button = getByText("Find User");
    fireEvent.change(inputElement, { target: { value: "the-bionic" } });
    fireEvent.click(button);
    const accordionSections = await waitForElement(() =>
      getAllByTestId("accordion-section")
    );
    act(() => {
      fireEvent.click(accordionSections[0]);
    });
    
    const branchH1 = await waitForElement(() => getByTestId("branches-header"));

    expect(branchH1).not.toBeNull();
  }, 5000000);
});
