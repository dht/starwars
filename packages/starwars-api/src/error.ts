export const errorToMessage = (method: string, url: string) => {
  const urlParts = url.split('/');

  const collection = urlParts[4];

  return `could not ${method} ${collection}`;
};
