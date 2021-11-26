import React from "react";
import styled from "styled-components";
import Square from "../Square";
const Section = styled.article`
  height: 100vh;
  background-color: white;
  width: 20%;
  padding: 20px;
  z-index: 2;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;
const SquaresWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Sidebar = ({ squares}) => {
    const handleDragStart = (e) => {
        const color = e.target.dataset.color
        const dragObj = JSON.stringify({
            color,
        })
        e.nativeEvent.dataTransfer.setData('new-square', dragObj)
    }
  return (
    <Section>
      <h1>Sidebar</h1>
      <p>Grab whatever square you'd like into the canvas</p>
      <SquaresWrapper>
        {squares.map((square, index) => (
          <div
            key={index}
            id={square.id}
            color={square.color}
            data-color={square.color}
            draggable
            onDragStart={handleDragStart}
            style={{marginBottom: 10, marginRight: 10, backgroundColor: square.color, width: 100, height: 100}}
          />
        ))}
      </SquaresWrapper>
    </Section>
  );
};

export default Sidebar;
