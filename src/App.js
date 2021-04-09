import { useState, useEffect } from 'react';
import imagesApi from './services/pixabay-api';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import Loader from './components/Loader';

const App = () => {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const fetchImages = () => {
    const options = { searchQuery, currentPage };
    setIsLoading(true);
    imagesApi
      .fetchImages(options)
      .then(hits => {
        console.log(hits);
        setImages(prevState => [...prevState, ...hits]);
        setCurrentPage(prevState => prevState + 1);
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    if (searchQuery !== '') {
      fetchImages();
    }
  }, [searchQuery]);

  const onChangeQuery = query => {
    setSearchQuery(query);
    setCurrentPage(1);
    setImages([]);
  };

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };

  const shouldRenderLoadMoreBtn = images.length > 0 && !isLoading;

  return (
    <div>
      <Searchbar onSubmit={onChangeQuery} />
      <ImageGallery images={images} />
      {isLoading && <Loader />}
      {shouldRenderLoadMoreBtn && <Button onClick={fetchImages} />}
    </div>
  );
};

export default App;
