export const sortBy = (fields: string[]) => (a: any, b: any) => {
  for (const field of fields) {
    if (a[field] < b[field]) {
      return -1; // a comes before b
    }
    if (a[field] > b[field]) {
      return 1; // b comes before a
    }
  }
  return 0; // both values are equal
};
