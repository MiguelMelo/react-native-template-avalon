import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';

import '~/config/ReactotronConfig';

import {Provider} from 'react-redux';
import store from './store';

import Routes from '~/navigations';

const App = () => (
  <Provider store={store}>
    <StatusBar barStyle="light-content" backgroundColor="#FE5E2D" />
    <Routes />
  </Provider>
);

export default App;
