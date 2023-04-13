import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { SearchContext } from "../../context/SearchContext";
import { useState } from "react";
import {Routes, Route, useNavigate} from 'react-router-dom';
  


const Navbar = () => {
  const navigate = useNavigate();

  const {user} = useContext(AuthContext);


  console.log("Navbar",user);

  const handleMoveToSignUp = () =>  {
    navigate('/signup')
  }

  const handleMoveToLogin = () =>  {
    navigate('/login')
  }

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{color:"inherit", textDecoration:"none"}}>
        <span className="logo">lamabooking</span>
        </Link>   {/* if there is user show his username otherwise show this div.  */}
        {user ? user.username : (
          <div className="navItems">
            <button className="navButton" onClick={() => handleMoveToSignUp()} >Register</button>
            <button className="navButton" onClick={() => handleMoveToLogin()}>Login</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar

// {user ? (<span>{user.username}</span> ): (<div className="navItems">    
// <button className="navButton">Register</button>
// <button className="navButton">Login</button>
// </div>)}