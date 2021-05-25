import React from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

import { Spacer } from '../Spacer/Spacer';
import { CompactRestaurantInfo } from '../CompactRestaurantInfo/CompactRestaurantInfo';

const FavouritesWrapper = styled(View)`
  padding: 10px;
`;

export const FavouritesBar = ({ favourites, onNavigate }) => (
  <FavouritesWrapper>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {favourites.map((restaurant) => {
        const key = restaurant.name;
        return (
          <Spacer key={key} position="left" size="medium">
            <TouchableOpacity
              onPress={() => onNavigate('RestaurantDetail', { restaurant })}
            >
              <CompactRestaurantInfo restaurant={restaurant} />
            </TouchableOpacity>
          </Spacer>
        );
      })}
    </ScrollView>
  </FavouritesWrapper>
);
