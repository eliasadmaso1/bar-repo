import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';
import { useRef } from "react";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';



const Navbar = () => {

  const navRef = useRef();

  const handleChange = ()=>{
      navRef.current.classList.toggle('responsive-navbar');
  }

  return (
    <header>
      <nav ref={navRef}>
        <Link to="/bar-repo" onClick={handleChange}>בית</Link>
        <Link to="/about" onClick={handleChange}>אודות</Link>
        <Link to="/menu" onClick={handleChange}>תפריט</Link>
        <Link to="/" onClick={handleChange}>גלריה</Link>
        <Link to="/feedback" onClick={handleChange}>ביקורות</Link>
        <Link to="/" onClick={handleChange}><WhatsAppIcon/></Link>
        <Link to="/" onClick={handleChange}><FacebookOutlinedIcon/></Link>



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
