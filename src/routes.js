import React from 'react';
import { connect } from "react-redux";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons'

const Stack = createStackNavigator();

import Main from './pages/Main';
import Cart from './pages/Cart';

function Routes() {
  return (
      <Stack.Navigator
        screenOptions={{
          headerTitle: false,
          gestureEnabled: true,
          headerTransparent: true,
          headerBackTitle: false,
          headerPressColorAndroid: '#fff',
          headerBackImage: () => (
            <Icon name="ios-arrow-back" size={30} color="#fff" style={{marginLeft: 5}} />
          )
        }}>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
  );
}

export default Routes;
