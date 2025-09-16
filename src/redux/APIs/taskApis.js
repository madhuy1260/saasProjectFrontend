import axios from "axios";
import * as Constants from "../Constants";
import { getTicketDetailsByTicketIDAction } from "../Actions/taskActions";

export const getTicketDetailsByTicketIDApiCall = (info) => async (dispatch) => {
  dispatch(
    getTicketDetailsByTicketIDAction(
      Constants.GET_TICKET_DETAILS_BYTICKETID_START,
      {},
      "",
      true
    )
  );

  var data = {};
  // data.username = info?.username;
  // data.password = info?.password;
  let ticketId = 25;

  var config = {
    method: "get",
    url: process.env.REACT_PUBLISHED_LINK + `/tasks/ticket/${ticketId}`,
    headers: { "Content-Type": "application/json" },
    // data: data,
  };

  await axios(config)
    .then((response) => {
      dispatch(
        getTicketDetailsByTicketIDAction(
          Constants.GET_TICKET_DETAILS_BYTICKETID_SUCCESS,
          response.data,
          "Ticket details Data Loaded Successfully!!",
          false
        )
      );
      console.log(
        `Data from the API - GET_TICKET_DETAILS_BYTICKETID_SUCCESS`,
        response.data
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
