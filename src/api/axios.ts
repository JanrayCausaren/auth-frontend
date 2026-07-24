import axios from "axios";
import { mapApiError } from "../errors/error.mapper";

type ApiConfigs = {
  baseUrl?: string;
};

export const api = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
  timeout: 2500,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    throw mapApiError(error);
  },
);
