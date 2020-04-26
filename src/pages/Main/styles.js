import styled from 'styled-components/native';
import {Smallest, Big, Bigger} from '~/components/atoms/typograph';
import CodeBox from '~/components/atoms/CodeBox';
import Lottie from 'lottie-react-native';

export const Container = styled.View`
  background-color: #ffffff;
  flex: 1;
  align-items: center;
  padding-right: 16px;
  padding-left: 16px;
`;

export const MainTitle = styled(Bigger)`
  padding-top: 40px;
`;

export const SubTitle = styled(Smallest)``;

export const BodyText = styled(Big)`
  padding-top: 20px;
`;

export const CodeBoxSrc = styled(CodeBox)`
  margin-top: 5px;
`;

export const LottieAnimation = styled(Lottie)`
  height: 200px;
  width: 144px;
  padding-top: 50px;
`;
