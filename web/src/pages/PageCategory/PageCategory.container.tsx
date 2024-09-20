// import { selectors, useDispatch, useSelector } from 'starwars-store';
import React, { useEffect, useMemo } from 'react';
import { PageCategory } from './PageCategory';
import { toast } from 'starwars-ui';
import { useNavigate, useParams } from 'react-router-dom';
import { Json } from '../../types';
import { useData } from '../../hooks/useData';
import { addListener, guid4 } from 'shared-base';

export type PageCategoryContainerProps = {};

export function PageCategoryContainer(_props: PageCategoryContainerProps) {
  const navigate = useNavigate();
  const { categoryId } = useParams();
  const { data, isLoading, q, setQ, createItem, updateItem, deleteItem } = useData('people');

  // const dispatch = useDispatch();
  // const appState = useSelector(selectors.raw.$rawAppState);

  const callbacks = useMemo(
    () => ({
      onNewItem: () => {
        navigate('new');
      },
      onItemChange: (id: string, change: Json) => {
        updateItem(id, change);
        toast('Item updated', { type: 'success' });
      },
      onItemDelete: (id: string) => {
        deleteItem(id);
        toast('Item deleted', { type: 'success' });
      },
      onSearch: (value: string) => {
        setQ(value);
      },
      onLogoClick: () => {
        navigate('/');
      },
    }),
    [data]
  );

  // NOTE: in a "real-world" app, side-effects would be handled in a centralized way
  useEffect(() => {
    const unlisten = addListener('create/person', (data: Json) => {
      const id = guid4();
      const item = { ...data, id };
      createItem(id, item);
      toast('Item created', { type: 'success' });
      navigate(-1);
    });

    return () => {
      unlisten();
    };
  }, []);

  return (
    <PageCategory
      data={data}
      q={q}
      isLoading={isLoading}
      callbacks={callbacks}
      categoryId={categoryId}
    />
  );
}

export default PageCategoryContainer;
