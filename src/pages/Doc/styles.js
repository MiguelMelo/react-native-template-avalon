import styled from 'styled-components/native';
import {Smallest, Regular, Big, Bigger} from '~/components/atoms/typograph';
import Octicons from 'react-native-vector-icons/Octicons';

export const Container = styled.View`
  background-color: #ffffff;
  flex: 1;
`;

export const HeaderContainer = styled.View`
  align-items: center;
  padding-right: 16px;
  padding-left: 16px;
`;

export const ScrollContainer = styled.ScrollView.attrs({
  contentContainerStyle: {
    alignItems: 'center',
  },
})``;

export const MainTitle = styled(Bigger)`
  padding-top: 40px;
`;

export const SubTitle = styled(Smallest)``;

export const BigTitle = styled(Big)`
  padding-top: 40px;
`;

export const Icon = styled(Octicons)`
  padding-right: 5px;
`;

export const Lib = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const LibTitle = styled(Regular)``;
