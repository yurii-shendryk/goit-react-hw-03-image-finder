import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';
import './ImageGallery.scss';

const ImageGallery = ({ images, onToggleModal }) => {
  return (
    <ul className="ImageGallery">
      {images.map(({ id, webformatURL, tags, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          imgUrl={webformatURL}
          tags={tags}
          largeImageUrl={largeImageURL}
          onClick={onToggleModal}
        />
      ))}
    </ul>
  );
};
ImageGallery.defaultProps = {
  onToggleModal: () => null,
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
  onToggleModal: PropTypes.func,
};

export default ImageGallery;
