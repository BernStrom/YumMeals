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
} from '../components/Checkout.styles';

import { RestaurantInfoCard } from '../../restaurants/components/RestaurantInfoCard';

import { CartContext } from '../../../services/cart/CartContext';

export const CheckoutScreen = () => {
  const { cart, restaurant, sum } = useContext(CartContext);
  const [name, setName] = useState('');

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
        {name.length > 0 && <CreditCardInput name={name} />}
      </ScrollView>
    </SafeArea>
  );
};
