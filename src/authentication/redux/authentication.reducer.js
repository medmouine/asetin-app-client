import * as actions from './authentication.actions';

const initialState = {
  restoring: false,
  loading: false,
  user: {},
  error: null,
  logged: null,
  registered: null
};

const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SESSION_RESTORING:
      return { ...state, restoring: true };
    case actions.SESSION_LOADING:
      return { ...state, restoring: false, loading: true, error: null };
    case actions.SESSION_SUCCESS:
      return {
        ...state,
        restoring: false,
        loading: false,
        user: action.user,
        error: null,
        logged: true,
        registered: null
      };
    case actions.SIGNUP_SUCCESS:
      return {
        ...state,
        restoring: false,
        loading: false,
        user: action.user,
        error: null,
        logged: null,
        registered: true
      };
    case actions.SESSION_ERROR:
      return {
        ...state,
        restoring: false,
        loading: false,
        user: null,
        error: action.error,
        logged: null,
        registered: null
      };
    case actions.SESSION_LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default authenticationReducer;
