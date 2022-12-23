import './App.css';
import { Headline, AllNews } from './Components/Card';
import { Nav } from './Components/Nav';
import { Weather } from './Components/Weather';
import './styles/loading.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Country } from './Components/Country';
import { useGetNews } from './Custom-hooks/useGetNews';


function App() {

  const [Politics, politicsLoaded] = useGetNews("politics", true);
  const [sportsNews, sportsLoaded] = useGetNews("sports", true);
  const [headline, headlineLoaded] = useGetNews("", false);

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
