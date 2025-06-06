export const loginReducer = (state, payload) => {
  return {
    ...state,
    loginData: payload && payload.data && payload.data,
    loginMsg: payload && payload.message && payload.message,
    loginLoading: payload && payload.loading && payload.loading,
  };
};