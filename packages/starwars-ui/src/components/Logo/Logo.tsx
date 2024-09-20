import React from 'react';
import { Sub, Wrapper } from './Logo.style';
import classnames from 'classnames';

export type LogoProps = {
  onClick?: () => void;
};

export function Logo(props: LogoProps) {
  const className = classnames('Logo-wrapper', {
    clickable: props.onClick,
  });

  return (
    <Wrapper className={className} data-testid='Logo-wrapper' onClick={props.onClick}>
      Star Wars
      <Sub>Explorer</Sub>
    </Wrapper>
  );
}

export default Logo;
