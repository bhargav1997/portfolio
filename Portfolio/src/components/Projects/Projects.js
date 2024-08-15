import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { useSelector, useDispatch } from "react-redux";
import { fetchProjects } from "../../redux/actions";

function Projects() {
   const dispatch = useDispatch();
   const { projects, loading, error } = useSelector((state) => state);

   useEffect(() => {
      dispatch(fetchProjects());
   }, [dispatch]);

   return (
      <Container fluid className='project-section'>
         <Particle />
         <Container>
            <h1 className='project-heading'>
               My Recent <strong className='purple'>Works </strong>
            </h1>
            <p style={{ color: "white" }}>Here are a few projects I've worked on recently.</p>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
               {projects.length > 0 ? (
                  projects.map((project, index) => (
                     <Col key={index} md={4} className='project-card'>
                        <ProjectCard
                           imgPath={project.imgPath}
                           title={project.title}
                           description={project.description}
                           ghLink={project.ghLink}
                           demoLink={project.demoLink}
                        />
                     </Col>
                  ))
               ) : (
                  <Col key={0} md={6} className='project-card'>
                     <h2>Sorry, Projects Will Add Soon</h2>
                  </Col>
               )}
            </Row>
         </Container>
      </Container>
   );
}

export default Projects;
