import React from 'react';
import { Content, H1, Top, Wrapper } from './PageCategory.style';
import { Table } from 'table-system';
import { Breadcrumbs, Logo } from 'starwars-ui';
import { api } from 'starwars-api';
import { useMount } from 'react-use';

export type PageCategoryProps = {
  onLogoClick?: () => void;
};

export function PageCategory(props: PageCategoryProps) {
  useMount(() => {
    api.people.getAll().then((data: any) => {
      console.log('data ->', data);
    });
  });

  return (
    <Wrapper className='PageCategory-wrapper' data-testid='PageCategory-wrapper'>
      <Top>
        <Logo onClick={props.onLogoClick} />
        <Breadcrumbs />
      </Top>
      <H1>Characters</H1>
      <Content>
        <Table />
      </Content>
    </Wrapper>
  );
}

export default PageCategory;
