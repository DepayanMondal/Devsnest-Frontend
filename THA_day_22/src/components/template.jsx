import React from "react";
import styled from "styled-components";

const ImageCard = styled.img`
  display: inline-block;
  color: #fff;
  width: 33.33%;
  height: 33.33%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border: 2px solid #111;
`;

const Template = ({ templateData, setMeme }) => {
  return (
    <ImageCard
      style={{
        backgroundImage: `url(${templateData.url})`,
      }}
      onClick={() => setMeme(templateData)}
    ></ImageCard>
  );
};

export default Template;
