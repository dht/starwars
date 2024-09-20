import { useEffect, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { addListener, guid4, invokeEvent } from 'shared-base';
import { toast } from 'starwars-ui';
import { useData } from '../../hooks/useData';
import { Json } from '../../types';
import { PageCategory } from './PageCategory';

export type PageCategoryContainerProps = {};

export function PageCategoryContainer(_props: PageCategoryContainerProps) {
  const navigate = useNavigate();
  const { categoryId } = useParams();
  const { data, isLoading, q, setQ, createItem, updateItem, deleteItem } = useData('people');

  const callbacks = useMemo(
    () => ({
      onNewItem: () => {
        invokeEvent('people', {
          verb: 'create',
          crudMethod: createItem, // there are better ways to handle this in real-world apps
        });
      },
      onItemChange: (id: string, change: Json) => {
        const item = data.find((item) => item.id === id);
        invokeEvent('people', {
          verb: 'update',
          id,
          params: { item, change },
          crudMethod: updateItem,
        });
      },
      onItemDelete: async (id: string) => {
        const item = data.find((item) => item.id === id);
        invokeEvent('people', {
          verb: 'delete',
          id,
          params: { item },
          crudMethod: deleteItem,
        });
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
