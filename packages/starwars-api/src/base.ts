import { instance } from './init';

export const generateEndpointForCollection = (collection: string) => {
  const getAll = async (page: number = 1) => {
    const response = await instance.get(`https://swapi.dev/api/${collection}/?page=${page}`);
    return response?.data;
  };

  const get = async (id: number = 1) => {
    const response = await instance.get(`https://swapi.dev/api/${collection}/${id}/`);
    return response?.data;
  };

  return {
    getAll,
    get,
  };
};
