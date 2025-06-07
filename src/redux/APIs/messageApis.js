import axios from "axios";
import * as Constants from "../Constants";
import {
  createChannelAction,
  deleteMessageByMessageIDAction,
  getChannelsByTenantIdAction,
  getThreadByMessageIDAction,
  getuserPresencebyUserIDAction,
  pinMessageByMessageIDAction,
  reactToMessageAction,
  replyToMessageAction,
  sendMessageAction,
} from "../Actions/messageActions";

export const createChannelApiCall = (info) => async (dispatch) => {
  dispatch(createChannelAction(Constants.CREATE_CHANNEL_START, {}, "", true));

  var data = {};
  // data.username = info?.username;
  // data.password = info?.password;

  var config = {
    method: "post",
    url: process.env.REACT_PUBLISHED_LINK + "/messages/channel",
    headers: { "Content-Type": "application/json" },
    data: data,
  };

  await axios(config)
    .then((response) => {
      dispatch(
        createChannelAction(
          Constants.CREATE_CHANNEL_SUCCESS,
          response.data,
          "Channel Created Successfully!!",
          false
        )
      );
      console.log(`Data from the API - CREATE_CHANNEL_SUCCESS`, response.data);
    })
    .catch((error) => {
      if (error) {
        if (error.response && error.response.status === 404) {
          dispatch(
            createChannelAction(
              Constants.CREATE_CHANNEL_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else if (error.response && error.response.status === 400) {
          dispatch(
            createChannelAction(
              Constants.CREATE_CHANNEL_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else
          dispatch(
            createChannelAction(
              Constants.CREATE_CHANNEL_FAILURE,
              {},
              "Internal server error.",
              false
            )
          );
      }
    });
};

export const getChannelsByTenantIdApiCall = (info) => async (dispatch) => {
  dispatch(
    getChannelsByTenantIdAction(
      Constants.GET_CHANNELS_BYTENANTID_START,
      {},
      "",
      true
    )
  );

  var data = {};
  // data.username = info?.username;
  // data.password = info?.password;

  let tenantId = 25;

  var config = {
    method: "get",
    url: process.env.REACT_PUBLISHED_LINK + `/messages/channel/${tenantId}`,
    headers: { "Content-Type": "application/json" },
    // data: data,
  };

  await axios(config)
    .then((response) => {
      dispatch(
        getChannelsByTenantIdAction(
          Constants.GET_CHANNELS_BYTENANTID_SUCCESS,
          response.data,
          "Channels Data Loaded Successfully!!",
          false
        )
      );
      console.log(
        `Data from the API - GET_CHANNELS_BYTENANTID_SUCCESS`,
        response.data
      );
    })
    .catch((error) => {
      if (error) {
        if (error.response && error.response.status === 404) {
          dispatch(
            getChannelsByTenantIdAction(
              Constants.GET_CHANNELS_BYTENANTID_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else if (error.response && error.response.status === 400) {
          dispatch(
            getChannelsByTenantIdAction(
              Constants.GET_CHANNELS_BYTENANTID_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else
          dispatch(
            getChannelsByTenantIdAction(
              Constants.GET_CHANNELS_BYTENANTID_FAILURE,
              {},
              "Internal server error.",
              false
            )
          );
      }
    });
};

export const sendMessageApiCall = (info) => async (dispatch) => {
  dispatch(sendMessageAction(Constants.SEND_MESSAGE_START, {}, "", true));

  var data = {};
  // data.username = info?.username;
  // data.password = info?.password;

  var config = {
    method: "post",
    url: process.env.REACT_PUBLISHED_LINK + "/messages/send",
    headers: { "Content-Type": "application/json" },
    data: data,
  };

  await axios(config)
    .then((response) => {
      dispatch(
        sendMessageAction(
          Constants.SEND_MESSAGE_SUCCESS,
          response.data,
          "Message Sent Successfully!!",
          false
        )
      );
      console.log(`Data from the API - SEND_MESSAGE_SUCCESS`, response.data);
    })
    .catch((error) => {
      if (error) {
        if (error.response && error.response.status === 404) {
          dispatch(
            sendMessageAction(
              Constants.SEND_MESSAGE_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else if (error.response && error.response.status === 400) {
          dispatch(
            sendMessageAction(
              Constants.SEND_MESSAGE_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else
          dispatch(
            sendMessageAction(
              Constants.SEND_MESSAGE_FAILURE,
              {},
              "Internal server error.",
              false
            )
          );
      }
    });
};

export const getThreadByMessageIDApiCall = (info) => async (dispatch) => {
  dispatch(
    getThreadByMessageIDAction(
      Constants.GETTHREAD_BYMESSAGEID_START,
      {},
      "",
      true
    )
  );

  var data = {};
  // data.username = info?.username;
  // data.password = info?.password;
  let messageId = 25;

  var config = {
    method: "get",
    url: process.env.REACT_PUBLISHED_LINK + `/messages/thread/${messageId}`,
    headers: { "Content-Type": "application/json" },
    // data: data,
  };

  await axios(config)
    .then((response) => {
      dispatch(
        getThreadByMessageIDAction(
          Constants.GETTHREAD_BYMESSAGEID_SUCCESS,
          response.data,
          "Thread msg Data Loaded Successfully!!",
          false
        )
      );
      console.log(
        `Data from the API - GETTHREAD_BYMESSAGEID_SUCCESS`,
        response.data
      );
    })
    .catch((error) => {
      if (error) {
        if (error.response && error.response.status === 404) {
          dispatch(
            getThreadByMessageIDAction(
              Constants.GETTHREAD_BYMESSAGEID_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else if (error.response && error.response.status === 400) {
          dispatch(
            getThreadByMessageIDAction(
              Constants.GETTHREAD_BYMESSAGEID_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else
          dispatch(
            getThreadByMessageIDAction(
              Constants.GETTHREAD_BYMESSAGEID_FAILURE,
              {},
              "Internal server error.",
              false
            )
          );
      }
    });
};

export const replyToMessageApiCall = (info) => async (dispatch) => {
  dispatch(
    replyToMessageAction(Constants.REPLY_TO_MESSAGE_START, {}, "", true)
  );

  var data = {};
  // data.username = info?.username;
  // data.password = info?.password;
  let messageId = 25;

  var config = {
    method: "post",
    url:
      process.env.REACT_PUBLISHED_LINK + `/messages/thread/${messageId}/reply`,
    headers: { "Content-Type": "application/json" },
    data: data,
  };

  await axios(config)
    .then((response) => {
      dispatch(
        replyToMessageAction(
          Constants.REPLY_TO_MESSAGE_SUCCESS,
          response.data,
          "Reply message sent Successfully!!",
          false
        )
      );
      console.log(
        `Data from the API - REPLY_TO_MESSAGE_SUCCESS`,
        response.data
      );
    })
    .catch((error) => {
      if (error) {
        if (error.response && error.response.status === 404) {
          dispatch(
            replyToMessageAction(
              Constants.REPLY_TO_MESSAGE_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else if (error.response && error.response.status === 400) {
          dispatch(
            replyToMessageAction(
              Constants.REPLY_TO_MESSAGE_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else
          dispatch(
            replyToMessageAction(
              Constants.REPLY_TO_MESSAGE_FAILURE,
              {},
              "Internal server error.",
              false
            )
          );
      }
    });
};

export const reactToMessageApiCall = (info) => async (dispatch) => {
  dispatch(
    reactToMessageAction(Constants.REACT_TO_MESSAGE_START, {}, "", true)
  );

  var data = {};
  // data.username = info?.username;
  // data.password = info?.password;
  let messageId = 25;

  var config = {
    method: "post",
    url: process.env.REACT_PUBLISHED_LINK + `/messages/react/${messageId}`,
    headers: { "Content-Type": "application/json" },
    data: data,
  };

  await axios(config)
    .then((response) => {
      dispatch(
        reactToMessageAction(
          Constants.REACT_TO_MESSAGE_SUCCESS,
          response.data,
          "Reply Reaction added Successfully!!",
          false
        )
      );
      console.log(
        `Data from the API - REACT_TO_MESSAGE_SUCCESS`,
        response.data
      );
    })
    .catch((error) => {
      if (error) {
        if (error.response && error.response.status === 404) {
          dispatch(
            reactToMessageAction(
              Constants.REACT_TO_MESSAGE_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else if (error.response && error.response.status === 400) {
          dispatch(
            reactToMessageAction(
              Constants.REACT_TO_MESSAGE_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else
          dispatch(
            reactToMessageAction(
              Constants.REACT_TO_MESSAGE_FAILURE,
              {},
              "Internal server error.",
              false
            )
          );
      }
    });
};

export const getuserPresencebyUserIDApiCall = (info) => async (dispatch) => {
  dispatch(
    getuserPresencebyUserIDAction(
      Constants.GETUSER_PRESENCE_BYUSERID_START,
      {},
      "",
      true
    )
  );

  var data = {};
  // data.username = info?.username;
  // data.password = info?.password;
  let userId = 25;

  var config = {
    method: "get",
    url: process.env.REACT_PUBLISHED_LINK + `/messages/presence/${userId}`,
    headers: { "Content-Type": "application/json" },
    // data: data,
  };

  await axios(config)
    .then((response) => {
      dispatch(
        getuserPresencebyUserIDAction(
          Constants.GETUSER_PRESENCE_BYUSERID_SUCCESS,
          response.data,
          "user presence loaded/added Successfully!!",
          false
        )
      );
      console.log(
        `Data from the API - GETUSER_PRESENCE_BYUSERID_SUCCESS`,
        response.data
      );
    })
    .catch((error) => {
      if (error) {
        if (error.response && error.response.status === 404) {
          dispatch(
            getuserPresencebyUserIDAction(
              Constants.GETUSER_PRESENCE_BYUSERID_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else if (error.response && error.response.status === 400) {
          dispatch(
            getuserPresencebyUserIDAction(
              Constants.GETUSER_PRESENCE_BYUSERID_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else
          dispatch(
            getuserPresencebyUserIDAction(
              Constants.GETUSER_PRESENCE_BYUSERID_FAILURE,
              {},
              "Internal server error.",
              false
            )
          );
      }
    });
};

export const pinMessageByMessageIDApiCall = (info) => async (dispatch) => {
  dispatch(
    pinMessageByMessageIDAction(
      Constants.PINMESSAGE_BYMESSAGEID_START,
      {},
      "",
      true
    )
  );

  var data = {};
  // data.username = info?.username;
  // data.password = info?.password;
  let messageId = 25;

  var config = {
    method: "post",
    url: process.env.REACT_PUBLISHED_LINK + `/messages/pin/${messageId}`,
    headers: { "Content-Type": "application/json" },
    data: data,
  };

  await axios(config)
    .then((response) => {
      dispatch(
        pinMessageByMessageIDAction(
          Constants.PINMESSAGE_BYMESSAGEID_SUCCESS,
          response.data,
          "Message Pinned Successfully!!",
          false
        )
      );
      console.log(
        `Data from the API - PINMESSAGE_BYMESSAGEID_SUCCESS`,
        response.data
      );
    })
    .catch((error) => {
      if (error) {
        if (error.response && error.response.status === 404) {
          dispatch(
            pinMessageByMessageIDAction(
              Constants.PINMESSAGE_BYMESSAGEID_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else if (error.response && error.response.status === 400) {
          dispatch(
            pinMessageByMessageIDAction(
              Constants.PINMESSAGE_BYMESSAGEID_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else
          dispatch(
            pinMessageByMessageIDAction(
              Constants.PINMESSAGE_BYMESSAGEID_FAILURE,
              {},
              "Internal server error.",
              false
            )
          );
      }
    });
};

export const deleteMessageByMessageIDApiCall = (info) => async (dispatch) => {
  dispatch(
    deleteMessageByMessageIDAction(
      Constants.DELETE_MESSAGE_BYMESSAGEID_START,
      {},
      "",
      true
    )
  );

  var data = {};
  // data.username = info?.username;
  // data.password = info?.password;
  let messageId = 25;

  var config = {
    method: "post",
    url: process.env.REACT_PUBLISHED_LINK + `/messages/delete/${messageId}`,
    headers: { "Content-Type": "application/json" },
    data: data,
  };

  await axios(config)
    .then((response) => {
      dispatch(
        deleteMessageByMessageIDAction(
          Constants.DELETE_MESSAGE_BYMESSAGEID_SUCCESS,
          response.data,
          "Message Deleted Successfully!!",
          false
        )
      );
      console.log(
        `Data from the API - DELETE_MESSAGE_BYMESSAGEID_SUCCESS`,
        response.data
      );
    })
    .catch((error) => {
      if (error) {
        if (error.response && error.response.status === 404) {
          dispatch(
            deleteMessageByMessageIDAction(
              Constants.DELETE_MESSAGE_BYMESSAGEID_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else if (error.response && error.response.status === 400) {
          dispatch(
            deleteMessageByMessageIDAction(
              Constants.DELETE_MESSAGE_BYMESSAGEID_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else
          dispatch(
            deleteMessageByMessageIDAction(
              Constants.DELETE_MESSAGE_BYMESSAGEID_FAILURE,
              {},
              "Internal server error.",
              false
            )
          );
      }
    });
};
