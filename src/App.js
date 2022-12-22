import './App.css';
import axios, { formToJSON } from 'axios';
import { useState, useEffect } from 'react';
import { Headline, AllNews } from './Components/Card';
import { Nav } from './Components/Nav';
import { Weather } from './Components/Weather';
import './styles/loading.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Country } from './Components/Country';

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
    axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=8a1bfd2f0ece4203809f4677f8ae4b9e").then(res => {
      setHeadline(res.data);
      setHeadlineLoaded(true);
    });
    getNews('Sports', setSportsNews, setSportsLoaded);
    getNews('Politics', setPolitics, setPoliticsLoaded);
  }, [])

  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path='/Country' element={<Country />} />
        </Routes>
      </Router>
      <div className='Container'>
        <div className='a'>
          {headlineLoaded ? <Headline news={headline} /> : <div className='news loading'></div>}
        </div>
        <div className='b'>
          {sportsLoaded ? <AllNews news={sportsNews} topic='Sports' /> : <div className='news loading' />}
        </div>
        <div className='c'>
          < Weather city="Port Blair" />
        </div>
        <div className='d'>
          {politicsLoaded ? <AllNews news={Politics} topic='Politics' /> : <div className='news loading' />}
        </div>
      </div>
    </div>
  );
}

export default App;
