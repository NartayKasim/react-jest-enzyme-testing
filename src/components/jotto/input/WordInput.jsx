import { useSelector } from "react-redux";

import classes from "./WordInput.module.css";

export default function WordInput() {
   const success = useSelector((state) => state.success);

   return (
      <div
         className={classes.wordInput}
         style={{ display: "flex", gap: "30px" }}
      >
         <input type="text" placeholder="type guessed word" />
         <button>Submit</button>
      </div>
   );
}
