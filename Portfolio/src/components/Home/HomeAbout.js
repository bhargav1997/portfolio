import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AiFillBehanceCircle, AiFillCodepenCircle, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import Avatar from "../../Assets/Avatar-profile.png";

function HomeAbout() {
   return (
      <Container fluid className='home-about-section' id='about'>
         <Container>
            <Row>
               <Col md={8} className='home-about-description'>
                  <h1 style={{ fontSize: "2.6em" }}>
                     LET ME <span className='purple'> INTRODUCE </span> MYSELF
                  </h1>
                  <p className='home-about-body'>
                     I am an accomplished Full Stack Developer with over 4 years of experience in MERN stack development, delivering
                     high-quality, scalable web solutions.
                     <br />
                     <br />I specialize in:
                     <i>
                        <b className='purple'> MERN Stack, Automation, Mobile App Development </b>
                     </i>
                     and have a strong interest in areas such as
                     <i>
                        <b className='purple'> Web Technologies, Product Development, and DevOps.</b>
                     </i>
                     <br />
                     <br />
                     My toolkit includes <b className='purple'>Node.js, React.js, and Next.js</b>, and I love applying these technologies to
                     develop innovative and user-centric products.
                     <br />
                     <br />
                     As a leader and problem-solver, I thrive in collaborative environments where I can drive project success through agile
                     methodologies and SEO techniques.
                  </p>
               </Col>
               <Col md={4} className='myAvtar'>
                  <Tilt>
                     <img src={Avatar} className='img-fluid' alt='avatar' />
                  </Tilt>
               </Col>
            </Row>
            <Row>
               <Col md={12} className='home-about-social'>
                  <h1>FIND ME ON</h1>
                  <p>
                     Feel free to <span className='purple'>connect </span>with me
                  </p>
                  <ul className='home-about-social-links'>
                     <li className='social-icons'>
                        <a
                           href='https://github.com/bhargav1997'
                           target='_blank'
                           rel='noreferrer'
                           className='icon-colour  home-social-icons'
                           aria-label='GitHub'>
                           <AiFillGithub />
                        </a>
                     </li>
                     <li className='social-icons'>
                        <a
                           href='https://www.linkedin.com/in/bhargav-suthar/'
                           target='_blank'
                           rel='noreferrer'
                           className='icon-colour  home-social-icons'
                           aria-label='LinkedIn'>
                           <FaLinkedinIn />
                        </a>
                     </li>
                     <li className='social-icons'>
                        <a
                           href='https://www.instagram.com/bhargav_3_suthar/'
                           target='_blank'
                           rel='noreferrer'
                           className='icon-colour home-social-icons'
                           aria-label='Instagram'>
                           <AiFillInstagram />
                        </a>
                     </li>
                     <li className='social-icons'>
                        <a
                           href='https://www.behance.net/bhargavsuthar73'
                           target='_blank'
                           rel='noreferrer'
                           className='icon-colour home-social-icons'
                           aria-label='Behance'>
                           <AiFillBehanceCircle />
                        </a>
                     </li>
                     <li className='social-icons'>
                        <a
                           href='https://codepen.io/Bhargav-suthar-the-flexboxer'
                           target='_blank'
                           rel='noreferrer'
                           className='icon-colour home-social-icons'
                           aria-label='CodePen'>
                           <AiFillCodepenCircle />
                        </a>
                     </li>
                  </ul>
               </Col>
            </Row>
         </Container>
      </Container>
   );
}

export default HomeAbout;
