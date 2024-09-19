export const words = ['Luke', 'Skywalker', 'Darth', 'Vader', 'Princess'];

export const randomWord = () => {
  const index = Math.floor(Math.random() * words.length);
  return words[index];
};

export const randomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
