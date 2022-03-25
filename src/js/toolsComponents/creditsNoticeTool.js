import React from 'react'
import styled from 'styled-components'

const StyledCreditsNoticeWrapper = styled.div`
    width: 100%;
    max-width: 968px;
    margin: 0 auto;
    padding-top: 20px;
    .credits-notice--text {
        padding: 16px 100px;
        border-radius: 16px;
        background-color: #17A2B8;
        font-family: "Source Sans Pro", sans-serif;
        color: #fff;
        text-align: center;
        font-weight: 600;
        line-height: 28px;
        font-size: 18px;
        :focus-visible {
            outline: solid 2px lightseagreen;
        }
    }
`

function CreditsNoticeTool(props) {

    return (
        <StyledCreditsNoticeWrapper className="credits-notice--wrapper">
            <div 
                contentEditable={true} 
                suppressContentEditableWarning={true}
                tabIndex={0} 
                data-value-content
                data-key="creditsNotice"
                className="credits-notice--text">
                    {props.content}
            </div>
        </StyledCreditsNoticeWrapper>
    )
}

export default CreditsNoticeTool