import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { gsap, TimelineLite, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutComp = styled.div`
  position: relative;
  width: 100%;
  /* height: 550px; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Quicksand", "san-serif";
  padding: 150px 0;
  /* background-color: white; */
`;

const Container = styled.div`
  margin: 0px 10%;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  position: relative;
  width: 100%;
  max-width: 700px;
  text-align: left;
  color: #222;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const TitleArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: 500;
  padding-right: 20px;

  @media only screen and (max-width: 992px) {
    font-size: 26px;
  }

  @media only screen and (max-width: 450px) {
    padding-right: 15px;
    font-size: 22px;
    line-height: unset;
  }

  @media only screen and (max-width: 350px) {
    font-size: 20px;
  }
`;

const TitleHighlight = styled.span`
  color: ${(props) => props.theme.color};
`;

const TitleLineWrapper = styled.div`
  overflow-x: hidden;
  flex: 1;
  height: 20px;
  padding: 0;
`;

const TitleLine = styled.div`
  flex: 1;
  height: 1px;
  padding: 0;
  background-color: ${(props) => props.theme.color};
`;

const Descriptions = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Description = styled.p`
  font-size: 20px;
  line-height: 1.5em;
  font-weight: 400;
  margin: 0;
  margin-bottom: 18px;

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
    font-size: 12px;
  }
`;

const DescriptionBold = styled.span`
  font-weight: 500;
`;

const About = () => {
  // let about = useRef(null);
  let titleText = useRef(null);
  let titleLine = useRef(null);
  let descriptions = useRef(null);

  // const backgroundFade = () => {
  //   let tl = new TimelineLite();

  //   tl.to(about, {
  //     backgroundColor: "#eee",
  //     ease: Power3.easeInOut,
  //     duration: 2,
  //   });

  //   return tl;
  // };

  const titleEnter = () => {
    let tl = new TimelineLite();

    tl.from(titleText, {
      y: -50,
      opacity: 0,
      duration: 0.5,
    }).fromTo(
      titleLine,
      {
        x: "-100%",
        y: 14,
      },
      {
        x: 0,
        y: 14,
        duration: 0.8,
        ease: Power3.easeInOut,
      },
      "-=0.2"
    );

    return tl;
  };

  const descriptionsEnter = () => {
    let tl = new TimelineLite();

    tl.staggerFrom(
      descriptions.childNodes,
      0.5,
      {
        y: 50,
        opacity: 0,
      },
      0.2
    );

    return tl;
  };

  useEffect(() => {
    let master = new TimelineLite({
      scrollTrigger: {
        trigger: titleText,
        start: "top center",
        toggleActions: "play none none none",
      },
    });
    // master.add(backgroundFade());
    master.add(titleEnter());
    master.add(descriptionsEnter(), "-=0.3");
  }, []);

  return (
    <AboutComp id="about">
      <Container>
        <Content>
          <TitleArea>
            <Title ref={(el) => (titleText = el)}>
              A Bit <TitleHighlight>About</TitleHighlight> Me
            </Title>
            <TitleLineWrapper>
              <TitleLine ref={(el) => (titleLine = el)} />
            </TitleLineWrapper>
          </TitleArea>
          <Descriptions ref={(el) => (descriptions = el)}>
            <Description>
              Non sunt eiusmod Lorem dolor culpa culpa commodo occaecat Lorem
              aute non tempor quis ullamco.
            </Description>
            <Description>
              Fugiat ex enim est ullamco ad tempor proident eiusmod fugiat eu.
              Do dolor consequat enim ullamco ipsum. Do in cillum ut id. Enim
              nisi voluptate pariatur ut laboris dolore pariatur consequat
              ullamco deserunt ullamco laboris veniam. Esse ipsum esse aute
              tempor aute elit nulla in reprehenderit. Minim mollit nisi
              occaecat aute aliqua.
            </Description>
            <Description>
              Ipsum velit pariatur incididunt do anim cupidatat anim voluptate
              aute eu ipsum.
            </Description>
          </Descriptions>
        </Content>
      </Container>
    </AboutComp>
  );
};

export default About;
