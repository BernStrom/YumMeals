import React, { useContext } from 'react';
import { Button } from 'react-native-paper';

import { SafeArea } from '../../../components/SafeArea/SafeArea';

import { AuthenticationContext } from '../../../services/authentication/AuthenticationContext';

export const SettingsScreen = () => {
  const { onLogout } = useContext(AuthenticationContext);

  return (
    <SafeArea>
      <Button icon="logout" onPress={() => onLogout()}>
        logout
      </Button>
    </SafeArea>
  );
};
