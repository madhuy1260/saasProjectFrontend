import axios from "axios";
import * as Constants from "../Constants";
import {
  createMeetingAction,
  getAttendanceinMeetingAction,
  getMeetingByIDAction,
  getMeetingListByTenantIdAction,
  getSummaryofMeetingAction,
  joinMeetingAction,
  sendChatInMeetingAction,
  toggleRecordingAction,
} from "../Actions/meetingActions";

export const createMeetingApiCall = (info) => async (dispatch) => {
  dispatch(createMeetingAction(Constants.CREATE_MEETING_START, {}, "", true));

  var data = {};
  // data.username = info?.username;
  // data.password = info?.password;

  var config = {
    method: "post",
    url: process.env.REACT_PUBLISHED_LINK + "/meetings/create",
    headers: { "Content-Type": "application/json" },
    data: data,
  };

  await axios(config)
    .then((response) => {
      dispatch(
        createMeetingAction(
          Constants.CREATE_MEETING_SUCCESS,
          response.data,
          "Meeting Created Successfully!!",
          false
        )
      );
      console.log(`Data from the API - CREATE_MEETING_SUCCESS`, response.data);
    })
    .catch((error) => {
      if (error) {
        if (error.response && error.response.status === 404) {
          dispatch(
            createMeetingAction(
              Constants.CREATE_MEETING_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else if (error.response && error.response.status === 400) {
          dispatch(
            createMeetingAction(
              Constants.CREATE_MEETING_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else
          dispatch(
            createMeetingAction(
              Constants.CREATE_MEETING_FAILURE,
              {},
              "Internal server error.",
              false
            )
          );
      }
    });
};

export const getMeetingListByTenantIdApiCall = (info) => async (dispatch) => {
  dispatch(
    getMeetingListByTenantIdAction(
      Constants.GETMEETING_LIST_BYTENANT_START,
      {},
      "",
      true
    )
  );

  var data = {};
  // data.username = info?.username;
  // data.password = info?.password;
  let tenantId = 25;

  var config = {
    method: "get",
    url: process.env.REACT_PUBLISHED_LINK + `/meetings/list/${tenantId}`,
    headers: { "Content-Type": "application/json" },
    // data: data,
  };

  await axios(config)
    .then((response) => {
      dispatch(
        getMeetingListByTenantIdAction(
          Constants.GETMEETING_LIST_BYTENANT_SUCCESS,
          response.data,
          "Meeting List Loaded Successfully!!",
          false
        )
      );
      console.log(
        `Data from the API - GETMEETING_LIST_BYTENANT_SUCCESS`,
        response.data
      );
    })
    .catch((error) => {
      if (error) {
        if (error.response && error.response.status === 404) {
          dispatch(
            getMeetingListByTenantIdAction(
              Constants.GETMEETING_LIST_BYTENANT_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else if (error.response && error.response.status === 400) {
          dispatch(
            getMeetingListByTenantIdAction(
              Constants.GETMEETING_LIST_BYTENANT_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else
          dispatch(
            getMeetingListByTenantIdAction(
              Constants.GETMEETING_LIST_BYTENANT_FAILURE,
              {},
              "Internal server error.",
              false
            )
          );
      }
    });
};

export const getMeetingByIDApiCall = (info) => async (dispatch) => {
  dispatch(getMeetingByIDAction(Constants.GETMEETING_BYID_START, {}, "", true));

  var data = {};
  // data.username = info?.username;
  // data.password = info?.password;
  let meetingId = 25;

  var config = {
    method: "get",
    url: process.env.REACT_PUBLISHED_LINK + `/meetings/${meetingId}`,
    headers: { "Content-Type": "application/json" },
    // data: data,
  };

  await axios(config)
    .then((response) => {
      dispatch(
        getMeetingByIDAction(
          Constants.GETMEETING_BYID_SUCCESS,
          response.data,
          "Meeting Details Loaded Successfully!!",
          false
        )
      );
      console.log(`Data from the API - GETMEETING_BYID_SUCCESS`, response.data);
    })
    .catch((error) => {
      if (error) {
        if (error.response && error.response.status === 404) {
          dispatch(
            getMeetingByIDAction(
              Constants.GETMEETING_BYID_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else if (error.response && error.response.status === 400) {
          dispatch(
            getMeetingByIDAction(
              Constants.GETMEETING_BYID_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else
          dispatch(
            getMeetingByIDAction(
              Constants.GETMEETING_BYID_FAILURE,
              {},
              "Internal server error.",
              false
            )
          );
      }
    });
};

export const joinMeetingApiCall = (info) => async (dispatch) => {
  dispatch(joinMeetingAction(Constants.JOIN_MEETING_START, {}, "", true));

  var data = {};
  // data.username = info?.username;
  // data.password = info?.password;
  let meetingId = 25;

  var config = {
    method: "post",
    url: process.env.REACT_PUBLISHED_LINK + `/meetings/join/${meetingId}`,
    headers: { "Content-Type": "application/json" },
    data: data,
  };

  await axios(config)
    .then((response) => {
      dispatch(
        joinMeetingAction(
          Constants.JOIN_MEETING_SUCCESS,
          response.data,
          "Joined Meeting Successfully!!",
          false
        )
      );
      console.log(`Data from the API - JOIN_MEETING_SUCCESS`, response.data);
    })
    .catch((error) => {
      if (error) {
        if (error.response && error.response.status === 404) {
          dispatch(
            joinMeetingAction(
              Constants.JOIN_MEETING_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else if (error.response && error.response.status === 400) {
          dispatch(
            joinMeetingAction(
              Constants.JOIN_MEETING_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else
          dispatch(
            joinMeetingAction(
              Constants.JOIN_MEETING_FAILURE,
              {},
              "Internal server error.",
              false
            )
          );
      }
    });
};

export const toggleRecordingApiCall = (info) => async (dispatch) => {
  dispatch(
    toggleRecordingAction(Constants.TOGGLE_RECORDING_START, {}, "", true)
  );

  var data = {};
  // data.username = info?.username;
  // data.password = info?.password;
  let meetingId = 25;

  var config = {
    method: "post",
    url: process.env.REACT_PUBLISHED_LINK + `/meetings/record/${meetingId}`,
    headers: { "Content-Type": "application/json" },
    data: data,
  };

  await axios(config)
    .then((response) => {
      dispatch(
        toggleRecordingAction(
          Constants.TOGGLE_RECORDING_SUCCESS,
          response.data,
          "Call Recording started Successfully!!",
          false
        )
      );
      console.log(
        `Data from the API - TOGGLE_RECORDING_SUCCESS`,
        response.data
      );
    })
    .catch((error) => {
      if (error) {
        if (error.response && error.response.status === 404) {
          dispatch(
            toggleRecordingAction(
              Constants.TOGGLE_RECORDING_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else if (error.response && error.response.status === 400) {
          dispatch(
            toggleRecordingAction(
              Constants.TOGGLE_RECORDING_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else
          dispatch(
            toggleRecordingAction(
              Constants.TOGGLE_RECORDING_FAILURE,
              {},
              "Internal server error.",
              false
            )
          );
      }
    });
};

export const sendChatInMeetingApiCall = (info) => async (dispatch) => {
  dispatch(
    sendChatInMeetingAction(Constants.SENDCHAT_INMEETING_START, {}, "", true)
  );

  var data = {};
  // data.username = info?.username;
  // data.password = info?.password;
  let meetingId = 25;

  var config = {
    method: "post",
    url: process.env.REACT_PUBLISHED_LINK + `/meetings/chat/${meetingId}`,
    headers: { "Content-Type": "application/json" },
    data: data,
  };

  await axios(config)
    .then((response) => {
      dispatch(
        sendChatInMeetingAction(
          Constants.SENDCHAT_INMEETING_SUCCESS,
          response.data,
          "sending message in Meeting Successfully!!",
          false
        )
      );
      console.log(
        `Data from the API - SENDCHAT_INMEETING_SUCCESS`,
        response.data
      );
    })
    .catch((error) => {
      if (error) {
        if (error.response && error.response.status === 404) {
          dispatch(
            sendChatInMeetingAction(
              Constants.SENDCHAT_INMEETING_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else if (error.response && error.response.status === 400) {
          dispatch(
            sendChatInMeetingAction(
              Constants.SENDCHAT_INMEETING_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else
          dispatch(
            sendChatInMeetingAction(
              Constants.SENDCHAT_INMEETING_FAILURE,
              {},
              "Internal server error.",
              false
            )
          );
      }
    });
};

export const getSummaryofMeetingApiCall = (info) => async (dispatch) => {
  dispatch(
    getSummaryofMeetingAction(Constants.GET_SUMMARY_START, {}, "", true)
  );

  var data = {};
  // data.username = info?.username;
  // data.password = info?.password;
  let meetingId = 25;

  var config = {
    method: "get",
    url: process.env.REACT_PUBLISHED_LINK + `/meetings/summary/${meetingId}`,
    headers: { "Content-Type": "application/json" },
    data: data,
  };

  await axios(config)
    .then((response) => {
      dispatch(
        getSummaryofMeetingAction(
          Constants.GET_SUMMARY_SUCCESS,
          response.data,
          "Meeting Summary Data Loaded Successfully!!",
          false
        )
      );
      console.log(`Data from the API - GET_SUMMARY_SUCCESS`, response.data);
    })
    .catch((error) => {
      if (error) {
        if (error.response && error.response.status === 404) {
          dispatch(
            getSummaryofMeetingAction(
              Constants.GET_SUMMARY_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else if (error.response && error.response.status === 400) {
          dispatch(
            getSummaryofMeetingAction(
              Constants.GET_SUMMARY_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else
          dispatch(
            getSummaryofMeetingAction(
              Constants.GET_SUMMARY_FAILURE,
              {},
              "Internal server error.",
              false
            )
          );
      }
    });
};

export const getAttendanceinMeetingApiCall = (info) => async (dispatch) => {
  dispatch(
    getAttendanceinMeetingAction(Constants.GET_ATTENDANCE_START, {}, "", true)
  );

  var data = {};
  // data.username = info?.username;
  // data.password = info?.password;
  let meetingId = 25;

  var config = {
    method: "post",
    url: process.env.REACT_PUBLISHED_LINK + `/meetings/attendance/${meetingId}`,
    headers: { "Content-Type": "application/json" },
    data: data,
  };

  await axios(config)
    .then((response) => {
      dispatch(
        getAttendanceinMeetingAction(
          Constants.GET_ATTENDANCE_SUCCESS,
          response.data,
          "Attendance added in meeting Successfully!!",
          false
        )
      );
      console.log(`Data from the API - GET_ATTENDANCE_SUCCESS`, response.data);
    })
    .catch((error) => {
      if (error) {
        if (error.response && error.response.status === 404) {
          dispatch(
            getAttendanceinMeetingAction(
              Constants.GET_ATTENDANCE_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else if (error.response && error.response.status === 400) {
          dispatch(
            getAttendanceinMeetingAction(
              Constants.GET_ATTENDANCE_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else
          dispatch(
            getAttendanceinMeetingAction(
              Constants.GET_ATTENDANCE_FAILURE,
              {},
              "Internal server error.",
              false
            )
          );
      }
    });
};
