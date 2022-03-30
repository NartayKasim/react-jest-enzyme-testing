import Counter from "./Counter";

import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props = {}, state = null) => {
   return shallow(<Counter {...props} />);
};

const findElement = (wrapper, val) => {
   return wrapper.find(`[data-test="${val}"]`);
};

test("Renders without error", () => {
   const wrapper = setup();
   const appComponent = findElement(wrapper, "component-counter");
   expect(appComponent.length).toBe(1);
});

test("Renders increment button.", () => {
   const wrapper = setup();
   const appComponent = findElement(
      wrapper,
      "component-counter-increment-button"
   );
   expect(appComponent.length).toBe(1);
});

test("Renders counter display", () => {
   const wrapper = setup();
   const appComponent = findElement(wrapper, "component-counter-display");
   expect(appComponent.length).toBe(1);
});

test("Mock useState testing", () => {
   React.useState = jest.fn().mockReturnValue([0, {}]);
   const wrapper = setup();
});

test("Clicking increment button increments counter display", () => {});
