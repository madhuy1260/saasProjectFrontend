import axios from "axios";
import { loginAction } from "../Actions/authActions";
import * as Constants from "../Constants"

export const getLogin = (info) => async (dispatch) => {
  dispatch(loginAction(Constants.LOGIN_USER_START, {}, "", true));

  var data = {};
  data.username = info?.username;
  data.password = info?.password;

  var config = {
    method: "post",
    url: process.env.REACT_APP_API_URL + "LoginStoreUser",
    headers: { "Content-Type": "application/json" },
    data: data,
  };

  await axios(config)
    .then((response) => {
      dispatch(
        loginAction(
          Constants.LOGIN_USER_SUCCESS,
          response.data,
          "Login Successfully!!",
          false
        )
      );
      localStorage.setItem("LoginINFO", JSON.stringify(response.data.data));
    })
    .catch((error) => {
      if (error) {
        if (error.response && error.response.status === 404) {
          dispatch(
            loginAction(
              Constants.LOGIN_USER_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else if (error.response && error.response.status === 400) {
          dispatch(
            loginAction(
              Constants.LOGIN_USER_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else
          dispatch(
            loginAction(
              Constants.LOGIN_USER_FAILURE,
              {},
              "Internal server error.",
              false
            )
          );
      }
    });
};