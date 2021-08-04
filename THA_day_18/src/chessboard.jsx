import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 32vh;
  height: 32vh;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  margin: 0 auto;
  border: 1em solid black;
`;

const Box = styled.div`
  width: 4vh;
  height: 4vh;
  background-color: ${(props) => (props.isBlack ? "black" : "white")};
  position: relative;
  &:hover {
    :after {
      content: "";
      width: 1em;
      height: 1em;
      background-color: #ee5ac2;
      border-radius: 0.5em;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

let Boxes = [];
for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    i % 2 === 0
      ? j % 2 === 0
        ? Boxes.push(<Box key={`${i} + ${j}`} />)
        : Boxes.push(<Box key={`${i} + ${j}`} isBlack />)
      : j % 2 === 0
      ? Boxes.push(<Box key={`${i} + ${j}`} isBlack />)
      : Boxes.push(<Box key={`${i} + ${j}`} />);
  }
}

const Chessboard = () => {
  return <Container>{Boxes}</Container>;
};

export default Chessboard;
