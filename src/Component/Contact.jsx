import React from "react";
import { useState,useRef } from "react";
import { getUsers } from "./localStorage";
import './Contact.css'
import Navbar from "./Navbar";

export default function Contact() {
//  here we are using useRef which will store the reference to the variable and we can call where we need 
  const NameRef = useRef();
  const emailRef = useRef();
 const mobilenumberdRef = useRef();
  const messageRef=useRef();
  const [error,setError] = useState("")

  function handleSubmit(event) {
    event.preventDefault();

    /* here we are adding validation for that we are using regex part to store in variable and after that we
    will check in if condition with the help of test method if the value which will enter in input field and 
    emailregex validation is not full filled then it will give error and we are handle with the help of useState. 
*/
    var emailRegex =/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/;
    if(!emailRegex.test(emailRef.current.value)){

      setError('Please enter correct Email');
      return;
    }
    else if(emailRegex.test(emailRef.current.value)){
      setError("")
    }

  

    var mobileNumber=/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/;

    if(!mobileNumber.test(mobilenumberdRef.current.value)){
      setError('Please Enter correct mobile number');
      return;
    }
    else if( mobileNumber.test(mobilenumberdRef.current.value)){
      setError("")
    }

    /* here we are seprately make function getuser where we can get data of loacl storage then we store in users
     after that we push data in users and then we set data in users with the help of local storage
*/

const users=getUsers();
    users.push({
        Name: NameRef.current.value,
        email: emailRef.current.value,
         mobileNumber:mobilenumberdRef.current.value,
         feedback:messageRef.current.value
    });

    localStorage.setItem("users", JSON.stringify(users));
    event.target.reset();
  }
  return (
    
       <>
       <Navbar/>
       <img className="image" src='https://img.freepik.com/free-vector/abstract-classic-blue-screensaver_23-2148421853.jpg?w=740&t=st=1688715760~exp=1688716360~hmac=76cd15059cf226debeac0f0d8d34f817e6dca16f1821dd155443f0cb53c65ba8' alt="dummy img" />
      <div className="parentCont">
        
            <h1 className="headingmain">Contact Here</h1>
          
          <form className="form" onSubmit={handleSubmit}>
     <input className="inp" ref={NameRef} type="text" placeholder="Type your name here.." required/>
         <input  className="inp" ref={emailRef} type="email"  placeholder="Enter Email" required />
          <input  className="inp" ref={mobilenumberdRef} type="text" placeholder="Enter mobile number..." required/>
          <textarea className="text"  typeof="text" id="" cols="30" ref={messageRef} rows="10" placeholder="Type message here.."/>
         {error && <p style={{ fontSize: '12px', color: 'red' }}>{error}</p>}
            <button
              className="btn"
              type="submit"
              > Click Here </button>
          </form>
        </div>
        </>
  
  );
}