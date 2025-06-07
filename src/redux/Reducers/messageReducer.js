export const createChannelReducer = (state, payload) => {
  return {
    ...state,
    createChannelData: payload && payload.data && payload.data,
    createChannelMsg: payload && payload.message && payload.message,
    createChannelLoading: payload && payload.loading && payload.loading,
  };
};

export const getChannelsByTenantIdReducer = (state, payload) => {
  return {
    ...state,
    getChannelsByTenantIdData: payload && payload.data && payload.data,
    getChannelsByTenantIdMsg: payload && payload.message && payload.message,
    getChannelsByTenantIdLoading: payload && payload.loading && payload.loading,
  };
};

export const sendMessageReducer = (state, payload) => {
  return {
    ...state,
    sendMessageData: payload && payload.data && payload.data,
    sendMessageMsg: payload && payload.message && payload.message,
    sendMessageLoading: payload && payload.loading && payload.loading,
  };
};

export const getThreadByMessageIDReducer = (state, payload) => {
  return {
    ...state,
    getThreadByMessageIDData: payload && payload.data && payload.data,
    getThreadByMessageIDMsg: payload && payload.message && payload.message,
    getThreadByMessageIDLoading: payload && payload.loading && payload.loading,
  };
};

export const replyToMessageReducer = (state, payload) => {
  return {
    ...state,
    replyToMessageData: payload && payload.data && payload.data,
    replyToMessageMsg: payload && payload.message && payload.message,
    replyToMessageLoading: payload && payload.loading && payload.loading,
  };
};

export const reactToMessageReducer = (state, payload) => {
  return {
    ...state,
    reactToMessageData: payload && payload.data && payload.data,
    reactToMessageMsg: payload && payload.message && payload.message,
    reactToMessageLoading: payload && payload.loading && payload.loading,
  };
};

export const getuserPresencebyUserIDReducer = (state, payload) => {
  return {
    ...state,
    getuserPresencebyUserIDData: payload && payload.data && payload.data,
    getuserPresencebyUserIDMsg: payload && payload.message && payload.message,
    getuserPresencebyUserIDLoading: payload && payload.loading && payload.loading,
  };
};

export const pinMessageByMessageIDReducer = (state, payload) => {
  return {
    ...state,
    pinMessageByMessageIDData: payload && payload.data && payload.data,
    pinMessageByMessageIDMsg: payload && payload.message && payload.message,
    pinMessageByMessageIDLoading: payload && payload.loading && payload.loading,
  };
};

export const deleteMessageByMessageIDReducer = (state, payload) => {
  return {
    ...state,
    deleteMessageByMessageIDData: payload && payload.data && payload.data,
    deleteMessageByMessageIDMsg: payload && payload.message && payload.message,
    deleteMessageByMessageIDLoading: payload && payload.loading && payload.loading,
  };
};