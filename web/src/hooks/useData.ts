import { useCallback, useState } from 'react';
import { useList, useMount } from 'react-use';
import { api } from 'starwars-api';
import { Json } from '../types';

export function useData(collectionName: string) {
  const [data, { set, update, removeAt, push }] = useList<Json>([]);
  const [isLoading, setIsLoading] = useState(true);

  useMount(() => {
    setIsLoading(true);
    api[collectionName].getAll().then((data: any) => {
      set(data);
      setIsLoading(false);
    });
  });

  const createItem = useCallback(
    (id: string, item: Json) => {
      push(item);
    },
    [data]
  );

  const updateItem = useCallback(
    (id: string, change: Json) => {
      update((item) => item.id === id, change);
    },
    [data]
  );

  const deleteItem = useCallback(
    (id: string) => {
      const index = data.findIndex((item) => item.id === id);

      removeAt(index);
    },
    [data]
  );

  return { data, isLoading, createItem, updateItem, deleteItem };
}
