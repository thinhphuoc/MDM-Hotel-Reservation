import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
// import { SearchContext } from "../../context/SearchContext";
// import { useState } from "react";
import {useNavigate} from 'react-router-dom';
// import {Routes, Route, useNavigate} from 'react-router-dom';
import { useStateContext } from '../../context/Context';


const Navbar = () => {
  const navigate = useNavigate();
  const {login, setLogIn} = useStateContext();

  const {user} = useContext(AuthContext);


  console.log("Navbar",user);

  const handleMoveToSignUp = () =>  {
    navigate('/signup')
  }

  const handleMoveToLogin = () =>  {
    setLogIn(false)
    navigate('/login')
  }

  const handleLogout = () =>  {
    setLogIn(false)
    navigate('/')
  }

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{color:"inherit", textDecoration:"none"}}>
        <span className="logo" style={{fontWeight: '700', fontSize: '24px'}}>19HTTT04</span>
        </Link>   {/* if there is user show his username otherwise show this div.  */}
        {user ? user.username : (
          <div className="navItems">
            {login ? null : <button className="navButton" onClick={() => handleMoveToSignUp()} >Register</button>}
            {login ? null : <button className="navButton" onClick={() => handleMoveToLogin()} >Login</button>}
            {login ? <div>
              <span>Hello user</span>
              <button className="navButton" onClick={() => handleLogout()} >Log out</button>
            </div> : null}
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