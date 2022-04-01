import "./App.css";

import Counter from "./components/counter-app/Counter";
import WordInput from "./components/jotto/input/WordInput";
import Congrats from "./components/jotto/congrats/Congrats";
import GuessedWords from "./components/jotto/guessed-words/GuessedWords";

function App() {
   return (
      <div className="App">
         <Counter />
         <div
            className="jotto"
            style={{
               display: "flex",
               flexDirection: "column",
               alignItems: "center",
               justifyContent: "center",
               margin: "100px 0",
            }}
         >
            <WordInput />
            <Congrats success={false} />
            <GuessedWords
               guessedWords={[
                  { guessedWord: "putty", letterMatchCount: 1 },
                  { guessedWord: "umbral", letterMatchCount: 2 },
                  { guessedWord: "universal", letterMatchCount: 3 },
               ]}
            />
         </div>
      </div>
   );
}

export default App;
