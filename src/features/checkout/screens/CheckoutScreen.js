import React, { useContext, useState } from 'react';
import { ScrollView } from 'react-native';
import { List, Divider } from 'react-native-paper';

import { SafeArea } from '../../../components/SafeArea/SafeArea';
import { Spacer } from '../../../components/Spacer/Spacer';
import { CustomText as Text } from '../../../components/CustomText/CustomText';
import { CreditCardInput } from '../components/CreditCardInput';
import {
  CartIconContainer,
  CartIcon,
  PaymentProcessing,
  NameInput,
  PayButton,
  ClearButton,
} from '../components/Checkout.styles';

import { RestaurantInfoCard } from '../../restaurants/components/RestaurantInfoCard';

import { CartContext } from '../../../services/cart/CartContext';
import { payRequest } from '../../../services/checkout/checkout.service';

export const CheckoutScreen = ({ navigation }) => {
  const { cart, clearCart, restaurant, sum } = useContext(CartContext);
  const [name, setName] = useState('');
  const [card, setCard] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onPay = () => {
    setIsLoading(true);
    if (!card || !card.id) {
      setIsLoading(false);
      navigation.navigate('CheckoutError', {
        error: 'Please fill in a valid credit card',
      });
      return;
    }
    payRequest(card.id, sum, name)
      .then(() => {
        setIsLoading(false);
        clearCart();
        navigation.navigate('CheckoutSuccess');
      })
      .catch((err) => {
        setIsLoading(false);
        navigation.navigate('CheckoutError', {
          error: err,
        });
      });
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
      {isLoading && <PaymentProcessing />}
      <ScrollView>
        <Spacer position="left" size="medium">
          <Spacer position="top" size="large">
            <Text variant="body">Your Order</Text>
          </Spacer>
          <List.Section>
            {cart.map(({ item, price }, i) => {
              return (
                <List.Item
                  key={`item-${i}`}
                  title={`${item} - ${price / 100}`}
                />
              );
            })}
          </List.Section>
          <Text variant="body">Total: {sum / 100}</Text>
        </Spacer>
        <Spacer position="top" size="large" />
        <Divider />
        <NameInput
          label="Name"
          value={name}
          onChangeText={(nameText) => setName(nameText)}
        />
        <Spacer position="top" size="large">
          {name.length > 0 && (
            <CreditCardInput
              name={name}
              onSuccess={setCard}
              onError={() =>
                navigation.navigate('CheckoutError', {
                  error: 'Something went wrong processing your credit card',
                })
              }
            />
          )}
        </Spacer>
        <Spacer position="top" size="xxl" />
        <PayButton
          mode="contained"
          icon="cash-usd"
          onPress={onPay}
          disabled={isLoading}
        >
          Pay
        </PayButton>
        <Spacer position="top" size="large">
          <ClearButton
            mode="contained"
            icon="cart-off"
            onPress={clearCart}
            disabled={isLoading}
          >
            Clear Cart
          </ClearButton>
        </Spacer>
      </ScrollView>
    </SafeArea>
  );
};
