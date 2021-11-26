import React, { useRef } from "react";
import Square from "../Square";
import styled from "styled-components";
import Draggable from 'react-draggable';

const DropSection = styled.article`
  height: 100vh;
  background-color: white;
  width: 80%;
  background: linear-gradient(90deg, white 20px, transparent 1%) center,
    linear-gradient(white 20px, transparent 1%) center, #e0e0e0;
  background-size: 22px 22px;
`;

const Canvas = ({placedSquares, setPlacedSquares}) => {
  
  const dropArea = useRef();
  
  const handleDragOver = (e) => e.preventDefault();

  const handleDrop = (e) => {
    const draggedData = e.nativeEvent.dataTransfer.getData("new-square");
    const newSquare = JSON.parse(draggedData)
    let canvasDimensions = e.target.getBoundingClientRect();
    setPlacedSquares(oldArr => [...oldArr, {
        id: oldArr.length + 1,
        color: newSquare.color,
        initialX: e.pageX - 50 - canvasDimensions.left,
        initialY: e.pageY - 50 - canvasDimensions.top
    }])
  };
  
  return (
    <DropSection
        ref={dropArea}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
    >
        {placedSquares.map(square => (
            <Draggable defaultPosition={{x: square.initialX, y: square.initialY }}>
                <div style={{position: 'absolute', display: 'inline-block'}}>
                    <Square style={{position: 'absolute'}} color={square.color}/>
                </div>
            </Draggable>
        ))}
    </DropSection>
  );
};

export default Canvas;
