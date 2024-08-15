import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AiFillBehanceCircle, AiFillCodepenCircle, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
   let date = new Date();
   let year = date.getFullYear();
   return (
      <Container fluid className='footer'>
         <Row>
            <Col md='4' className='footer-copywright'>
               <h3>Designed and Developed by Bhargav Suthar</h3>
            </Col>
            <Col md='4' className='footer-copywright'>
               <h3>Copyright © {year} BHARGAV SUTHAR</h3>
            </Col>
            <Col md='4' className='footer-body'>
               <ul className='footer-icons'>
                  <li className='social-icons'>
                     <a href='https://github.com/bhargav1997' style={{ color: "white" }} target='_blank' rel='noopener noreferrer'>
                        <AiFillGithub />
                     </a>
                  </li>
                  {/* <li className='social-icons'>
                     <a href='#' style={{ color: "white" }} target='_blank' rel='noopener noreferrer'>
                        <AiOutlineTwitter />
                     </a>
                  </li> */}
                  <li className='social-icons'>
                     <a
                        href='https://www.linkedin.com/in/bhargav-suthar/'
                        style={{ color: "white" }}
                        target='_blank'
                        rel='noopener noreferrer'>
                        <FaLinkedinIn />
                     </a>
                  </li>
                  <li className='social-icons'>
                     <a
                        href='https://www.instagram.com/bhargav_3_suthar/'
                        style={{ color: "white" }}
                        target='_blank'
                        rel='noopener noreferrer'>
                        <AiFillInstagram />
                     </a>
                  </li>
                  <li className='social-icons'>
                     <a href='https://www.behance.net/bhargavsuthar73' style={{ color: "white" }} target='_blank' rel='noopener noreferrer'>
                        <AiFillBehanceCircle />
                     </a>
                  </li>
                  <li className='social-icons'>
                     <a
                        href='https://codepen.io/Bhargav-suthar-the-flexboxer'
                        style={{ color: "white" }}
                        target='_blank'
                        rel='noopener noreferrer'>
                        <AiFillCodepenCircle />
                     </a>
                  </li>
               </ul>
            </Col>
         </Row>
      </Container>
   );
}

export default Footer;
