import React from 'react';

import { SafeArea } from '../../../components/SafeArea/SafeArea';
import { RestaurantInfoCard } from '../components/RestaurantInfoCard';

export const RestaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params;

  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
    </SafeArea>
  );
};
