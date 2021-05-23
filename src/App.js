import { useState, useEffect } from 'react';
import imagesApi from './services/pixabay-api';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import IconButton from './components/IconButton';
import Loader from './components/Loader';
import Modal from './components/Modal';
import Error from './components/Error';
import { ReactComponent as CloseIcon } from './icons/close.svg';
import './App.scss';

const App = () => {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    const fetchImages = () => {
      const options = { searchQuery, currentPage };
      setIsLoading(true);
      imagesApi
        .fetchImages(options)
        .then(hits => {
          setImages(prevState => [...prevState, ...hits]);
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
        })
        .catch(error => setError(error))
        .finally(() => setIsLoading(false));
    };
    fetchImages();
  }, [searchQuery, currentPage]);

  const updatePage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const onChangeQuery = query => {
    setSearchQuery(query);
    if (query !== searchQuery) {
      setCurrentPage(1);
      setImages([]);
    }
    setError(null);
  };

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };

  const addModalImage = ({ target }) => {
    const { src } = target.dataset;
    setCurrentImage(src);
    toggleModal();
  };

  const shouldRenderLoadMoreBtn = images.length > 0 && !isLoading;

  return (
    <div>
      {error ? (
        <Error />
      ) : (
        <>
          <Searchbar onSubmit={onChangeQuery} />
          <ImageGallery images={images} onToggleModal={addModalImage} />
          {isLoading && <Loader />}
          {shouldRenderLoadMoreBtn && <Button onClick={updatePage} />}
          {showModal && currentImage && (
            <Modal onClose={toggleModal}>
              <IconButton onClick={toggleModal} aria-label="close">
                <CloseIcon width="27" height="27" />
              </IconButton>
              <img
                className="modal__image"
                src={currentImage}
                alt="preview"
              ></img>
            </Modal>
          )}
        </>
      )}
    </div>
  );
};

export default App;
