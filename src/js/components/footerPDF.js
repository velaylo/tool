import React from "react";
import styled from "styled-components";

const StyledFooterPDF = styled.div`
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
`

function FooterPDF(props) {
    return (
        <StyledFooterPDF id='footer-pdf' hidden>
            <div className="footer-wrapper">
                <div className="left">
                    <div data-footer-name></div>
                    <div data-footer-position></div>
                </div>
                <div className="right">
                    <table cellSpacing="0" cellPadding="0" className="footer-contacts">
                        <tbody>
                            <tr>
                                <td>
                                    <div data-footer-whatsapp></div>
                                </td>
                                <td>
                                    <div data-footer-tel></div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div data-footer-linkedin></div>
                                </td>
                                <td>
                                    <div data-footer-email></div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </StyledFooterPDF>
    )
}

export default FooterPDF