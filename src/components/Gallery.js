import React from 'react';
import T from 'prop-types';
import styles from '../styles/index.module.css';
import PhotoCard from './PhotoCard';

const Gallery = ({ images, onModalOpen }) => (
  <ul className={styles.gallery}>
    {images.map(image => (
      <PhotoCard key={image.id} image={image} onModalOpen={onModalOpen} />
    ))}
  </ul>
);
Gallery.propTypes = {
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
export default Gallery;
