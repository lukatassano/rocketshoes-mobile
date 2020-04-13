import React from 'react';
import Routes from './src/routes';
import { StatusBar, View } from "react-native";
import Header from './src/components/Header';

import './src/config/ReactotronConfig';

export default function App(props) {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#333" />
      <Routes />
    </>
  );
}
