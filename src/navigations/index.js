import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import AppNavigator from './app-navigator';

function Routes() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}

export default Routes;
