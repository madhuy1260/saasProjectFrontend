export const loginReducer = (state, payload) => {
  return {
    ...state,
    loginData: payload && payload.data && payload.data,
    loginMsg: payload && payload.message && payload.message,
    loginLoading: payload && payload.loading && payload.loading,
  };
};

export const registerTenantReducer = (state, payload) => {
  return {
    ...state,
    registerTenantData: payload && payload.data && payload.data,
    registerTenantMsg: payload && payload.message && payload.message,
    registerTenantLoading: payload && payload.loading && payload.loading,
  };
};

export const registerUserReducer = (state, payload) => {
  return {
    ...state,
    registerUserData: payload && payload.data && payload.data,
    registerUserMsg: payload && payload.message && payload.message,
    registerUserLoading: payload && payload.loading && payload.loading,
  };
};

export const loginTenantReducer = (state, payload) => {
  return {
    ...state,
    loginTenantData: payload && payload.data && payload.data,
    loginTenantMsg: payload && payload.message && payload.message,
    loginTenantLoading: payload && payload.loading && payload.loading,
  };
};

export const validateTokenReducer = (state, payload) => {
  return {
    ...state,
    validateTokenData: payload && payload.data && payload.data,
    validateTokenMsg: payload && payload.message && payload.message,
    validateTokenLoading: payload && payload.loading && payload.loading,
  };
};

export const getUsersByTenantReducer = (state, payload) => {
  return {
    ...state,
    getUsersByTenantData: payload && payload.data && payload.data,
    getUsersByTenantMsg: payload && payload.message && payload.message,
    getUsersByTenantLoading: payload && payload.loading && payload.loading,
  };
};

export const getProfileByUserIdReducer = (state, payload) => {
  return {
    ...state,
    getProfileByUserIdData: payload && payload.data && payload.data,
    getProfileByUserIdMsg: payload && payload.message && payload.message,
    getProfileByUserIdLoading: payload && payload.loading && payload.loading,
  };
};

export const getProfileDetailsReducer = (state, payload) => {
  return {
    ...state,
    getProfileDetailsData: payload && payload.data && payload.data,
    getProfileDetailsMsg: payload && payload.message && payload.message,
    getProfileDetailsLoading: payload && payload.loading && payload.loading,
  };
};