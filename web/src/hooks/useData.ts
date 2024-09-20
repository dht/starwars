import Fuse from 'fuse.js';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useList, useMount } from 'react-use';
import { api } from 'starwars-api';
import { Json } from '../types';

type CollectionName = 'people' | 'films' | 'starships' | 'vehicles' | 'species' | 'planets';

const keys: Record<CollectionName, string[]> = {
  people: ['name'],
  films: ['title'],
  starships: ['name'],
  vehicles: ['name'],
  species: ['name'],
  planets: ['name'],
};

export function useData(collectionName: CollectionName) {
  const [data, { set, update, filter, push }] = useList<Json>([]);
  const [filteredData, setFilteredData] = useState<Json[]>([]);
  const [q, setQ] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const fuseInstance = useMemo<Fuse<Json>>(() => {
    return new Fuse(data, {
      keys: keys[collectionName],
    });
  }, [data]);

  useMount(() => {
    setIsLoading(true);
    setQ('');
    const method = api[collectionName];

    method
      .getAll()
      .then((data: any) => {
        set(data);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  });

  useEffect(() => {
    if (!q) {
      setFilteredData(data);
      return;
    }

    const results = fuseInstance.search(q);
    setFilteredData(results.map((result) => result.item));
  }, [data, q]);

  const createItem = useCallback(
    (_id: string, item: Json) => {
      push(item);
    },
    [push]
  );

  const updateItem = useCallback(
    (id: string, change: Json) => {
      update((item) => item.id === id, change);
    },
    [update]
  );

  const deleteItem = useCallback(
    (id: string) => {
      filter((item) => item.id !== id);
    },
    [filter]
  );

  return {
    data: filteredData,
    q,
    setQ,
    isLoading,
    createItem,
    updateItem,
    deleteItem,
  };
}
