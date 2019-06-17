import firebase from 'react-native-firebase/dist/index'
import {AccessToken, LoginManager} from 'react-native-fbsdk';
import {sessionError, sessionLoading, sessionSuccess} from "./authentication.actions";

export const loginUserWithFacebook = () => async (dispatch) => {
  dispatch(sessionLoading());

  try {
    LoginManager.logInWithReadPermissions(['public_profile', 'email'])
      .then( (result) => {
        if (result.isCancelled) throw new Error('Login request cancelled');
        console.log(`Login success with permissions: ${result.grantedPermissions.toString()}`);
      });

    const data = await AccessToken.getCurrentAccessToken();
    if (!data) throw new Error('Something went wrong obtaining the users access token');

    const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);
    const firebaseUserCredential = await firebase.auth().signInWithCredential(credential);
    dispatch(sessionSuccess(firebaseUserCredential.user));
  } catch (error) {
    dispatch(sessionError(error.message))
  }
};
