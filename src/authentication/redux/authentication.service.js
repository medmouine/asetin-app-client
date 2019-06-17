import firebase from 'react-native-firebase/dist/index'
import {
  sessionError,
  sessionLoading,
  sessionLogout,
  sessionRestoring,
  sessionSuccess,
  signupSuccess
} from "./authentication.actions";

export const restoreSession = () => async dispatch => {
  dispatch(sessionLoading());
  dispatch(sessionRestoring());

  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      dispatch(sessionSuccess(user));
    } else {
      dispatch(sessionLogout());
    }
  });
};

export const loginUser = (email, password) => async dispatch => {
  dispatch(sessionLoading());

  try {
    const user = await firebase.auth().signInWithEmailAndPassword(email, password);
    dispatch(sessionSuccess(user));
  } catch (error) {
    dispatch(sessionError(error.message));
  }
};

export const signupUser = (email, password) => async dispatch => {
  dispatch(sessionLoading());

  try {
    const user = await firebase.auth().createUserWithEmailAndPassword(email, password);
    dispatch(signupSuccess(user));
  } catch (error) {
    dispatch(sessionError(error.message))
  }
};

export const logoutUser = () => async dispatch => {
  dispatch(sessionLoading());

  firebase
    .auth()
    .signOut()
    .then(() => {
      dispatch(sessionLogout());
    })
    .catch(error => {
      dispatch(sessionError(error.message));
    });
};



