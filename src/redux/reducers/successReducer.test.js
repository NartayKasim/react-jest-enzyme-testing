import { successTypes } from "../actions/successActions";
import successReducer from "./successReducer";

test("Returns default initial state of 'false' when no action is passed", () => {
   const newState = successReducer();
   expect(newState).toEqual({ success: false });
});

test("Returns state of true upon receiving an action of type 'CORRECT_GUESS'", () => {
   const newState = successReducer(null, { type: successTypes.CORRECT_GUESS });
   expect(newState).toEqual({ success: true });
});
