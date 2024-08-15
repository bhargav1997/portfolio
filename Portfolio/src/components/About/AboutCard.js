import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
   return (
      <Card className='quote-card-view'>
         <Card.Body>
            <blockquote className='blockquote mb-0'>
               <p style={{ textAlign: "justify" }}>
                  Hi Everyone, I am <span className='purple'>Bhargav Suthar </span>
                  from <span className='purple'> Toronto Ontario, Canada.</span>
                  <br />I had an experience of working as a <span className='purple'>Software Engineer</span> around 4+ years at Surekha
                  Technologies Pvt. Ltd and I am currently working as a Volunteer as a <span className='purple'>Full Stack Developer</span>{" "}
                  at RiseUp Community in Toronto Canada.
                  <br />
                  I have completed Bachelors in Computer Engineering from Gujarat Technological University.
                  <br />
                  <br />
                  Apart from coding, some other activities that I love to do!
               </p>
               <ul>
                  <li className='about-activity'>
                     <ImPointRight /> Playing Games
                  </li>
                  <li className='about-activity'>
                     <ImPointRight /> Writing Tech Blogs
                  </li>
                  <li className='about-activity'>
                     <ImPointRight /> Travelling
                  </li>
                  <li className='about-activity'>
                     <ImPointRight /> Solving Coding Problems
                  </li>
                  <li className='about-activity'>
                     <ImPointRight /> Stock Market and Reading Books
                  </li>
               </ul>

               <p style={{ color: "rgb(155 126 172)" }}>"Strive to build things that make a difference!" </p>
               <footer className='blockquote-footer'>Bhargav Suthar</footer>
            </blockquote>
         </Card.Body>
      </Card>
   );
}

export default AboutCard;
