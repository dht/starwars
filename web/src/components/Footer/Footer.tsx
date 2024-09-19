import React from 'react';
import { Wrapper } from './Footer.style';

export type FooterProps = {};

export function Footer(_props: FooterProps) {
  return (
    <Wrapper className='Footer-wrapper' data-testid='Footer-wrapper'>
      <div>Star Wars™ Search Engine &copy; 2024</div>
      <div>All Rights Reserved to The Walt Disney Company</div>
      <div>Made with The Force</div>
    </Wrapper>
  );
}

export default Footer;
