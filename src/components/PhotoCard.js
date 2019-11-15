import React from 'react';
import T from 'prop-types';
import styles from '../styles/index.module.css';

const PhotoCard = ({ image, onModalOpen }) => {
  const {
    webformatURL,
    largeImageURL,
    likes,
    views,
    comments,
    downloads,
  } = image;
  return (
    <div className={styles.photoCard}>
      <img src={webformatURL} alt="img" />
      <div className={styles.stats}>
        <p className={styles.statsItem}>
          <i className="material-icons">thumb_up</i>
          {likes}
        </p>
        <p className={styles.statsItem}>
          <i className="material-icons">visibility</i>
          {views}
        </p>
        <p className={styles.statsItem}>
          <i className="material-icons">comment</i>
          {comments}
        </p>
        <p className={styles.statsItem}>
          <i className="material-icons">cloud_download</i>
          {downloads}
        </p>
      </div>
      <button
        type="button"
        className={styles.fullscreenButton}
        onClick={() => onModalOpen(largeImageURL)}
      >
        <i className="material-icons">zoom_out_map</i>
      </button>
    </div>
  );
};
PhotoCard.T = {
  images: T.arrayOf(
    T.shape({
      webformatURL: T.string.isRequired,
      likes: T.number.isRequired,
      views: T.number.isRequired,
      comments: T.number.isRequired,
      downloads: T.number.isRequired,
      largeImageURL: T.string.isRequired,
    }).isRequired,
  ).isRequired,
  onModalOpen: T.func.isRequired,
};
export default PhotoCard;
