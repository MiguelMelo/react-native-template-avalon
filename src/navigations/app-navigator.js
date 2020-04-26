import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Octicons';

import Main from '~/pages/Main';
import Doc from '~/pages/Doc';

const Tab = createBottomTabNavigator();

function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName;

          if (route.name === 'Main') {
            iconName = 'terminal';
          } else if (route.name === 'Doc') {
            iconName = 'book';
          }

          return <Ionicons name={iconName} color={color} size={size} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#FE5E2D',
        inactiveTintColor: '#3A444B',
      }}>
      <Tab.Screen name="Main" component={Main} />
      <Tab.Screen name="Doc" component={Doc} />
    </Tab.Navigator>
  );
}

export default AppNavigator;
