import * as Constants from "../Constants/taskConstants";
import { getTicketDetailsByTicketIDAction } from "../Actions/taskActions";
import dummydata from "../../JSONData/dummy.json";

export const getTicketDetailsByTicketIDApiCall = (info) => async (dispatch) => {
  dispatch(
    getTicketDetailsByTicketIDAction(
      Constants.GET_TICKET_DETAILS_BYTICKETID_START,
      {},
      "",
      true
    )
  );

  let ticketId = 25;

  var config = {
    method: "get",
    url: dummydata,
    headers: { "Content-Type": "application/json" },
    // data: data,
  };

  await fetch(config)
    .then((response) => {
      dispatch(
        getTicketDetailsByTicketIDAction(
          Constants.GET_TICKET_DETAILS_BYTICKETID_SUCCESS,
          dummydata,
          "Ticket details Data Loaded Successfully!!",
          false
        )
      );
    })
    .catch((error) => {
      if (error) {
        if (error.response && error.response.status === 404) {
          dispatch(
            getTicketDetailsByTicketIDAction(
              Constants.GET_TICKET_DETAILS_BYTICKETID_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else if (error.response && error.response.status === 400) {
          dispatch(
            getTicketDetailsByTicketIDAction(
              Constants.GET_TICKET_DETAILS_BYTICKETID_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else
          dispatch(
            getTicketDetailsByTicketIDAction(
              Constants.GET_TICKET_DETAILS_BYTICKETID_FAILURE,
              {},
              "Internal server error.",
              false
            )
          );
      }
    });
};
