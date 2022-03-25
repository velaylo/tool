import React from "react";
import styled from "styled-components";

const StyledFooterPDF = styled.footer`
    .footer-wrapper {
        max-width: 1160px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        padding-bottom: 20px;
        border-bottom: 1px solid #eaeaea;
        .left {
            [data-footer-position] {
              font-weight: 400;
              color: #47535F;
              line-height: 28px;
              font-family: "Source Sans Pro", sans-serif;
              margin-bottom: 16px;
            }
            [data-footer-name] {
              font-family: 'Roboto', sans-serif;
              font-weight: 700;
              font-size: 18px;
              line-height: 28px;
              margin-bottom: 16px;
              letter-spacing: 0.01em;
              color: #323F4B;
            }

            [data-footer-linkedin] {
                a {
                    color: #00B2FF;
                    font-family: "Source Sans Pro", sans-serif;
                    font-weight: 600;
                    line-height: 28px;
                    font-size: 18px;
                    text-decoration: underline;
                }
            }
        }

        .left > div,
        .right > div {
            margin-bottom: 10px;
        }

        .right {
            .footer-contacts {
                tbody {
                    tr {
                        display: flex;
                        flex-direction: column;
                        align-item: flex-end;
                        td {
                            [data-footer-tel], [data-footer-email] {
                                a {
                                  font-weight: 400;
                                  text-decoration: none;
                                  color: #47535F;
                                  line-height: 28px;
                                  font-family: "Source Sans Pro", sans-serif;
                                }
                                margin-bottom: 16px;
                            }
                            [data-footer-whatsapp] {
                                margin-top: auto;
                                a {
                                  color: #00B2FF;
                                  font-family: "Source Sans Pro", sans-serif;
                                  font-weight: 600;
                                  line-height: 28px;
                                  font-size: 18px;
                                  text-decoration: underline;
                                }
                            }
                        }
                    }
                }
            }
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
                    <div data-footer-linkedin></div>
                </div>
                <div className="right">
                    <table cellSpacing="0" cellPadding="0" className="footer-contacts">
                        <tbody>
                            <tr>
                                <td>
                                    <div data-footer-tel></div>
                                </td>
                                <td>
                                    <div data-footer-email></div>
                                </td>
                                <td>
                                    <div data-footer-whatsapp></div>
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