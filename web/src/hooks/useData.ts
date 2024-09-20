import { useCallback, useEffect, useRef, useState } from 'react';
import { useList, useMount } from 'react-use';
import { api } from 'starwars-api';
import { Json } from '../types';
import Fuse from 'fuse.js';

type CollectionName = 'people' | 'films' | 'starships' | 'vehicles' | 'species' | 'planets';

const keys: Record<CollectionName, string[]> = {
  people: ['name', 'height', 'mass', 'birth_year'],
  films: ['title'],
  starships: ['name'],
  vehicles: ['name'],
  species: ['name'],
  planets: ['name'],
};

export function useData(collectionName: CollectionName) {
  const [data, { set, update, removeAt, push }] = useList<Json>([]);
  const [filteredData, setFilteredData] = useState<Json[]>([]);
  const [q, setQ] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const fuseInstance = useRef<Fuse<Json>>(
    new Fuse([], {
      keys: keys[collectionName],
    })
  );

  useMount(() => {
    setIsLoading(true);
    setQ('');
    const method = api[collectionName];

    method.getAll().then((data: any) => {
      set(data);
      setIsLoading(false);
    });
  });

  useEffect(() => {
    if (!q) {
      setFilteredData(data);
      return;
    }

    const results = fuseInstance.current.search(q);
    setFilteredData(results.map((result) => result.item));
  }, [q, data]);

  useEffect(() => {
    fuseInstance.current = new Fuse<Json>(data, {
      keys: keys[collectionName],
    });
  }, [data]);

  const createItem = useCallback(
    (_id: string, item: Json) => {
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
