import './App.css';
import axios, { formToJSON } from 'axios';
import { useState, useEffect } from 'react';
import { Headline, AllNews } from './Components/Card';
import { Nav } from './Components/Nav';
import { Weather } from './Components/Weather';

function getNews(topic, setNews, setNewsLoaded) {
  axios.get(`https://newsapi.org/v2/everything?q=${topic}&from=2022-12-09&to=2022-12-09&sortBy=popularity&apiKey=8a1bfd2f0ece4203809f4677f8ae4b9e`).then(res => {
    setNews(res.data);
    setNewsLoaded(true);
  });
}

function App() {


  const [headline, setHeadline] = useState({});
  const [headlineLoaded, setHeadlineLoaded] = useState(false);
  const [sportsNews, setSportsNews] = useState({});
  const [sportsLoaded, setSportsLoaded] = useState(false)
  const [Politics, setPolitics] = useState({});
  const [politicsLoaded, setPoliticsLoaded] = useState(false)


  useEffect(() => {
    axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=8a1bfd2f0ece4203809f4677f8ae4b9e").then(res => {
      setHeadline(res.data);
      setHeadlineLoaded(true);
    });
    getNews('Sports', setSportsNews, setSportsLoaded);
    getNews('Politics', setPolitics, setPoliticsLoaded);
  }, [])

  return (
    <div className="App">
      <Nav />
      <div className='Container'>
        {headlineLoaded ? <Headline news={headline} /> : <h1>Loading</h1>}
        {sportsLoaded ? <AllNews news={sportsNews} topic='Sports' /> : <h1>Loading</h1>}
        < Weather city="London"/>
        {politicsLoaded? <AllNews news={Politics} topic='Politics' /> : <h1>Loading</h1>}
      </div>
    </div>
  );
}

export default App;
