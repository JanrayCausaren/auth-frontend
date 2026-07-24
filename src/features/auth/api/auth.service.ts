import { api } from "@/api/axios";
import type { InputLoginType, IRegister, User } from "../schema/auth.schema";
import type { ApiSuccess } from "@/api/api.types";

export async function login(data: InputLoginType) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await api.post<ApiSuccess<User>>("/auth/login", data);

  return response.data.data;
}

export async function register(data: IRegister) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await api.post<ApiSuccess<User>>("/auth/register", data);

  return response.data.data
}
