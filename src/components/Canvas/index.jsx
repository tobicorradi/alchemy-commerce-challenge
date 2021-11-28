import React, { useRef } from "react";
import Square from "../Square";
import styled from "styled-components";
import Draggable from 'react-draggable';
import { useSelector, useDispatch } from 'react-redux'
import { createSquare } from "../../actions";
const DropSection = styled.article`
  height: 100vh;
  background-color: white;
  width: 80%;
  background: linear-gradient(90deg, white 20px, transparent 1%) center,
    linear-gradient(white 20px, transparent 1%) center, #e0e0e0;
  background-size: 22px 22px;
`;

const Canvas = () => {
  const dispatch = useDispatch()
  const dropArea = useRef();
  const placedSquares = useSelector(state => state.placedSquares)

  const handleDragOver = (e) => e.preventDefault();

  const handleDrop = (e) => {
    const draggedData = e.nativeEvent.dataTransfer.getData("new-square");
    const newSquare = JSON.parse(draggedData)
    const canvasDimensions = dropArea.current.getBoundingClientRect();

    dispatch(createSquare({  
      id: placedSquares.length + 1,
      color: newSquare.color,
      initialX: e.pageX - 50 - canvasDimensions.left,
      initialY: e.pageY - 50 - canvasDimensions.top,
      isSelected: false,}))
    };
    
  return (
    <DropSection
        ref={dropArea}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
    >
        {placedSquares.map(square => (
            <Draggable key={square.id} defaultPosition={{x: square.initialX, y: square.initialY }}>
                <div style={{position: 'absolute', display: 'inline-block'}}>
                    <Square isSelected={square.isSelected} color={square.color} style={{position: 'absolute'}}/>
                </div>
            </Draggable>
        ))}
    </DropSection>
  );
};

export default Canvas;
