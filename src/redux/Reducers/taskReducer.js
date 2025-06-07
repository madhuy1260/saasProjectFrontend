export const createBoardReducer = (state, payload) => {
  return {
    ...state,
    createBoardData: payload && payload.data && payload.data,
    createBoardMsg: payload && payload.message && payload.message,
    createBoardLoading: payload && payload.loading && payload.loading,
  };
};

export const getBoardsListReducer = (state, payload) => {
  return {
    ...state,
    getBoardsListData: payload && payload.data && payload.data,
    getBoardsListMsg: payload && payload.message && payload.message,
    getBoardsListLoading: payload && payload.loading && payload.loading,
  };
};

export const createTicketsReducer = (state, payload) => {
  return {
    ...state,
    createTicketsData: payload && payload.data && payload.data,
    createTicketsMsg: payload && payload.message && payload.message,
    createTicketsLoading: payload && payload.loading && payload.loading,
  };
};

export const getTicketsByBoardIDReducer = (state, payload) => {
  return {
    ...state,
    getTicketsByBoardIDData: payload && payload.data && payload.data,
    getTicketsByBoardIDMsg: payload && payload.message && payload.message,
    getTicketsByBoardIDLoading: payload && payload.loading && payload.loading,
  };
};

export const updateTicketByTicketIDReducer = (state, payload) => {
  return {
    ...state,
    updateTicketByTicketIDData: payload && payload.data && payload.data,
    updateTicketByTicketIDMsg: payload && payload.message && payload.message,
    updateTicketByTicketIDLoading: payload && payload.loading && payload.loading,
  };
};

export const getTicketDetailsByTicketIDReducer = (state, payload) => {
  return {
    ...state,
    getTicketDetailsByTicketIDData: payload && payload.data && payload.data,
    getTicketDetailsByTicketIDMsg: payload && payload.message && payload.message,
    getTicketDetailsByTicketIDLoading: payload && payload.loading && payload.loading,
  };
};

export const addCommenttoTicketByIDReducer = (state, payload) => {
  return {
    ...state,
    addCommenttoTicketByIDData: payload && payload.data && payload.data,
    addCommenttoTicketByIDMsg: payload && payload.message && payload.message,
    addCommenttoTicketByIDLoading: payload && payload.loading && payload.loading,
  };
};

export const getCommentsByTicketIDReducer = (state, payload) => {
  return {
    ...state,
    getCommentsByTicketIDData: payload && payload.data && payload.data,
    getCommentsByTicketIDMsg: payload && payload.message && payload.message,
    getCommentsByTicketIDLoading: payload && payload.loading && payload.loading,
  };
};

export const getReportByBoardIDReducer = (state, payload) => {
  return {
    ...state,
    getReportByBoardIDData: payload && payload.data && payload.data,
    getReportByBoardIDMsg: payload && payload.message && payload.message,
    getReportByBoardIDLoading: payload && payload.loading && payload.loading,
  };
};

export const getSprintByBoardIDReducer = (state, payload) => {
  return {
    ...state,
    getSprintByBoardIDData: payload && payload.data && payload.data,
    getSprintByBoardIDMsg: payload && payload.message && payload.message,
    getSprintByBoardIDLoading: payload && payload.loading && payload.loading,
  };
};