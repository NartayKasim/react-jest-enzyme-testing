import classes from "./GuessedWords.module.css";

import PropTypes from "prop-types";

export default function GuessedWords(props) {
   return (
      <div
         data-test={"component-guessed-words"}
         className={classes.guessedWords}
      >
         {props.guessedWords.length === 0 && (
            <span data-test={"instructions"}>Try to guess the word!</span>
         )}

         {props.guessedWords.length > 0 && (
            <div data-test={"guessed-words"}>
               {props.guessedWords.map((word) => (
                  <span key={word}>
                     {word.guessedWord}: {word.letterMatchCount}
                  </span>
               ))}
            </div>
         )}
      </div>
   );
}

GuessedWords.propTypes = {
   guessedWords: PropTypes.arrayOf(
      PropTypes.shape({
         guessedWord: PropTypes.string.isRequired,
         letterMatchCount: PropTypes.number.isRequired,
      })
   ).isRequired,
};
