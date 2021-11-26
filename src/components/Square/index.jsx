import React from 'react'
import styled from 'styled-components'

const Block = styled.div`
    width: 100px;
    height: 100px;
    marginBottom: 10px;
    cursor: grab;
    box-shadow: 3px 2px 11px #00000036;
`
const Square = ({id, color, data,  dragging, setDragging}) => {
    return (
        <>
            <Block style={{backgroundColor: color}} />
        </>
    )
}

export default Square
