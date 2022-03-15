import React from 'react'
import styled from 'styled-components'

const StyledCreditsNoticeWrapper = styled.div`
    width: 100%;
    max-width: 968px;
    margin: 0 auto;
    padding-top: 20px;
    .credits-notice_information-container {
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
        <StyledCreditsNoticeWrapper>
            <div contentEditable={true} tabIndex={0} className="credits-notice_information-container">{props.content}</div>
        </StyledCreditsNoticeWrapper>
    )
}

export default CreditsNoticeTool