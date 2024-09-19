import { sortBy } from './sort';

export type Json = Record<string, unknown>;

export const parseSearchAllResults = (responses: any[], maxPerCategory: number) => {
  const output: Json[] = [];

  ['people', 'planets', 'films', 'species', 'vehicles', 'starships'].forEach(
    (collection, index) => {
      const res = responses[index];
      const { results = [] } = res;

      results.slice(0, maxPerCategory).forEach((result: Json) => {
        output.push({
          label: result.name || result.title,
          value: result.url,
          category: collection,
        });
      });
    }
  );

  return output.sort(sortBy(['category', 'label']));
};
