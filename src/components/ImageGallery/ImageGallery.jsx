import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import ImageGalleryItem from '../ImageGalleryItem';
import './ImageGallery.scss';

const ImageGallery = ({ images, onClick }) => (
  <ul className="ImageGallery">
    {images.map(({ webformatURL, tags, likes, views, comments, downloads }) => (
      <ImageGalleryItem
        key={uuidv4()}
        imgUrl={webformatURL}
        tags={tags}
        likes={likes}
        views={views}
        comments={comments}
        downloads={downloads}
        onClick={onClick}
      />
    ))}
  </ul>
);

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default ImageGallery;
