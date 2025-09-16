import INITIAL_STATE from "../public/INITIAL_STATE";
import { loginReducer, registerUserReducer } from "./Reducers/authReducer";

import { getTicketDetailsByTicketIDReducer } from "./Reducers/taskReducer";

const reducers = {
  LOGIN_USER_START: loginReducer,
  LOGIN_USER_SUCCESS: loginReducer,
  LOGIN_USER_FAILURE: loginReducer,

  REGISTER_USER_START: registerUserReducer,
  REGISTER_USER_SUCCESS: registerUserReducer,
  REGISTER_USER_FAILURE: registerUserReducer,

  // --------------------------------------------------------------

  GET_TICKET_DETAILS_BYTICKETID_START: getTicketDetailsByTicketIDReducer,
  GET_TICKET_DETAILS_BYTICKETID_SUCCESS: getTicketDetailsByTicketIDReducer,
  GET_TICKET_DETAILS_BYTICKETID_FAILURE: getTicketDetailsByTicketIDReducer,
};

export const commonReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  const reducer = reducers[type];
  return reducer ? reducer(state, payload) : state;
};
