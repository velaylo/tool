import { createReactEditorJS } from 'react-editor-js';
import { EDITOR_JS_TOOLS } from './tools';
import styled from 'styled-components';
import ButtonControls from './js/components/buttonControls';
import ContactForm from './js/components/contactForm';
import PrintContent from './js/components/printContent';
import FooterPDF from './js/components/footerPDF';
import OverlayList from './js/components/overlayList';

const StyledWrapper = styled.div`
  padding: 40px;
  background-color: #ececec;
`

const StyledWorkspace = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  background-color: #fcfcfc;
`

const ReactEditorJS = createReactEditorJS()

function App() {
  return (
    <>
      <div id='screen' className='screen-only'>
        <StyledWrapper className='wrapper'>
          <StyledWorkspace className='workspace' id="editorjs">
            <ReactEditorJS id='editorjs' tools={EDITOR_JS_TOOLS} />
          </StyledWorkspace>
        </StyledWrapper>
        <FooterPDF />
      </div>
      <ButtonControls />
      <ContactForm />
      <OverlayList />
      <PrintContent />
    </>
  );
}

export default App;
