import React from "react";
import {Link  } from "react-router-dom";
import './Navbar.css';

export default function  Navbar  ( {onCreateRoomClick}) {
    
       
    
    
    return(
        <>

        
        <header className="Home">
  <nav className="navbar" >
    <h1 className="title">
        GEN-VILLA 
    </h1>
    <input className="search" type="text" placeholder="Search for room" />

    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">Me</a></li>
      <li><a  href ='#!'onClick={onCreateRoomClick}>Create Room</a></li>
      
    </ul>
  </nav>
</header>
</>

    );
    


};

