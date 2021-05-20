import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ThemeProvider } from 'styled-components/native';

import { useFonts, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { Lato_400Regular } from '@expo-google-fonts/lato';

import { theme } from './src/infrastructure/theme';
import { SafeArea } from './src/components/SafeArea/SafeArea';
import { RestaurantsScreen } from './src/features/restaurants/screens/RestaurantsScreen';

const Maps = () => (
  <SafeArea>
    <Text>Maps!</Text>
  </SafeArea>
);
const Settings = () => (
  <SafeArea>
    <Text>Settings!</Text>
  </SafeArea>
);

const Tab = createBottomTabNavigator();

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
          <NavigationContainer>
            <Tab.Navigator>
              <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
              <Tab.Screen name="Maps" component={Maps} />
              <Tab.Screen name="Settings" component={Settings} />
            </Tab.Navigator>
          </NavigationContainer>
        </ThemeProvider>
        <ExpoStatusBar style="auto" />
      </>
    );
  }
}
