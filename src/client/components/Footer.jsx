import { Row, Col } from "react-bootstrap";
import "../styles/Footer.scss";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-container">
        <Row className="row-footer">
          <Col className="footer-socials">
            <h5 className="footer-title">Follow Us</h5>
            <div className="footer-icons">
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
            </div>
          </Col>
          <Col className="footer-navigation">
            <Link to={"/"}>HOME</Link>
            <Link to={"/create-date"}>CREATE YOUR PERFECT DATE</Link>
            <Link to={"/dashboard"}>DASHBOARD</Link>
          </Col>
          <Col className="footer-contact">
            <h5 className="footer-title">Contact Us</h5>
            <div className="footer-icons">
              <EmailOutlinedIcon /> 
              <PhoneOutlinedIcon /> 
            </div>
          </Col>
        </Row>
        <Row className="copyright">
          <div>© {new Date().getFullYear()} DateSync</div>
        </Row>
    </footer>
  );
};

export default Footer;
