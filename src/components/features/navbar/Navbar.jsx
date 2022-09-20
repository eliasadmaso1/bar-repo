import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';
import { useRef } from "react";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from "@mui/icons-material/Instagram";



const Navbar = () => {

  const navRef = useRef();

  const handleChange = ()=>{
      navRef.current.classList.toggle('responsive-navbar');
  }

  return (
    <header>
      <nav ref={navRef}>
        <Link to="/bar-repo" onClick={handleChange} className="a">בית</Link>
        <Link to="/about" onClick={handleChange}>אודות</Link>
        <Link to="/menu" onClick={handleChange}>תפריט</Link>
        <Link to="/gallery" onClick={handleChange}>גלריה</Link>
        <Link to="/feedback" onClick={handleChange}>ביקורות</Link>
        <a href="tel:0552753626" onClick={handleChange}><WhatsAppIcon/></a>
        <a href="https://www.instagram.com/adis_bar_34/" onClick={handleChange}><InstagramIcon/></a>



        <button onClick={handleChange} className="nav-btn nav-close-btn">
          <CloseIcon style={{fontSize:"25px"}}/>
        </button>
      </nav>
      <button onClick={handleChange} className="nav-btn">
        <MenuIcon style={{fontSize:"25px"}}/>
      </button>
    </header>
  );
};

export default Navbar;
