import type { ApiError } from "@/api/api.types";
import { AppError } from "../app.error";
import { backendRegistry } from "./backend.registry";
import type { AxiosError } from "axios";

type BackendErrorCode = keyof typeof backendRegistry;

export function createBackendFactory(error: AxiosError<ApiError>): AppError {
  const data = error.response!.data;
  const handler = backendRegistry[data.code as BackendErrorCode];

  if (handler) {
    return handler(data);
  } 

  return new AppError({
    code: "No code properties in backedn",
    status: error.response?.status,
    message: data.message,
  });
}
