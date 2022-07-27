import { DELETE_ERRORS } from "../types";

export const deleteError = (payload: string) => {
    return {
      type: DELETE_ERRORS,
      payload: payload,
    };
  };