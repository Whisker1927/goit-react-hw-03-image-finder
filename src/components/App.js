import React, { Component } from 'react';
import getImages from '../services/imageApi';
import styles from '../styles/index.module.css';
import SearchForm from './SearchForm';
import Gallery from './Gallery';
import Loader from '../services/loader';
import Modal from './Modal';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

class App extends Component {
  state = {
    images: [],
    page: 1,
    query: '',
    isLoading: false,
    loadMore: false,
    largeImageURL: null,
    isModalOpen: false,
  };

  onSubmit = query => {
    this.setState(
      { query, images: [], page: 1, isLoading: true },
      this.fetchImages,
    );
  };

  onModalOpen = largeImageURL => {
    this.setState({ isModalOpen: true, largeImageURL });
  };

  onModalClose = () => {
    this.setState({ isModalOpen: null });
  };

  fetchImages = () => {
    const { query, page } = this.state;
    this.setState({ isLoading: true });

    getImages(query, page)
      .then(response => {
        this.setState(prevState => ({
          images: [...prevState.images, ...response.data.hits],
          page: prevState.page + 1,
        }));
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth',
        });
      })
      .catch(error => {
        this.setState(alert('ERROR!'));
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  render() {
    const {
      images,
      loadMore,
      isLoading,
      largeImageURL,
      isModalOpen,
    } = this.state;
    return (
      <div className={styles.app}>
        <SearchForm onSubmit={this.onSubmit} />
        <Gallery images={images} onModalOpen={this.onModalOpen} />
        {isModalOpen && (
          <Modal images={images} closeModal={this.onModalClose}>
            <img src={largeImageURL} alt="largeImage" />
          </Modal>
        )}
        {isLoading && <Loader />}
        {images.length > 0 && (
          <button
            type="button"
            onClick={this.fetchImages}
            className={styles.button}
            disabled={loadMore}
          >
            Load more
          </button>
        )}
      </div>
    );
  }
}

export default App;
