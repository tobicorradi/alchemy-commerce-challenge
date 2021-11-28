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
  return (
      <Wrapper>
        <Sidebar />
        <Canvas />
      </Wrapper>
  );
}

export default App;
