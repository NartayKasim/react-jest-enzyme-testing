import { shallow } from "enzyme";
import { findByTestAttribute } from "../../../test/testUtils";
import WordInput from "./WordInput";

const setup = (initialState = {}) => {
   const wrapper = shallow(<WordInput />);
   console.log(wrapper);
};

setup();

describe("Render Tests:", () => {
   describe("Word has not been guessed", () => {
      test("Renders component without error", () => {});
      test("Renders input box.", () => {});
      test("Renders submit button", () => {});
   });

   describe("Word has been guessed", () => {
      test("Renders component without error.", () => {});
      test("Does not render input box", () => {});
      test("Does not render submit button", () => {});
   });
});

describe("State Updates:", () => {});
