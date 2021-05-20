import React, { useContext } from 'react';
import { FlatList, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';

import { SafeArea } from '../../../components/SafeArea/SafeArea';
import { Spacer } from '../../../components/Spacer/Spacer';

import { RestaurantsContext } from '../../../services/restaurants/RestaurantsContext';

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
  background-color: #33ff90;
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

import { RestaurantInfoCard } from '../components/RestaurantInfoCard';

export const RestaurantsScreen = () => {
  const { restaurants } = useContext(RestaurantsContext);

  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar placeholder="Search" />
      </SearchContainer>
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          console.log(item);
          return (
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
