import "./App.css";
import { Nav } from "./Components/Nav";
import "./styles/loading.css";
import { BrowserRouter as Router, Route, Routes , Navigate} from "react-router-dom";
import { Country } from "./Components/Country";
import { Feed } from "./pages/Feed";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Navigate to="/feed" />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/Country" element={<Country />} />
          <Route path="*" element={<h1>It's the wrong page</h1>} />
        </Routes>
      </Router>
   </div>
  );
}

export default App;
