import {
  GET_ANNOUNCEMENT,
  GET_ERROR,
  DELETE_ANNOUNCEMENT,
  DELETE_ERROR,
} from "./types";
interface IAlertData {
  id: string;
  createdOn: string;
  title: string;
}
export const getAnnouncement = (payload: IAlertData) => {
  return {
    type: GET_ANNOUNCEMENT,
    payload: payload,
  };
};

export const getError = (payload: IAlertData) => {
  return {
    type: GET_ERROR,
    payload: payload,
  };
};

export const deleteAnnouncement = (payload: string) => {
  return {
    type: DELETE_ANNOUNCEMENT,
    payload: payload,
  };
};

export const deleteError = (payload: string) => {
  return {
    type: DELETE_ERROR,
    payload: payload,
  };
};
