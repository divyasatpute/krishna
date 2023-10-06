import React from "react";
import {
  About,
  Footer,
  Header,
  Skills,
  Testinomals,
  Work,
  Home,
  Education,
  Certificate
} from "./containers";
import { Navbar } from "./components";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <div className="noise"></div>
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/about" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/educations" element={<Education />} />
            <Route path="/testinomals" element={<Testinomals />} />
            <Route path="/footer" element={<Footer />} />
            <Route path="/certificate" element={<Certificate />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
