import React from 'react';

import { CompactRestaurantInfo } from '../../../components/CompactRestaurantInfo/CompactRestaurantInfo';

export const MapCallout = ({ restaurant }) => (
  <CompactRestaurantInfo restaurant={restaurant} isMap />
);
