import React from 'react'
import Hero from "./components/Hero.jsx"
import Service from './components/Service.jsx';
import WhereToBuy from './components/WhereToBuy.jsx';
import AppBanner from './components/AppBanner.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className='overflow-x-hidden'>
      <Hero/> 
      <Service/>
      <WhereToBuy/>
      <AppBanner/>
      <Footer/>
    </div>
  );
}

export default App;
