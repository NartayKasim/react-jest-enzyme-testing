import Counter from "./Counter";

import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("Renders without error", () => {
   const wrapper = shallow(<Counter />);
   const appComponent = wrapper.find("[data-test='component-counter']");
   expect(appComponent.length).toBe(1);
});

test("Renders increment button.", () => {});

test("Renders counter display", () => {});

test("Counter starts at 0", () => {});

test("Clicking increment button increments counter display", () => {});
