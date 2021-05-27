import React from 'react';
import LottieView from 'lottie-react-native';

import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  Title,
  AnimationWrapper,
} from '../components/Account.styles';
import { Spacer } from '../../../components/Spacer/Spacer';

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <AnimationWrapper>
        <LottieView
          key="animation"
          resizeMode="cover"
          autoPlay
          loop
          source={require('../../../../assets/watermelon-lottie.json')}
        />
      </AnimationWrapper>
      <Title variant="caption">YumMeals</Title>
      <AccountContainer>
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => navigation.navigate('Login')}
        >
          Login
        </AuthButton>
        <Spacer size="large">
          <AuthButton
            icon="email"
            mode="contained"
            onPress={() => navigation.navigate('Register')}
          >
            Register
          </AuthButton>
        </Spacer>
      </AccountContainer>
    </AccountBackground>
  );
};
