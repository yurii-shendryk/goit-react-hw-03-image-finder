import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
const API_KEY = '20301479-c3cd6e26a773a7261d62d0b69';

const fetchImages = ({ searchQuery = '', currentPage = 1, pageSize = 12 }) => {
  return axios
    .get(
      `/?q=${searchQuery}&key=${API_KEY}&page=${currentPage}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(({ data }) => data.hits);
};
// eslint-disable-next-line
export default { fetchImages };
