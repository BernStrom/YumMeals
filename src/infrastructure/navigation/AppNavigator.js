import React, { useContext } from 'react';
import { Button } from 'react-native-paper';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';

import { SafeArea } from '../../components/SafeArea/SafeArea';
import { RestaurantsNavigator } from './RestaurantsNavigator';
import { MapScreen } from '../../features/map/screens/MapScreen';

import { AuthenticationContext } from '../../services/authentication/AuthenticationContext';

const TAB_ICON = {
  Restaurants: 'restaurant',
  Map: 'map',
  Settings: 'settings',
};

const Tab = createBottomTabNavigator();

// ===== Mock Screen Components ===== //
const Settings = () => {
  const { onLogout } = useContext(AuthenticationContext);

  return (
    <SafeArea>
      <Button icon="logout" onPress={() => onLogout()}>
        logout
      </Button>
    </SafeArea>
  );
};
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
  <Tab.Navigator
    screenOptions={createScreenOptions}
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }}
  >
    <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
    <Tab.Screen name="Map" component={MapScreen} />
    <Tab.Screen name="Settings" component={Settings} />
  </Tab.Navigator>
);
