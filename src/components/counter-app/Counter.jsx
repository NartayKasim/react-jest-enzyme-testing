import classes from "./Counter.module.css";

import { useState } from "react";

export default function Counter() {
   const [counter, setCounter] = useState(0);

   const onIncrementClick = () => {
      setCounter((c) => (c += 1));
   };
   return (
      <div className={classes.counter} data-test="component-counter">
         <div
            className={classes.counterDisplay}
            data-test="component-counter-display"
         >
            {counter}
         </div>
         <button
            className={classes.incrementButton}
            data-test="component-counter-increment-button"
            onClick={onIncrementClick}
         >
            Increment
         </button>
      </div>
   );
}
