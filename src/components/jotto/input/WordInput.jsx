import { useSelector } from "react-redux";

import classes from "./WordInput.module.css";

export default function WordInput() {
   const success = useSelector((state) => state.success.success);

   console.log(success);

   return (
      <div
         className={classes.wordInput}
         style={{ display: "flex", gap: "30px" }}
         data-test={"component-word-input"}
      >
         <input
            data-test={"word-input"}
            type="text"
            placeholder="type guessed word"
         />
         <button data-test={"submit-button"}>Submit</button>
      </div>
   );
}
