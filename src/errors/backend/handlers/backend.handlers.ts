import type { ApiError } from "@/api/api.types";
import { AppError } from "@/errors/app.error";
import type { ErrorHandler } from "@/errors/error.handler";

//A handler class becomes valuable when it contains behavior, not just object creation.
export class UnauthorizedHandler implements ErrorHandler<ApiError> {
  handle(error: ApiError): AppError {
    return new AppError({
      message: "Unauthorized Error",
      code: "Invalid Credentials",
      errors: error.errors,
    });
  }
}

export class EmailExistsHandler implements ErrorHandler {
  handle() {
    return new AppError({
      code: "EMAIL_EXIST",
      message: "Email already Exist",
    });
  }
}

// export class TokenExpiredHandler
// implements ErrorHandler<BackendError>{

//     handle(error: BackendError){

//         localStorage.removeItem("token");

//         authStore.logout();

//         router.navigate("/login");

//         toast.error(
//             "Your session expired."
//         );

//         return new AppError({
//             code:error.code,
//             message:error.message
//         });

//     }

// }