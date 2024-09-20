// import { selectors, useDispatch, useSelector } from 'starwars-store';
import { usePrompt } from 'prompt-system';
import { useEffect, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { addListener, guid4 } from 'shared-base';
import { toast } from 'starwars-ui';
import { useData } from '../../hooks/useData';
import { Json } from '../../types';
import { PageCategory } from './PageCategory';

export type PageCategoryContainerProps = {};

export function PageCategoryContainer(_props: PageCategoryContainerProps) {
  const navigate = useNavigate();
  const { categoryId } = useParams();
  const { data, isLoading, q, setQ, createItem, updateItem, deleteItem } = useData('people');
  const { confirm } = usePrompt();

  const callbacks = useMemo(
    () => ({
      onNewItem: () => {
        navigate('new');
      },
      onItemChange: (id: string, change: Json) => {
        updateItem(id, change);
        toast('Item updated', { type: 'success' });
      },
      onItemDelete: async (id: string) => {
        const item = data.find((item) => item.id === id);

        if (!item) return;

        const { value, didCancel } = await confirm({
          title: 'Delete Item',
          message: `Are you sure you want to delete ${item.name}?`,
          confirmText: 'Delete',
          confirmColor: 'error',
        });

        if (didCancel || !value) return;

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
