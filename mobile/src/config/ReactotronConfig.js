import { AsyncStorage } from 'react-native';
import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron.setAsyncStorageHandler(AsyncStorage)
    .configure()
    .useReactNative({
      asyncStorage: false,
    })
    .connect();
  console.tron = tron;
  tron.clear();
}
