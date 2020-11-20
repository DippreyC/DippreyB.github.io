import React from "react";
import './App.css';

const initialStories = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];
const getAsyncStories = () => new Promise(resolve => 
  setTimeout(
    () => resolve({data: {stories: initialStories}}), 2000
  )
  );

const useSemiPermanentState = (key, initialState) => {
  const[value, setValue] = React.useState(
    localStorage.getItem(key) || initialState
  );

  React.useEffect(() => {
    localStorage.setItem(key, value);
  },[value,key]);

  return [value, setValue];
}



const App = () => {

  
  const [searchTerm, setSearchTerm] = useSemiPermanentState('search','React');
  const [stories,setStories] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);

  React.useEffect(() => {
    setIsLoading(true);
    getAsyncStories().then(result => {
      setStories(result.data.stories);
      setIsLoading(false);
    })
    .catch(() => setIsError(true));
  }, []);
  

  const handleSearch = e => {
    setSearchTerm(e.target.value);
    localStorage.setItem('search', e.target.value);
  }

  const handleRemoveStory = item =>{
    const newStories = stories.filter(story => item.objectID !== story.objectID)
    //can make a changeField method where we map through personal data and change it when we find an ID.
    setStories(newStories);
  }

  const searchedStories = stories.filter((story) => 
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>My Hacker Stories</h1>
      <InputWithLabel 
        id="search"
        label="search"
        type="text"
        onInputChange={handleSearch}
        value={searchTerm} 
      />
      <hr />
      {isError && <p>Something went wrong...</p>}
      {isLoading ? 
        (<p>Loading ...</p>) :
        (<List list={searchedStories} onRemoveItem={handleRemoveStory} />)}
    </div>
  );
}

const List = ({list, onRemoveItem}) =>{
  return list.map((item) => {
    return <Item key={item.objectID} item={item} onRemoveItem={onRemoveItem}/>;
  })
}

const Item = ({item,onRemoveItem}) => {
  const handleRemoveItem = () => {
    onRemoveItem(item);
  }
  return (
      <div>
      <span><a href={item.url}>{item.title}</a></span>
      <span>{item.author}</span>
      <span>{item.num_comments}</span>
      <span>{item.points}</span>
      <span><button type="button" onClick={handleRemoveItem}></button></span>
      </div>
  )
}

const InputWithLabel = ({id,label,value,onInputChange,type}) => {
  

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} onChange={onInputChange} value={value}/>
      <p>Searching for <strong>{value}</strong></p>
      </div>
  )
}

export default App;
