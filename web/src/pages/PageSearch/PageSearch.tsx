import React from 'react';
import { Wrapper } from './PageSearch.style';
import { AutoComplete, Logo } from 'starwars-ui';
import { api } from 'starwars-api';

export type PageSearchProps = {
  callbacks: {
    onGroupClick: (group: string) => void;
  };
};

export function PageSearch(props: PageSearchProps) {
  const { callbacks } = props;

  return (
    <Wrapper className='PageSearch-wrapper' data-testid='PageSearch-wrapper'>
      <Logo></Logo>
      <AutoComplete
        apiMethod={(q: string) => api.searchAll(q, 3)}
        onGroupClick={callbacks.onGroupClick}
      />
    </Wrapper>
  );
}

export default PageSearch;
