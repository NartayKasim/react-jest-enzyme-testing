import { getLetterMatchCount } from "./";

describe("getLetterMatchCount", () => {
   const secretWord = "party";
   test("Returns correct count if there are no matching letters", () => {
      const letterMatchCount = getLetterMatchCount("bones", secretWord);
      expect(letterMatchCount).toBe(0);
   });
   test("Returns the correct count when there are 3 matching letters.", () => {
      const letterMatchCount = getLetterMatchCount("train", secretWord);
      expect(letterMatchCount).toBe(3);
   });
   test("Returns correct count when there are duplicate matching letters", () => {
      const letterMatchCount = getLetterMatchCount("parka", secretWord);
      expect(letterMatchCount).toBe(3);
   });
});
