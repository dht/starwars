import React from 'react';
import { Wrapper } from './PageSearch.style';
import { AutoComplete, Logo } from 'starwars-ui';

export type PageSearchProps = {};

export function PageSearch(_props: PageSearchProps) {
  return (
    <Wrapper className='PageSearch-wrapper' data-testid='PageSearch-wrapper'>
      <Logo></Logo>
      <AutoComplete />
    </Wrapper>
  );
}

export default PageSearch;
