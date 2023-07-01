import React, { useEffect, useState } from 'react'
import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection';
import WorksProjects from './components/WorksProjects'
import AboutSection from './components/AboutSection';
import FooterSection from './components/FooterSection';

// DarkMode Added
function App() {

const [theme, setTheme] = useState(null);

useEffect(() => {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    setTheme('dark');
  } else {
    setTheme('light');
  }
}, []);

const handleThemeSwitch = () => {
  setTheme(theme === 'dark' ? 'light' : 'dark');
};

useEffect(() => {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}, [theme]);


  return (
    <>
    <button
    type='button'
    onClick={handleThemeSwitch}
    className="fixed z-10 right-7 top-5 bg-cyan-400 dark:bg-cyan-800 p-1 rounded-md"
    > 

     {theme === 'dark' ? '🌚' : '🌝'}
     
    </button>
    <div className='font-inter bg-white dark:bg-slate-950'>
      <div className='max-w-5xl mx-auto w-11/12'>
  <HeroSection></HeroSection>
  <ServicesSection></ServicesSection>
  <WorksProjects></WorksProjects>
  <AboutSection></AboutSection>
  <FooterSection> </FooterSection>
  </div>
  </div>
  </>
  )
}

export default App