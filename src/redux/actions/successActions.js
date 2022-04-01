export const successTypes = {
   CORRECT_GUESS: "CORRECT_GUESS",
};

export function correctGuess() {
   return {
      type: successTypes.CORRECT_GUESS,
   };
}
