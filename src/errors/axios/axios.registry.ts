import { AppError } from "../app.error";
import type { AxiosError } from "axios";

type ErrorFactory = (e: AxiosError) => AppError;

export const axiosRegistry: Record<string, ErrorFactory> = {
  ERR_NETWORK: (_e) =>
    new AppError({
      code: "NETWORK_ERROR",
      message: "Unable to connect. Please check your internet connection.",
      status: 0,
    }),

  ECONNABORTED: (_e) =>
    new AppError({
      code: "REQUEST_TIMEOUT",
      message: "The request took too long to complete.",
      status: 408,
    }),

  ETIMEDOUT: (_e) =>
    new AppError({
      code: "REQUEST_TIMEOUT",
      message: "The request timed out.",
      status: 408,
    }),

  ERR_BAD_REQUEST: (_e) =>
    new AppError({
      code: "BAD_REQUEST",
      message: "Invalid request.",
    }),

  ERR_BAD_RESPONSE: (_e) =>
    new AppError({
      code: "SERVER_ERROR",
      message: "The server returned an unexpected response.",
      status: 500,
    }),

  ERR_FR_TOO_MANY_REDIRECTS: (_e) =>
    new AppError({
      code: "TOO_MANY_REDIRECTS",
      message: "Too many redirects.",
      status: 310,
    }),

  ERR_INVALID_URL: (_e) =>
    new AppError({
      code: "INVALID_URL",
      message: "The request URL is invalid.",
      status: 400,
    }),

  ERR_CANCELED: (_e) =>
    new AppError({
      code: "REQUEST_CANCELED",
      message: "The request has been canceled.",
      status: 499,
    }),

  ERR_NOT_SUPPORT: (_e) =>
    new AppError({
      code: "NOT_SUPPORTED",
      message: "This feature is not supported.",
      status: 500,
    }),

  ERR_BAD_OPTION: (_e) =>
    new AppError({
      code: "CONFIGURATION_ERROR",
      message: "Axios configuration is invalid.",
      status: 500,
    }),

  ERR_BAD_OPTION_VALUE: (_e) =>
    new AppError({
      code: "CONFIGURATION_ERROR",
      message: "Axios configuration contains an invalid value.",
      status: 500,
    }),

  ERR_FORM_DATA_DEPTH_EXCEEDED: (_e) =>
    new AppError({
      code: "FORM_DATA_TOO_DEEP",
      message: "Form data exceeds the maximum allowed depth.",
      status: 400,
    }),

  ERR_DEPRECATED: (_e) =>
    new AppError({
      code: "DEPRECATED",
      message: "A deprecated Axios feature was used.",
      status: 500,
    }),
};
