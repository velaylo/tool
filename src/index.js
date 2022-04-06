import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import Overrides from './sass/_overrides.scss';
import styled, {createGlobalStyle} from 'styled-components';
import BgWorkspace2 from './images/bg-workspace2.png'

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
  }
  html {
    line-height: 1.55;
    font-size: 18px;
    color: #6b6b6b;
    font-family: "Roboto", sans-serif;
  }
  html, body {
    background-color: #F8F9F9;
  }

  #editorjs {
    width: 100%;
    position: relative;
    &::before {
      position: absolute;
      left: 0;
      top: 0;
      content: '';
      width: 100%;
      height: 100%;
      opacity: 0.25;
      background-position: top center;
      background-repeat: repeat-y;
      background-image: url(${BgWorkspace2})
    }
  }

  input {
    border: none;
    background-color: #fcfcfc;
  }

  .ce-block__content, .ce-toolbar__content {
    max-width: 100%;
  }

  .ce-paragraph {
    width: 100%;
    max-width: 1160px;
    margin: 0 auto;
    font-family: "Source Sans Pro", sans-serif;
    font-size: 18px;
  }

  @media print {
    .ce-toolbar__content {
      display: none;
    }
  }

`



ReactDOM.render(
  <React.StrictMode>
    <Global />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

