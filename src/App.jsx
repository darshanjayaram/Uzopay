import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import Hero from './Components/Hero'
import Navbar from './Components/Navbar';
import Frame1 from './Components/Frame1';
import BoldText from './Components/BoldText';
import Steps from './Components/Steps';
import bg0 from "./assets/Video-bg.png";
import bg1 from "./assets/Video-bg1.png";
import bg2 from "./assets/Video-bg2.png";
import LayeredCarousel from "./Components/LayeredCarousel";
import Frame2 from './Components/Frame2';
import Reasons from './Components/Reasons';
import Expertise from './Components/Expertise';
import Payments from './Components/Payments';
import ClientFeedback from './Components/ClientFeedback';
import Footer from './Components/Footer';
import Copyright from './Components/Copyright';

function App() {
  const [count, setCount] = useState(0)
  const images = [
    { src: bg0, alt: "Layer base" },
    { src: bg1, alt: "Layer overlay" },
    { src: bg2, alt: "Layer highlight" },
  ];

  return (
    <>
    <Navbar />
    <Hero />
    <Frame1 />
    <BoldText />
    <Steps />
    <LayeredCarousel images={images} interval={3600}/>
    <Frame2 />
    <Reasons />
    <Expertise />
    <Payments />
    <ClientFeedback />
    <Footer />
    <Copyright />
    </>
  )
}

export default App
