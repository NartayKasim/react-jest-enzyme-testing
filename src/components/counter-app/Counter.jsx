import classes from "./Counter.module.css";

import { useState } from "react";

export default function Counter() {
   const [counter, setCounter] = useState(0);

   const onIncrementClick = () => {
      setCounter((c) => (c += 1));
   };
   return (
      <div className={classes.counter} data-test="component-counter">
         <div className={classes.counterDisplay}>{counter}</div>
         <button className={classes.incrementButton} onClick={onIncrementClick}>
            Increment
         </button>
      </div>
   );
}
