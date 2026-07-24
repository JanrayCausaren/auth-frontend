import { useMutation, type UseMutationOptions } from "@tanstack/react-query";

import { login } from "../api/auth.service";
import axios from "axios";
import type { ApiError } from "@/api/api.types";
import type { AppError } from "@/errors/app.error";

export function useLogin() {
  return useAppMutation({
    mutationFn: login,
    onError: (error) => {
      if (axios.isAxiosError<ApiError>(error)) {
        // console.log(error.response?.data.message);
        // console.log("-------");
        // console.log(error.response?.data);
        // console.log("-------");
      }

      // return new Error()
    },
  });
}

export function useAppMutation<TData, TVariables>(
  options: UseMutationOptions<TData, AppError, TVariables>,
) {
  return useMutation<TData, AppError, TVariables>(options);
}
