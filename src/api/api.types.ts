// api.types.ts

import type { backendRegistry } from "@/errors/backend/backend.registry";

export interface ApiSuccess<T> {
  success: true;
  message: string;
  data: T;
}

export interface ApiError {
  success: false;
  message: string;
  code: BackendErrorCode;
  errors?: Record<string, string[]>;
}
// export interface ApiError {
//   success: false;
//   message: string;
//   code?: string;
//   errors?: Record<string, string[]>;
// }

type BackendErrorCode = keyof typeof backendRegistry;