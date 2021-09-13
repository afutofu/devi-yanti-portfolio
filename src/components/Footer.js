import React from "react";
import styled from "styled-components";

const FooterComp = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 70px;

  @media only screen and (max-width: 450px) {
    height: 50px;
  }
`;

const Container = styled.div`
  margin: 0px 10%;
  position: relative;

  @media only screen and (min-width: 992px) {
    margin: 0px 15%;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`;

const Credits = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #222;

  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }

  @media only screen and (max-width: 450px) {
    font-size: 10px;
  }

  @media only screen and (max-width: 350px) {
    font-size: 9px;
  }

  @media only screen and (max-width: 300px) {
    font-size: 7px;
  }
`;

const Socials = styled.div`
  display: flex;
  /* width: 100%; */
  max-width: 200px;
  font-size: 24px;
  justify-content: space-between;
  align-items: center;

  a {
    margin-left: 20px;
    color: ${(props) => props.theme.color};
    cursor: pointer;

    @media only screen and (max-width: 450px) {
      margin-left: 10px;
    }
  }

  i {
    transition: transform 0.2s;
    :hover {
      transform: scale(1.2);
    }
  }

  @media only screen and (max-width: 450px) {
    font-size: 16px;
  }

  @media only screen and (max-width: 350px) {
    /* font-size: 12px; */
  }
`;

const Footer = () => {
  return (
    <FooterComp>
      <Container>
        <Content>
          <Credits>Developed by Muhammad Afuzarahman</Credits>
          <Socials>
            <a href="mailto:theafuza@gmail.com">
              <i className="fa fa-envelope"></i>
            </a>
            <a
              href="https://github.com/afutofu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/afutofu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </Socials>
        </Content>
      </Container>
    </FooterComp>
  );
};

export default Footer;
