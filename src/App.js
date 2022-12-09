import './App.css';
import axios, { formToJSON } from 'axios';
import { useState, useEffect } from 'react';
import { Headline } from './Components/Card';
import { Nav } from './Components/Nav';


function App() {


  const [headline, setHeadline] = useState({});
  const [headlineLoaded, setHeadlineLoaded] = useState(false);

  useEffect(() => {
    axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=8a1bfd2f0ece4203809f4677f8ae4b9e").then(res => {
      setHeadline(res.data);
      setHeadlineLoaded(true);
    });
  }, [])

  return (
    <div className="App">
      <Nav /> 
      {/* {headlineLoaded?<Headline news={headline} />:<h1>Loading</h1>} */}
    </div>
  );
}

export default App;
