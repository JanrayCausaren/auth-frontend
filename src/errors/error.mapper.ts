import axios from "axios";
import { createAxiosError } from "./axios/axios.factory";
import { createBackendFactory } from "./backend/backend.factory";
import { AppError } from "./app.error";
import type { ApiError } from "@/api/api.types";

export function mapApiError(error: unknown) {
  if (axios.isAxiosError<ApiError>(error)) {

    if (error.response) {
      return createBackendFactory(error);
    }

    return createAxiosError(error);
  }

  // if (axios.isAxiosError<ApiError>(error)) {
  //   //axios errors
  //   switch (error.code) {
  //     case "ERR_BAD_REQUEST":
  //       return new AppError({
  //         code: error.code,
  //         status: error.status,
  //         message: "Bad Request from axios",
  //       });
  //   }
  //   //backend errors
  //   return new AppError({
  //     code: error.response?.data.code,
  //     status: error.status,
  //     message: error.response?.data.message ?? "Unknown Error",
  //   });
  // }

  if (error instanceof Error) {
    return new AppError({
      code: "UNEXPECTED_ERROR",
      name: error.name,
      message: error.message,
    });
  }

  return new AppError({
    code: "UNKNOWN ERROR",
    message: "Unknown Error",
  });
}

/// for future enhancement use registry design pattern
