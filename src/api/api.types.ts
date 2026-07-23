// api.types.ts

export interface ApiSuccess<T> {
  success: true;
  message: string;
  data: T;
}

export interface ApiError {
  success: false;
  message: string;
  isTrying: true;
  errors?: Record<string, string[]>;
}