import { View } from 'react-native';
import styled from 'styled-components';

export const LottieAnimationWrapper = styled(View)`
  width: 100%;
  height: 40%;
  position: absolute;
  top: 80px;
  padding: ${(props) => props.theme.space[2]};
`;
