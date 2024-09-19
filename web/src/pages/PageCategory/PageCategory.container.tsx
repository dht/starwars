// import { selectors, useDispatch, useSelector } from 'starwars-store';
import React, { useMemo } from 'react';
import { PageCategory } from './PageCategory';
import { toast } from 'starwars-ui';
import { useNavigate, useParams } from 'react-router-dom';
import { Json } from '../../types';
import { useData } from '../../hooks/useData';

export type PageCategoryContainerProps = {};

export function PageCategoryContainer(_props: PageCategoryContainerProps) {
  const navigate = useNavigate();
  const { categoryId } = useParams();
  const { data, isLoading, createItem, updateItem, deleteItem } = useData('people');

  // const dispatch = useDispatch();
  // const appState = useSelector(selectors.raw.$rawAppState);

  const callbacks = useMemo(
    () => ({
      onNewItem: () => {},
      onItemChange: (id: string, change: Json) => {
        updateItem(id, change);
        toast('Item updated', { type: 'success' });
      },
      onItemDelete: (id: string) => {
        deleteItem(id);
        toast('Item deleted', { type: 'success' });
      },
      onLogoClick: () => {
        navigate('/');
      },
    }),
    [data]
  );

  return (
    <PageCategory data={data} isLoading={isLoading} callbacks={callbacks} categoryId={categoryId} />
  );
}

export default PageCategoryContainer;
