import React, { useContext, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { List, Avatar } from 'react-native-paper';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styled from 'styled-components/native';

import { SafeArea } from '../../../components/SafeArea/SafeArea';
import { Spacer } from '../../../components/Spacer/Spacer';
import { CustomText as Text } from '../../../components/CustomText/CustomText';

import { AuthenticationContext } from '../../../services/authentication/AuthenticationContext';

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;

const AvatarContainer = styled(View)`
  align-items: center;
`;

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  const [photo, setPhoto] = useState(null);

  const getProfilePicture = async (currentUser) => {
    const photoUri = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
    setPhoto(photoUri);
  };

  useFocusEffect(() => {
    getProfilePicture(user);
  }, [user]);

  return (
    <SafeArea>
      <AvatarContainer>
        <TouchableOpacity onPress={() => navigation.navigate('Camera')}>
          {!photo && (
            <Avatar.Icon
              size={180}
              icon="account-circle"
              backgroundColor="#2182BD"
            />
          )}
          {photo && (
            <Avatar.Image
              size={180}
              source={{ uri: photo }}
              backgroundColor="#2182BD"
            />
          )}
        </TouchableOpacity>
        <Spacer position="top" size="large">
          <Text variant="label">{user.email}</Text>
        </Spacer>
      </AvatarContainer>
      <List.Section>
        <SettingsItem
          title="Favourites"
          description="View your favourites"
          onPress={() => navigation.navigate('Favourites')}
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
        />
        <SettingsItem
          title="Logout"
          onPress={onLogout}
          left={(props) => <List.Icon {...props} color="black" icon="logout" />}
        />
      </List.Section>
    </SafeArea>
  );
};
