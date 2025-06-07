import axios from "axios";
import * as Constants from "../Constants";
import {
  downloadFileAction,
  searchUsersAction,
  uploadFileAction,
} from "../Actions/utilityActions";

export const searchUsersApiCall = (info) => async (dispatch) => {
  dispatch(searchUsersAction(Constants.SEARCH_USERS_START, {}, "", true));

  var data = {};
  // data.username = info?.username;
  // data.password = info?.password;

  var config = {
    method: "get",
    url: process.env.REACT_PUBLISHED_LINK + "/search/users",
    headers: { "Content-Type": "application/json" },
    // data: data,
  };

  await axios(config)
    .then((response) => {
      dispatch(
        searchUsersAction(
          Constants.SEARCH_USERS_SUCCESS,
          response.data,
          "Users Search data Successfully!!",
          false
        )
      );
      console.log(`Data from the API - SEARCH_USERS_SUCCESS`, response.data);
    })
    .catch((error) => {
      if (error) {
        if (error.response && error.response.status === 404) {
          dispatch(
            searchUsersAction(
              Constants.SEARCH_USERS_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else if (error.response && error.response.status === 400) {
          dispatch(
            searchUsersAction(
              Constants.SEARCH_USERS_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else
          dispatch(
            searchUsersAction(
              Constants.SEARCH_USERS_FAILURE,
              {},
              "Internal server error.",
              false
            )
          );
      }
    });
};

export const downloadFileApiCall = (info) => async (dispatch) => {
  dispatch(downloadFileAction(Constants.DOWNLOAD_FILE_START, {}, "", true));

  var data = {};
  // data.username = info?.username;
  // data.password = info?.password;
  let fileId = 25;

  var config = {
    method: "get",
    url: process.env.REACT_PUBLISHED_LINK + `/files/${fileId}`,
    headers: { "Content-Type": "application/json" },
    // data: data,
  };

  await axios(config)
    .then((response) => {
      dispatch(
        downloadFileAction(
          Constants.DOWNLOAD_FILE_SUCCESS,
          response.data,
          "File Downloaded Successfully!!",
          false
        )
      );
      console.log(`Data from the API - DOWNLOAD_FILE_SUCCESS`, response.data);
    })
    .catch((error) => {
      if (error) {
        if (error.response && error.response.status === 404) {
          dispatch(
            downloadFileAction(
              Constants.DOWNLOAD_FILE_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else if (error.response && error.response.status === 400) {
          dispatch(
            downloadFileAction(
              Constants.DOWNLOAD_FILE_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else
          dispatch(
            downloadFileAction(
              Constants.DOWNLOAD_FILE_FAILURE,
              {},
              "Internal server error.",
              false
            )
          );
      }
    });
};

export const uploadFileApiCall = (info) => async (dispatch) => {
  dispatch(uploadFileAction(Constants.UPLOAD_FILE_START, {}, "", true));

  var data = {};
  // data.username = info?.username;
  // data.password = info?.password;

  var config = {
    method: "post",
    url: process.env.REACT_PUBLISHED_LINK + "/files/upload",
    headers: { "Content-Type": "application/json" },
    data: data,
  };

  await axios(config)
    .then((response) => {
      dispatch(
        uploadFileAction(
          Constants.UPLOAD_FILE_SUCCESS,
          response.data,
          "File Uploaded Successfully!!",
          false
        )
      );
      console.log(`Data from the API - UPLOAD_FILE_SUCCESS`, response.data);
    })
    .catch((error) => {
      if (error) {
        if (error.response && error.response.status === 404) {
          dispatch(
            uploadFileAction(
              Constants.UPLOAD_FILE_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else if (error.response && error.response.status === 400) {
          dispatch(
            uploadFileAction(
              Constants.UPLOAD_FILE_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else
          dispatch(
            uploadFileAction(
              Constants.UPLOAD_FILE_FAILURE,
              {},
              "Internal server error.",
              false
            )
          );
      }
    });
};
