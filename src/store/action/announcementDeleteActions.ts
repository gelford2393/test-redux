import { DELETE_ANNOUNCEMENT } from "../types";

export const deleteAnnouncement = (payload: string) => {

    return {
      type: DELETE_ANNOUNCEMENT,
      payload: payload,
    };
  };