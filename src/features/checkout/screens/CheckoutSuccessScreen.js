import React from 'react';

import { SafeArea } from '../../../components/SafeArea/SafeArea';
import { CustomText as Text } from '../../../components/CustomText/CustomText';
import { CartIconContainer, CartIcon } from '../components/Checkout.styles';

export const CheckoutSuccessScreen = () => (
  <SafeArea>
    <CartIconContainer>
      <CartIcon icon="check-bold" />
      <Text variant="label">Success!</Text>
    </CartIconContainer>
  </SafeArea>
);
