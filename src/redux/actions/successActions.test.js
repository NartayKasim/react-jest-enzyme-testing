import { correctGuess, successTypes } from "./successActions";

describe("correctGuess", () => {
   test("returns action with type 'CORRECT_GUESS", () => {
      const action = correctGuess();
      expect(action).toEqual({ type: successTypes.CORRECT_GUESS });
   });
});
