export const sendEmailReducer = (state, payload) => {
  return {
    ...state,
    sendEmailData: payload && payload.data && payload.data,
    sendEmailMsg: payload && payload.message && payload.message,
    sendEmailLoading: payload && payload.loading && payload.loading,
  };
};

export const getInboxbyUserReducer = (state, payload) => {
  return {
    ...state,
    getInboxbyUserData: payload && payload.data && payload.data,
    getInboxbyUserMsg: payload && payload.message && payload.message,
    getInboxbyUserLoading: payload && payload.loading && payload.loading,
  };
};

export const getSentByuserIdReducer = (state, payload) => {
  return {
    ...state,
    getSentByuserIdData: payload && payload.data && payload.data,
    getSentByuserIdMsg: payload && payload.message && payload.message,
    getSentByuserIdLoading: payload && payload.loading && payload.loading,
  };
};

export const getThreadByIDReducer = (state, payload) => {
  return {
    ...state,
    getThreadByIDData: payload && payload.data && payload.data,
    getThreadByIDMsg: payload && payload.message && payload.message,
    getThreadByIDLoading: payload && payload.loading && payload.loading,
  };
};

export const replyEmailbyEmailIDReducer = (state, payload) => {
  return {
    ...state,
    replyEmailbyEmailIDData: payload && payload.data && payload.data,
    replyEmailbyEmailIDMsg: payload && payload.message && payload.message,
    replyEmailbyEmailIDLoading: payload && payload.loading && payload.loading,
  };
};

export const deleteEmailReducer = (state, payload) => {
  return {
    ...state,
    deleteEmailData: payload && payload.data && payload.data,
    deleteEmailMsg: payload && payload.message && payload.message,
    deleteEmailLoading: payload && payload.loading && payload.loading,
  };
};

export const archieveEmailReducer = (state, payload) => {
  return {
    ...state,
    archieveEmailData: payload && payload.data && payload.data,
    archieveEmailMsg: payload && payload.message && payload.message,
    archieveEmailLoading: payload && payload.loading && payload.loading,
  };
};

export const unsubscribeSenderReducer = (state, payload) => {
  return {
    ...state,
    unsubscribeSenderData: payload && payload.data && payload.data,
    unsubscribeSenderMsg: payload && payload.message && payload.message,
    unsubscribeSenderLoading: payload && payload.loading && payload.loading,
  };
};