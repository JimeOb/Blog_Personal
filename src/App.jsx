import Intro from "./Components/intro/Intro";
import Topbar from "./Components/topbar/Topbar";
import Resume from "./Components/resume/Resume";
import Testimonials from "./Components/testimonials/Testimonials";
import Contact from "./Components/contact/Contact";
import Aboutme from "./Components/aboutme/Aboutme";
import "./App.scss"; 
import { useState } from "react";
import Menu from "./Components/menubar/Menu";
 
function App() {

  const [menuOpen,setMenuOpen] = useState(false)

  return (
    <div className="app">

    <Topbar menuOpen = {menuOpen} setMenuOpen={setMenuOpen} />
    <Menu menuOpen = {menuOpen} setMenuOpen={setMenuOpen}/>
    <div className="sections">

    <Intro/>
    <Aboutme/>
    <Resume/>
    <Testimonials/>
    <Contact/>

    </div>

    </div>
  );
}

export default App;
