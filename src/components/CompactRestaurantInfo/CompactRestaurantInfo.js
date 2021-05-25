import React from 'react';
import { Image, View, Platform } from 'react-native';
import { WebView } from 'react-native-webview';
import styled from 'styled-components/native';

import { CustomText as Text } from '../CustomText/CustomText';

const CompactImage = styled(Image)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const CompactWebview = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const Item = styled(View)`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

const isAndroid = Platform.OS === 'android';

export const CompactRestaurantInfo = ({ restaurant, isMap }) => {
  const CustomImage = isAndroid && isMap ? CompactWebview : CompactImage;

  return (
    <Item>
      <CustomImage source={{ uri: restaurant.photos[0] }} />
      <Text center variant="caption">
        {restaurant.name}
      </Text>
    </Item>
  );
};
