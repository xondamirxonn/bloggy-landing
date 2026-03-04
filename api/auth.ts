import { AUTH_LOGIN_PAYLOAD, AUTH_LOGIN_RESPONSE, AUTH_REGISTER_PAYLOAD } from "@/types/auth"
import request from "@/utils/axios"

export const login = (data: AUTH_LOGIN_PAYLOAD): Promise<AUTH_LOGIN_RESPONSE> => {
    return request({method: "POST", url: "/auth/login", data})
}

export const register = (data: AUTH_REGISTER_PAYLOAD) => {
    return request({method: "POST", url: `/auth/register`, data})
}