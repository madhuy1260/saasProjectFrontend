export const getTicketDetailsByTicketIDAction = (
  type,
  data,
  message,
  loading
) => {
  return {
    type: type,
    payload: {
      data,
      message,
      loading,
    },
  };
};
