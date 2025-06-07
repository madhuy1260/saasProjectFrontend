import axios from "axios";
import * as Constants from "../Constants";
import {
  addCommenttoTicketByIDAction,
  createBoardAction,
  createTicketsAction,
  getBoardsListAction,
  getCommentsByTicketIDAction,
  getReportByBoardIDAction,
  getSprintByBoardIDAction,
  getTicketDetailsByTicketIDAction,
  getTicketsByBoardIDAction,
  updateTicketByTicketIDAction,
} from "../Actions/taskActions";

export const createBoardApiCall = (info) => async (dispatch) => {
  dispatch(createBoardAction(Constants.CREATE_BOARD_START, {}, "", true));

  var data = {};
  // data.username = info?.username;
  // data.password = info?.password;

  var config = {
    method: "post",
    url: process.env.REACT_PUBLISHED_LINK + "/tasks/board",
    headers: { "Content-Type": "application/json" },
    data: data,
  };

  await axios(config)
    .then((response) => {
      dispatch(
        createBoardAction(
          Constants.CREATE_BOARD_SUCCESS,
          response.data,
          "Board Created Successfully!!",
          false
        )
      );
      console.log(`Data from the API - CREATE_BOARD_SUCCESS`, response.data);
    })
    .catch((error) => {
      if (error) {
        if (error.response && error.response.status === 404) {
          dispatch(
            createBoardAction(
              Constants.CREATE_BOARD_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else if (error.response && error.response.status === 400) {
          dispatch(
            createBoardAction(
              Constants.CREATE_BOARD_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else
          dispatch(
            createBoardAction(
              Constants.CREATE_BOARD_FAILURE,
              {},
              "Internal server error.",
              false
            )
          );
      }
    });
};

export const getBoardsListApiCall = (info) => async (dispatch) => {
  dispatch(getBoardsListAction(Constants.GET_BOARDS_START, {}, "", true));

  var data = {};
  // data.username = info?.username;
  // data.password = info?.password;
  let tenantId = 25;

  var config = {
    method: "get",
    url: process.env.REACT_PUBLISHED_LINK + `/tasks/board/${tenantId}`,
    headers: { "Content-Type": "application/json" },
    // data: data,
  };

  await axios(config)
    .then((response) => {
      dispatch(
        getBoardsListAction(
          Constants.GET_BOARDS_SUCCESS,
          response.data,
          "Boards Data Loaded Successfully!!",
          false
        )
      );
      console.log(`Data from the API - GET_BOARDS_SUCCESS`, response.data);
    })
    .catch((error) => {
      if (error) {
        if (error.response && error.response.status === 404) {
          dispatch(
            getBoardsListAction(
              Constants.GET_BOARDS_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else if (error.response && error.response.status === 400) {
          dispatch(
            getBoardsListAction(
              Constants.GET_BOARDS_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else
          dispatch(
            getBoardsListAction(
              Constants.GET_BOARDS_FAILURE,
              {},
              "Internal server error.",
              false
            )
          );
      }
    });
};

export const createTicketsApiCall = (info) => async (dispatch) => {
  dispatch(createTicketsAction(Constants.CREATE_TICKETS_START, {}, "", true));

  var data = {};
  // data.username = info?.username;
  // data.password = info?.password;

  var config = {
    method: "post",
    url: process.env.REACT_PUBLISHED_LINK + "/tasks/ticket",
    headers: { "Content-Type": "application/json" },
    data: data,
  };

  await axios(config)
    .then((response) => {
      dispatch(
        createTicketsAction(
          Constants.CREATE_TICKETS_SUCCESS,
          response.data,
          "Ticket Created Successfully!!",
          false
        )
      );
      console.log(`Data from the API - CREATE_TICKETS_SUCCESS`, response.data);
    })
    .catch((error) => {
      if (error) {
        if (error.response && error.response.status === 404) {
          dispatch(
            createTicketsAction(
              Constants.CREATE_TICKETS_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else if (error.response && error.response.status === 400) {
          dispatch(
            createTicketsAction(
              Constants.CREATE_TICKETS_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else
          dispatch(
            createTicketsAction(
              Constants.CREATE_TICKETS_FAILURE,
              {},
              "Internal server error.",
              false
            )
          );
      }
    });
};

export const getTicketsByBoardIDApiCall = (info) => async (dispatch) => {
  dispatch(
    getTicketsByBoardIDAction(
      Constants.GET_TICKETS_BYBOARDID_START,
      {},
      "",
      true
    )
  );

  var data = {};
  // data.username = info?.username;
  // data.password = info?.password;
  let boardId = 25;

  var config = {
    method: "get",
    url: process.env.REACT_PUBLISHED_LINK + `/tasks/ticket/${boardId}`,
    headers: { "Content-Type": "application/json" },
    // data: data,
  };

  await axios(config)
    .then((response) => {
      dispatch(
        getTicketsByBoardIDAction(
          Constants.GET_TICKETS_BYBOARDID_SUCCESS,
          response.data,
          "Tickets Data Loaded Successfully!!",
          false
        )
      );
      console.log(
        `Data from the API - GET_TICKETS_BYBOARDID_SUCCESS`,
        response.data
      );
    })
    .catch((error) => {
      if (error) {
        if (error.response && error.response.status === 404) {
          dispatch(
            getTicketsByBoardIDAction(
              Constants.GET_TICKETS_BYBOARDID_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else if (error.response && error.response.status === 400) {
          dispatch(
            getTicketsByBoardIDAction(
              Constants.GET_TICKETS_BYBOARDID_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else
          dispatch(
            getTicketsByBoardIDAction(
              Constants.GET_TICKETS_BYBOARDID_FAILURE,
              {},
              "Internal server error.",
              false
            )
          );
      }
    });
};

export const updateTicketByTicketIDApiCall = (info) => async (dispatch) => {
  dispatch(
    updateTicketByTicketIDAction(
      Constants.UPDATE_TICKET_BYTICKETID_START,
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
    method: "put",
    url: process.env.REACT_PUBLISHED_LINK + `/tasks/ticket/${ticketId}`,
    headers: { "Content-Type": "application/json" },
    data: data,
  };

  await axios(config)
    .then((response) => {
      dispatch(
        updateTicketByTicketIDAction(
          Constants.UPDATE_TICKET_BYTICKETID_SUCCESS,
          response.data,
          "ticket data updated Successfully!!",
          false
        )
      );
      console.log(
        `Data from the API - UPDATE_TICKET_BYTICKETID_SUCCESS`,
        response.data
      );
    })
    .catch((error) => {
      if (error) {
        if (error.response && error.response.status === 404) {
          dispatch(
            updateTicketByTicketIDAction(
              Constants.UPDATE_TICKET_BYTICKETID_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else if (error.response && error.response.status === 400) {
          dispatch(
            updateTicketByTicketIDAction(
              Constants.UPDATE_TICKET_BYTICKETID_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else
          dispatch(
            updateTicketByTicketIDAction(
              Constants.UPDATE_TICKET_BYTICKETID_FAILURE,
              {},
              "Internal server error.",
              false
            )
          );
      }
    });
};

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

export const addCommenttoTicketByIDApiCall = (info) => async (dispatch) => {
  dispatch(
    addCommenttoTicketByIDAction(
      Constants.ADD_COMMENT_TO_TICKET_BYID_START,
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
    method: "post",
    url: process.env.REACT_PUBLISHED_LINK + `/tasks/comment/${ticketId}`,
    headers: { "Content-Type": "application/json" },
    data: data,
  };

  await axios(config)
    .then((response) => {
      dispatch(
        addCommenttoTicketByIDAction(
          Constants.ADD_COMMENT_TO_TICKET_BYID_SUCCESS,
          response.data,
          "Comment added to ticket Successfully!!",
          false
        )
      );
      console.log(
        `Data from the API - ADD_COMMENT_TO_TICKET_BYID_SUCCESS`,
        response.data
      );
    })
    .catch((error) => {
      if (error) {
        if (error.response && error.response.status === 404) {
          dispatch(
            addCommenttoTicketByIDAction(
              Constants.ADD_COMMENT_TO_TICKET_BYID_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else if (error.response && error.response.status === 400) {
          dispatch(
            addCommenttoTicketByIDAction(
              Constants.ADD_COMMENT_TO_TICKET_BYID_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else
          dispatch(
            addCommenttoTicketByIDAction(
              Constants.ADD_COMMENT_TO_TICKET_BYID_FAILURE,
              {},
              "Internal server error.",
              false
            )
          );
      }
    });
};

export const getCommentsByTicketIDApiCall = (info) => async (dispatch) => {
  dispatch(
    getCommentsByTicketIDAction(
      Constants.GETCOMMENTS_BYTICKETID_START,
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
    url: process.env.REACT_PUBLISHED_LINK + `/tasks/comments/${ticketId}`,
    headers: { "Content-Type": "application/json" },
    // data: data,
  };

  await axios(config)
    .then((response) => {
      dispatch(
        getCommentsByTicketIDAction(
          Constants.GETCOMMENTS_BYTICKETID_SUCCESS,
          response.data,
          "Comment Data Loaded Successfully!!",
          false
        )
      );
      console.log(
        `Data from the API - GETCOMMENTS_BYTICKETID_SUCCESS`,
        response.data
      );
    })
    .catch((error) => {
      if (error) {
        if (error.response && error.response.status === 404) {
          dispatch(
            getCommentsByTicketIDAction(
              Constants.GETCOMMENTS_BYTICKETID_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else if (error.response && error.response.status === 400) {
          dispatch(
            getCommentsByTicketIDAction(
              Constants.GETCOMMENTS_BYTICKETID_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else
          dispatch(
            getCommentsByTicketIDAction(
              Constants.GETCOMMENTS_BYTICKETID_FAILURE,
              {},
              "Internal server error.",
              false
            )
          );
      }
    });
};

export const getReportByBoardIDApiCall = (info) => async (dispatch) => {
  dispatch(
    getReportByBoardIDAction(Constants.GETREPORT_BYBOARDID_START, {}, "", true)
  );

  var data = {};
  // data.username = info?.username;
  // data.password = info?.password;
  let boardId = 25;

  var config = {
    method: "get",
    url: process.env.REACT_PUBLISHED_LINK + `/tasks/report/${boardId}`,
    headers: { "Content-Type": "application/json" },
    // data: data,
  };

  await axios(config)
    .then((response) => {
      dispatch(
        getReportByBoardIDAction(
          Constants.GETREPORT_BYBOARDID_SUCCESS,
          response.data,
          "Report Data Loaded Successfully!!",
          false
        )
      );
      console.log(
        `Data from the API - GETREPORT_BYBOARDID_SUCCESS`,
        response.data
      );
    })
    .catch((error) => {
      if (error) {
        if (error.response && error.response.status === 404) {
          dispatch(
            getReportByBoardIDAction(
              Constants.GETREPORT_BYBOARDID_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else if (error.response && error.response.status === 400) {
          dispatch(
            getReportByBoardIDAction(
              Constants.GETREPORT_BYBOARDID_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else
          dispatch(
            getReportByBoardIDAction(
              Constants.GETREPORT_BYBOARDID_FAILURE,
              {},
              "Internal server error.",
              false
            )
          );
      }
    });
};

export const getSprintByBoardIDApiCall = (info) => async (dispatch) => {
  dispatch(
    getSprintByBoardIDAction(Constants.GETSPRINT_BYBOARDID_START, {}, "", true)
  );

  var data = {};
  // data.username = info?.username;
  // data.password = info?.password;
  let boardId = 25;

  var config = {
    method: "get",
    url: process.env.REACT_PUBLISHED_LINK + `/tasks/sprint/${boardId}`,
    headers: { "Content-Type": "application/json" },
    // data: data,
  };

  await axios(config)
    .then((response) => {
      dispatch(
        getSprintByBoardIDAction(
          Constants.GETSPRINT_BYBOARDID_SUCCESS,
          response.data,
          "Sprint Data Loaded Successfully!!",
          false
        )
      );
      console.log(
        `Data from the API - GETSPRINT_BYBOARDID_SUCCESS`,
        response.data
      );
    })
    .catch((error) => {
      if (error) {
        if (error.response && error.response.status === 404) {
          dispatch(
            getSprintByBoardIDAction(
              Constants.GETSPRINT_BYBOARDID_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else if (error.response && error.response.status === 400) {
          dispatch(
            getSprintByBoardIDAction(
              Constants.GETSPRINT_BYBOARDID_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else
          dispatch(
            getSprintByBoardIDAction(
              Constants.GETSPRINT_BYBOARDID_FAILURE,
              {},
              "Internal server error.",
              false
            )
          );
      }
    });
};
