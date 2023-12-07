import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-info text-light py-4">
      <Container>
        <Row>
          <Col className='text-center'>
            <p className="mb-1">Connect With Us:</p>
            <div className="mb-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-light mx-2"><FaFacebook /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-light mx-2"><FaTwitter /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-light mx-2"><FaLinkedin /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-light mx-2"><FaInstagram /></a>
            </div>
            <p className="mb-0">Eventure &copy; {currentYear}</p>
            <p className="mb-0">All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
