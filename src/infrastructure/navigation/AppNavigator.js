import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';

import { SafeArea } from '../../components/SafeArea/SafeArea';
import { RestaurantsScreen } from '../../features/restaurants/screens/RestaurantsScreen';

const TAB_ICON = {
  Restaurants: 'restaurant',
  Map: 'map',
  Settings: 'settings',
};

const Tab = createBottomTabNavigator();

// ===== Mock Screen Components ===== //
const Map = () => (
  <SafeArea>
    <Text>Maps!</Text>
  </SafeArea>
);
const Settings = () => (
  <SafeArea>
    <Text>Settings!</Text>
  </SafeArea>
);
// ===== Mock Screen Components ===== //

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];

  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

export const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={createScreenOptions}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
      <Tab.Screen name="Map" component={Map} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  </NavigationContainer>
);
