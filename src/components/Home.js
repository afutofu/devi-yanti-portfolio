import React, { useRef, useEffect, useCallback } from "react";
import styled from "styled-components";
import { gsap, TimelineLite, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import face from "../assets/face.png";

gsap.registerPlugin(ScrollTrigger);

const HomeComp = styled.div`
  position: relative;
  font-family: "Quicksand", "san-serif";
  width: 100%;
  /* max-width: 2000px; */
  height: 100vh;
  padding-top: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /* margin: 0 auto; */
  box-sizing: border-box;
`;

const Container = styled.div`
  margin: 0px 15%;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 992px) {
    margin: 0px 10%;
  }

  @media only screen and (max-width: 600px) {
    margin: 0 10%;
  }
`;

const Content = styled.div`
  position: relative;
  margin: 0;

  /* padding-bottom: 150px; */
  box-sizing: border-box;
  @media only screen and (min-width: 2500px) {
    max-width: 900px;
  }
`;

const FaceImage = styled.img.attrs((props) => {
  return {
    src: props.src,
  };
})`
  opacity: 0.9;
  width: 500px;

  @media only screen and (max-width: 992px) {
    width: 380px;
  }

  @media only screen and (max-width: 765px) {
    width: 280px;
  }

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const Introduction = styled.h3`
  color: ${(props) => props.theme.color};
  font-size: 20px;
  margin: 0;
  margin-bottom: 8px;
  font-weight: 700;

  @media only screen and (max-width: 992px) {
    font-size: 18px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 16px;
  }

  @media only screen and (max-width: 450px) {
    font-size: 14px;
  }

  @media only screen and (max-width: 350px) {
    font-size: 8px;
  }
`;

const Name = styled.h1`
  font-size: 48px;
  color: black;
  margin: 0;
  margin-bottom: 2px;
  font-family: "Montserrat", "san-serif";
  font-weight: 600;

  @media only screen and (max-width: 1200px) {
    font-size: 44px;
  }

  @media only screen and (max-width: 992px) {
    font-size: 40px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 29px;
  }

  @media only screen and (max-width: 450px) {
    font-size: 20px;
  }

  @media only screen and (max-width: 350px) {
    font-size: 18px;
  }
`;

// const NameBold = styled.span`
//   color: #111;
//   font-weight: 600;
//   margin: 0;
//   padding: 0;
// `;

const Motto = styled.h2`
  font-size: 28px;
  color: #818181;
  margin: 0;
  margin-bottom: 15px;
  font-weight: 700;
  text-transform: uppercase;
  font-family: "Montserrat", "san-serif";

  /* @media only screen and (max-width: 992px) {
    margin-bottom: 20px;
  } */

  @media only screen and (max-width: 600px) {
    font-size: 20px;
  }

  @media only screen and (max-width: 450px) {
    font-size: 16px;
    /* margin-bottom: 15px; */
  }

  @media only screen and (max-width: 350px) {
    font-size: 14px;
    /* margin-bottom: 10px; */
  }
`;

const MottoBold = styled.span`
  position: relative;
  color: ${(props) => props.theme.color};
  font-weight: 700;
`;

const Description = styled.p`
  max-width: 50%;
  font-size: 16px;
  line-height: 1.5em;
  font-weight: 400;
  margin: 0;
  margin-bottom: 25px;

  @media only screen and (max-width: 1200px) {
    max-width: 60%;
  }

  @media only screen and (max-width: 992px) {
    /* max-width: 0%; */
    margin-bottom: 25px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 14px;
    max-width: 100%;
  }

  @media only screen and (max-width: 450px) {
    font-size: 12px;
    margin-bottom: 20px;
  }

  @media only screen and (max-width: 350px) {
    font-size: 10px;
    margin-bottom: 20px;
  }
`;

const Button = styled.button`
  font-family: "Quicksand", "san-serif";
  font-weight: 600;
  color: ${(props) => props.theme.color};
  background-color: unset;
  padding: 10px 40px;
  border-radius: 5px;
  outline: none;
  border: 3px solid ${(props) => props.theme.color};
  font-size: 18px;
  cursor: pointer;

  transition: background-color 0.2s;
  :hover {
    background-color: #ffefeb;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  @media only screen and (max-width: 600px) {
    padding: 7px 24px;
    font-size: 16px;
  }

  @media only screen and (max-width: 450px) {
    padding: 5px 20px;
    font-size: 14px;
    border-width: 2px;
  }

  @media only screen and (max-width: 350px) {
    padding: 5px 20px;
    font-size: 12px;
  }
`;

const Home = ({ getHomeTl }) => {
  // let home = useRef(null);
  let bg = useRef(null);
  let introduction = useRef(null);
  let name = useRef(null);
  let motto = useRef(null);
  let description = useRef(null);
  let button = useRef(null);

  const getTimeline = useCallback(
    (tl) => {
      getHomeTl(tl);
    },
    [getHomeTl]
  );

  const homeEnter = () => {
    let tl = new TimelineLite();

    tl.staggerFrom(
      [introduction, name, motto, description, button],
      0.6,
      {
        y: 100,
        autoAlpha: 0,
        ease: Power3.easeOut,
      },
      0.175,
      "-=2"
    ).from(bg, 1.5, { opacity: 0 }, "-=0.7");

    return tl;
  };

  useEffect(() => {
    let masterTl = new TimelineLite({ paused: true });
    masterTl.add(homeEnter());
    getTimeline(masterTl);
  }, [getTimeline]);

  return (
    <HomeComp id="home">
      <Container>
        <Content>
          <Introduction ref={(el) => (introduction = el)}>
            Hey there, I'm
          </Introduction>
          <Name ref={(el) => (name = el)}>Devi Yanti</Name>
          <Motto ref={(el) => (motto = el)}>Motto</Motto>
          <Description ref={(el) => (description = el)}>
            Brief Description
          </Description>
          <a href="mailto:theafuza@gmail.com">
            <Button ref={(el) => (button = el)}>Contact Me</Button>
          </a>
        </Content>
        <FaceImage ref={(el) => (bg = el)} src={face} />
      </Container>
    </HomeComp>
  );
};

export default Home;
