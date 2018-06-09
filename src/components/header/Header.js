import React from 'react';
import { Flex } from 'grid-styled';
import styled from 'styled-components';

import Text from '../text/Text';
import Button from '../buttons/Button';
import { COLORS_VALUES, COLORS } from '../../base/Colors';
import Space from '../../base/Space';
import { FONT_TYPES } from '../../base/Typography';

const HeaderContainer = Flex.extend`
  border-bottom: 1px solid ${COLORS_VALUES[COLORS.BORDER]};
  padding: ${Space[2]}px ${Space[8]}px;
`;

const Logo = styled(Text)`
  font-family: 'Roboto Slab';
  font-weight: 600;
`;

const Header = props => (
  <HeaderContainer alignItems="center" justifyContent="space-between" {...props}>
    <Logo tag="h1" key="logo" type={FONT_TYPES.TITLE} m="0">
      Cerberus
    </Logo>
    <Button primary={false}>Upload a new image</Button>
  </HeaderContainer>
);

export default Header;
