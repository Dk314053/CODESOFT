import React from 'react'
import Navbar from './Navbar'
import './About.css'

const About = () => {
     return (
        <>
        <Navbar/>
        <img className="image" src='https://img.freepik.com/free-vector/abstract-classic-blue-screensaver_23-2148421853.jpg?w=740&t=st=1688715760~exp=1688716360~hmac=76cd15059cf226debeac0f0d8d34f817e6dca16f1821dd155443f0cb53c65ba8' alt="dummy img" />
        <div className="about-page">
          <h1 className="headingmain">About Us</h1>
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
            bibendum magna. Proin tincidunt eros a mi commodo, et lacinia nisl
            aliquet. Sed viverra sapien id enim tincidunt, et malesuada enim
            bibendum. Duis finibus feugiat elit in faucibus. Vivamus id nunc at
            nisl hendrerit interdum. Phasellus dictum risus a nisi pellentesque
            varius.
          </p>
          <p className="paragraph">
            Nunc semper odio quis elit faucibus, sit amet venenatis quam volutpat.
            Proin condimentum arcu ut nunc lobortis, eget ullamcorper ligula
            vulputate. Suspendisse vitae est ac libero semper cursus. Aliquam nec
            sagittis ex, vitae pellentesque sem. Curabitur egestas est nec mauris
            sagittis, et vestibulum tortor laoreet. Mauris id sem tristique, tempus
            elit et, pulvinar ipsum.
          </p>
        </div>
        </>
      );
    }
    
    export default About;