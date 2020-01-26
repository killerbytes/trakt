export const getImage = (size, url = '') => {
  const isNoImage = url.indexOf('https://via.placeholder.com/') !== -1 ? true : false;
  return url
    ? isNoImage
      ? url
      : `https://image.tmdb.org/t/p/${size}${url}`
    : `https://via.placeholder.com/${size}?text=No Image`;
};
