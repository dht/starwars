import { instance } from './init';
import { sortBy } from './utils/sort';

export const generateEndpointForCollection = (collection: string) => {
  const getPage = async (page: number = 1) => {
    const response = await instance.get(`https://swapi.dev/api/${collection}/?page=${page}`);

    if (!response) {
      return {};
    }

    const { data } = response;

    data.results = (response?.data?.results ?? []).map((item: Json) => {
      const idRaw = item.name || item.title || '';
      const id = idRaw.toLowerCase().replace(/ /g, '_');

      return {
        id,
        ...item,
      };
    });

    return data;
  };

  const getAll = async (page: number = 1) => {
    let results: Json[] = [];
    const response = await getPage(1);
    const count = response?.count;

    if (!count) {
      return results;
    }

    results.push(...response.results);

    const pageCount = Math.ceil(count / 10);
    const promises = [];

    for (let i = 2; i <= pageCount; i++) {
      promises.push(getPage(i));
    }

    const rest = await Promise.all(promises);

    rest.forEach((r) => {
      results.push(...r.results);
    });

    return results.sort(sortBy(['name']));
  };

  const search = async (q: string) => {
    const encoded = encodeURIComponent(q);
    const response = await instance.get(`https://swapi.dev/api/${collection}/?search=${encoded}`);
    return response?.data;
  };

  const get = async (id: number = 1) => {
    const response = await instance.get(`https://swapi.dev/api/${collection}/${id}/`);
    return response?.data;
  };

  return {
    getAll,
    get,
    search,
  };
};
