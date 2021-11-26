import { useState } from 'react';
import Canvas from './components/Canvas';
import Sidebar from './components/Sidebar';
import styled from 'styled-components';
import './App.css';

const Wrapper = styled.section`
  display: flex;
  max-height: 100vh;
  overflow: hidden;
`

function App() {
  const [squares, setSquares] = useState([
    {id: 1, color: 'orange'},
    {id: 2, color: 'green'},
    {id: 3, color: 'royalblue'},
    {id: 4, color: 'darkmagenta'},
    {id: 5, color: 'sienna'},

])

  const [placedSquares, setPlacedSquares] = useState([])
  return (
      <Wrapper>
        <Sidebar squares={squares} />
        <Canvas placedSquares={placedSquares} setPlacedSquares={setPlacedSquares}/>
      </Wrapper>
  );
}

export default App;
