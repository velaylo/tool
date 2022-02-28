import React from 'react'
import styled from 'styled-components'

const StyledCreditsNoticeWrapper = styled.div`
    width: 100%;
    max-width: 970px;
    margin: 0 auto;
    padding-top: 20px;
    .credits-notice_information-container {
        padding: 20px 30px;
        border-radius: 10px;
        background-image: linear-gradient(88.09deg, #FFD74A 3.23%, #FFA800 96.77%);
        color: #fff;
        text-align: center;
        font-weight: bold;
        line-height: 1.55;
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