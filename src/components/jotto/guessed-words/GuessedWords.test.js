import React from "react";
import { shallow } from "enzyme";
import { findByTestAttribute, checkProps } from "../../../test/testUtils";
import GuessedWords from "./GuessedWords";

const defaultProps = {
   guessedWords: [{ guessedWord: "train", letterMatchCount: 3 }],
};

const setup = (props = {}) => {
   const setupProps = { ...defaultProps, ...props };
   return shallow(<GuessedWords {...setupProps} />);
};

test("Test does not throw warning with expected props", () => {
   checkProps(GuessedWords, defaultProps);
});

describe("If there are no words guessed", () => {
   let wrapper;
   beforeEach(() => {
      wrapper = setup({ guessedWords: [] });
   });

   test("Renders without error", () => {
      const component = findByTestAttribute(wrapper, "component-guessed-words");
      expect(component.length).toBe(1);
   });

   test("Renders instructions to guess a word", () => {
      const instructions = findByTestAttribute(wrapper, "instructions");
      expect(instructions.length).toBe(1);
   });
});

describe("If there are words guessed", () => {
   let wrapper;
   beforeEach(() => {
      wrapper = setup({
         guessedWords: [{ guessedWord: "testGuestWord", letterMatchCount: 3 }],
      });
   });

   test("Renders without error", () => {
      const component = findByTestAttribute(wrapper, "component-guessed-words");
      expect(component.length).toBe(1);
   });

   test("Renders guessed words array", () => {
      const guessedWords = findByTestAttribute(wrapper, "guessed-words");
      expect(guessedWords.length).toBe(1);
   });
});