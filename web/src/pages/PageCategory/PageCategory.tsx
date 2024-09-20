import { Outlet } from 'react-router-dom';
import { Breadcrumbs, Button, Logo, Lottie, Search } from 'starwars-ui';
import { Table } from 'table-system';
import { tables } from '../../_definitions';
import { Json } from '../../types';
import { Actions, Content, H1, Loader, Top, Wrapper } from './PageCategory.style';

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

  function renderLoader() {
    return (
      <Loader>
        <Lottie
          autoplay
          loop
          size={200}
          url='https://lottie.host/ce93fda1-37d8-4ffc-b3b0-18b6d213a585/ZTxCzvjIHh.json'
        />
      </Loader>
    );
  }

  return (
    <Wrapper className='PageCategory-wrapper' data-testid='PageCategory-wrapper'>
      <Top>
        <Logo onClick={callbacks.onLogoClick} />
        <Breadcrumbs categoryId={categoryId ?? ''} />
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
          customLoader={renderLoader}
        />
      </Content>
      <Outlet />
    </Wrapper>
  );
}

export default PageCategory;
