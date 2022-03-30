import PropTypes from "prop-types";

import classes from "./Congrats.module.css";

export default function Congrats({ success }) {
   return (
      <div className={classes.Congrats} data-test={"component-congrats"}>
         {success ? (
            <span data-test={"congrats-message"}>Congratulations!</span>
         ) : null}
      </div>
   );
}

Congrats.propTypes = {
   success: PropTypes.bool.isRequired,
};
