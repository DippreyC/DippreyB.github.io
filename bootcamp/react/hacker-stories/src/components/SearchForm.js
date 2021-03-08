import React from 'react';
import InputWithLabel from './InputWithLabel';

const SearchForm = ({
    searchHistory,
    searchTerm,
    onSearchInput,
    onSearchSubmit,
    onHistorySubmit,
  }) => (
    <form onSubmit={onSearchSubmit}>
      <InputWithLabel
        id="search"
        value={searchTerm}
        isFocused
        onInputChange={onSearchInput}
      >
        <strong>Search:</strong>
      </InputWithLabel>
  
      <button type="submit" disabled={!searchTerm}>
        Submit
      </button>
        <br />
      { searchHistory.map( (search) => {
        
        return (
        <button type="button" key={search.key} onClick={() => onHistorySubmit(search.searchUrl)}>
            {search.searchUrl.split("?query=")[1]}
        </button> 
        );}
      )}

    </form>
  );

  export default SearchForm;