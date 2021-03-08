import React from 'react';
import axios from 'axios';
import SearchForm from './components/SearchForm';
import List from './components/List';

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?query=';
const API_BASE = 'https://hn.algolia.com/api/v1';
const API_SEARCH = '/search';
const PARAM_SEARCH = 'query=';
const PARAM_PAGE = "page=";

const useSemiPersistentState = (key, initialState) => {
  const isMounted = React.useRef(false);

  const [value, setValue] = React.useState(
    localStorage.getItem(key) || initialState
  );

  React.useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
    } else {
      localStorage.setItem(key, value);
    }
  }, [value, key]);

  return [value, setValue];
};

const storiesReducer = (state, action) => {
  switch (action.type) {
    case 'STORIES_FETCH_INIT':
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case 'STORIES_FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.list,
        page: action.payload.page,
      };
    case 'STORIES_FETCH_FAILURE':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case 'REMOVE_STORY':
      return {
        ...state,
        data: state.data.filter(
          story => action.payload.objectID !== story.objectID
        ),
      };
    default:
      throw new Error();
  }
};



const getSumComments = stories => {
  return stories.data.reduce(
    (result, value) => result + value.num_comments,
    0
  );
};

const getUrl = (searchTerm, page) => `${API_BASE}${API_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}`;
const extractSearchTerm = url => url.substring(url.lastIndexOf('?') + 1, url.lastIndexOf('&')).replace(PARAM_SEARCH, '');


const App = () => {
  const [searchTerm, setSearchTerm] = useSemiPersistentState(
    'search',
    'React'
  );

  const [urls, setUrls] = React.useState(
    {
      currentSearch: `${API_ENDPOINT}${searchTerm}`,
      urlHistory: [],
    }
  );

  const [stories, dispatchStories] = React.useReducer(
    storiesReducer,
    { data: [], isLoading: false, isError: false }
  );

  const handleFetchStories = React.useCallback(async () => {
    dispatchStories({ type: 'STORIES_FETCH_INIT' });

    try {
      
      const result = await axios.get(urls.currentSearch);
      
      dispatchStories({
        type: 'STORIES_FETCH_SUCCESS',
        payload: { list: result.data.hits, page: result.data.page, }
      });
    } catch {
      console.log("stories failed");
      dispatchStories({ type: 'STORIES_FETCH_FAILURE' });
    }
  }, [urls]);

  React.useEffect(() => {
    handleFetchStories();
  }, [handleFetchStories]);

  const handleRemoveStory = React.useCallback(item => {
    dispatchStories({
      type: 'REMOVE_STORY',
      payload: item,
    });
  }, []);

  const handleSearchInput = event => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = event => {
    const lastSearch = `${API_ENDPOINT}${searchTerm}`;
    const newHistory = urls.urlHistory;
    newHistory.push({searchUrl: lastSearch, key: `${searchTerm}${new Date().getTime()}`});
    if(newHistory.length > 5) newHistory.shift();

    setUrls({currentSearch : `${API_ENDPOINT}${searchTerm}`, urlHistory: newHistory});
    event.preventDefault();
  };

  const handleHistorySearch = (url) => {
    console.log(url);
    setUrls({currentSearch: url, urlHistory: urls.urlHistory});
    setSearchTerm(url.split("query=")[1]);
  }

  const sumComments = React.useMemo(() => getSumComments(stories), [
    stories,
  ]);

  return (
    <div>
      <h1>My Hacker Stories with {sumComments} comments.</h1>

      <SearchForm
        searchHistory={urls.urlHistory}
        searchTerm={searchTerm}
        onSearchInput={handleSearchInput}
        onSearchSubmit={handleSearchSubmit}
        onHistorySubmit={handleHistorySearch}
      />

      <hr />

      {stories.isError && <p>Something went wrong ...</p>}

      {stories.isLoading ? (
        <p>Loading ...</p>
      ) : (
        <List list={stories.data} onRemoveItem={handleRemoveStory} />
      )}
    </div>
  );
};









export default App;
