import { useMutation } from "@tanstack/react-query";

import { login } from "../api/auth.service";
import axios, { AxiosError } from "axios";
import type { ApiError } from "@/api/api.types";

export function useLogin() {
  return useMutation({
    mutationFn: login,
    onError: (error) => {
      if (axios.isAxiosError<ApiError>(error)) {
        console.log(error.response?.data.message);
      }

      // return new Error()
    },
  });
}
