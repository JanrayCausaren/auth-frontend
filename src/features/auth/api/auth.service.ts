import { api } from "@/api/axios";
import type { InputLoginType, User } from "../schema/auth.schema";
import type { ApiSuccess } from "@/api/api.types";

export async function login(data: InputLoginType) {
    const response = await api.post<ApiSuccess<User>>("/auth/login", data)

    return response.data;
}