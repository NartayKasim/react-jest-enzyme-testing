import React from "react";
import { shallow } from "enzyme";
import { findByTestAttribute, checkProps } from "../../../test/testUtils";

import Congrats from "./Congrats";

const defaultProps = { success: false };

const setup = (props = {}) => {
   const setupProps = { ...defaultProps, ...props };
   return shallow(<Congrats {...setupProps} />);
};

test("Renders without error", () => {
   const wrapper = setup({ success: false });
   const component = findByTestAttribute(wrapper, "component-congrats");
   expect(component.length).toBe(1);
});

test("Renders no text when 'success' prop is false", () => {
   const wrapper = setup({ success: false });
   const component = findByTestAttribute(wrapper, "component-congrats");
   expect(component.text()).toBe("");
});

test("Renders non-empty congrats message when 'success' prop is true", () => {
   const wrapper = setup({ success: true });
   const component = findByTestAttribute(wrapper, "congrats-message");
   expect(component.text().length).not.toBe(0);
});

test("Does not throw warning with expected props", () => {
   const expectedProps = { success: false };
   checkProps(Congrats, expectedProps);
});
