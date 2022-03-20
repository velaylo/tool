import { createReactEditorJS } from 'react-editor-js';
import { EDITOR_JS_TOOLS } from './tools';
import styled from 'styled-components';
import React from 'react';
import ButtonControls from './js/components/buttonControls';
import ContactForm from './js/components/contactForm';
import PrintContent from './js/components/printContent';
import FooterPDF from './js/components/footerPDF';
import OverlayList from './js/components/overlayList';
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

const ReactEditorJS = createReactEditorJS()

function App() {
    const editorCore = React.useRef(null)

    const handleInitialize = React.useCallback((instance) => {
      editorCore.current = instance
    }, [])

    const handleSave = React.useCallback(async () => {
      const savedData = await editorCore.current.save();
      console.log(savedData)
    }, [])

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
        <ButtonControls />
        <ContactForm />
        <OverlayList />
        <button className="co-btn" id="log" onClick={handleSave}>Log</button>
        <PrintContent />
      </>
    );

}

export default App;
