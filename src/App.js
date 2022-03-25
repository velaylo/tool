import { createReactEditorJS } from 'react-editor-js';
import { EDITOR_JS_TOOLS } from './tools';
import styled from 'styled-components';
import React from 'react';
import ButtonControls from './js/components/buttonControls';
import ContactForm from './js/components/contactForm';
import PrintContent from './js/components/printContent';
import FooterPDF from './js/components/footerPDF';
import OverlayList from './js/components/overlayList';
import OverlaySave from './js/components/overlaySave';
import { Component } from 'react';

const StyledWrapper = styled.div`
  padding: 40px;
  background-color: #ececec;
`

const StyledWorkspace = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  background-color: #F8F9F9;
`
const StyledLogButton = styled.button`
  @media print {
    display: none;
  }
`

const ReactEditorJS = createReactEditorJS()

function App() {
    const editorCore = React.useRef(null)

    const handleInitialize = React.useCallback((instance) => {
      editorCore.current = instance
    }, [])

    const handleSave = React.useCallback(async () => {
      document.querySelectorAll('.ce-paragraph:empty').forEach(p => p.innerHTML = '&nbsp;&nbsp;&nbsp;');
      const savedData = await editorCore.current.save();
      console.log(savedData)

      return savedData
    }, [])

    const handleRender = React.useCallback(async (json) => {
      await editorCore.current.render(json)
    })

    return (
      <>
        <div id='screen' className='screen-only'>
          <StyledWrapper className='wrapper'>
            <StyledWorkspace className='workspace' id="editorjs">
              <ReactEditorJS 
                id='editorjs' 
                onInitialize={handleInitialize}
                tools={EDITOR_JS_TOOLS} />
            </StyledWorkspace>
          </StyledWrapper>
          <FooterPDF />
        </div>
        <ButtonControls render={handleRender} />
        <ContactForm />
        <OverlaySave render={handleRender} save={handleSave} name="save" />
        <OverlayList render={handleRender} />
        <StyledLogButton 
          className="co-btn" 
          id="log" 
          onClick={handleSave}>
            Log
        </StyledLogButton>
        <PrintContent />
      </>
    );

}

export default App;
