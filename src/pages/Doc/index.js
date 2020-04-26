import React from 'react';
import {
  Container,
  ScrollContainer,
  MainTitle,
  SubTitle,
  BigTitle,
  Icon,
  Lib,
  LibTitle,
} from './styles';

import {Colors} from '~/styles';

import libs from './utils/libs.json';

export default function Doc() {
  return (
    <Container>
      <MainTitle>AVALON</MainTitle>
      <SubTitle>TEMPLATE AVANÇADO</SubTitle>
      <BigTitle>Esse template conta com...</BigTitle>
      <ScrollContainer>
        {libs.map(({lib, id}) => (
          <Lib key={id}>
            <Icon name="check" color={Colors.SUCCESS} size={14} />
            <LibTitle>{lib}</LibTitle>
          </Lib>
        ))}
      </ScrollContainer>
    </Container>
  );
}
