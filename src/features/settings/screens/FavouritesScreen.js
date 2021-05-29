import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';

import { SafeArea } from '../../../components/SafeArea/SafeArea';
import { Spacer } from '../../../components/Spacer/Spacer';
import { CustomText as Text } from '../../../components/CustomText/CustomText';
import { RestaurantList } from '../../restaurants/components/RestaurantList.styles';
import { RestaurantInfoCard } from '../../restaurants/components/RestaurantInfoCard';
import { LottieAnimationWrapper } from '../../../components/LottieAnimationWrapper/LottieAnimationWrapper';

import { FavouritesContext } from '../../../services/favourites/FavouritesContext';

const NoFavouritesArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;

export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);

  return favourites.length ? (
    <SafeArea>
      <RestaurantList
        data={favourites}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('RestaurantDetail', { restaurant: item })
              }
            >
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  ) : (
    <NoFavouritesArea>
      <LottieAnimationWrapper>
        <LottieView
          key="animation"
          resizeMode="cover"
          autoPlay
          loop
          source={require('../../../../assets/animations/heartbreak-lottie.json')}
        />
      </LottieAnimationWrapper>
      <Text variant="label">No favourites yet</Text>
    </NoFavouritesArea>
  );
};
