import React from 'react';

import { SafeArea } from '../../../components/SafeArea/SafeArea';
import { CustomText as Text } from '../../../components/CustomText/CustomText';
import { CartIconContainer, CartIcon } from '../components/Checkout.styles';
import { colors } from '../../../infrastructure/theme/colors';

export const CheckoutErrorScreen = ({ route }) => {
  const { error = '' } = route.params;

  return (
    <SafeArea>
      <CartIconContainer>
        <CartIcon icon="close" bg={colors.ui.error} />
        <Text variant="error">{error}</Text>
      </CartIconContainer>
    </SafeArea>
  );
};
