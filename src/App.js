import styled from "styled-components";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

import React, { useState } from "react";

function App() {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered_2, setIsHovered_2] = useState(false);
  const [isHovered_3, setIsHovered_3] = useState(false);
  return (
    <Wrapper>
      <IconWrapper>
        <IconText className={isHovered && "hovered"}>Facebook</IconText>
        <IconContainer
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Facebook />
        </IconContainer>
      </IconWrapper>
      <IconWrapper>
        <IconText className={isHovered_2 && "hovered"}>Twitter</IconText>
        <IconContainer>
          <Twitter
            onMouseEnter={() => setIsHovered_2(true)}
            onMouseLeave={() => setIsHovered_2(false)}
          />
        </IconContainer>
      </IconWrapper>
      <IconWrapper>
        <IconText className={isHovered_3 && "hovered"}>Instagram</IconText>
        <IconContainer>
          <Instagram
            onMouseEnter={() => setIsHovered_3(true)}
            onMouseLeave={() => setIsHovered_3(false)}
          />
        </IconContainer>
      </IconWrapper>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: linear-gradient(315deg, white, #d7e1ec);
`;

const IconWrapper = styled.div`
  margin: 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  z-index: 2;
  cursor: pointer;
`;

const IconText = styled.div`
  background-color: #0e52f1;
  position: absolute;
  top: 0px;
  font-size: 25px;
  padding: 10px 18px;
  border-radius: 25px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  opacity: 0;
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);

  &:before {
    position: absolute;
    content: "";
    height: 15px;
    width: 15px;
    background-color: inherit;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
  }

  &.hovered {
    opacity: 1;
    top: -70px;
  }
`;

const IconContainer = styled.div`
  height: 60px;
  width: 60px;
  display: block;
  background: white;
  text-align: center;
  border-radius: 50%;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  position: relative;
  &:hover {
    background: #0e52f1;
  }
`;

const Facebook = styled(FaFacebookF)`
  width: 25px;
  height: 60px;
`;

const Twitter = styled(FaTwitter)`
  width: 25px;
  height: 60px;
`;

const Instagram = styled(FaInstagram)`
  width: 25px;
  height: 60px;
`;
