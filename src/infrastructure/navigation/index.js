import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AppNavigator } from './AppNavigator';
import { AccountNavigator } from './AccountNavigator';

import { AuthenticationContext } from '../../services/authentication/AuthenticationContext';

export const Navigation = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};
