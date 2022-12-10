import './App.css';
import axios, { formToJSON } from 'axios';
import { useState, useEffect } from 'react';
import { Headline, AllNews } from './Components/Card';
import { Nav } from './Components/Nav';

function getNews(topic, setAllnews, setNewsLoaded) {
    axios.get(`https://newsapi.org/v2/everything?q=${topic}&from=2022-12-09&to=2022-12-09&sortBy=popularity&apiKey=8a1bfd2f0ece4203809f4677f8ae4b9e`).then(res => {
      setAllnews(res.data);
      setNewsLoaded(true);
    });
}

function App() {


  const [headline, setHeadline] = useState({});
  const [headlineLoaded, setHeadlineLoaded] = useState(false);
  const [allnews, setAllnews] = useState({});
  const [newsLoaded, setNewsLoaded] = useState(false)

  const topic = 'Media';

  

  useEffect(() => {
    axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=8a1bfd2f0ece4203809f4677f8ae4b9e").then(res => {
      setHeadline(res.data);
      setHeadlineLoaded(true);
    });
    getNews(topic, setAllnews, setNewsLoaded);
 }, [])

  return (
    <div className="App">
      <Nav />
      <div className='Container'>
        {headlineLoaded ? <Headline news={headline} /> : <h1>Loading</h1>}
      {newsLoaded ? <AllNews news={allnews} topic={topic}/> : <h1>Loading</h1>}
      </div>
    </div>
  );
}

export default App;
