import React, { Component } from 'react';
import {NavigationContainer, useBackButton} from '@react-navigation/native';
import {
  createStackNavigator,
  HeaderTitle,
  headerStyle,
  HeaderBackButton,
  HeaderStyleInterpolators,
} from '@react-navigation/stack';
import Header from './components/Header';
import Icon from 'react-native-vector-icons/Ionicons'

const Stack = createStackNavigator();

import Home from './pages/Home';
import Cart from './pages/Cart';

function Routes() {
  return (
    <NavigationContainer>
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
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
