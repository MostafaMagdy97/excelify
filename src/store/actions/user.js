// @flow

export const USER = {
  LOGIN: 'USER_LOGIN',
  LOGGED_IN: 'USER_LOGGED_IN',
  SIGNUP: 'USER_SIGNUP',
  LOG_OUT: 'USER_LOGOUT',
};

export const login = (email: string, password: string): Object => ({
  type: USER.LOGIN,
  email,
  password,
});

export const loggedIn = (name: string, email: string, userToken: string): Object => ({
  type: USER.LOGGED_IN,
  name,
  email,
  userToken,
});

export const signUp = (name: string, email: string, password: string): Object => ({
  type: USER.SIGNUP,
  name,
  email,
  password,
});

export const LOG_OUT = (): Object => ({
  type: USER.LOG_OUT,
});
