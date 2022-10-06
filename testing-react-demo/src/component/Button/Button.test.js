import React from "react";
import { shallow } from "enzyme";
import { findByTestAtrr, checkProps } from "../../../utils";
import Button from "./Button";

describe("Button Component tests", () => {
  describe("Checking prop-types", () => {
    it("It should not throw a warning", () => {
      const expectedProps = {
        buttonText: "String",
        emitEvent: () => {},
      };
      const propsError = checkProps(Button, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });

  describe("It renders without error", () => {

    let wrapper;
    let mockFunc;
    beforeEach(() => {
     mockFunc = jest.fn()
      const props = {
        buttonText: "String",
        emitEvent: mockFunc
      };
      wrapper = shallow(<Button {...props} />);
    });

    it("Should render a button", () => {
      const button = findByTestAtrr(wrapper, "buttonComponent");
      expect(button.length).toBe(1);
    });

    it("should emit a callback on click event", () => {
        const button = findByTestAtrr(wrapper, "buttonComponent");
        // * when I click on this button I should trigger a call back event
        button.simulate("click")
        const callback = mockFunc.mock.calls.length
        expect(callback).toBe(1)
    })
  });
});
