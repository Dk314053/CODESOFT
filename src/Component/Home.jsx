import React from 'react'
import Navbar from './Navbar'
import './Home.css'


function Home() {
  

  return (
    <>
           <Navbar/>
           <img className="image" src='https://img.freepik.com/free-vector/abstract-classic-blue-screensaver_23-2148421853.jpg?w=740&t=st=1688715760~exp=1688716360~hmac=76cd15059cf226debeac0f0d8d34f817e6dca16f1821dd155443f0cb53c65ba8' alt="dummy img" />
    <div className="homepage">
 
    <h1 className="headingmain">Welcome to Lorem ipsum</h1>
    <p className="paragraph"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
        Duis malesuada risus quis urna tincidunt, vel pharetra leo tristique.  <br/>
        Sed non sollicitudin metus. Cras nec arcu arcu. Nunc ullamcorper lacus ac<br/>
          tortor consequat, at consequat lacus facilisis.</p>
    <button className="button">Get Started</button>
  </div>
  </>
  );
}

export default Home;