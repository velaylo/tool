import { createReactEditorJS } from 'react-editor-js';
import { EDITOR_JS_TOOLS } from './tools';
import styled from 'styled-components';
import React, { useState, useEffect  } from 'react';
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
  // const [arrDocument, setarrDocument] = useState([]);

  const editorCore = React.useRef(null)

  const handleInitialize = React.useCallback((instance) => {
    editorCore.current = instance
  }, [])

  const handleSave = React.useCallback(async () => {
    document.querySelectorAll('.ce-paragraph:empty').forEach(p => p.innerHTML = '&nbsp;&nbsp;&nbsp;');
    const savedData = await editorCore.current.save();

    return savedData
  }, [])

  const handleRender = React.useCallback(async (json) => {
    await editorCore.current.render(json)
  })

  const saveData = () => {
    handleSave().then(data => {
      console.dir(data);
    });
  }

  const downloadJSON = () => {
    handleSave().then(json => {
      let download = `data${Date.now()}.json`;
      let href = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(json, null, 2))}`;
      let a = document.createElement('a');
      a.innerHTML = 'D';
      a['download'] = download;
      a.setAttribute('href', href);
      document.body.appendChild(a);
      // let click = new Event('click', { view: window, bubbles: true, cancelable: true });
      // a.dispatchEvent(click);
      // document.body.removeChild(a);
      a.click();
      a.remove();
    });
  }

  let arrDocument = [];
  let removeStateDocument = [];

  const keydownHandler = (e) => {
    if(e.keyCode === 90 && e.ctrlKey){
      let currentIndex = arrDocument.length - 2;
      let activeItem = arrDocument[currentIndex];
      let lastIndex = arrDocument.length - 1;
      let lastItem = arrDocument[lastIndex];
      
      if(activeItem) {
        if(currentIndex >= 0) {
          handleRender(activeItem);
        }
  
        arrDocument.splice(lastIndex,1);
        removeStateDocument.push(lastItem);
      }
    } else if(e.keyCode === 89 && e.ctrlKey) {
      let currentIndex = removeStateDocument.length - 1;
      let lastElem = removeStateDocument[currentIndex];

      if(lastElem) {
        if(currentIndex >= 0) {
          handleRender(lastElem);
        }
  
        removeStateDocument.splice(currentIndex,1);
        arrDocument.push(lastElem)
      }
    }
  };

  useEffect(() => {
    document.addEventListener('click', (e) => {
      if(e.target.getAttribute('contenteditable')) {
        document.removeEventListener('keydown', keydownHandler)
      } else {
        document.addEventListener('keydown', keydownHandler)

        let lastChild = arrDocument[arrDocument.length - 1];

        if(arrDocument.length === 0) {
          handleSave().then(data => arrDocument.push(data))
        } else if(arrDocument.length > 9) {
          arrDocument.splice(0,1);
          handleSave().then(data => arrDocument.push(data))
        } else {
          handleSave().then(data => {
            if(JSON.stringify(data.blocks) !== JSON.stringify(lastChild.blocks)){
              arrDocument.push(data)
            }
          })
        }
      }
    });
  });


  return (
    <>
      <div id='screen' className='screen-only' onChange={(e) => console.log('changes')}>
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
        onClick={saveData}>
          Log
      </StyledLogButton>
      <StyledLogButton 
        className="co-btn" 
        id="json" 
        onClick={downloadJSON}>
          Download JSON
      </StyledLogButton>
      <PrintContent />
    </>
  );
}

export default App;
