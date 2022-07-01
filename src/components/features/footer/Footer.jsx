import React from "react";
import "./footer.css";
import logo from "../../../images/logo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-item">
        <h4>שעות פתיחה</h4>
        <span className="item-span">א׳ 4:00 - 16:00</span>
        <span className="item-span">ב׳ 4:00 - 16:00</span>
        <span className="item-span">ג׳ 4:00 - 16:00</span>
        <span className="item-span">ד׳ 4:00 - 16:00</span>
        <span className="item-span">ה׳ 4:00 - 16:00</span>
        <span className="item-span">ו׳ 4:00 - 16:00</span>
        <span className="item-span">ש׳ 4:00 - 16:00</span>
      </div>

      <div className="footer-item">
        <h4>אדיס בר</h4>
        <span className="item-span">הרצל 34, ראשון לציון</span>
        <span className="item-span">055-2753626</span>
        <a
          className="item-span"
          href="mailto:adisbar34@gmail.com"
          style={{ color: "brown" }}
        >
          <EmailIcon />
        </a>

        <a
          className="item-span"
          href="https://www.facebook.com/daniel.masala.14"
          style={{ color: "brown" }}
        >
          <FacebookIcon />
        </a>
        <a
          className="item-span"
          href="https://www.instagram.com/daniel_masala555/"
          style={{ color: "brown" }}
        >
          <InstagramIcon />
        </a>
      </div>

      <div className="copyright">
        <img src={logo} className="footer-logo" />

        <span style={{ borderTop: "solid 1px brown" }}>
          build & design by Elias Admaso
        </span>
      </div>
    </div>
  );
}

export default Footer;
