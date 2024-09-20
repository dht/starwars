import { Breadcrumbs, Button, Search, Logo } from 'starwars-ui';
import { Table } from 'table-system';
import { tables } from '../../_definitions';
import { Json } from '../../types';
import { Actions, Content, H1, Top, Wrapper } from './PageCategory.style';
import { Outlet } from 'react-router-dom';

export type PageCategoryProps = {
  data: Json[];
  isLoading?: boolean;
  categoryId?: string;
  q: string;
  callbacks: {
    onNewItem: () => void;
    onItemChange: (id: string, change: Json) => void;
    onItemDelete: (id: string) => void;
    onSearch: (q: string) => void;
    onLogoClick: () => void;
  };
};

export function PageCategory(props: PageCategoryProps) {
  const { data, q, isLoading, callbacks, categoryId } = props;

  return (
    <Wrapper className='PageCategory-wrapper' data-testid='PageCategory-wrapper'>
      <Top>
        <Logo onClick={callbacks.onLogoClick} />
        <Breadcrumbs categoryId={categoryId} />
      </Top>
      <Actions>
        <Button disabled={isLoading} onClick={callbacks.onNewItem}>
          New Person
        </Button>
      </Actions>
      <H1>{categoryId}</H1>
      <Content>
        <Search value={q} onChange={callbacks.onSearch} />
        <Table
          config={tables.people}
          data={data}
          loading={isLoading}
          onItemChange={callbacks.onItemChange}
          onItemDelete={callbacks.onItemDelete}
        />
      </Content>
      <Outlet />
    </Wrapper>
  );
}

export default PageCategory;
