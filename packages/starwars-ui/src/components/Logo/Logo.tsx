import React from 'react';
import { Wrapper } from './Logo.style';

export type LogoProps = {};

export function Logo(_props: LogoProps) {
  return (
    <Wrapper className='Logo-wrapper' data-testid='Logo-wrapper'>
      Star Wars
    </Wrapper>
  );
}

export default Logo;
