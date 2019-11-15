import React, { Component } from 'react';
import T from 'prop-types';
import styles from '../styles/index.module.css';

export default class SearchForm extends Component {
  static propTypes = {
    onSubmit: T.func.isRequired,
  };

  state = {
    inputValue: '',
  };

  handleChange = e => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.inputValue);

    this.setState({ inputValue: '' });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <form className={styles.searchForm} onSubmit={this.handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          placeholder="Search images..."
          value={inputValue}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}
