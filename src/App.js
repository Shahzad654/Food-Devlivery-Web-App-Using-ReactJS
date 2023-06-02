import React from 'react';
import Navbar from './MyComponents/navbar/Navbar';
import Hero from './MyComponents/hero/Hero';
import Food from './MyComponents/food/Food';
import Footer from './MyComponents/footer/Footer';
import './index.css';

//import images
import Craft1 from './assests/craft1.jpg'
import Craft2 from './assests/craft2.jpg'
import Chicken from './assests/chicken.jpg'
import Burger from './assests/burger.jpg'
import HeroBg from './assests/hero-bg.jpg'

function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Food bgImg1={Craft1} bgImg2={Craft2} />
    <Food bgImg={Chicken}/>
    <Food bgImg={Burger}/>
    <Footer/>

    
    </>
  );
}

export default App;
