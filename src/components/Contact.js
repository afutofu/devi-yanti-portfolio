import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { gsap, TimelineLite, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ContactComp = styled.div`
  position: relative;
  width: 100%;
  /* height: 550px; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Quicksand", "san-serif";
  box-sizing: border-box;
  padding: 150px 0;
  padding-bottom: 250px;
  background-color: inherit;
  z-index: 0;

  :before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-color: inherit;
    transform-origin: bottom left;
    transform: skewY(-5deg);
  }

  @media only screen and (max-width: 450px) {
    padding-bottom: 150px;
  }
`;

const Container = styled.div`
  margin: 0px 10%;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 992px) {
    margin: 0px 15%;
  }
`;

const Content = styled.div`
  position: relative;
  /* top: 50%;
  transform: translateY(-50%); */
  width: 90%;
  max-width: 700px;
  text-align: left;
  color: #222;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const TitleArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: 500;
  padding: 0 20px;

  @media only screen and (max-width: 992px) {
    font-size: 26px;
  }

  @media only screen and (max-width: 450px) {
    font-size: 18px;
  }

  @media only screen and (max-width: 350px) {
    font-size: 16px;
  }
`;

const TitleHighlight = styled.span`
  color: ${(props) => props.theme.color};
`;

const TitleLineWrapper = styled.div`
  overflow: hidden;
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

const Text = styled.p`
  max-width: 80%;
  color: #222;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.5em;
  text-align: center;
  margin: 0;
  padding: 0;
  margin-bottom: 30px;

  @media only screen and (max-width: 992px) {
    max-width: 70%;
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

const Contact = () => {
  let titleText = useRef(null);
  let titleLineLeft = useRef(null);
  let titleLineRight = useRef(null);
  let text = useRef(null);
  let button = useRef(null);

  const titleEnter = () => {
    let tl = new TimelineLite();

    tl.from(titleText, {
      y: -50,
      opacity: 0,
      duration: 0.5,
    })
      .fromTo(
        titleLineLeft,
        {
          x: "100%",
          y: 13,
        },
        {
          x: 0,
          y: 13,
          duration: 0.8,
          ease: Power3.easeInOut,
        },
        "-=0.2"
      )
      .fromTo(
        titleLineRight,
        {
          x: "-100%",
          y: 13,
        },
        {
          x: 0,
          y: 13,
          duration: 0.82,
          ease: Power3.easeInOut,
        },
        "-=0.8"
      );

    return tl;
  };

  const textEnter = () => {
    let tl = new TimelineLite();

    tl.from(text, {
      y: 50,
      opacity: 0,
      duration: 0.5,
    });

    return tl;
  };

  const buttonEnter = () => {
    let tl = new TimelineLite();

    tl.from(button, {
      y: 50,
      opacity: 0,
      duration: 0.5,
    });

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
    master.add(titleEnter());
    master.add(textEnter(), "-=0.3");
    master.add(buttonEnter(), "-=0.2");
  }, []);

  return (
    <ContactComp id="contact">
      <Container>
        <Content>
          <TitleArea>
            <TitleLineWrapper>
              <TitleLine ref={(el) => (titleLineLeft = el)} />
            </TitleLineWrapper>
            <Title ref={(el) => (titleText = el)}>
              <TitleHighlight>Contact</TitleHighlight> Me!
            </Title>
            <TitleLineWrapper>
              <TitleLine ref={(el) => (titleLineRight = el)} />
            </TitleLineWrapper>
          </TitleArea>
          <Text ref={(el) => (text = el)}>
            I'm currently not looking for any new opportunities, but feel free
            to let me know if you're still interested in hiring, want to ask
            some questions, or just want to say hi!
          </Text>
          <a href="mailto:theafuza@gmail.com">
            <Button ref={(el) => (button = el)}>Contact Me</Button>
          </a>
        </Content>
      </Container>
    </ContactComp>
  );
};

export default Contact;
