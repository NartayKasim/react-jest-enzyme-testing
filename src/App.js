import "./App.css";

import Counter from "./components/counter-app/Counter";
import Congrats from "./components/jotto/congrats/Congrats";

function App() {
   return (
      <div className="App">
         <Counter />
         <Congrats success={false} />
      </div>
   );
}

export default App;
