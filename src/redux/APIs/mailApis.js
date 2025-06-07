import axios from "axios";
import * as Constants from "../Constants";
import {
  archieveEmailAction,
  deleteEmailAction,
  getInboxByUserAction,
  getSentByUserIdAction,
  getThreadByIDAction,
  replyEmailByEmailIDAction,
  sendEmailAction,
  unsubscribeSenderAction,
} from "../Actions/mailActions";

export const sendEmailApiCall = (info) => async (dispatch) => {
  dispatch(sendEmailAction(Constants.SEND_EMAIL_START, {}, "", true));

  var data = {};
  // data.username = info?.username;
  // data.password = info?.password;

  var config = {
    method: "post",
    url: process.env.REACT_PUBLISHED_LINK + "/mail/send",
    headers: { "Content-Type": "application/json" },
    data: data,
  };

  await axios(config)
    .then((response) => {
      dispatch(
        sendEmailAction(
          Constants.SEND_EMAIL_SUCCESS,
          response.data,
          "Email Sent Successfully!!",
          false
        )
      );
      console.log(`Data from the API - SEND_EMAIL_SUCCESS`, response.data);
    })
    .catch((error) => {
      if (error) {
        if (error.response && error.response.status === 404) {
          dispatch(
            sendEmailAction(
              Constants.SEND_EMAIL_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else if (error.response && error.response.status === 400) {
          dispatch(
            sendEmailAction(
              Constants.SEND_EMAIL_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else
          dispatch(
            sendEmailAction(
              Constants.SEND_EMAIL_FAILURE,
              {},
              "Internal server error.",
              false
            )
          );
      }
    });
};

export const getInboxByUserApiCall = (info) => async (dispatch) => {
  dispatch(
    getInboxByUserAction(Constants.GET_INBOX_BYUSERID_START, {}, "", true)
  );

  var data = {};
  // data.username = info?.username;
  // data.password = info?.password;
  let userId = 25;

  var config = {
    method: "get",
    url: process.env.REACT_PUBLISHED_LINK + `/mail/inbox/${userId}`,
    headers: { "Content-Type": "application/json" },
    data: data,
  };

  await axios(config)
    .then((response) => {
      dispatch(
        getInboxByUserAction(
          Constants.GET_INBOX_BYUSERID_SUCCESS,
          response.data,
          "Inbox Mail Data Loaded Successfully!!",
          false
        )
      );
      console.log(
        `Data from the API - GET_INBOX_BYUSERID_SUCCESS`,
        response.data
      );
    })
    .catch((error) => {
      if (error) {
        if (error.response && error.response.status === 404) {
          dispatch(
            getInboxByUserAction(
              Constants.GET_INBOX_BYUSERID_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else if (error.response && error.response.status === 400) {
          dispatch(
            getInboxByUserAction(
              Constants.GET_INBOX_BYUSERID_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else
          dispatch(
            getInboxByUserAction(
              Constants.GET_INBOX_BYUSERID_FAILURE,
              {},
              "Internal server error.",
              false
            )
          );
      }
    });
};

export const getSentByUserIdApiCall = (info) => async (dispatch) => {
  dispatch(
    getSentByUserIdAction(Constants.GET_SENT_BYUSERID_START, {}, "", true)
  );

  var data = {};
  // data.username = info?.username;
  // data.password = info?.password;
  let userId = 25;

  var config = {
    method: "get",
    url: process.env.REACT_PUBLISHED_LINK + `/mail/sent/${userId}`,
    headers: { "Content-Type": "application/json" },
    // data: data,
  };

  await axios(config)
    .then((response) => {
      dispatch(
        getSentByUserIdAction(
          Constants.GET_SENT_BYUSERID_SUCCESS,
          response.data,
          "Sent Email Data Loaded Successfully!!",
          false
        )
      );
      console.log(
        `Data from the API - GET_SENT_BYUSERID_SUCCESS`,
        response.data
      );
    })
    .catch((error) => {
      if (error) {
        if (error.response && error.response.status === 404) {
          dispatch(
            getSentByUserIdAction(
              Constants.GET_SENT_BYUSERID_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else if (error.response && error.response.status === 400) {
          dispatch(
            getSentByUserIdAction(
              Constants.GET_SENT_BYUSERID_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else
          dispatch(
            getSentByUserIdAction(
              Constants.GET_SENT_BYUSERID_FAILURE,
              {},
              "Internal server error.",
              false
            )
          );
      }
    });
};

export const getThreadByIDApiCall = (info) => async (dispatch) => {
  dispatch(getThreadByIDAction(Constants.GET_THREAD_BYID_START, {}, "", true));

  var data = {};
  // data.username = info?.username;
  // data.password = info?.password;
  let emailThreadId = 52;

  var config = {
    method: "get",
    url: process.env.REACT_PUBLISHED_LINK + `/mail/thread/${emailThreadId}`,
    headers: { "Content-Type": "application/json" },
    // data: data,
  };

  await axios(config)
    .then((response) => {
      dispatch(
        getThreadByIDAction(
          Constants.GET_THREAD_BYID_SUCCESS,
          response.data,
          "Email Thread Data Loaded Successfully!!",
          false
        )
      );
      console.log(`Data from the API - GET_THREAD_BYID_SUCCESS`, response.data);
    })
    .catch((error) => {
      if (error) {
        if (error.response && error.response.status === 404) {
          dispatch(
            getThreadByIDAction(
              Constants.GET_THREAD_BYID_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else if (error.response && error.response.status === 400) {
          dispatch(
            getThreadByIDAction(
              Constants.GET_THREAD_BYID_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else
          dispatch(
            getThreadByIDAction(
              Constants.GET_THREAD_BYID_FAILURE,
              {},
              "Internal server error.",
              false
            )
          );
      }
    });
};

export const replyEmailByEmailIDApiCall = (info) => async (dispatch) => {
  dispatch(
    replyEmailByEmailIDAction(
      Constants.REPLY_TO_EMAIL_BY_EMAILID_START,
      {},
      "",
      true
    )
  );

  var data = {};
  // data.username = info?.username;
  // data.password = info?.password;
  let emailId = 25;

  var config = {
    method: "post",
    url: process.env.REACT_PUBLISHED_LINK + `/mail/reply/${emailId}`,
    headers: { "Content-Type": "application/json" },
    data: data,
  };

  await axios(config)
    .then((response) => {
      dispatch(
        replyEmailByEmailIDAction(
          Constants.REPLY_TO_EMAIL_BY_EMAILID_SUCCESS,
          response.data,
          "Reply Email Data Loaded Successfully!!",
          false
        )
      );
      console.log(
        `Data from the API - REPLY_TO_EMAIL_BY_EMAILID_SUCCESS`,
        response.data
      );
    })
    .catch((error) => {
      if (error) {
        if (error.response && error.response.status === 404) {
          dispatch(
            replyEmailByEmailIDAction(
              Constants.REPLY_TO_EMAIL_BY_EMAILID_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else if (error.response && error.response.status === 400) {
          dispatch(
            replyEmailByEmailIDAction(
              Constants.REPLY_TO_EMAIL_BY_EMAILID_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else
          dispatch(
            replyEmailByEmailIDAction(
              Constants.REPLY_TO_EMAIL_BY_EMAILID_FAILURE,
              {},
              "Internal server error.",
              false
            )
          );
      }
    });
};

export const deleteEmailApiCall = (info) => async (dispatch) => {
  dispatch(deleteEmailAction(Constants.DELETE_EMAIL_START, {}, "", true));

  var data = {};
  // data.username = info?.username;
  // data.password = info?.password;
  let emailId = "@gmail.com";

  var config = {
    method: "delete",
    url: process.env.REACT_PUBLISHED_LINK + `/mail/delete/${emailId}`,
    headers: { "Content-Type": "application/json" },
    data: data,
  };

  await axios(config)
    .then((response) => {
      dispatch(
        deleteEmailAction(
          Constants.DELETE_EMAIL_SUCCESS,
          response.data,
          "Mail Deleted Successfully!!",
          false
        )
      );
      console.log(`Data from the API - DELETE_EMAIL_SUCCESS`, response.data);
    })
    .catch((error) => {
      if (error) {
        if (error.response && error.response.status === 404) {
          dispatch(
            deleteEmailAction(
              Constants.DELETE_EMAIL_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else if (error.response && error.response.status === 400) {
          dispatch(
            deleteEmailAction(
              Constants.DELETE_EMAIL_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else
          dispatch(
            deleteEmailAction(
              Constants.DELETE_EMAIL_FAILURE,
              {},
              "Internal server error.",
              false
            )
          );
      }
    });
};

export const archieveEmailApiCall = (info) => async (dispatch) => {
  dispatch(archieveEmailAction(Constants.ARCHIEVE_EMAIL_START, {}, "", true));

  var data = {};
  // data.username = info?.username;
  // data.password = info?.password;
  let emailId = "@gmail.com";

  var config = {
    method: "post",
    url: process.env.REACT_PUBLISHED_LINK + `/mail/archive/${emailId}`,
    headers: { "Content-Type": "application/json" },
    data: data,
  };

  await axios(config)
    .then((response) => {
      dispatch(
        archieveEmailAction(
          Constants.ARCHIEVE_EMAIL_SUCCESS,
          response.data,
          "Mail Archieved Successfully!!",
          false
        )
      );
      console.log(`Data from the API - ARCHIEVE_EMAIL_SUCCESS`, response.data);
    })
    .catch((error) => {
      if (error) {
        if (error.response && error.response.status === 404) {
          dispatch(
            archieveEmailAction(
              Constants.ARCHIEVE_EMAIL_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else if (error.response && error.response.status === 400) {
          dispatch(
            archieveEmailAction(
              Constants.ARCHIEVE_EMAIL_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else
          dispatch(
            archieveEmailAction(
              Constants.ARCHIEVE_EMAIL_FAILURE,
              {},
              "Internal server error.",
              false
            )
          );
      }
    });
};

export const unsubscribeSenderApiCall = (info) => async (dispatch) => {
  dispatch(
    unsubscribeSenderAction(Constants.UNSUBSCRIBE_SENDER_START, {}, "", true)
  );

  var data = {};
  // data.username = info?.username;
  // data.password = info?.password;
  let sender = "@gmail.com";

  var config = {
    method: "post",
    url: process.env.REACT_PUBLISHED_LINK + `/mail/unsubscribe/${sender}`,
    headers: { "Content-Type": "application/json" },
    data: data,
  };

  await axios(config)
    .then((response) => {
      dispatch(
        unsubscribeSenderAction(
          Constants.UNSUBSCRIBE_SENDER_SUCCESS,
          response.data,
          "Email unsubscribed Successfully!!",
          false
        )
      );
      console.log(
        `Data from the API - UNSUBSCRIBE_SENDER_SUCCESS`,
        response.data
      );
    })
    .catch((error) => {
      if (error) {
        if (error.response && error.response.status === 404) {
          dispatch(
            unsubscribeSenderAction(
              Constants.UNSUBSCRIBE_SENDER_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else if (error.response && error.response.status === 400) {
          dispatch(
            unsubscribeSenderAction(
              Constants.UNSUBSCRIBE_SENDER_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else
          dispatch(
            unsubscribeSenderAction(
              Constants.UNSUBSCRIBE_SENDER_FAILURE,
              {},
              "Internal server error.",
              false
            )
          );
      }
    });
};
