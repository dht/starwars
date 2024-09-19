import React from 'react';
import { Content, H1, Top, Wrapper } from './PageCategory.style';
import { Table } from 'table-system';
import { Breadcrumbs, Logo } from 'starwars-ui';

export type PageCategoryProps = {
  onLogoClick?: () => void;
};

export function PageCategory(props: PageCategoryProps) {
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
