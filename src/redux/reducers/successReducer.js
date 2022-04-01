import { successTypes } from "../actions/successActions";

const initialState = {
   success: false,
};

export default function successReducer(state = initialState, action) {
   if (action) {
      const { type, payload } = action;
      switch (type) {
         default:
            return state;
         case successTypes.CORRECT_GUESS:
            return { success: true };
      }
   }
   return state;
}
