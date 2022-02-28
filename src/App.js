import { createReactEditorJS } from 'react-editor-js'
import { EDITOR_JS_TOOLS } from './tools'
import styled from 'styled-components';

const StyledWrapper = styled.div`
  padding: 40px;
  background-color: #ececec;
`

const StyledWorkspace = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  background-color: #fff;
`

const ReactEditorJS = createReactEditorJS()

function App() {
  return (
    <StyledWrapper className='wrapper'>
      <StyledWorkspace className='workspace'>
        <ReactEditorJS tools={EDITOR_JS_TOOLS} />
      </StyledWorkspace>
    </StyledWrapper>
  );
}

export default App;
