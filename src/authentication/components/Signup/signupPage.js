import React, { Component } from 'react';
import { View, Alert, Image } from 'react-native';
import { connect } from 'react-redux';
import { LoadingIndicator } from '../../../loading/loadingIndicator';
import { styles } from '../BaseForm/styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Actions } from 'react-native-router-flux';
import { signupUser } from '../../redux/authentication.service';
import { BaseFormComponent } from "../BaseForm/baseForm";

const ASETIN_LOGO = require('../../../../assets/logo-asetin.png');

class SignupFormComponent extends Component {
  componentDidUpdate(prevProps) {
    // if (this.props.registered) Actions.reset('home');
  }

  render() {
    const { signup, loading } = this.props;
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
            <BaseFormComponent buttonTitle={'signup'} onButtonPress={signup} />
          )}
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

const mapStateToProps = ({ routes, sessionReducer: { loading, error, registered } }) => ({
  routes: routes,
  loading: loading,
  error: error,
  registered: registered
});

const mapDispatchToProps = {
  signup: signupUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupFormComponent);
