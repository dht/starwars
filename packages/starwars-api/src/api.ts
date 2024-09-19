import { generateEndpointForCollection } from './base';
import { parseSearchAllResults } from './utils/parse';

const people = generateEndpointForCollection('people');
const planets = generateEndpointForCollection('planets');
const films = generateEndpointForCollection('films');
const species = generateEndpointForCollection('species');
const vehicles = generateEndpointForCollection('vehicles');
const starships = generateEndpointForCollection('starships');

const searchAll = async (q: string, maxPerCategory: number) => {
  const promises = [
    people.search(q),
    planets.search(q),
    films.search(q),
    species.search(q),
    vehicles.search(q),
    starships.search(q),
  ];

  const results = await Promise.all(promises);
  const parsedResults = parseSearchAllResults(results, maxPerCategory);

  return parsedResults;
};

export const api = {
  people,
  planets,
  films,
  species,
  vehicles,
  starships,
  searchAll,
};
