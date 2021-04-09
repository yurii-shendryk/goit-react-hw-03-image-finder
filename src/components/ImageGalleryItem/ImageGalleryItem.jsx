import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../assets/image-default.png';
import './ImageGalleryItem.scss';
const ImageGalleryItem = ({
  id,
  imgUrl,
  tags,
  likes,
  views,
  comments,
  downloads,
}) => {
  return (
    <li key={id} className="ImageGalleryItem">
      <img src={imgUrl} alt={tags} className="ImageGalleryItem-image" />
      <div className="ImageGalleryItem-stats">
        <p className="ImageGalleryItem-stats__item">
          <i className="material-icons">thumb_up</i>
          <span className="ImageGalleryItem-stats__text">{likes}</span>
        </p>
        <p className="ImageGalleryItem-stats__item">
          <i className="material-icons">visibility</i>
          <span className="ImageGalleryItem-stats__text">{views}</span>
        </p>
        <p className="ImageGalleryItem-stats__item">
          <i className="material-icons">comment</i>
          <span className="ImageGalleryItem-stats__text">{comments}</span>
        </p>
        <p className="ImageGalleryItem-stats__item">
          <i className="material-icons">cloud_download</i>
          <span className="ImageGalleryItem-stats__text">{downloads}</span>
        </p>
      </div>
    </li>
  );
};
ImageGalleryItem.defaultProps = {
  imgUrl: defaultImage,
  tags: 'image',
};

ImageGalleryItem.propTypes = {
  imgUrl: PropTypes.string,
  tags: PropTypes.string,
};

export default ImageGalleryItem;
