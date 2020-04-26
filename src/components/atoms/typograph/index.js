import styled from 'styled-components/native';

import {Typography, Colors} from '~/styles';

export const Smallest = styled.Text`
  font-family: ${Typography.FONT_FAMILY_LIGHT};
  font-size: ${Typography.FONT_SIZE_12 + 'px'};
  color: ${Colors.GRAY_DARK};
  text-align: center;
`;

export const Small = styled.Text`
  font-family: ${Typography.FONT_FAMILY_LIGHT};
  font-size: ${Typography.FONT_SIZE_14 + 'px'};
  color: ${Colors.GRAY_DARK};
  text-align: center;
`;

export const Regular = styled.Text`
  font-family: ${Typography.FONT_FAMILY_REGULAR};
  font-size: ${Typography.FONT_SIZE_20 + 'px'};
  color: ${Colors.GRAY_DARK};
  text-align: center;
`;

export const Big = styled.Text`
  font-family: ${Typography.FONT_FAMILY_REGULAR};
  font-size: ${Typography.FONT_SIZE_22 + 'px'};
  color: ${Colors.PRIMARY};
  text-align: center;
`;

export const Bigger = styled.Text`
  font-family: ${Typography.FONT_FAMILY_REGULAR};
  font-size: ${Typography.FONT_SIZE_32 + 'px'};
  color: ${Colors.PRIMARY};
  text-align: center;
`;
