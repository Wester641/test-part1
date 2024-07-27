import { AxiosError } from "axios";

export const errorHandler = (error: Error, showError?: boolean): string => {
  let msg = "";

  if (error instanceof AxiosError) {
    if (error.response?.data) {
      const responseData = error.response?.data;

      if (responseData.errors && responseData.errors.non_field_errors) {
        msg = responseData.errors.non_field_errors.join(" ");
      } else {
        msg = responseData.message || "Unknown error occurred";
      }
    }
  } else {
    msg = error.message || "Unknown error occurred";
  }

  return msg;
};
