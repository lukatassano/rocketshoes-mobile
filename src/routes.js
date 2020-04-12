import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  HeaderTitle,
  headerStyle,
} from '@react-navigation/stack';
import {View, Image} from 'react-native';
import {MdShoppingBasket} from 'react-icons/md';

const Stack = createStackNavigator();

import Home from './pages/Home';
import Cart from './pages/Cart';
import logo from './assets/logo.png';

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitle: false,
          headerTransparent: true,
          headerBackground: () => (
            <View
              style={{
                flex: 1,
                paddingTop: 20,
                justifyContent: 'center',
                alignItems: 'flex-start'
              }}>
              <Image
                source={logo}
                resizeMode="contain"
                style={{height: 25, marginLeft: 2}}
              />
              <View>

              </View>
            </View>
          ),
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
