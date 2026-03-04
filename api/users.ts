import request from "@/utils/axios";

const url = "/users";

export const getUserProfile = (params: unknown) => {
  return request({ method: "GET", url: `${url}/profile/`, params });
};
