import "../styles/Footer.scss";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-container">
        <div className="row-footer">
          <div className="footer-socials">
            <h5 className="footer-title">Follow Us</h5>
            <div className="footer-icons">
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
            </div>
          </div>
          <div className="footer-navigation">
            <Link to={"/"}>HOME PAGE</Link>
            <Link to={"/create-date"}>CREATE YOUR PERFECT DATE</Link>
            <Link to={"/dashboard"}>DASHBOARD</Link>
          </div>
          <div className="footer-contact">
            <h5 className="footer-title">Contact Us</h5>
            <div className="footer-icons">
              <EmailOutlinedIcon /> 
              <PhoneOutlinedIcon /> 
            </div>
          </div>
        </div>
        <div className="copyright">
          <div>© {new Date().getFullYear()} DateSync</div>
        </div>
    </footer>
  );
};

export default Footer;
