import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import Hero from './Sections/Hero/Hero'
import Navbar from './Components/Navbar';
import Frame1 from './Sections/FrameOne/Frame1';
import BoldText from './Sections/Boldtext/BoldText';
import Steps from './Sections/Steps/Steps';
import bg0 from "./assets/Video-bg.png";
import bg1 from "./assets/Video-bg1.png";
import bg2 from "./assets/Video-bg2.png";
import LayeredCarousel from "./Sections/Carousel/LayeredCarousel";
import Frame2 from './Sections/FrameTwo/Frame2';
import Reasons from './Sections/Reasons/Reasons';
import Expertise from './Sections/Expertise/Expertise';
import Payments from './Sections/Payments/Payments';
import ClientFeedback from './Sections/Feedback/ClientFeedback';
import Footer from './Sections/Footer/Footer';
import Copyright from './Sections/Copyright/Copyright';

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
