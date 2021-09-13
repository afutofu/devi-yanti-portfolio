import React, { forwardRef } from "react";
import styled from "styled-components";

const LogoComp = styled.h1`
  color: ${(props) => props.theme.color};
  font-family: "Montserrat", "san-serif";
  font-size: ${(props) => (props.size ? props.size + "px" : 0)};
  font-weight: 700;
  margin: 0;
  padding: 8px;
  cursor: ${(props) => (props.pointer ? "pointer" : "auto")};
  box-sizing: border-box;

  .active {
    font-size: 100px;
    box-shadow: 10px 10px #ff350d;
  }
`;

const Logo = forwardRef((props, ref) => {
  return (
    <LogoComp ref={ref} size={props.size} pointer={props.pointer}>
      <i className="fas fa-mosque"></i>
    </LogoComp>
  );
});

export default Logo;
