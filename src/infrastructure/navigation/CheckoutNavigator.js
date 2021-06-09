import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { CheckoutScreen } from '../../features/checkout/screens/CheckoutScreen';
import { CheckoutSuccessScreen } from '../../features/checkout/screens/CheckoutSuccessScreen';
import { CheckoutErrorScreen } from '../../features/checkout/screens/CheckoutErrorScreen';

const CheckoutStack = createStackNavigator();

export const CheckoutNavigator = () => (
  <CheckoutStack.Navigator headerMode="none">
    <CheckoutStack.Screen name="Checkout" component={CheckoutScreen} />
    <CheckoutStack.Screen
      name="CheckoutSuccess"
      component={CheckoutSuccessScreen}
    />
    <CheckoutStack.Screen
      name="CheckoutError"
      component={CheckoutErrorScreen}
    />
  </CheckoutStack.Navigator>
);
