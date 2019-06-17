import { combineReducers } from 'redux';

import sessionReducer from '../authentication/redux/authentication.reducer';
import routesReducer from '../routes/redux/root.reducer';

export default combineReducers({
  sessionReducer,
  routesReducer
});
