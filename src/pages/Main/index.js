import React from 'react';
import {Regular, Smallest} from '~/components/atoms/typograph';

import {
  Container,
  MainTitle,
  SubTitle,
  BodyText,
  CodeBoxSrc,
  LottieAnimation,
} from './styles';
import DevLottie from '~/assets/images/lottiefiles/dev.json';

export default function Main() {
  return (
    <Container>
      <MainTitle>AVALON</MainTitle>
      <SubTitle>TEMPLATE AVANÇADO</SubTitle>
      <LottieAnimation
        source={DevLottie}
        resizeMode="contain"
        autoSize
        autoPlay
        loop
      />
      <BodyText>Bem-vindo ao template Avalon Advanced!</BodyText>
      <Regular>Essa é a tela principal! 😉</Regular>
      <Regular>Que tal colocarmos a mão na massa?</Regular>
      <Regular>Você pode editar essa tela no arquivo:</Regular>
      <CodeBoxSrc>
        <Smallest>src/pages/Main/index.js</Smallest>
      </CodeBoxSrc>
    </Container>
  );
}
