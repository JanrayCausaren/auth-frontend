interface TAppError {
  message: string;
  status?: number;
  code?: string;
  name?: string; 
  errors?: Record<string, string[]>;
}

export class AppError extends Error {
    code?: string
    status?: number 
    name: string
    errors?: Record<string, string[]>
  constructor({ message, status, code, errors, name }: TAppError) {
    super(message);
    this.name = name ?? "AppError";
    this.code = code 
    this.errors = errors
    this.status = status
  }
}

