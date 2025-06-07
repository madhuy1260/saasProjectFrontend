import axios from "axios";
import * as Constants from "../Constants";
import {
  assignPlanToTenantAction,
  getAllPlansAction,
  getTenantModulesAction,
  getTenantPlanAction,
} from "../Actions/planActions";

export const getAllPlansApiCall = (info) => async (dispatch) => {
  dispatch(getAllPlansAction(Constants.GET_ALLPLANS_START, {}, "", true));

  var data = {};
  // data.username = info?.username;
  // data.password = info?.password;

  var config = {
    method: "get",
    url: process.env.REACT_PUBLISHED_LINK + "/plans",
    headers: { "Content-Type": "application/json" },
    // data: data,
  };

  await axios(config)
    .then((response) => {
      dispatch(
        getAllPlansAction(
          Constants.GET_ALLPLANS_SUCCESS,
          response.data,
          "All plans Data Loaded Successfully!!",
          false
        )
      );
      console.log(`Data from the API - GET_ALLPLANS_SUCCESS`, response.data);
    })
    .catch((error) => {
      if (error) {
        if (error.response && error.response.status === 404) {
          dispatch(
            getAllPlansAction(
              Constants.GET_ALLPLANS_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else if (error.response && error.response.status === 400) {
          dispatch(
            getAllPlansAction(
              Constants.GET_ALLPLANS_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else
          dispatch(
            getAllPlansAction(
              Constants.GET_ALLPLANS_FAILURE,
              {},
              "Internal server error.",
              false
            )
          );
      }
    });
};

export const getTenantPlanApiCall = (info) => async (dispatch) => {
  dispatch(getTenantPlanAction(Constants.GET_TENANT_PLAN_START, {}, "", true));

  var data = {};
  // data.username = info?.username;
  // data.password = info?.password;
  let tenantId = 25;

  var config = {
    method: "get",
    url: process.env.REACT_PUBLISHED_LINK + `/plans/${tenantId}`,
    headers: { "Content-Type": "application/json" },
    // data: data,
  };

  await axios(config)
    .then((response) => {
      dispatch(
        getTenantPlanAction(
          Constants.GET_TENANT_PLAN_SUCCESS,
          response.data,
          "Tenant plan data Loaded Successfully!!",
          false
        )
      );
      console.log(`Data from the API - GET_TENANT_PLAN_SUCCESS`, response.data);
    })
    .catch((error) => {
      if (error) {
        if (error.response && error.response.status === 404) {
          dispatch(
            getTenantPlanAction(
              Constants.GET_TENANT_PLAN_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else if (error.response && error.response.status === 400) {
          dispatch(
            getTenantPlanAction(
              Constants.GET_TENANT_PLAN_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else
          dispatch(
            getTenantPlanAction(
              Constants.GET_TENANT_PLAN_FAILURE,
              {},
              "Internal server error.",
              false
            )
          );
      }
    });
};

export const assignPlanToTenantApiCall = (info) => async (dispatch) => {
  dispatch(
    assignPlanToTenantAction(
      Constants.ASSIGN_PLAN_TO_TENANT_START,
      {},
      "",
      true
    )
  );

  var data = {};
  // data.username = info?.username;
  // data.password = info?.password;

  var config = {
    method: "post",
    url: process.env.REACT_PUBLISHED_LINK + "/plans/assign",
    headers: { "Content-Type": "application/json" },
    data: data,
  };

  await axios(config)
    .then((response) => {
      dispatch(
        assignPlanToTenantAction(
          Constants.ASSIGN_PLAN_TO_TENANT_SUCCESS,
          response.data,
          "Plan assigned to you  Successfully!!",
          false
        )
      );
      console.log(
        `Data from the API - ASSIGN_PLAN_TO_TENANT_SUCCESS`,
        response.data
      );
    })
    .catch((error) => {
      if (error) {
        if (error.response && error.response.status === 404) {
          dispatch(
            assignPlanToTenantAction(
              Constants.ASSIGN_PLAN_TO_TENANT_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else if (error.response && error.response.status === 400) {
          dispatch(
            assignPlanToTenantAction(
              Constants.ASSIGN_PLAN_TO_TENANT_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else
          dispatch(
            assignPlanToTenantAction(
              Constants.ASSIGN_PLAN_TO_TENANT_FAILURE,
              {},
              "Internal server error.",
              false
            )
          );
      }
    });
};

export const getTenantModulesApiCall = (info) => async (dispatch) => {
  dispatch(
    getTenantModulesAction(Constants.GET_TENANT_MODULES_START, {}, "", true)
  );

  var data = {};
  // data.username = info?.username;
  // data.password = info?.password;
  let tenantId = 25;

  var config = {
    method: "get",
    url: process.env.REACT_PUBLISHED_LINK + `/modules/${tenantId}`,
    headers: { "Content-Type": "application/json" },
    // data: data,
  };

  await axios(config)
    .then((response) => {
      dispatch(
        getTenantModulesAction(
          Constants.GET_TENANT_MODULES_SUCCESS,
          response.data,
          "Tenant modules data Loaded Successfully!!",
          false
        )
      );
      console.log(
        `Data from the API - GET_TENANT_MODULES_SUCCESS`,
        response.data
      );
    })
    .catch((error) => {
      if (error) {
        if (error.response && error.response.status === 404) {
          dispatch(
            getTenantModulesAction(
              Constants.GET_TENANT_MODULES_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else if (error.response && error.response.status === 400) {
          dispatch(
            getTenantModulesAction(
              Constants.GET_TENANT_MODULES_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else
          dispatch(
            getTenantModulesAction(
              Constants.GET_TENANT_MODULES_FAILURE,
              {},
              "Internal server error.",
              false
            )
          );
      }
    });
};
