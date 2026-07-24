// export const backendRegistry = {
//   INVALID_CREDENTIALS: () =>
//     new AppError("INVALID_CREDENTIALS", "Invalid username or password."),

import type { ApiError } from "@/api/api.types";
import { AppError } from "../app.error";

type ErrorFactory = (error: ApiError) => AppError;

export const backendRegistry: Record<string, ErrorFactory> = {
  VALIDATION_ERROR: (e) => new AppError({ message: e.message, code: e.code}),
};

//   EMAIL_ALREADY_EXISTS: () =>
//     new AppError("EMAIL_ALREADY_EXISTS", "Email already exists."),

//   USER_NOT_FOUND: () =>
//     new AppError("USER_NOT_FOUND", "User not found."),
// };

// have access to all errors
// register all the errors
//Useful when every error requires different logic.
//Registry of Classes
// export const backendRegistry = new Map([
//   ["INVALID_CREDENTIALS", new EmailExistsHandler()],
//   ["UNAUTHORIZED_HANDLER", new UnauthorizedHandler()],
// ]);
// const handler = backendRegistry.get("EMAIL_EXIST");
// handler.handle(error);

// type ErrorFactory = (error: ApiError) => AppError;

// export const backendRegistryMap: Record<string, ErrorFactory> = {
//   INVALID_CREDENTIALS: (e) =>
//     new AppError({ message: e.message, code: e.code }),
// };

//Can I mix both?
//Now your registry contains two different types:
///(e) => new AppError(e)
///new TokenExpiredHandler()
//Using them becomes awkward. - You now need type checks.
//A cleaner hybrid

// Instead of mixing types, make everything look the same.

// For example, register functions only.

// Simple errors:
//INVALID_CREDENTIALS: (e) => new AppError(e),

//Complex errors:
// const tokenExpiredHandler = new TokenExpiredHandler();
// TOKEN_EXPIRED: (e) => tokenExpiredHandler.handle(e),
//Now your registry is consistent.

// const backendRegistry = {
//   INVALID_CREDENTIALS: (e) => new AppError(e),

//   EMAIL_EXIST: (e) => new AppError(e),

//   TOKEN_EXPIRED: new TokenExpiredHandler(),

//   VALIDATION_ERROR: new ValidationHandler(),
// };
