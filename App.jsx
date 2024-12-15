// In App.js in a new project

import * as React from 'react';
import { Platform, StatusBar, Text, View } from 'react-native';
import AppNavigations from './AppNavigations';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import store from './redux-store/store';
import { Provider } from 'react-redux';


export default function App() {

  React.useEffect(() => {
    StatusBar.setBarStyle("dark-content");
    Platform.OS === 'android' && StatusBar.setBackgroundColor('transparent');
    StatusBar.setTranslucent(true);
  }, []);

  return (
    <>
      <Provider store={store}>
        <SafeAreaProvider>
          <StatusBar translucent backgroundColor="transparent" />
          <StatusBar translucent backgroundColor="transparent" />
          <View style={{ flex: 1 }} >
            <NavigationContainer>
              <AppNavigations />
            </NavigationContainer>
          </View>
        </SafeAreaProvider>
      </Provider>

    </>
  );
}