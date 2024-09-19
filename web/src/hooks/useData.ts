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
      console.log('data ->', data);
      push(item);
    },
    [data]
  );

  const updateItem = useCallback(
    (id: string, change: Json) => {
      console.log('data ->', data);
      console.log('id, change ->', id, change);
      update((item) => item.id === id, change);
    },
    [data]
  );

  const deleteItem = useCallback(
    (id: string) => {
      console.log('id ->', id, data);
      const index = data.findIndex((item) => item.id === id);
      console.log('index ->', index);

      removeAt(index);
    },
    [data]
  );

  return { data, isLoading, createItem, updateItem, deleteItem };
}
