import createStripe from 'stripe-client';
import { host } from '../../utils/env';

const stripe = createStripe(
  'pk_test_51HlCmpIwCgUYoSdR87Hruz58wZi0obvfWKfLWZw9Uo3gou57Dbvd4PT8lBwVzNimZXJEqSG6agEiPnnVmX3vbKj900ZZnnvcgK'
);

export const cardTokenRequest = (card) => stripe.createToken({ card });

export const payRequest = (token, amount, name) => {
  return fetch(`${host}/pay`, {
    body: JSON.stringify({ token, amount, name }),
    method: 'POST',
  }).then((res) => {
    if (res.status > 200) {
      return Promise.reject('Something went wrong processing your payment');
    }
    return res.json();
  });
};
