import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub, BsChevronUp, BsChevronDown } from "react-icons/bs";
import defaultProjectImg from "../../Assets/default-project.png";

function ProjectCards(props) {
   const [isReadMore, setIsReadMore] = useState(true);
   const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
   };

   const charLimit = 150;
   const content = isReadMore ? props.description.slice(0, charLimit) : props.description;

   return (
      <Card className='project-card-view'>
         <Card.Img
            variant='top'
            src={props.imgPath ? props.imgPath : defaultProjectImg}
            alt='card-img'
            style={{ height: "200px", objectFit: "cover" }}
         />
         <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text style={{ textAlign: "justify" }}>
               {content}
               {props.description.length > charLimit && (
                  <span
                     onClick={toggleReadMore}
                     style={{
                        whiteSpace: "nowrap",
                        textDecoration: "none",
                        color: "#623686",
                        cursor: "pointer",
                        display: "inline-flex",
                        alignItems: "center",
                     }}>
                     {isReadMore ? (
                        <>
                           {" ...Read more"} <BsChevronDown style={{ marginLeft: "5px" }} />
                        </>
                     ) : (
                        <>
                           {" Read less"} <BsChevronUp style={{ marginLeft: "5px" }} />
                        </>
                     )}
                  </span>
               )}
            </Card.Text>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
               <Button variant='primary' href={props.ghLink} target='_blank'>
                  <BsGithub /> &nbsp;
                  {props.isBlog ? "Blog" : "GitHub"}
               </Button>
               {!props.isBlog && props.demoLink && (
                  <Button variant='primary' href={props.demoLink} target='_blank'>
                     <CgWebsite /> &nbsp;
                     {"Demo"}
                  </Button>
               )}
            </div>
         </Card.Body>
      </Card>
   );
}

export default ProjectCards;
