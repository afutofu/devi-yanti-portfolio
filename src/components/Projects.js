import React from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import FeaturedProjects from "./FeaturedProjects";
import OtherProjects from "./OtherProjects";

gsap.registerPlugin(ScrollTrigger);

const ProjectsComp = styled.div`
  position: relative;
  width: 100%;
  min-height: 1800px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Quicksand", "san-serif";
  padding-top: 100px;
  margin: 150px 0;
  margin-bottom: 250px;
  /* padding: 250px 0; */
  box-sizing: border-box;
  object-fit: cover;
  /* overflow: hidden; */
  z-index: 0;

  @media only screen and (min-width: 1200px) {
    min-height: 2100px;
  }
`;

const Container = styled.div`
  margin: 0px 15%;
  padding-top: 50px;
  box-sizing: border-box;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 1200px) {
    margin: 0px 10%;
  }

  @media only screen and (max-width: 992px) {
    margin: 0px 10%;
  }
`;

const Content = styled.div`
  position: relative;
  width: 100%;
  max-width: 1500px;
  text-align: left;
  color: #eee;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Projects = () => {
  return (
    <ProjectsComp id="projects">
      <Container>
        <Content>
          <FeaturedProjects />
          <OtherProjects />
        </Content>
      </Container>
    </ProjectsComp>
  );
};

export default Projects;
