import {
  GET_ANNOUNCEMENT,
  GET_ERROR,
  DELETE_ANNOUNCEMENT,
  DELETE_ERROR,
} from "./types";

const initialState = {
  alert: {
    announcement: [],
    error: [],
  },
  loading: true,
};

interface IAlertData {
  id: string;
  createdOn: string;
  title: string;
}

const getAlertReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_ANNOUNCEMENT:
      return {
        ...state,
        alert: {
          ...state?.alert,
          announcement: action.payload,
        },
        loading: false,
      };
    case GET_ERROR:
      return {
        ...state,
        alert: {
          ...state?.alert,
          error: action.payload,
        },
        loading: false,
      };
    case DELETE_ANNOUNCEMENT:
      const deleteAnnouncement = state?.alert.announcement?.filter(
        (item: IAlertData) => item?.id !== action.payload
      );
      return {
        ...state,
        alert: {
          ...state?.alert,
          announcement: deleteAnnouncement,
        },
        loading: false,
      };
    case DELETE_ERROR:
      const deleteError = state?.alert.error?.filter(
        (item: IAlertData) => item?.id !== action.payload
      );
      return {
        ...state,
        alert: {
          ...state?.alert,
          error: deleteError,
        },
        loading: false,
      };
    default:
      return state;
  }
};

export default getAlertReducer;
