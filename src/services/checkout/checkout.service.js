import createStripe from 'stripe-client';

const stripe = createStripe(
  'pk_test_51HlCmpIwCgUYoSdR87Hruz58wZi0obvfWKfLWZw9Uo3gou57Dbvd4PT8lBwVzNimZXJEqSG6agEiPnnVmX3vbKj900ZZnnvcgK'
);

export const cardTokenRequest = (card) => stripe.createToken(card);
