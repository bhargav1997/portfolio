import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home from "./Home";
import Type from "./Type";

function Hero() {
   return (
      <section>
         <Container fluid className='home-section' id='home'>
            <Particle />
            <Container className='home-content'>
               <Row>
                  <Col md={7} className='home-header'>
                     <h1 style={{ paddingBottom: 15 }} className='heading'>
                        Hi There!{" "}
                        <span className='wave' role='img' aria-labelledby='wave'>
                           👋🏻
                        </span>
                     </h1>

                     <h1 className='heading-name'>
                        I'M <strong className='main-name'>Bhargav Suthar</strong>
                     </h1>

                     <div style={{ padding: 50, textAlign: "left" }}>
                        <Type />
                     </div>

                     <div style={{ padding: 50, textAlign: "left" }}>
                        <Button variant='primary' href={"mailto:sutharbhargav1997@gmail.com"} target='_blank'>
                           Le'ts Connect
                        </Button>
                     </div>
                  </Col>

                  <Col md={5} style={{ paddingBottom: 20 }}>
                     <img src={homeLogo} alt='home pic' className='img-fluid' style={{ maxHeight: "450px" }} />
                  </Col>
               </Row>
            </Container>
         </Container>
         <Home />
      </section>
   );
}

export default Hero;
