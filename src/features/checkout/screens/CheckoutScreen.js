import React, { useContext } from 'react';
import { Text } from 'react-native-paper';

import { SafeArea } from '../../../components/SafeArea/SafeArea';
import { CreditCardInput } from '../components/CreditCardInput';

import { CartContext } from '../../../services/cart/CartContext';

export const CheckoutScreen = () => {
  const { cart, restaurant } = useContext(CartContext);

  return (
    <SafeArea>
      <Text>{JSON.stringify(cart)}</Text>
      <Text>{JSON.stringify(restaurant)}</Text>
      <CreditCardInput />
    </SafeArea>
  );
};
