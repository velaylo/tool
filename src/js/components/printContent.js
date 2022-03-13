import React from "react";
import styled from "styled-components";

const StyledPrintContent = styled.div`
    page-break-after: avoid;
    page-break-before: avoid;

    .content {
      position: relative;
    }

    @media print {
        display: block !important;
        .content {
          zoom: 63%;
          position: relative;
        }
        .ce-block__content {
          max-width: unset;
        }
        .list-control-button {
          display: none;
        }
        .footer-pdf {
          position: absolute;
          width: 100%;
        }
    }
`

function PrintContent(props) {
    return (
        <StyledPrintContent id='print' className='print-only'>
            <div className="content"></div>
        </StyledPrintContent>
    )
}

export default PrintContent