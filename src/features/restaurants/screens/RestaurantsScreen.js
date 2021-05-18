import React from 'react';
import { StatusBar, SafeAreaView, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
  /* margin-top: ${StatusBar.currentHeight}px; */
`;

const SearchContainer = styled(View)`
  padding: 16px;
  background-color: #33ff90;
`;

const RestaurantListContainer = styled(View)`
  flex: 1;
  padding: 16px;
  background-color: #33a8ff;
`;

import { RestaurantInfoCard } from '../components/RestaurantInfoCard';

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar placeholder="Search" />
    </SearchContainer>
    <RestaurantListContainer>
      <RestaurantInfoCard />
    </RestaurantListContainer>
  </SafeArea>
);
