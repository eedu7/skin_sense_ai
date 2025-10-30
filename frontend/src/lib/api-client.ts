import axios from "axios";
import { EnvConfig } from "./env";

export const apiClient = axios.create({
  baseURL: EnvConfig.baseApiURL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 15000,
});
