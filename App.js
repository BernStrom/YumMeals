import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import * as firebase from 'firebase';

import { useFonts, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { Lato_400Regular } from '@expo-google-fonts/lato';

import { theme } from './src/infrastructure/theme';
import { Navigation } from './src/infrastructure/navigation';
import { AuthenticationContextProvider } from './src/services/authentication/AuthenticationContext';

const firebaseConfig = {
  apiKey: 'AIzaSyAMOQP9M0--a-l6JDPF5wIXxSHtTd58BLw',
  authDomain: 'yummeals-e8d3d.firebaseapp.com',
  projectId: 'yummeals-e8d3d',
  storageBucket: 'yummeals-e8d3d.appspot.com',
  messagingSenderId: '572941448591',
  appId: '1:572941448591:web:9993d5c64e60e32232c7fa',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [fontsLoaded] = useFonts({
    Oswald_400Regular,
    Lato_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <ThemeProvider theme={theme}>
          <AuthenticationContextProvider>
            <Navigation />
          </AuthenticationContextProvider>
        </ThemeProvider>
        <ExpoStatusBar style="auto" />
      </>
    );
  }
}
