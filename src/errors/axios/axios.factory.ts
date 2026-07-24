// axios.factory.ts

import type { AxiosError } from "axios";
import { axiosRegistry } from "./axios.registry";
import { AppError } from "../app.error";

export function createAxiosError(error: AxiosError): AppError {
  const handler = error.code
    ? axiosRegistry[error.code as keyof typeof axiosRegistry]
    : undefined;

  if (handler) {
    return handler(error);
  }

  return new AppError({
    code: "UNKNOWN_NETWORK_ERROR",
    message: error.message || "Unexpected network error.",
    status: error.response?.status ?? 500,
  });
}
