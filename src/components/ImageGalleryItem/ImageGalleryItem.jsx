import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../assets/image-default.png';
import './ImageGalleryItem.scss';
const ImageGalleryItem = ({ id, imgUrl, tags, largeImageUrl, onClick }) => {
  return (
    <li key={id} className="ImageGalleryItem">
      <img
        src={imgUrl}
        alt={tags}
        className="ImageGalleryItem-image"
        data-src={largeImageUrl}
        onClick={onClick}
      />
    </li>
  );
};
ImageGalleryItem.defaultProps = {
  imgUrl: defaultImage,
  tags: 'image',
  largeImageUrl: defaultImage,
  onClick: () => null,
};

ImageGalleryItem.propTypes = {
  imgUrl: PropTypes.string,
  largeImageUrl: PropTypes.string,
  tags: PropTypes.string,
  onClick: PropTypes.func,
};

export default ImageGalleryItem;
