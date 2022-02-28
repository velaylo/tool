import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import Overrides from './sass/_overrides.scss';
import styled, {createGlobalStyle} from 'styled-components';

const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
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
  max-width: 1170px;
  margin: 0 auto;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 18px;
}
`

ReactDOM.render(
  <React.StrictMode>
    <Global />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

