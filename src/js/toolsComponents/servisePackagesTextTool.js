import React from 'react'
import styled from 'styled-components'

const StyledServisePackagesTextWrapper = styled.div`
    .service-packages-text_heading {
        width: 100%;
        max-width: 970px;
        margin: 0 auto;
        padding-top: 40px;
        .heading {
            font-weight: bold;
            font-size: 24px;
            text-transform: capitalize;
            text-align: center;
            color: #323F4B;
            line-height: 1.55;
            :focus-visible {
                outline: solid 2px lightseagreen;
            }
        }
    }
    .service-packages-text_content {
        display: flex;
        justify-content: space-between;
        width: 100%;
        max-width: 970px;
        margin: 0 auto;
        line-height: 1.55;
        font-size: 18px;
        color: #6b6b6b;
        padding-top: 70px;
        .service-packages-text_left-content, .service-packages-text_right-content {
            width: 370px;
            position: relative;
            .item_ {
                padding-left: 50px;
                margin-bottom: 40px;
                position: relative;
                .circle {
                    position: absolute;
                    width: 30px;
                    height: 30px;
                    top: 0;
                    left: 0;
                    border-radius: 15px;
                    background-image: linear-gradient(133.61deg, #80F563 0%, #22CB14 100%);       
                    &::after {
                      content: '';
                      width: 12px;
                      height: 5px;
                      position: absolute;
                      left: 50%;
                      top: 48%;
                      transform: translate(-50%, -50%) rotateZ(-45deg);
                      border: 1px solid #fff;
                      border-top-color: transparent;
                      border-right-color: transparent;
                    }
                }
        
                 .title_ {
                    font-weight: 500;
                    font-size: 20px;
                    color: #323F4B;
                    margin-bottom: 5px;
                    line-height: 1.55;
                    :focus-visible {
                        outline: solid 2px lightseagreen;
                    }
                 }
        
                .content_ {
                    line-height: 1.55;
                    color: #6b6b6b;
                    font-family: "Source Sans Pro", sans-serif;
                    font-size: 16px;
                    :focus-visible {
                        outline: solid 2px lightseagreen;
                    }
                }
            }
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

const addSingleContent = ({ title, content }) => {

    return (
        <div key={title} className='item_'>
            <div className='circle'></div>
            <div contentEditable={true} tabIndex={0} className='title_'>{title}</div>
            <div contentEditable={true} tabIndex={0} className='content_'>{content}</div>
        </div>
    )
}

function ServisePackagesTextTool(props) {

    return (
        <StyledServisePackagesTextWrapper>
            <div className='service-packages-text_heading'>
                <div contentEditable={true} className="heading">SERVICE PACKAGES ALSO INCLUDES:</div>
            </div>
            <div className='service-packages-text_content'>
                <div className='service-packages-text_left-content'>
                    <AddContent content={props.content.left} />
                </div>
                <div className='service-packages-text_right-content'>
                <AddContent content={props.content.right} />
                </div>
            </div>
        </StyledServisePackagesTextWrapper>
    )
}

export default ServisePackagesTextTool