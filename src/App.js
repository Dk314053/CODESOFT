import React from "react";
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      
      </BrowserRouter>
     {/* here we are using react router dom firstly install and then import Browser Router provide routes and inside routes 
     multiple route where we can give path which shown in url and element call component
     */}
    </div>
  );
}

export default App;
