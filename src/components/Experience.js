import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { gsap, TimelineLite, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ExperienceComp = styled.div`
  position: relative;
  width: 100%;
  font-family: "Quicksand", "san-serif";
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 150px 0;
  box-sizing: border-box;
  background-color: inherit;
  z-index: 0;

  :after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-color: inherit;
    transform-origin: top right;
    transform: skewY(-5deg);
  }
`;

const Container = styled.div`
  margin: 0px 15%;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 992px) {
    margin: 0px 10%;
  }

  @media only screen and (max-width: 600px) {
    margin: 0 5%;
  }
`;

const Content = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
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
    padding: 0 15px;
    font-size: 22px;
  }

  @media only screen and (max-width: 350px) {
    font-size: 20px;
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

const ExperienceArea = styled.div`
  position: relative;
  width: 100%;
  margin-top: 40px;
  padding-bottom: 40px;
  box-sizing: border-box;
`;

const Pole = styled.div`
  position: absolute;
  width: 5px;
  height: 100%;
  left: 50%;
  background-color: lightgray;

  @media only screen and (max-width: 992px) {
    left: 49px;
  }

  @media only screen and (max-width: 600px) {
    left: 29px;
  }

  @media only screen and (max-width: 450px) {
    left: 20px;
  }
`;

const ExperienceItemArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  box-sizing: border-box;
  margin-bottom: 10px;

  font-size: 20px;
  font-weight: 400;

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

  :last-of-type {
    margin: 0;
  }
`;

const Year = styled.div`
  position: absolute;
  padding: 5px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.color};

  @media only screen and (max-width: 992px) {
    left: 27px;
  }

  @media only screen and (max-width: 600px) {
    left: 7px;
  }

  @media only screen and (max-width: 450px) {
    left: 3px;
  }
`;

const ExperienceItem = styled.div`
  position: relative;
  width: 40%;
  align-self: ${({ isEven }) => (isEven ? "flex-start" : "flex-end")};
  box-sizing: border-box;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  border: lightgray 1px solid;
  margin-top: 40px;

  @media only screen and (max-width: 992px) {
    align-self: flex-start;
    width: 82%;
    margin-left: 18%;
  }

  @media only screen and (max-width: 700px) {
    width: 80%;
    margin-left: 20%;
  }

  @media only screen and (max-width: 600px) {
  }

  @media only screen and (max-width: 450px) {
    width: 75%;
    margin-left: 25%;
  }

  @media only screen and (max-width: 350px) {
  }
`;

const CompanySection = styled.div`
  position: relative;
  width: auto;
  padding: 10px;
  background-color: ${({ theme }) => theme.color};
  color: white;
  z-index: 10;
  box-sizing: border-box;
`;

const Pointer = styled.div`
  position: absolute;
  top: 14px;
  right: ${({ isEven }) => (isEven ? "-10px" : "none")};
  left: ${({ isEven }) => (isEven ? "none" : "-10px")};
  width: 20px;
  height: 20px;
  background-color: ${({ theme }) => theme.color};
  transform: rotate(45deg);
  border: lightgray 1px solid;
  box-sizing: border-box;

  @media only screen and (max-width: 992px) {
    left: -10px;
  }

  @media only screen and (max-width: 600px) {
    top: 10px;
  }

  @media only screen and (max-width: 450px) {
    top: 10px;
    left: -9px;
    width: 18px;
    height: 18px;
  }

  @media only screen and (max-width: 350px) {
    top: 10px;
    left: -8px;
    width: 16px;
    height: 16px;
  }
`;

const DescSection = styled.div`
  position: relative;
  width: auto;
  padding: 10px;
  background-color: white;
  color: #222;
  box-sizing: border-box;
`;

const experiences = [
  {
    year: 2017,
    company: "Aero Haj",
    desc: "Employee",
  },
  {
    year: 2014,
    company: "Garuda Indonesia",
    desc: "Vice President Secretary",
  },
];

const Experience = () => {
  let titleText = useRef(null);
  let titleLineLeft = useRef(null);
  let titleLineRight = useRef(null);
  let listTitle = useRef(null);
  let listItems = useRef(null);

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
          duration: 0.8,
          ease: Power3.easeInOut,
        },
        "-=0.8"
      );

    return tl;
  };

  const listTitleEnter = () => {
    let tl = new TimelineLite();

    // List title class name
    const className = "." + listTitle.className.split(" ").join(".");

    tl.from(className, {
      opacity: 0,
      duration: 0.5,
    });

    return tl;
  };

  const listItemsEnter = () => {
    let tl = new TimelineLite();

    // List item class name
    const className = "." + listItems.className.split(" ").join(".");

    listItems = document.querySelectorAll(className);

    tl.staggerFrom(
      listItems[0].childNodes,
      0.5,
      {
        x: -50,
        opacity: 0,
      },
      0.1
    )
      .staggerFrom(
        listItems[1].childNodes,
        0.5,
        {
          x: -50,
          opacity: 0,
        },
        0.1,
        "-=1"
      )
      .staggerFrom(
        listItems[2].childNodes,
        0.5,
        {
          x: -50,
          opacity: 0,
        },
        0.1,
        "-=1.2"
      )
      .staggerFrom(
        listItems[3].childNodes,
        0.5,
        {
          x: -50,
          opacity: 0,
        },
        0.1,
        "-=0.8"
      );

    return tl;
  };

  useEffect(() => {
    let master = new TimelineLite({
      scrollTrigger: {
        trigger: titleText,
        start: "top+=200 center+=200",
        toggleActions: "play none none none",
      },
    });
    master.add(titleEnter());
    // master.add(listTitleEnter(), "-=0.3");
    // master.add(listItemsEnter(), "-=0.4");
  }, []);

  return (
    <ExperienceComp id="experience">
      <Container>
        <Content>
          <TitleArea>
            <TitleLineWrapper>
              <TitleLine ref={(el) => (titleLineLeft = el)} />
            </TitleLineWrapper>
            <Title ref={(el) => (titleText = el)}>
              Work <TitleHighlight>Experience</TitleHighlight>
            </Title>
            <TitleLineWrapper>
              <TitleLine ref={(el) => (titleLineRight = el)} />
            </TitleLineWrapper>
          </TitleArea>
          <ExperienceArea>
            <Pole />
            {experiences &&
              experiences.map((experience, i) => {
                console.log(i % 2 === 0);
                return (
                  <ExperienceItemArea>
                    <Year>{experience.year}</Year>
                    <ExperienceItem isEven={i % 2 === 0}>
                      <Pointer isEven={i % 2 === 0} />
                      <CompanySection>{experience.company}</CompanySection>
                      <DescSection>{experience.desc}</DescSection>
                    </ExperienceItem>
                  </ExperienceItemArea>
                );
              })}
          </ExperienceArea>
        </Content>
      </Container>
    </ExperienceComp>
  );
};

export default Experience;
