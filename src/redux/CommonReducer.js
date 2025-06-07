import INITIAL_STATE from "../public/INITIAL_STATE";
import {
  loginReducer,
  registerTenantReducer,
  registerUserReducer,
  loginTenantReducer,
  validateTokenReducer,
  getUsersByTenantReducer,
  getProfileByUserIdReducer,
  getProfileDetailsReducer,
} from "./Reducers/authReducer";
import {
  sendEmailReducer,
  getInboxbyUserReducer,
  getSentByuserIdReducer,
  getThreadByIDReducer,
  replyEmailbyEmailIDReducer,
  deleteEmailReducer,
  archieveEmailReducer,
  unsubscribeSenderReducer,
} from "./Reducers/mailReducer";
import {
  createMeetingReducer,
  getMeetingListByTenantIdReducer,
  getMeetingByIDReducer,
  joinMeetingReducer,
  toggleRecordingReducer,
  sendChatInMeetingReducer,
  getSummaryofMeetingReducer,
  getAttendanceinMeetingReducer,
} from "./Reducers/meetingReducer";
import {
  createChannelReducer,
  getChannelsByTenantIdReducer,
  sendMessageReducer,
  getThreadByMessageIDReducer,
  replyToMessageReducer,
  reactToMessageReducer,
  getuserPresencebyUserIDReducer,
  pinMessageByMessageIDReducer,
  deleteMessageByMessageIDReducer,
} from "./Reducers/messageReducer";
import {
  getAllPlansReducer,
  getTenantPlanReducer,
  assignPlanToTenantReducer,
  getTenantModulesReducer,
} from "./Reducers/planReducer";
import {
  createBoardReducer,
  getBoardsListReducer,
  createTicketsReducer,
  getTicketsByBoardIDReducer,
  updateTicketByTicketIDReducer,
  getTicketDetailsByTicketIDReducer,
  addCommenttoTicketByIDReducer,
  getCommentsByTicketIDReducer,
  getReportByBoardIDReducer,
  getSprintByBoardIDReducer,
} from "./Reducers/taskReducer";
import {
  searchUsersReducer,
  downloadFileReducer,
  uploadFileReducer,
} from "./Reducers/utilityReducer";

const reducers = {
  LOGIN_USER_START: loginReducer,
  LOGIN_USER_SUCCESS: loginReducer,
  LOGIN_USER_FAILURE: loginReducer,

  REGISTER_TENANT_START: registerTenantReducer,
  REGISTER_TENANT_SUCCESS: registerTenantReducer,
  REGISTER_TENANT_FAILURE: registerTenantReducer,

  REGISTER_USER_START: registerUserReducer,
  REGISTER_USER_SUCCESS: registerUserReducer,
  REGISTER_USER_FAILURE: registerUserReducer,

  LOGIN_TENANT_START: loginTenantReducer,
  LOGIN_TENANT_SUCCESS: loginTenantReducer,
  LOGIN_TENANT_FAILURE: loginTenantReducer,

  VALIDATE_TOKEN_START: validateTokenReducer,
  VALIDATE_TOKEN_SUCCESS: validateTokenReducer,
  VALIDATE_TOKEN_FAILURE: validateTokenReducer,

  GETUSERSBY_TENANT_START: getUsersByTenantReducer,
  GETUSERSBY_TENANT_SUCCESS: getUsersByTenantReducer,
  GETUSERSBY_TENANT_FAILURE: getUsersByTenantReducer,

  GET_PROFILE_BYUSERID_START: getProfileByUserIdReducer,
  GET_PROFILE_BYUSERID_SUCCESS: getProfileByUserIdReducer,
  GET_PROFILE_BYUSERID_FAILURE: getProfileByUserIdReducer,

  GET_PROFILE_START: getProfileDetailsReducer,
  GET_PROFILE_SUCCESS: getProfileDetailsReducer,
  GET_PROFILE_FAILURE: getProfileDetailsReducer,

  // --------------------------------------------------------------
  SEND_EMAIL_START: sendEmailReducer,
  SEND_EMAIL_SUCCESS: sendEmailReducer,
  SEND_EMAIL_FAILURE: sendEmailReducer,

  GET_INBOX_BYUSERID_START: getInboxbyUserReducer,
  GET_INBOX_BYUSERID_SUCCESS: getInboxbyUserReducer,
  GET_INBOX_BYUSERID_FAILURE: getInboxbyUserReducer,

  GET_SENT_BYUSERID_START: getSentByuserIdReducer,
  GET_SENT_BYUSERID_SUCCESS: getSentByuserIdReducer,
  GET_SENT_BYUSERID_FAILURE: getSentByuserIdReducer,

  GET_THREAD_BYID_START: getThreadByIDReducer,
  GET_THREAD_BYID_SUCCESS: getThreadByIDReducer,
  GET_THREAD_BYID_FAILURE: getThreadByIDReducer,

  REPLY_TO_EMAIL_BY_EMAILID_START: replyEmailbyEmailIDReducer,
  REPLY_TO_EMAIL_BY_EMAILID_SUCCESS: replyEmailbyEmailIDReducer,
  REPLY_TO_EMAIL_BY_EMAILID_FAILURE: replyEmailbyEmailIDReducer,

  DELETE_EMAIL_START: deleteEmailReducer,
  DELETE_EMAIL_SUCCESS: deleteEmailReducer,
  DELETE_EMAIL_FAILURE: deleteEmailReducer,

  ARCHIEVE_EMAIL_START: archieveEmailReducer,
  ARCHIEVE_EMAIL_SUCCESS: archieveEmailReducer,
  ARCHIEVE_EMAIL_FAILURE: archieveEmailReducer,

  UNSUBSCRIBE_SENDER_START: unsubscribeSenderReducer,
  UNSUBSCRIBE_SENDER_SUCCESS: unsubscribeSenderReducer,
  UNSUBSCRIBE_SENDER_FAILURE: unsubscribeSenderReducer,
  // --------------------------------------------------------------
  CREATE_MEETING_START: createMeetingReducer,
  CREATE_MEETING_SUCCESS: createMeetingReducer,
  CREATE_MEETING_FAILURE: createMeetingReducer,

  GETMEETING_LIST_BYTENANT_START: getMeetingListByTenantIdReducer,
  GETMEETING_LIST_BYTENANT_SUCCESS: getMeetingListByTenantIdReducer,
  GETMEETING_LIST_BYTENANT_FAILURE: getMeetingListByTenantIdReducer,

  GETMEETING_BYID_START: getMeetingByIDReducer,
  GETMEETING_BYID_SUCCESS: getMeetingByIDReducer,
  GETMEETING_BYID_FAILURE: getMeetingByIDReducer,

  JOIN_MEETING_START: joinMeetingReducer,
  JOIN_MEETING_SUCCESS: joinMeetingReducer,
  JOIN_MEETING_FAILURE: joinMeetingReducer,

  TOGGLE_RECORDING_START: toggleRecordingReducer,
  TOGGLE_RECORDING_SUCCESS: toggleRecordingReducer,
  TOGGLE_RECORDING_FAILURE: toggleRecordingReducer,

  SENDCHAT_INMEETING_START: sendChatInMeetingReducer,
  SENDCHAT_INMEETING_SUCCESS: sendChatInMeetingReducer,
  SENDCHAT_INMEETING_FAILURE: sendChatInMeetingReducer,

  GET_SUMMARY_START: getSummaryofMeetingReducer,
  GET_SUMMARY_SUCCESS: getSummaryofMeetingReducer,
  GET_SUMMARY_FAILURE: getSummaryofMeetingReducer,

  GET_ATTENDANCE_START: getAttendanceinMeetingReducer,
  GET_ATTENDANCE_SUCCESS: getAttendanceinMeetingReducer,
  GET_ATTENDANCE_FAILURE: getAttendanceinMeetingReducer,

  // --------------------------------------------------------------

  CREATE_CHANNEL_START: createChannelReducer,
  CREATE_CHANNEL_SUCCESS: createChannelReducer,
  CREATE_CHANNEL_FAILURE: createChannelReducer,

  GET_CHANNELS_BYTENANTID_START: getChannelsByTenantIdReducer,
  GET_CHANNELS_BYTENANTID_SUCCESS: getChannelsByTenantIdReducer,
  GET_CHANNELS_BYTENANTID_FAILURE: getChannelsByTenantIdReducer,

  SEND_MESSAGE_START: sendMessageReducer,
  SEND_MESSAGE_SUCCESS: sendMessageReducer,
  SEND_MESSAGE_FAILURE: sendMessageReducer,

  GETTHREAD_BYMESSAGEID_START: getThreadByMessageIDReducer,
  GETTHREAD_BYMESSAGEID_SUCCESS: getThreadByMessageIDReducer,
  GETTHREAD_BYMESSAGEID_FAILURE: getThreadByMessageIDReducer,

  REPLY_TO_MESSAGE_START: replyToMessageReducer,
  REPLY_TO_MESSAGE_SUCCESS: replyToMessageReducer,
  REPLY_TO_MESSAGE_FAILURE: replyToMessageReducer,

  REACT_TO_MESSAGE_START: reactToMessageReducer,
  REACT_TO_MESSAGE_SUCCESS: reactToMessageReducer,
  REACT_TO_MESSAGE_FAILURE: reactToMessageReducer,

  GETUSER_PRESENCE_BYUSERID_START: getuserPresencebyUserIDReducer,
  GETUSER_PRESENCE_BYUSERID_SUCCESS: getuserPresencebyUserIDReducer,
  GETUSER_PRESENCE_BYUSERID_FAILURE: getuserPresencebyUserIDReducer,

  PINMESSAGE_BYMESSAGEID_START: pinMessageByMessageIDReducer,
  PINMESSAGE_BYMESSAGEID_SUCCESS: pinMessageByMessageIDReducer,
  PINMESSAGE_BYMESSAGEID_FAILURE: pinMessageByMessageIDReducer,

  DELETE_MESSAGE_BYMESSAGEID_START: deleteMessageByMessageIDReducer,
  DELETE_MESSAGE_BYMESSAGEID_SUCCESS: deleteMessageByMessageIDReducer,
  DELETE_MESSAGE_BYMESSAGEID_FAILURE: deleteMessageByMessageIDReducer,

  // --------------------------------------------------------------

  GET_ALLPLANS_START: getAllPlansReducer,
  GET_ALLPLANS_SUCCESS: getAllPlansReducer,
  GET_ALLPLANS_FAILURE: getAllPlansReducer,

  GET_TENANT_PLAN_START: getTenantPlanReducer,
  GET_TENANT_PLAN_SUCCESS: getTenantPlanReducer,
  GET_TENANT_PLAN_FAILURE: getTenantPlanReducer,

  ASSIGN_PLAN_TO_TENANT_START: assignPlanToTenantReducer,
  ASSIGN_PLAN_TO_TENANT_SUCCESS: assignPlanToTenantReducer,
  ASSIGN_PLAN_TO_TENANT_FAILURE: assignPlanToTenantReducer,

  GET_TENANT_MODULES_START: getTenantModulesReducer,
  GET_TENANT_MODULES_SUCCESS: getTenantModulesReducer,
  GET_TENANT_MODULES_FAILURE: getTenantModulesReducer,

  // --------------------------------------------------------------

  CREATE_BOARD_START: createBoardReducer,
  CREATE_BOARD_SUCCESS: createBoardReducer,
  CREATE_BOARD_FAILURE: createBoardReducer,

  GET_BOARDS_START: getBoardsListReducer,
  GET_BOARDS_SUCCESS: getBoardsListReducer,
  GET_BOARDS_FAILURE: getBoardsListReducer,

  CREATE_TICKETS_START: createTicketsReducer,
  CREATE_TICKETS_SUCCESS: createTicketsReducer,
  CREATE_TICKETS_FAILURE: createTicketsReducer,

  GET_TICKETS_BYBOARDID_START: getTicketsByBoardIDReducer,
  GET_TICKETS_BYBOARDID_SUCCESS: getTicketsByBoardIDReducer,
  GET_TICKETS_BYBOARDID_FAILURE: getTicketsByBoardIDReducer,

  UPDATE_TICKET_BYTICKETID_START: updateTicketByTicketIDReducer,
  UPDATE_TICKET_BYTICKETID_SUCCESS: updateTicketByTicketIDReducer,
  UPDATE_TICKET_BYTICKETID_FAILURE: updateTicketByTicketIDReducer,

  GET_TICKET_DETAILS_BYTICKETID_START: getTicketDetailsByTicketIDReducer,
  GET_TICKET_DETAILS_BYTICKETID_SUCCESS: getTicketDetailsByTicketIDReducer,
  GET_TICKET_DETAILS_BYTICKETID_FAILURE: getTicketDetailsByTicketIDReducer,

  ADD_COMMENT_TO_TICKET_BYID_START: addCommenttoTicketByIDReducer,
  ADD_COMMENT_TO_TICKET_BYID_SUCCESS: addCommenttoTicketByIDReducer,
  ADD_COMMENT_TO_TICKET_BYID_FAILURE: addCommenttoTicketByIDReducer,

  GETCOMMENTS_BYTICKETID_START: getCommentsByTicketIDReducer,
  GETCOMMENTS_BYTICKETID_SUCCESS: getCommentsByTicketIDReducer,
  GETCOMMENTS_BYTICKETID_FAILURE: getCommentsByTicketIDReducer,

  GETREPORT_BYBOARDID_START: getReportByBoardIDReducer,
  GETREPORT_BYBOARDID_SUCCESS: getReportByBoardIDReducer,
  GETREPORT_BYBOARDID_FAILURE: getReportByBoardIDReducer,

  GETSPRINT_BYBOARDID_START: getSprintByBoardIDReducer,
  GETSPRINT_BYBOARDID_SUCCESS: getSprintByBoardIDReducer,
  GETSPRINT_BYBOARDID_FAILURE: getSprintByBoardIDReducer,

  // --------------------------------------------------------------
  SEARCH_USERS_START: searchUsersReducer,
  SEARCH_USERS_SUCCESS: searchUsersReducer,
  SEARCH_USERS_FAILURE: searchUsersReducer,

  DOWNLOAD_FILE_START: downloadFileReducer,
  DOWNLOAD_FILE_SUCCESS: downloadFileReducer,
  DOWNLOAD_FILE_FAILURE: downloadFileReducer,

  UPLOAD_FILE_START: uploadFileReducer,
  UPLOAD_FILE_SUCCESS: uploadFileReducer,
  UPLOAD_FILE_FAILURE: uploadFileReducer,
};

export const commonReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  const reducer = reducers[type];
  return reducer ? reducer(state, payload) : state;
};
