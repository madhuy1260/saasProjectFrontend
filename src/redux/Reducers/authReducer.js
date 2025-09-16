export const loginReducer = (state, payload) => {
  return {
    ...state,
    loginData: payload && payload.data && payload.data,
    loginMsg: payload && payload.message && payload.message,
    loginLoading: payload && payload.loading && payload.loading,
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
