export const SESSION_RESTORING = 'SESSION_RESTORING';
export const SESSION_LOADING = 'SESSION_LOADING';
export const SESSION_SUCCESS = 'SESSION_SUCCESS';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SESSION_ERROR = 'SESSION_ERROR';
export const SESSION_LOGOUT = 'SESSION_LOGOUT';

export const sessionRestoring = () => ({
  type: SESSION_RESTORING
});

export const sessionLoading = () => ({
  type: SESSION_LOADING
});

export const sessionSuccess = user => ({
  type: SESSION_SUCCESS,
  user
});

export const signupSuccess = user => ({
  type: SIGNUP_SUCCESS,
  user
});

export const sessionError = error => ({
  type: SESSION_ERROR,
  error
});

export const sessionLogout = () => ({
  type: SESSION_LOGOUT
});
