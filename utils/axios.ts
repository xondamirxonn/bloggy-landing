import axios, { AxiosError } from "axios";
import { usePathname } from "next/navigation";
import { toast } from "sonner";
import Cookies from "js-cookie";
const request = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 60000,
});

export function errorHandler(error: any) {
  if (error.response) {
    if (error.response.status === 401) {
      localStorage.removeItem("token");
    }
        if (error.response.status === 500) {
      toast.error("Server error (500)", {
        richColors: true,
        position: "top-center",
      });
    }

    return Promise.reject(error.response);
  }

  if (error.request) {
    return Promise.reject(error.request); 
  }
  return Promise.reject(error);
}

request.interceptors.request.use(
  (config) => {
    const token = Cookies.get("access_token") || "";
    const currentLanguage = localStorage.getItem("locale") || "uz";


    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  errorHandler
);

request.interceptors.response.use(
  (response) => {
    const pagination = response.headers?.["x-pagination"]
      ? JSON.parse(response.headers["x-pagination"])
      : null;

    const payload = response.data?.result ?? response.data;

    if (pagination) {
      payload.pagination = pagination;
    }

    return payload;
  },
  errorHandler
);

export default request;
