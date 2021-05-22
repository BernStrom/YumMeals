import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';

import { useFonts, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { Lato_400Regular } from '@expo-google-fonts/lato';

import { theme } from './src/infrastructure/theme';
import { Navigation } from './src/infrastructure/navigation';
import { RestaurantsContextProvider } from './src/services/restaurants/RestaurantsContext';
import { LocationContextProvider } from './src/services/location/LocationContext';

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
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <Navigation />
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </ThemeProvider>
        <ExpoStatusBar style="auto" />
      </>
    );
  }
}
