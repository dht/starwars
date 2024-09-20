export const images = [
  'https://media.discordapp.net/attachments/1004209161191555123/1286608786609406013/dht__darth_vader_d733bb89-75ae-4bf7-b1e5-bbfbd337da35.png?ex=66ee874e&is=66ed35ce&hm=0fa24d2f37a8fee026ffb9e245d6d18861455cd0c0b88fd8b9bc530ffe908a5e&=&format=webp&quality=lossless&width=686&height=686',
  'https://media.discordapp.net/attachments/1004209161191555123/1286608762940952699/dht__luke_skywalker_2fbf50b2-b4d0-4551-bc65-28a728fbbeb0.png?ex=66ee8749&is=66ed35c9&hm=126adc542078fc3a4474876fef7e5d2469021ef3a2cd496453fe3ff95e233381&=&format=webp&quality=lossless&width=350&height=350',
  'https://media.discordapp.net/attachments/1004209161191555123/1286608707819540483/dht__darth_vader_749581d3-f69c-49ef-bafd-66998a5124d7.png?ex=66ee873b&is=66ed35bb&hm=7995b6d2bb337e31c7a1c36fe5d3b1110ec66366ac2ef452e5e0722f643b0754&=&format=webp&quality=lossless&width=350&height=350',
  'https://media.discordapp.net/attachments/1004209161191555123/1286608506773966901/dht__starwars_distant_planet_e84c3ed3-de1a-4d12-9821-faab412a183f.png?ex=66ee870c&is=66ed358c&hm=98b4220d6c18bb5a7cddae0324057086079fee1409765d47a53dba8e732461b5&=&format=webp&quality=lossless&width=686&height=686',
  'https://media.discordapp.net/attachments/1004209161191555123/1286608488914751519/dht__starwars_distant_planet_69bde462-7516-40e2-b25a-b4df55a3ae0e.png?ex=66ee8707&is=66ed3587&hm=b717b014a225b586d3a4b1e16ad97f092a6dc5aef93a43caf36479935b5c3e42&=&format=webp&quality=lossless&width=686&height=686',
  'https://media.discordapp.net/attachments/1004209161191555123/1286609523720589363/dht__x_wing_25cc2816-08ef-4afe-85a3-af6db3802ad9.png?ex=66ee87fe&is=66ed367e&hm=80e1436aad8200efcf36b4e9c9186db6c4daf440a673b812ec196ee3e3052e5e&=&format=webp&quality=lossless&width=350&height=350',
  'https://media.discordapp.net/attachments/1004209161191555123/1286609574563938334/dht__rebbel_base_starwars_3fa21771-88b5-4044-92ec-41ea2b54a172.png?ex=66ee880a&is=66ed368a&hm=18ac237886152abf10c298992bb30da41f277149dd31137f6e3dba94fea9a547&=&format=webp&quality=lossless&width=686&height=686',
  'https://media.discordapp.net/attachments/1004209161191555123/1286609640553058335/dht__rebbel_base_starwars_ca5e1f50-51cb-423e-8013-74611929baeb.png?ex=66ee881a&is=66ed369a&hm=fc11a48bac56b9a57a46705280be184991069052cd9672583a74062ac382dbc9&=&format=webp&quality=lossless&width=350&height=350',
  'https://media.discordapp.net/attachments/1004209161191555123/1286609646920138803/dht__rebbel_base_starwars_6de559c0-ff1e-4d5b-8adc-ea26e28793f4.png?ex=66ee881b&is=66ed369b&hm=a229db7fd6954f0d7b277aa430a8172694e9e51e321837afeaba142eaa7158c4&=&format=webp&quality=lossless&width=350&height=350',
  'https://media.discordapp.net/attachments/1004209161191555123/1286609681665757234/dht__the_force_d3a0fcbd-5475-4ab3-9902-d181e2a41a0f.png?ex=66ee8824&is=66ed36a4&hm=33a477675825074113d9229b89063b8c673dc735e867ca4b39d7a048644b5d61&=&format=webp&quality=lossless&width=350&height=350',
];

export const randomImage = () => {
  const index = Math.floor(Math.random() * images.length);
  return images[index];
};
