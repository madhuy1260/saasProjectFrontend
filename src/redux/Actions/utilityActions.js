export const searchUsersAction = (type, data, message, loading) => {
  return {
    type: type,
    payload: {
      data,
      message,
      loading,
    },
  };
};

export const downloadFileAction = (type, data, message, loading) => {
  return {
    type: type,
    payload: {
      data,
      message,
      loading,
    },
  };
};

export const uploadFileAction = (type, data, message, loading) => {
  return {
    type: type,
    payload: {
      data,
      message,
      loading,
    },
  };
};
