export interface AUTH_LOGIN_PAYLOAD {
  username: string;
  password: string;
}

export interface AUTH_REGISTER_PAYLOAD {
  first_name: string
  last_name: string
  password: string
  email: string
}

export interface AUTH_LOGIN_RESPONSE {
  access_token: string;
  refresh_token: string;
}
