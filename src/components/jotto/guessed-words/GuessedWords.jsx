import classes from "./GuessedWords.module.css";

import PropTypes from "prop-types";

export default function GuessedWords(props) {
   return (
      <div
         data-test={"component-guessed-words"}
         className={classes.guessedWords}
         style={{ display: "flex", justifyContent: "center" }}
      >
         {props.guessedWords.length === 0 && (
            <span data-test={"instructions"}>Try to guess the word!</span>
         )}

         {props.guessedWords.length > 0 && (
            <div data-test={"guessed-words"}>
               <h3>Guessed Words:</h3>
               <table>
                  <thead>
                     <tr>
                        <th>Guess</th>
                        <th>Matching Letters</th>
                     </tr>
                  </thead>
                  <tbody>
                     {props.guessedWords.map((word) => (
                        <tr key={word} data-test={"guessed-word"}>
                           <td>{word.guessedWord}</td>{" "}
                           <td>{word.letterMatchCount}</td>
                        </tr>
                     ))}
                  </tbody>
               </table>
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
