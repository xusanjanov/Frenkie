import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/index";
import Footer from "./components/Footer/index";
import Home from "./components/Home/index";
import About from "./Pages/about/index";
import PrayerTimes from "./components/preytimes/index";
import Tasbeh from "./components/taspeh/index";
import NamozVaQibla from "./components/qibla/index";
import AllohIsmlari from "./components/99 ism/index";


const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Tasbeh"element={<AllohIsmlari/>}/>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
