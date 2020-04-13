import Reactotron from 'reactotron-react-native';
import { Platform } from "react-native";

if (__DEV__) {
  const tron = Reactotron.configure({host: Platform.OS === "ios" ? 'localhost' : '10.0.2.2' })
    .useReactNative()
    .connect();

  console.tron = tron;

  tron.clear();
}
