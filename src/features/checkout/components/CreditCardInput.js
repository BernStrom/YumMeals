import React from 'react';
import { LiteCreditCardInput } from 'react-native-credit-card-input';

import { cardTokenRequest } from '../../../services/checkout/checkout.service';

export const CreditCardInput = ({ name, onSuccess, onError }) => {
  const onChange = async (formData) => {
    const { values, status } = formData;
    const isIncomplete = Object.values(status).includes('incomplete');
    const expiry = values.expiry.split('/');

    const card = {
      number: values.number,
      exp_month: expiry[0],
      exp_year: expiry[1],
      cvc: values.cvc,
      name: name,
    };

    if (!isIncomplete) {
      try {
        const info = await cardTokenRequest(card);
        onSuccess(info);
      } catch (err) {
        onError();
      }
    }
  };

  return <LiteCreditCardInput onChange={onChange} />;
};
