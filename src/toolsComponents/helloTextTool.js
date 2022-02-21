import styled from "styled-components";
import React from "react";
import constructionTextImg from "../images/construction-text.jpg"
import EditableTextBlock from "../components/editableTextBlock"
import MultifunctionalTextarea from "../components/multifunctionalTextarea"

const StyledWrapper = styled.div`
    width: 100%;
    max-width: 1170px;
    margin: 0 auto;
    padding-top: 100px;
    display: flex;
    justify-content: space-between;
`
const StyledLeft = styled.div`
    width: 570px;
`
const StyledRight = styled.div`
    width: 470px;
`
const StyledLeftHeading = styled.div`
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 30px;
    letter-spacing: 0.01em;
    color: #323F4B;
    line-height: 1.55;
    font-family: "Roboto", sans-serif;
    :focus {
        outline: solid 2px lightseagreen;
    }
`   
const StyledLeftContent = styled.div`
    position: relative;
    width: 100%;
    p {
        font-size: 16px;
        font-family: "Source Sans Pro", sans-serif;
        line-height: 1.55;
        color: #6b6b6b;
        :focus {
        outline: solid 2px lightseagreen;
        }
    }
`
const StyledLeftRegisterLink = styled.div`
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
            line-height: 1.55;
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
`
const StyledRightImage = styled.div`
    border-radius: 10px;
    height: 500px;
    padding: 10px;
    box-shadow: 2px 2px 6px rgba(43, 43, 43, 0.15);
    div {
        border-radius: 10px;
        overflow: hidden;
        background-position: center;
        background-size: cover;
        background-image: url(${constructionTextImg});
        height: 100%;
    }
`


function HelloTextTool(props) {
    return (
        <div id="hello-text">
            <StyledWrapper>
                <StyledLeft>
                    <StyledLeftHeading 
                    contentEditable={true}
                    tabIndex={0}>
                        Dear Mr. Smith
                        {/* <EditableTextBlock title="Dear Mr. Smith" textareaHeight="30px" /> */}
                    </StyledLeftHeading>
                    <StyledLeftContent>
                        <p contentEditable={true}>{props.data.text}</p>
                        {/* <MultifunctionalTextarea title={props.data.text} textareaHeight="25px" /> */}
                    </StyledLeftContent>
                    <StyledLeftRegisterLink>
                        <p contentEditable={true}>
                            <a href={props.data.regLink.url}>{props.data.regLink.word}</a>
                        </p>
                        {/* <EditableTextBlock title={props.data.regLink.word} link={props.data.regLink.url} textareaHeight="15px"/> */}
                    </StyledLeftRegisterLink>
                </StyledLeft>
                <StyledRight>
                    <StyledRightImage>
                        <div></div>
                    </StyledRightImage>
                </StyledRight>
            </StyledWrapper>    
        </div>
    );
}

  
export default HelloTextTool;