export const createMeetingReducer = (state, payload) => {
  return {
    ...state,
    createMeetingData: payload && payload.data && payload.data,
    createMeetingMsg: payload && payload.message && payload.message,
    createMeetingLoading: payload && payload.loading && payload.loading,
  };
};

export const getMeetingListByTenantIdReducer = (state, payload) => {
  return {
    ...state,
    getMeetingListByTenantIdData: payload && payload.data && payload.data,
    getMeetingListByTenantIdMsg: payload && payload.message && payload.message,
    getMeetingListByTenantIdLoading: payload && payload.loading && payload.loading,
  };
};

export const getMeetingByIDReducer = (state, payload) => {
  return {
    ...state,
    getMeetingByIDData: payload && payload.data && payload.data,
    getMeetingByIDMsg: payload && payload.message && payload.message,
    getMeetingByIDLoading: payload && payload.loading && payload.loading,
  };
};
export const joinMeetingReducer = (state, payload) => {
  return {
    ...state,
    joinMeetingData: payload && payload.data && payload.data,
    joinMeetingMsg: payload && payload.message && payload.message,
    joinMeetingLoading: payload && payload.loading && payload.loading,
  };
};

export const toggleRecordingReducer = (state, payload) => {
  return {
    ...state,
    toggleRecordingData: payload && payload.data && payload.data,
    toggleRecordingMsg: payload && payload.message && payload.message,
    toggleRecordingLoading: payload && payload.loading && payload.loading,
  };
};

export const sendChatInMeetingReducer = (state, payload) => {
  return {
    ...state,
    sendChatInMeetingData: payload && payload.data && payload.data,
    sendChatInMeetingMsg: payload && payload.message && payload.message,
    sendChatInMeetingLoading: payload && payload.loading && payload.loading,
  };
};

export const getSummaryofMeetingReducer = (state, payload) => {
  return {
    ...state,
    getSummaryofMeetingData: payload && payload.data && payload.data,
    getSummaryofMeetingMsg: payload && payload.message && payload.message,
    getSummaryofMeetingLoading: payload && payload.loading && payload.loading,
  };
};

export const getAttendanceinMeetingReducer = (state, payload) => {
  return {
    ...state,
    getAttendanceinMeetingData: payload && payload.data && payload.data,
    getAttendanceinMeetingMsg: payload && payload.message && payload.message,
    getAttendanceinMeetingLoading: payload && payload.loading && payload.loading,
  };
};