export const searchUsersReducer = (state, payload) => {
  return {
    ...state,
    searchUsersData: payload && payload.data && payload.data,
    searchUsersMsg: payload && payload.message && payload.message,
    searchUsersLoading: payload && payload.loading && payload.loading,
  };
};

export const downloadFileReducer = (state, payload) => {
  return {
    ...state,
    downloadFileData: payload && payload.data && payload.data,
    downloadFileMsg: payload && payload.message && payload.message,
    downloadFileLoading: payload && payload.loading && payload.loading,
  };
};

export const uploadFileReducer = (state, payload) => {
  return {
    ...state,
    uploadFileData: payload && payload.data && payload.data,
    uploadFileMsg: payload && payload.message && payload.message,
    uploadFileLoading: payload && payload.loading && payload.loading,
  };
};