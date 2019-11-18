import axios from 'axios';

const KEY = '14271027-f3d8d522fc053d5e4c1bf7f1b';

const getImages = (query, page = 1) => {
  return axios.get('https://pixabay.com/api/', {
    params: {
      key: KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
      page,
    },
  });
};

export default getImages;
