import styled from "styled-components";
import React from "react";
import removingTextTool from "../components/removingTextTool";
import constructionTextImg from "../../images/offertypes/construction-text.jpg"
import trucksTextImg from "../../images/offertypes/trucks-text.jpg";
import trailersTextImg from "../../images/offertypes/trailers-text.jpg";
import agricultureTextImg from "../../images/offertypes/agriculture-text.jpg";
import sparesTextImg from "../../images/offertypes/spares-text.jpg";
import attachmentsTextImg from "../../images/offertypes/attachments-text.jpg";
import forkliftsTextImg from "../../images/offertypes/forklifts-text.jpg";
import busesTextImg from "../../images/offertypes/buses-text.jpg";
import campersTextImg from "../../images/offertypes/campers-text.jpg";

const StyledWrapper = styled.div`
    width: 100%;
    max-width: 1160px;
    margin: 0 auto; 
    padding-top: 100px;
    display: flex;
    justify-content: space-between;
    .left_ {
        width: 600px;
        .hello-text--heading {
            font-size: 24px;
            font-weight: 700;
            margin-bottom: 16px;
            letter-spacing: 0.01em;
            color: #323F4B;
            font-family: "Roboto", sans-serif;
            :focus {
                outline: solid 2px lightseagreen;
            }
        }
        .hello-text--content {
            position: relative;
            width: 100%;
            &:hover {
                .add_ {
                    display: flex;  
                }
            }
            .list-control-button {
                position: absolute;
                z-index: 2;
                background: #fff;
                font-size: 20px;
                font-weight: bold;
                border: 1px solid #ccc;
                display: none;
            }
            .add_ {
                position: absolute;
                bottom: -10px;
                left: 50%;
                transform: translateX(-50%);
                top: 98%;
                &:hover {
                    display: flex;  
                }
            }
            .remove_ {
                position: absolute;
                top: unset;
                right: -20px;
                left: unset;
            }
            .is-visible {
                display: flex;
            }
            p {
                font-size: 16px;
                font-family: "Source Sans Pro", sans-serif;
                margin: 16px 0;
                &:not(:first-child) {
                    margin-top: 25px
                }
                color: #6b6b6b;
                :focus {
                outline: solid 2px lightseagreen;
                }
            }
        }
        .hello-text--register-link {
            margin-top: 40px;
            p {
                font-weight: 600;
                :focus {
                    outline: solid 2px lightseagreen;
                }
                a {
                    position: relative;
                    color: #4ec4f0;
                    text-decoration: none;
                    font-size: 18px;
                    &::before,
                    &::after {
                      position: absolute;
                      bottom: -15px;
                      content: "";
                    }
                
                    &::before {
                      height: 1px;
                      width: calc(100% + 20px);
                      background-color: #4ec4f0;
                    }
                
                    &::after {
                      right: -20px;
                      bottom: -17px;
                      width: 5px;
                      height: 5px;
                      border: 1px solid #4ec4f0;
                      border-left-color: transparent;
                      border-top-color: transparent;
                      transform: rotate(-45deg);
                    }
                }
            }
        }
    }
    .right_ {
        width: 468px;
        .hello-text--image {
            border-radius: 16px;
            height: 498px;
            div {
                border-radius: 16px;
                overflow: hidden;
                background-position: center;
                background-size: cover;
                height: 100%;
                color: transparent;
                &[data-type=construction] {
                    background-image: url(${process.env.NODE_ENV.indexOf('dev') !== -1 ? constructionTextImg : `https://www.truck1.eu/_dev_/offer-react${constructionTextImg}`})
                }
                &[data-type=trucks] {
                    background-image: url(${process.env.NODE_ENV.indexOf('dev') !== -1 ? trucksTextImg : `https://www.truck1.eu/_dev_/offer-react${trucksTextImg}`})
                }
                &[data-type=trailers] {
                    background-image: url(${process.env.NODE_ENV.indexOf('dev') !== -1 ? trailersTextImg : `https://www.truck1.eu/_dev_/offer-react${trailersTextImg}`})
                }
                &[data-type=agriculture] {
                    background-image: url(${process.env.NODE_ENV.indexOf('dev') !== -1 ? agricultureTextImg : `https://www.truck1.eu/_dev_/offer-react${agricultureTextImg}`})
                }
                &[data-type=spares] {
                    background-image: url(${process.env.NODE_ENV.indexOf('dev') !== -1 ? sparesTextImg : `https://www.truck1.eu/_dev_/offer-react${sparesTextImg}`})
                }
                &[data-type=attachments] {
                    background-image: url(${process.env.NODE_ENV.indexOf('dev') !== -1 ? attachmentsTextImg : `https://www.truck1.eu/_dev_/offer-react${attachmentsTextImg}`})
                }
                &[data-type=forklifts] {
                    background-image: url(${process.env.NODE_ENV.indexOf('dev') !== -1 ? forkliftsTextImg : `https://www.truck1.eu/_dev_/offer-react${forkliftsTextImg}`})
                }
                &[data-type=buses] {
                    background-image: url(${process.env.NODE_ENV.indexOf('dev') !== -1 ? busesTextImg : `https://www.truck1.eu/_dev_/offer-react${busesTextImg}`})
                }
                &[data-type=campers] {
                    background-image: url(${process.env.NODE_ENV.indexOf('dev') !== -1 ? campersTextImg : `https://www.truck1.eu/_dev_/offer-react${campersTextImg}`})
                }
            }
        }
    }
`

function HelloTextTool(props) {

    // Adding paragraph tool
    function initAddParagraphTool() {
        let  mainContainer = document.querySelector('#hello-text');
        let button = mainContainer.querySelector('.add_');

        button.addEventListener('click', onAddParagraph)
    }


    function onAddParagraph() {
        addParagraph('?????????????? ??????????...');
        let lastParagraph = getLastParagraph();
        lastParagraph.focus()
    }

    function getLastParagraph() {
        let  mainContainer = document.querySelector('#hello-text');
        let ps = mainContainer.querySelectorAll('p.hello-text--p');

        return ps[ps.length - 1];
    }

    function addParagraph(html) {
        let  mainContainer = document.querySelector('#hello-text');
        let container = mainContainer.querySelector('[data-hello-text-content]');

        let p = document.createElement('p');
        p.classList.add("hello-text--p");
        p.contentEditable = true;
        p.tabindex = 0;
        p.innerHTML = html;
        container.appendChild(p);
    }

    //Removing paragraph tool
    function initRemoveParagraphTool(event) {
        let  mainContainer = document.querySelector('#hello-text');
        return removingTextTool({
            wrapper: mainContainer,
            parent: '[data-hello-text-content]',
            focusedElem: event.target,
            focusEventCondition: function(target) {
              return target.tagName === 'P';
            }
        })();
    }

    return (
        <StyledWrapper className="hello-text--wrapper" id="hello-text">
            <div className="left_">
                <div 
                    className="hello-text--heading" 
                    contentEditable={true}
                    suppressContentEditableWarning={true}
                    data-value-content
                    data-key="heading"
                    tabIndex={0}>
                        {props.data.contents.heading || 'Dear Mr. Smith'}
                </div>
                <div 
                    className="hello-text--content" 
                    data-hello-text-content>
                        <p 
                            className="hello-text--p" 
                            suppressContentEditableWarning={true} 
                            contentEditable={true} 
                            onClick={initRemoveParagraphTool}>
                                {props.data.text}
                        </p>
                        <div 
                            className="list-control-button add_ cdx-settings-button" 
                            onClick={initAddParagraphTool}>
                                +
                        </div>
                </div>
                <div 
                    className="hello-text--register-link" 
                    data-hello-reglink>
                        <p 
                            suppressContentEditableWarning={true} 
                            contentEditable={true}>
                                <a href={props.data.regLink.url}>{props.data.regLink.word}</a>
                        </p>
                </div>
            </div>
            <div className="right_">
                <div className="hello-text--image">
                    <div 
                        data-value-content
                        data-key="type"
                        data-type={props.type} 
                        data-value-attr="type">
                    </div>
                </div>
            </div>
        </StyledWrapper>    
    );
}

  
export default HelloTextTool;