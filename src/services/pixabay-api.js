import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
const API_KEY = '20301479-c3cd6e26a773a7261d62d0b69';
axios.defaults.params = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};

const fetchImages = async ({ searchQuery = '', currentPage = 1 }) => {
  try {
    const { data } = await axios.get('', {
      params: { q: searchQuery, page: currentPage },
    });
    return data.hits;
  } catch (error) {
    console.log('error', { error });
    return [];
  }
};

export default { fetchImages };
