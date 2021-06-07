import React, { useContext, useState } from 'react';
import { ScrollView } from 'react-native';
import { List } from 'react-native-paper';

import { SafeArea } from '../../../components/SafeArea/SafeArea';
import { Spacer } from '../../../components/Spacer/Spacer';
import { CustomText as Text } from '../../../components/CustomText/CustomText';
import { CreditCardInput } from '../components/CreditCardInput';
import {
  CartIconContainer,
  CartIcon,
  NameInput,
  PayButton,
  ClearButton,
} from '../components/Checkout.styles';

import { RestaurantInfoCard } from '../../restaurants/components/RestaurantInfoCard';

import { CartContext } from '../../../services/cart/CartContext';
import { payRequest } from '../../../services/checkout/checkout.service';

export const CheckoutScreen = () => {
  const { cart, clearCart, restaurant, sum } = useContext(CartContext);
  const [name, setName] = useState('');
  const [card, setCard] = useState(null);

  const onPay = () => {
    if (!card || !card.id) {
      console.log('some error');
      return;
    }
    payRequest(card.id, sum, name);
  };

  if (!cart.length || !restaurant) {
    return (
      <SafeArea>
        <CartIconContainer>
          <CartIcon icon="cart-off" />
          <Text variant="body">Your cart is empty!</Text>
        </CartIconContainer>
      </SafeArea>
    );
  }

  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <Spacer position="left" size="medium">
          <Spacer position="top" size="large">
            <Text variant="body">Your Order</Text>
          </Spacer>
          <List.Section>
            {cart.map(({ item, price }) => {
              return <List.Item title={`${item} - ${price / 100}`} />;
            })}
          </List.Section>
          <Text variant="body">Total: {sum / 100}</Text>
        </Spacer>
        <NameInput
          label="Name"
          value={name}
          onChangeText={(nameText) => setName(nameText)}
        />
        <Spacer position="top" size="large">
          {name.length > 0 && (
            <CreditCardInput name={name} onSuccess={setCard} />
          )}
        </Spacer>
        <Spacer position="top" size="xxl" />
        <PayButton mode="contained" icon="cash-usd" onPress={onPay}>
          Pay
        </PayButton>
        <Spacer position="top" size="large">
          <ClearButton mode="contained" icon="cart-off" onPress={clearCart}>
            Clear Cart
          </ClearButton>
        </Spacer>
      </ScrollView>
    </SafeArea>
  );
};
