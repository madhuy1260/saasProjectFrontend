import axios from "axios";
import {
  getProfileByUserIDAction,
  getProfileDetailsAction,
  getUsersByTenantAction,
  loginAction,
  loginTenantAction,
  registerTenantAction,
  registerUserAction,
  validateTokenAction,
} from "../Actions/authActions";
import * as Constants from "../Constants";

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

export const registerTenantApiCall = (info) => async (dispatch) => {
  dispatch(registerTenantAction(Constants.REGISTER_TENANT_START, {}, "", true));

  var data = {};
  // data.username = info?.username;
  // data.password = info?.password;

  var config = {
    method: "post",
    url: process.env.REACT_PUBLISHED_LINK + "/auth/register-tenant",
    headers: { "Content-Type": "application/json" },
    data: data,
  };

  await axios(config)
    .then((response) => {
      dispatch(
        registerTenantAction(
          Constants.REGISTER_TENANT_SUCCESS,
          response.data,
          "Tenant Registered Successfully!!",
          false
        )
      );
      console.log(`Data from the API - REGISTER_TENANT_SUCCESS`, response.data);
    })
    .catch((error) => {
      if (error) {
        if (error.response && error.response.status === 404) {
          dispatch(
            registerTenantAction(
              Constants.REGISTER_TENANT_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else if (error.response && error.response.status === 400) {
          dispatch(
            registerTenantAction(
              Constants.REGISTER_TENANT_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else
          dispatch(
            registerTenantAction(
              Constants.REGISTER_TENANT_FAILURE,
              {},
              "Internal server error.",
              false
            )
          );
      }
    });
};

export const registerUserApiCall = (info) => async (dispatch) => {
  dispatch(registerUserAction(Constants.REGISTER_USER_START, {}, "", true));

  var data = {};
  // data.username = info?.username;
  // data.password = info?.password;

  var config = {
    method: "post",
    url: process.env.REACT_PUBLISHED_LINK + "/auth/register-user",
    headers: { "Content-Type": "application/json" },
    data: data,
  };

  await axios(config)
    .then((response) => {
      dispatch(
        registerUserAction(
          Constants.REGISTER_USER_SUCCESS,
          response.data,
          "User Registered Successfully!!",
          false
        )
      );
      console.log(`Data from the API - REGISTER_USER_SUCCESS`, response.data);
    })
    .catch((error) => {
      if (error) {
        if (error.response && error.response.status === 404) {
          dispatch(
            registerUserAction(
              Constants.REGISTER_USER_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else if (error.response && error.response.status === 400) {
          dispatch(
            registerUserAction(
              Constants.REGISTER_USER_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else
          dispatch(
            registerUserAction(
              Constants.REGISTER_USER_FAILURE,
              {},
              "Internal server error.",
              false
            )
          );
      }
    });
};

export const loginTenantApiCall = (info) => async (dispatch) => {
  dispatch(loginTenantAction(Constants.LOGIN_TENANT_START, {}, "", true));

  var data = {};
  // data.username = info?.username;
  // data.password = info?.password;

  var config = {
    method: "post",
    url: process.env.REACT_PUBLISHED_LINK + "/auth/login",
    headers: { "Content-Type": "application/json" },
    data: data,
  };

  await axios(config)
    .then((response) => {
      dispatch(
        loginTenantAction(
          Constants.LOGIN_TENANT_SUCCESS,
          response.data,
          "Tenant Logged in Successfully!!",
          false
        )
      );
      console.log(`Data from the API - LOGIN_TENANT_SUCCESS`, response.data);
    })
    .catch((error) => {
      if (error) {
        if (error.response && error.response.status === 404) {
          dispatch(
            loginTenantAction(
              Constants.LOGIN_TENANT_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else if (error.response && error.response.status === 400) {
          dispatch(
            loginTenantAction(
              Constants.LOGIN_TENANT_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else
          dispatch(
            loginTenantAction(
              Constants.LOGIN_TENANT_FAILURE,
              {},
              "Internal server error.",
              false
            )
          );
      }
    });
};

export const validateTokenApiCall = (info) => async (dispatch) => {
  dispatch(validateTokenAction(Constants.VALIDATE_TOKEN_START, {}, "", true));

  var data = {};
  // data.username = info?.username;
  // data.password = info?.password;

  var config = {
    method: "get",
    url: process.env.REACT_PUBLISHED_LINK + "/auth/validate-token",
    headers: { "Content-Type": "application/json" },
    data: data,
  };

  await axios(config)
    .then((response) => {
      dispatch(
        validateTokenAction(
          Constants.VALIDATE_TOKEN_SUCCESS,
          response.data,
          "Token Validated Successfully!!",
          false
        )
      );
      console.log(`Data from the API - VALIDATE_TOKEN_SUCCESS`, response.data);
    })
    .catch((error) => {
      if (error) {
        if (error.response && error.response.status === 404) {
          dispatch(
            validateTokenAction(
              Constants.VALIDATE_TOKEN_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else if (error.response && error.response.status === 400) {
          dispatch(
            validateTokenAction(
              Constants.VALIDATE_TOKEN_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else
          dispatch(
            validateTokenAction(
              Constants.VALIDATE_TOKEN_FAILURE,
              {},
              "Internal server error.",
              false
            )
          );
      }
    });
};

export const getUsersByTenantApiCall = (info) => async (dispatch) => {
  dispatch(
    getUsersByTenantAction(Constants.GETUSERSBY_TENANT_START, {}, "", true)
  );

  var data = {};
  let tenantId = 25;
  // data.username = info?.username;
  // data.password = info?.password;

  var config = {
    method: "get",
    url: process.env.REACT_PUBLISHED_LINK + `/auth/users/${tenantId}`,
    headers: { "Content-Type": "application/json" },
    data: data,
  };

  await axios(config)
    .then((response) => {
      dispatch(
        getUsersByTenantAction(
          Constants.GETUSERSBY_TENANT_SUCCESS,
          response.data,
          "Tenant Users Data Loaded Successfully!!",
          false
        )
      );
      console.log(
        `Data from the API - GETUSERSBY_TENANT_SUCCESS`,
        response.data
      );
    })
    .catch((error) => {
      if (error) {
        if (error.response && error.response.status === 404) {
          dispatch(
            getUsersByTenantAction(
              Constants.GETUSERSBY_TENANT_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else if (error.response && error.response.status === 400) {
          dispatch(
            getUsersByTenantAction(
              Constants.GETUSERSBY_TENANT_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else
          dispatch(
            getUsersByTenantAction(
              Constants.GETUSERSBY_TENANT_FAILURE,
              {},
              "Internal server error.",
              false
            )
          );
      }
    });
};

export const getProfileByUserIDApiCall = (info) => async (dispatch) => {
  dispatch(
    getProfileByUserIDAction(Constants.GET_PROFILE_BYUSERID_START, {}, "", true)
  );

  var data = {};
  // data.username = info?.username;
  // data.password = info?.password;
  let userId = 25;

  var config = {
    method: "get",
    url: process.env.REACT_PUBLISHED_LINK + `/auth/profile/${userId}`,
    headers: { "Content-Type": "application/json" },
    data: data,
  };

  await axios(config)
    .then((response) => {
      dispatch(
        getProfileByUserIDAction(
          Constants.GET_PROFILE_BYUSERID_SUCCESS,
          response.data,
          "Profile Details by UserID Loaded Successfully!!",
          false
        )
      );
      console.log(
        `Data from the API - GET_PROFILE_BYUSERID_SUCCESS`,
        response.data
      );
    })
    .catch((error) => {
      if (error) {
        if (error.response && error.response.status === 404) {
          dispatch(
            getProfileByUserIDAction(
              Constants.GET_PROFILE_BYUSERID_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else if (error.response && error.response.status === 400) {
          dispatch(
            getProfileByUserIDAction(
              Constants.GET_PROFILE_BYUSERID_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else
          dispatch(
            getProfileByUserIDAction(
              Constants.GET_PROFILE_BYUSERID_FAILURE,
              {},
              "Internal server error.",
              false
            )
          );
      }
    });
};

export const getProfileDetailsApiCall = (info) => async (dispatch) => {
  dispatch(getProfileDetailsAction(Constants.GET_PROFILE_START, {}, "", true));

  var data = {};
  // data.username = info?.username;
  // data.password = info?.password;

  var config = {
    method: "get",
    url: process.env.REACT_PUBLISHED_LINK + "/auth/profile",
    headers: { "Content-Type": "application/json" },
    data: data,
  };

  await axios(config)
    .then((response) => {
      dispatch(
        getProfileDetailsAction(
          Constants.GET_PROFILE_SUCCESS,
          response.data,
          "Profile Data Loaded Successfully!!",
          false
        )
      );
      console.log(`Data from the API - GET_PROFILE_SUCCESS`, response.data);
    })
    .catch((error) => {
      if (error) {
        if (error.response && error.response.status === 404) {
          dispatch(
            getProfileDetailsAction(
              Constants.GET_PROFILE_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else if (error.response && error.response.status === 400) {
          dispatch(
            getProfileDetailsAction(
              Constants.GET_PROFILE_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else
          dispatch(
            getProfileDetailsAction(
              Constants.GET_PROFILE_FAILURE,
              {},
              "Internal server error.",
              false
            )
          );
      }
    });
};
