import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import SocialLinks from "./components/SocialLinks";

function App() {
  const [theme, setTheme] = useState(null)

  useEffect(() => {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      setTheme('dark')
    }else{
      setTheme('light')
    }
  }, [])

  useEffect(() => {
    if(theme === 'dark'){
      document.documentElement.classList.add('dark')
    }else{
      document.documentElement.classList.remove('dark')
    }
  })

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
 
  return (
    <>
    <button type="button" onClick={handleThemeSwitch} className="fixed z-10 right-4 top-5 bg-gray-800 text-lg p-1 rounded-md">
      {theme === 'dark' ? '🌙' : '🌞'}
    </button>
    
    <div className="font-inter bg-white dark:bg-gradient-to-b from-black to-gray-800">
      <NavBar />
      <br />
      <Home />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <SocialLinks />
    </div>
    </>
  ); 
}

export default App;
