import React from 'react';
import styled from 'styled-components';
import removingTextTool from "../components/removingTextTool";

const StyledServisePackagesTextWrapper = styled.div`
    width: 100%;
    max-width: 968px;
    margin: 0 auto;
    padding-top: 40px;
    .heading {
        font-weight: 700;
        font-size: 24px;
        text-transform: capitalize;
        text-align: center;
        color: #323F4B;
        :focus-visible {
            outline: solid 2px lightseagreen;
        }
    }
`

const StyledServisePackagesTextContent = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 970px;
    margin: 0 auto;
    line-height: 1.55;
    font-size: 18px;
    color: #6b6b6b;
    padding-top: 40px;
    .service-packages-text_left-content, .service-packages-text_right-content {
        width: 370px;
        position: relative;
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
        .item_ {
            padding-left: 40px;
            margin-bottom: 40px;
            position: relative;
            .circle {
                position: absolute;
                width: 24px;
                height: 24px;
                top: 0;
                left: 0;
                border-radius: 16px;
                background-color: #47535F;       
                &::after {
                  content: '';
                  width: 10px;
                  height: 5px;
                  position: absolute;
                  font-weight: bold;
                  left: 50%;
                  top: 41%;
                  transform: translate(-50%, -50%) rotateZ(-45deg);
                  border: 1px solid #fff;
                  border-top-color: transparent;
                  border-right-color: transparent;
                }
            }
    
             .title_ {
                font-weight: 700;
                font-size: 20px;
                color: #323F4B;
                margin-bottom: 4px;
                :focus-visible {
                    outline: solid 2px lightseagreen;
                }
             }
    
            .content_ {
                font-weight: 400;
                color: #47535F;
                font-family: "Source Sans Pro", sans-serif;
                font-size: 16px;
                :focus-visible {
                    outline: solid 2px lightseagreen;
                }
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
    }
`

function AddContent(props) {
    let allContent = props.content;
    let listContent = [];

    for(let key in allContent) {
        listContent[key] = addSingleContent(allContent[key]);
    }

    return (
        <>{listContent}</>
    )
}

function initRemoveParagraphTool(event) {
    let  mainContainer = document.querySelector('.service-packages-text--content');
    let sideContainer = event.target.closest('div[data-side]');
    let side = sideContainer.getAttribute("data-side") 

    return removingTextTool({
        wrapper: mainContainer,
        parent: `.service-packages-text--content .${side}`,
        focusedElem: event.trget,
        getChild: function(_, focused) {
          return focused.parentNode;
        },
        focusEventCondition: function(target) {
          return target.parentNode.classList.contains('item_');
        }
    })();
}

const addSingleContent = ({ title, content }) => {

    return (
        <div
            key={title} 
            className='item_'
            onClick={initRemoveParagraphTool}>
                <div className='circle'></div>
                <div
                    contentEditable={true} 
                    tabIndex={0} 
                    suppressContentEditableWarning={true}
                    className='title_'>
                        {title}
                </div>
                <div
                    contentEditable={true} 
                    tabIndex={0} 
                    className='content_'
                    suppressContentEditableWarning={true}>
                        {content}
                </div>
        </div>
    )
}

function ServisePackagesTextTool(props) {

    // Adding paragraph tool
    function initAddParagraphTool(event) {
        let  mainContainer = document.querySelector('.service-packages-text--content');
        let button = mainContainer.querySelector('.add_');

        button.addEventListener('click', onAddParagraph(event))
    }


    function onAddParagraph(event) {
        let item = document.createElement('div');
        item.classList.add('item_');
        item.addEventListener('click', initRemoveParagraphTool)
        item.innerHTML = addParagraph()
        let container = event.target.closest('div.information-container');
  
        container.appendChild(item)

        let lastParagraph = getLastParagraph(event);
        lastParagraph.focus()
    }

    function getLastParagraph(event) {
        let  container = event.target.closest('div.information-container');
        let item = container.querySelectorAll('div.item_');

        return item[item.length - 1];
    }

    function addParagraph() {

        return (
            `
            <div class='circle'></div>
            <div
                contenteditable=${true} 
                tabindex=${0} 
                class='title_'>
                    Title
            </div>
            <div
                contenteditable=${true} 
                tabindex=${0} 
                class='content_'>
                    Content
            </div>`
        )
    }

    return (        
        <>
            <StyledServisePackagesTextWrapper className='service-packages-text--wrapper'>
                <div 
                    contentEditable={true} 
                    suppressContentEditableWarning={true}
                    data-value-content
                    data-key="heading"
                    className="heading">
                        {props.data.contents.heading || 'SERVICE PACKAGES ALSO INCLUDES:'}
                </div>
            </StyledServisePackagesTextWrapper>
            <StyledServisePackagesTextContent className='service-packages-text--content'>
                <div className='service-packages-text_left-content left information-container' data-side='left'>
                    <AddContent content={props.content.left} />
                    <div 
                        className="list-control-button add_ cdx-settings-button" 
                        onClick={initAddParagraphTool}>
                            +
                    </div>
                </div>
                <div className='service-packages-text_right-content right information-container' data-side='right'>
                    <AddContent content={props.content.right} />
                    <div 
                        className="list-control-button add_ cdx-settings-button" 
                        onClick={initAddParagraphTool}>
                            +
                    </div>
                </div>
            </StyledServisePackagesTextContent>
        </>
    )
}

export default ServisePackagesTextTool