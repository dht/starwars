export const images = [
  '/images/1.jpg',
  '/images/2.jpg',
  '/images/3.jpg',
  '/images/4.jpg',
  '/images/5.jpg',
  '/images/6.jpg',
];

export const randomImage = () => {
  const index = Math.floor(Math.random() * images.length);
  return images[index];
};
