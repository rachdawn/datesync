import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Footer.scss';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-container">
      <Container>
        <Row className="row-footer">
          <Col xs={12} sm={2}>
            <h5 className="footer-title">Follow Us</h5>
            <div className="social-icons">
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
            </div>
          </Col>
          <Col xs={12} sm={2}>
            <h5 className="footer-title">Contact Us</h5>
            <p className="footer-contact">Email: DateSync@</p>
            <p className="footer-contact">Phone: (123) 456-7890</p>
          </Col>
        </Row>
      </Container>
      <div className="copy-right text-center">
        © {new Date().getFullYear()} DateSync
      </div>
    </footer>
  );
};

export default Footer;

