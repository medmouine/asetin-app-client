import React from 'react';
import { styles } from './styles';
import { Scene, Router } from 'react-native-router-flux';
import { connect, Provider } from 'react-redux';

import SessionContainer from '../authentication/components/Login';
import SignupContainer from '../authentication/components/Signup';

import configureStore from '../store';

const store = configureStore();
const RouterRedux = connect()(Router);

export default class Routes extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RouterRedux navigationBarStyle={styles.navBar} tintColor="#ffffff" titleStyle={styles.barButtonTextStyle}>
          <Scene key="root">
            <Scene key="login" component={SessionContainer} title="Login" initial={true} />
            <Scene key="signup" component={SignupContainer} title="Signup" />
            {/*<Scene key="home" component={} title="home"/>*/}
          </Scene>
        </RouterRedux>
      </Provider>
    );
  }
}
