import React, { useState } from "react";
import "./navbar.css";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FacebookIcon from "@mui/icons-material/Facebook";
import {Link} from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CancelIcon from '@mui/icons-material/Cancel';

function Navbar() {

  const [click,setClick] = useState(false);
  
  const handleClick = ()=>{
    setClick(!click);
  }
  const menuData = [
    {
      title: <LocalPhoneIcon />,
      href:""
    },
    {
      title: <FacebookIcon />,
      href:""
    },
    {
      title: "גלריה",
      link:"/gallery"
    },
    {
      title: "אודות",
      link:"/about"
    },
    {
      title: "בית",
      link:"/"
    },
  ];
  return (
    <>
    <div className="navbar-container">
      <div className="logo-container">
        <img
         className="logo"
          src="https://logoeps.com/wp-content/uploads/2013/09/bar-logo-templates.png"
         
        />
      </div>

      {menuData.map((item) => {
        return (
          item.link ? <Link to={item.link}><div
          className="menu-item-container"
            
          >
            <h4 >{item.title}</h4>
          </div></Link> : <a href={item.href}><div
          className="menu-item-container"
            
          >
            <h4 >{item.title}</h4>
          </div></a>
        );
      })}
    </div>
    <div className="nav">
      <div className="nav-container">
        <div className="menu-icon" onClick={handleClick}>
          {click ? <CancelIcon/> : <MenuIcon/>}
        </div>
        <ul className={click ? 'nav-menu-active' : 'nav-menu'}>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </div>


    </div>
    </>
  );
}

export default Navbar;
