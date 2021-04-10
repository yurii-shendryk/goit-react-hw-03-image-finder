import { useState } from 'react';
import PropTypes from 'prop-types';
import SubmitIconButton from '../SubmitIconButton';
import { ReactComponent as SearchIcon } from '../../icons/seacrh.svg';
import './Searchbar.scss';

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    e.preventDefault();
    setQuery(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <SubmitIconButton aria-label="close" className="SubmitIconButton">
          <SearchIcon width="17" height="17" />
          <span className="SearchForm-button-label">Search</span>
        </SubmitIconButton>
        {/* <button type="submit" className="SearchForm-button">

        </button> */}

        <input
          className="SearchForm-input"
          type="text"
          name="query"
          value={query}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
        />
      </form>
    </header>
  );
};

Searchbar.defaultProps = {
  onSubmit: () => null,
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};

export default Searchbar;
