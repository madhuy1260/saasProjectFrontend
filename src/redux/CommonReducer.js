import INITIAL_STATE from "../public/INITIAL_STATE";
import { loginReducer } from "./Reducers/authReducer";



const reducers = {
  LOGIN_USER_START: loginReducer,
  LOGIN_USER_SUCCESS: loginReducer,
  LOGIN_USER_FAILURE: loginReducer
}

  export const commonReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
    const reducer = reducers[type];
    return reducer ? reducer(state, payload) : state;
  };
  