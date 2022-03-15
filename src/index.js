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

@media print {
  html, body{
		height: 297mm;
		width: 210mm;
	}
}

@media print {
  #screen {
    display: none !important;
  }

  .screen-only, .ct, .list-control-button, .cdx-settings-button {
    display: none !important;
  }

  .print-only {
    display: block !important;
    page-break-after: avoid;
    page-break-before: avoid;
  }
  .print-only .content {
    position: relative;
  }

  html {
    font-size: 11.52px;
  }

  html, body {
    page-break-after: avoid;
    page-break-before: avoid;
    margin-bottom: -20px;
  }

  /****/
  footer {
    .footer-pdf {
      position: absolute;
      width: 100%;
      .footer-wrapper {
        max-width: 748.8px;
        padding-bottom: 12.8px;
        .left > div {
          margin-bottom: 6.4px;
        }
      }
    }
  }

  .radius-10 {
    border-radius: 6.4px;
  }

  .ce-paragraph {
    max-width: 748.8px;
    font-size: 11.52px;
  }

  .hello--header {
    height: 50px;
    max-width: 748.8px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding: 0 50px;
    margin-bottom: 237px;
  }
  .hello--header .logo {
    width: 237px;
    height: 23px;
  }
  .hello--header .slogan {
    font-size: 12px;
  }

  .hello-information {
    max-width: 748.8px;
    padding-top: 23.04px;
  }
  .hello-information .heading {
    font-size: 23.04px;
    margin-bottom: 25.6px;
  }
  .hello-information .achievements {
    padding: 32px 38.4px;
  }
  .hello-information .achievements .achieve .value {
    font-size: 15.36px;
  }
  .hello-information .achievements .achieve .key {
    font-size: 11.52px;
    margin-bottom: 3.2px;
  }

  .hello-image {
    height: 364.8px;
  }

  /****/
  ${'' /* .hello-text--wrapper {
    max-width: 748.8px;
  }
  .hello-text--wrapper .left_ {
    width: 364.8px;
  }
  .hello-text--wrapper .right_ {
    width: 300.8px;
  }

  .hello-text--heading {
    font-size: 15.36px;
    margin-bottom: 19.2px;
  }

  .hello-text--content p {
    font-size: 10.24px;
  }

  .hello-text--image {
    height: 320px;
  } */}

  /****/
  .packages-pricelist--wrapper {
    max-width: 748.8px;
    padding-top: 25.6px;
  }
  .packages-pricelist--wrapper .heading {
    font-size: 15.36px;
  }

  .packages-pricelist--content {
    padding-top: 51.2px;
    margin-left: -9.6px;
    margin-right: -9.6px;
  }
  .packages-pricelist--content .package-wrapper {
    width: 236.8px;
    margin-left: 9.6px;
    margin-right: 9.6px;
    padding-top: 19.2px;
  }
  .packages-pricelist--content .package-wrapper:not([data-package=premium]) {
    padding-bottom: 19.2px;
  }
  .packages-pricelist--content .package-wrapper[data-package=premium] {
    margin-top: -19.2px;
  }
  .packages-pricelist--content .package .package-header {
    font-size: 15.36px;
    padding: 7.68px 0;
    border-top-left-radius: 6.4px;
    border-top-right-radius: 6.4px;
  }
  .packages-pricelist--content .package .package-slogan {
    padding: 12.8px 12.8px 6.4px;
  }
  .packages-pricelist--content .package .package-content {
    padding-left: 19.2px;
    padding-right: 19.2px;
    padding-top: 12.8px;
  }
  .packages-pricelist--content .package .package-content::after {
    width: calc(100% - 38.4px);
  }
  .packages-pricelist--content .package .package-content ul {
    margin-bottom: 19.2px;
    padding-left: 5.12px;
  }
  .packages-pricelist--content .package .package-content ul li {
    padding-left: 6.4px;
    font-size: 10.24px;
  }
  .packages-pricelist--content .package .package-content ul li:not(:last-child) {
    margin-bottom: 12.8px;
  }
  .packages-pricelist--content .package .package-prices {
    padding-left: 32px;
    padding-right: 32px;
  }
  .packages-pricelist--content .package .package-prices ul li {
    padding-top: 19.2px;
    padding-bottom: 19.2px;
  }
  .packages-pricelist--content .package .package-prices ul li [data-price-toptext] {
    margin-bottom: 3.2px;
  }
  .packages-pricelist--content .package .package-prices ul li [data-price-currency] {
    font-size: 10.24px;
  }
  .packages-pricelist--content .package .package-prices ul li [data-price-value] {
    font-size: 17.92px;
    top: 1.92px;
  }
  .packages-pricelist--content .package .package-prices ul li [data-price-text] {
    font-size: 10.24px;
  }
  .packages-pricelist--content .package-wrapper[data-package=premium] .package-content {
    padding-bottom: 19.84px;
  }
  .packages-pricelist--content .package-wrapper[data-package=premium] .package-prices {
    padding-bottom: 19.2px;
  }

  /****/
  .service-packages-text--wrapper {
    padding-top: 25.6px;
    max-width: 620.8px;
  }
  .service-packages-text--wrapper .heading {
    font-size: 15.36px;
  }

  .service-packages-text--content {
    padding-top: 44.8px;
    max-width: 620.8px;
  }
  .service-packages-text--content .left, .service-packages-text--content .right {
    width: 236.8px;
  }
  .service-packages-text--content .item_ {
    padding-left: 32px;
    margin-bottom: 25.6px;
  }
  .service-packages-text--content .item_ .circle {
    width: 19.2px;
    height: 19.2px;
    border-radius: 9.6px;
  }
  .service-packages-text--content .item_ .circle::after {
    width: 7.68px;
    height: 3.2px;
  }
  .service-packages-text--content .item_ .title_ {
    font-size: 12.8px;
    margin-bottom: 3.2px;
  }
  .service-packages-text--content .item_ .content_ {
    font-size: 10.24px;
  }

  /****/
  .credits-notice--wrapper {
    max-width: 620.8px;
    padding-top: 12.8px;
  }

  .credits-notice--text {
    padding: 12.8px 19.2px;
    border-radius: 6.4px;
  }

  /****/
  .credits-prices--wrapper {
    max-width: 748.8px;
    padding-top: 64px;
  }
  .credits-prices--wrapper .heading {
    font-size: 15.36px;
    margin-bottom: 12.8px;
  }
  .credits-prices--wrapper .slogan {
    font-size: 11.52px;
    max-width: 437.76px;
    padding-left: 13.44px;
    padding-right: 13.44px;
  }

  .credits-prices--prices {
    padding-top: 12.8px;
  }
  .credits-prices--prices .price-wrapper {
    width: 364.8px;
  }
  .credits-prices--prices .price-wrapper .price_ {
    padding-top: 25.6px;
    padding-bottom: 25.6px;
  }
  .credits-prices--prices .price-wrapper .price_ .left_ .currency_ {
    font-size: 10.24px;
  }
  .credits-prices--prices .price-wrapper .price_ .left_ .value_ {
    font-size: 17.92px;
  }
  .credits-prices--prices .price-wrapper .price_ .text_ {
    font-size: 15.36px;
  }

  /****/
  .credits-info--wrapper {
    max-width: 748.8px;
    padding-top: 51.2px;
  }
  .credits-info--wrapper .heading {
    font-size: 12.8px;
    margin-bottom: 25.6px;
  }

  .credits-info--items .info-item {
    width: 236.8px;
    padding: 19.2px;
    padding-right: 38.4px;
    border-radius: 6.4px;
  }
  .credits-info--items .info-item .def_, .credits-info--items .info-item .price_ {
    font-size: 11.52px;
  }

  /****/
  .prices-main--wrapper {
    max-width: 748.8px;
    padding-top: 38.4px;
    padding-bottom: 38.4px;
  }
  .prices-main--wrapper .heading {
    font-size: 15.36px;
  }

  .prices-main--items {
    padding-top: 38.4px;
    -moz-column-gap: 19.2px;
         column-gap: 19.2px;
    row-gap: 38.4px;
  }
  .prices-main--items .price-item {
    border-radius: 6.4px;
  }
  .prices-main--items .price-item .inner_ {
    border-radius: 6.4px;
  }
  .prices-main--items .price-item .inner_ .side_ {
    padding: 12.8px;
  }
  .prices-main--items .price-item .promo-text_ {
    font-size: 11.52px;
    margin-bottom: 12.8px;
  }
  .prices-main--items .price-item .top-text_ {
    font-size: 10.24px;
    margin-bottom: 3.2px;
  }
  .prices-main--items .price-item .currency_, .prices-main--items .price-item .text_, .prices-main--items .price-item .bottom_ {
    font-size: 10.24px;
  }
  .prices-main--items .price-item .value_ {
    font-size: 17.92px;
    top: 1.92px;
  }
  .prices-main--items .price-item .divider_ {
    margin: 6.4px auto;
    width: 38.4px;
  }
  
  table.footer-contacts div {
    margin-bottom: 6.4px;
    margin-top: -1.92px;
  }

  a.icon_ {
    width: 15.36px;
    height: 15.36px;
    margin-right: 12.8px;
    top: 1.92px;
  }
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

  footer {
    .footer-wrapper {
      width: 100%;
      max-width: 1160px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      padding-bottom: 20px;
      border-bottom: 1px solid #eaeaea;

      .left > div,
      .right > div {
        margin-bottom: 10px;
      }

      [data-footer-name] {
        font-family: 'Roboto', sans-serif;;
        font-weight: 700;
      }
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

