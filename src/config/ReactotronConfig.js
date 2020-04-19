import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from "reactotron-redux-saga";
import { Platform } from "react-native";

if (__DEV__) {
  const tron = Reactotron.configure({host: Platform.OS === "ios" ? 'localhost' : '10.0.2.2' })
    .use(reactotronRedux())
    .use(reactotronSaga())
    .useReactNative()
    .connect();
    
  console.tron = tron;
    
  tron.clear();
}
