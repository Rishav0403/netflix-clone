import React, { useEffect, useState } from 'react';
import './Nav.css'

const Nav = () => {
  const [show, handleShow] = useState(false);
  const handleShowEffect = () => {
    // console.log(window.scrollY);
    if(window.scrollY>100){
        handleShow(true);
    }
    else{
      handleShow(false)
    }
  }
  useEffect(() => {
      window.addEventListener('scroll', handleShowEffect)
      return () =>{
        window.removeEventListener('scroll', handleShowEffect)
      };
  },[]);

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <img
        className='nav__logo' 
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
        alt="Netflix Logo" 
      />
    </div>
  );
}

export default Nav;