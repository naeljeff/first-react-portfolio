import Contact from "./components/contact/Contact";
import MainPage from "./components/mainPage/MainPage";
import Navbar from "./components/navbar/Navbar";
// import Portfolio from "./components/portfolio/Portfolio";
import Project from "./components/project/Project";
import HamburgerMenu from "./components/hamburgerMenu/HamburgerMenu";

import "./app.scss"
import { useState } from "react";

function App() {

  const [ isMenuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Navbar isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen}/>
      <HamburgerMenu isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        
        <MainPage />
        {/* <Portfolio /> */}
        <Project />
        <Contact />
      </div>
    </div>
  );
}

export default App;
