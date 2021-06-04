import React, { useContext } from 'react';

import { SafeArea } from '../../../components/SafeArea/SafeArea';
import { Spacer } from '../../../components/Spacer/Spacer';
import { CustomText as Text } from '../../../components/CustomText/CustomText';
import { CreditCardInput } from '../components/CreditCardInput';
import { CartIconContainer, CartIcon } from '../components/Checkout.styles';

import { CartContext } from '../../../services/cart/CartContext';

export const CheckoutScreen = () => {
  const { cart, restaurant } = useContext(CartContext);

  if (!cart.length || !restaurant) {
    return (
      <SafeArea>
        <CartIconContainer>
          <CartIcon icon="cart-off" />
          <Text>Your cart is empty!</Text>
        </CartIconContainer>
      </SafeArea>
    );
  }

  return (
    <SafeArea>
      <Text>{JSON.stringify(cart)}</Text>
      <Text>{JSON.stringify(restaurant)}</Text>
      <CreditCardInput />
    </SafeArea>
  );
};
