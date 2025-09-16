export const getTicketDetailsByTicketIDReducer = (state, payload) => {
  return {
    ...state,
    getTicketDetailsByTicketIDData: payload && payload.data && payload.data,
    getTicketDetailsByTicketIDMsg:
      payload && payload.message && payload.message,
    getTicketDetailsByTicketIDLoading:
      payload && payload.loading && payload.loading,
  };
};
