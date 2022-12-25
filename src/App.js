import "./App.css";
import { Nav } from "./Components/Nav";
import "./styles/loading.css";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { Country } from "./pages/Country";
import { Feed } from "./pages/Feed";
import { FooterNav } from "./Components/FooterNav";
import { createContext, useState } from "react";
import { Contact } from "./pages/Contact";
import { Request } from "./pages/Request";
import { About } from "./pages/About";
export const AppContext = createContext();

function App() {
  const [country, setCountry] = useState('');
  return (
    <div className="App">
      <AppContext.Provider value={{ country, setCountry }}>
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Navigate to="/feed" />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/Country" element={<Country />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Request" element={<Request />} />
            <Route path="/About" element={<About />} />
            {/* <Route path="/Contact" element={<Sponser />} /> */}
            <Route path="*" element={<h1>It's the wrong page</h1>} />
          </Routes>
          <FooterNav />
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
