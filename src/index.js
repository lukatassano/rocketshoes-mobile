import React from 'react';
import { Provider } from 'react-redux';
import './config/ReactotronConfig';
import { StatusBar } from "react-native";
import store from './store';

import { NavigationContainer } from "@react-navigation/native";

import Routes from './routes';
import {navigationRef} from './services/navigation';


export default function App() {
  return (
    <Provider store={store} >
      <NavigationContainer ref={navigationRef}>
        <StatusBar barStyle="light-content" backgroundColor="#333" />
        <Routes/>
      </NavigationContainer>
    </Provider>
  );
}
