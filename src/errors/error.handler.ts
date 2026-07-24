import type { AppError } from "./app.error";

export interface ErrorHandler<T = unknown> {
  ///return AppError Instance
  handle(error: T): AppError;
}
