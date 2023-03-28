import 'react-native-reanimated';

global.__reanimatedWorkletInit = () => {};

import React from 'react';
import MainStack from './app/stacks/MainStack';
import {LogBox} from 'react-native';

import {Provider as PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import 'react-native-reanimated';
import store from './app/store/store';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
LogBox.ignoreLogs([
  'new NativeEventEmitter',
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);
LogBox.ignoreAllLogs();

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <BottomSheetModalProvider>
        <Provider store={store}>
          <PaperProvider>
            <MainStack />
          </PaperProvider>
        </Provider>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

export default App;
