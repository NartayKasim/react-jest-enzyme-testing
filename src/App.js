import "./App.css";

import Counter from "./components/counter-app/Counter";
import Congrats from "./components/jotto/congrats/Congrats";
import GuessedWords from "./components/jotto/guessed-words/GuessedWords";

function App() {
   return (
      <div className="App">
         <Counter />
         <Congrats success={false} />
         <GuessedWords guessedWords={[]} />
      </div>
   );
}

export default App;
