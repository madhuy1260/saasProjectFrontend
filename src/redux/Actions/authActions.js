export const loginAction = (type, data, message, loading) => {
  return {
    type: type,
    payload: {
      data,
      message,
      loading,
    },
  };
};

export const registerUserAction = (type, data, message, loading) => {
  return {
    type: type,
    payload: {
      data,
      message,
      loading,
    },
  };
};
