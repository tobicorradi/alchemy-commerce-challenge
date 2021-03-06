import React from 'react'
import styled from 'styled-components'

const Block = styled.div`
    width: 100px;
    height: 100px;
    cursor: grab;
    box-shadow: 3px 2px 11px #00000036;
    background: ${props => props.color};
    outline: ${props => props.isSelected ? '5px solid red' : 'none'};
`
const Square = ({color, isSelected, ...reset}) => {
    return  <Block color={color} isSelected={isSelected} {...reset} style={{ border: isSelected ? '1 px solid red' : null}} />
}

export default Square
