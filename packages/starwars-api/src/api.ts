import { generateEndpointForCollection } from './base';

export const api = {
  people: generateEndpointForCollection('people'),
  planets: generateEndpointForCollection('planets'),
  starships: generateEndpointForCollection('starships'),
};
