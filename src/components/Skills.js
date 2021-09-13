import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { gsap, TimelineLite, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SkillsComp = styled.div`
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
  width: 90%;
  /* max-width: 800px; */
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

const ListAreaWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ListArea = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media only screen and (max-width: 1200px) {
    width: 95%;
  }

  @media only screen and (max-width: 992px) {
    width: 100%;
    justify-content: center;
  }

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  list-style: none;
  margin: 0 15px;

  @media only screen and (max-width: 992px) {
    justify-content: center;
    align-items: center;
    margin: 0 10px;
  }

  @media only screen and (max-width: 786px) {
    margin: 0;
    margin-bottom: 20px;
  }
`;

const ListTitle = styled.h3`
  color: ${(props) => props.theme.color};
  font-size: 24px;
  font-weight: 500;
  margin: 0;
  margin-bottom: 10px;
  text-align: center;

  @media only screen and (max-width: 992px) {
    font-size: 22px;
    margin: 0 20px;
    margin-bottom: 10px;
  }

  @media only screen and (max-width: 450px) {
    font-size: 20px;
    line-height: unset;
  }

  @media only screen and (max-width: 350px) {
    font-size: 18px;
  }
`;

const ListItems = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  list-style-type: none;
  padding: 0;
  margin: 0;

  @media only screen and (max-width: 992px) {
    align-items: center;
    text-align: center;
  }

  @media only screen and (max-width: 600px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const ListItem = styled.li`
  color: #222;
  font-size: 20px;
  padding-bottom: 10px;
  font-weight: 400;

  @media only screen and (max-width: 992px) {
    font-size: 18px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 16px;
    margin: 0 7px;
  }

  @media only screen and (max-width: 450px) {
    font-size: 14px;
  }

  @media only screen and (max-width: 350px) {
    font-size: 12px;
  }
`;

const Skills = () => {
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
    master.add(listTitleEnter(), "-=0.3");
    master.add(listItemsEnter(), "-=0.4");
  }, []);

  return (
    <SkillsComp id="skills">
      <Container>
        <Content>
          <TitleArea>
            <TitleLineWrapper>
              <TitleLine ref={(el) => (titleLineLeft = el)} />
            </TitleLineWrapper>
            <Title ref={(el) => (titleText = el)}>
              <TitleHighlight>Skills</TitleHighlight> I'm Proud Of
            </Title>
            <TitleLineWrapper>
              <TitleLine ref={(el) => (titleLineRight = el)} />
            </TitleLineWrapper>
          </TitleArea>
          <ListAreaWrapper>
            <ListArea>
              <List>
                <ListTitle ref={(el) => (listTitle = el)}>Languages</ListTitle>
                <ListItems ref={(el) => (listItems = el)}>
                  <ListItem>Javascript/ES6</ListItem>
                  <ListItem>HTML</ListItem>
                  <ListItem>CSS/SASS</ListItem>
                  <ListItem>PHP</ListItem>
                  <ListItem>SQL</ListItem>
                  <ListItem>Python</ListItem>
                  <ListItem>Java</ListItem>
                  <ListItem>C++</ListItem>
                </ListItems>
              </List>
              <List>
                <ListTitle>Frameworks</ListTitle>
                <ListItems>
                  <ListItem>React</ListItem>
                  <ListItem>Redux</ListItem>
                  <ListItem>GSAP</ListItem>
                  <ListItem>Bootstrap</ListItem>
                  <ListItem>jQuery</ListItem>
                  <ListItem>Node.js</ListItem>
                  <ListItem>Express</ListItem>
                  <ListItem>Socket.IO</ListItem>
                  <ListItem>Laravel</ListItem>
                  <ListItem>Scrapy</ListItem>
                  <ListItem>Arduino</ListItem>
                </ListItems>
              </List>
              <List>
                <ListTitle>Databases</ListTitle>
                <ListItems>
                  <ListItem>PostgreSQL</ListItem>
                  <ListItem>MySQL</ListItem>
                  <ListItem>MongoDB</ListItem>
                  <ListItem>SQLite</ListItem>
                </ListItems>
              </List>
              <List>
                <ListTitle>Tools</ListTitle>
                <ListItems>
                  <ListItem>Bash</ListItem>
                  <ListItem>Git & Github</ListItem>
                  <ListItem>Chrome DevTools</ListItem>
                  <ListItem>Postman</ListItem>
                  <ListItem>VS Code</ListItem>
                </ListItems>
              </List>
            </ListArea>
          </ListAreaWrapper>
        </Content>
      </Container>
    </SkillsComp>
  );
};

export default Skills;
