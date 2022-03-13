import styled from "styled-components";
import React from "react";

const StyledHr = styled.hr`
    border: none;
    border-top: 1px solid #eaeaea;
    width: 100%;
    max-width: 1160px;
    margin: 0 auto;
`

function HrTool(props) {
    return (
        <StyledHr/>
    );
}

  
export default HrTool;