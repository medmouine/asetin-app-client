import React, { Component } from 'react';
import { View, Alert, Image, Button } from 'react-native';
import { connect } from 'react-redux';
import { BaseFormComponent } from '../BaseForm/baseForm';
import { LoadingIndicator } from '../../../loading/loadingIndicator';
import { styles } from '../BaseForm/styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Actions } from 'react-native-router-flux';
import { loginUser, restoreSession } from '../../redux/authentication.service';
import { SocialIcon } from 'react-native-elements'
import { loginUserWithFacebook } from "../../redux/facebook-auth.service";

const ASETIN_LOGO = require('../../../../assets/logo-asetin.png');

class LoginFormComponent extends Component {
  componentDidMount() {
    this.props.restore();
  }

  componentDidUpdate(prevProps) {
    const { error, logged } = this.props;

    if (!prevProps.error && error) Alert.alert('error', error);

    // if (logged) Actions.reset('home');
  }

  render() {
    const { login, loading, loginWithFacebook } = this.props;
    const { scrollView, imageBox, image, loginBox } = styles;
    return (
      <KeyboardAwareScrollView style={scrollView}>
        <View style={imageBox}>
          <Image style={image} source={ASETIN_LOGO} />
        </View>
        <View style={loginBox}>
          {loading ? (
            <LoadingIndicator color="#ffffff" size="large" />
          ) : (
            <BaseFormComponent buttonTitle={'login'} onButtonPress={login} />
          )}
        </View>
        <View>
          <SocialIcon
            title='Sign In With Facebook'
            button
            type='facebook'
            onPress={loginWithFacebook}
          />
        </View>
        <View>{loading ? null : <Button onPress={Actions.signup} title="Signup" />}</View>
      </KeyboardAwareScrollView>
    );
  }
}

const mapStateToProps = ({ routes, sessionReducer: { restoring, loading, user, error, logged } }) => ({
  routes: routes,
  restoring: restoring,
  loading: loading,
  user: user,
  error: error,
  logged: logged
});

const mapDispatchToProps = {
  login: loginUser,
  restore: restoreSession,
  loginWithFacebook: loginUserWithFacebook
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginFormComponent);
