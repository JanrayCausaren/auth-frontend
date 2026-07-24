import { useMutation, type UseMutationOptions } from "@tanstack/react-query";

import { login, register } from "../api/auth.service";
import type { AppError } from "@/errors/app.error";

export function useLogin() {
  return useAppMutation({
    mutationFn: login,
    onError: (error) => {},
  });
}
export function useRegister() {
  return useAppMutation({
    mutationFn: register,
    onError: (error) => {},
  });
}

export function useAppMutation<TData, TVariables>(
  options: UseMutationOptions<TData, AppError, TVariables>,
) {
  return useMutation<TData, AppError, TVariables>(options);
}
