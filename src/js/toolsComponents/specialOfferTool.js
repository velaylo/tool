import React from "react";
import styled from "styled-components";

const StyledSpecialOffer = styled.div`
    width: 100%;
    max-width: 1160px;
    margin: 0 auto; 
    padding-top: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .special-offer-title {
        color: #323F4B;
        text-align: center;
        letter-spacing: 0.01em; 
        font-weight: 700;
        font-size: 24px;    
        text-transform: uppercase;
        line-height: 37px;
        :focus-visible {
            outline: solid 2px lightseagreen;
        }
    }
    .special-offer-information-block {
        width: 568px;
        margin: 40px auto 0 auto; 
        background: #FFFFFF;
        box-shadow: 4px 4px 10px #EAEAEA;
        border-radius: 16px;
        padding: 16px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        p {
            color: #323F4B;
            letter-spacing: 0.01em;
            font-weight: 700;
            font-size: 16px;
            margin-bottom: 4px;
            :focus-visible {
                outline: solid 2px lightseagreen;
            }
        }
        .special-offer-promo {
            color: #E90F8E;
        }
        .special-offer-price {
            display: flex;
            align-items: center;
            justify-content: center;
            .left_ {
                .currency_ {
                    vertical-align: super;
                    font-size: 16px;
                    font-weight: 600;
                    line-height: 25px;
                    margin-top: -50%;
                    color: #47535F;
                    :focus-visible {
                        outline: solid 2px lightseagreen;
                    }
                }
                .value_ {
                    font-size: 28px;
                    font-weight: 700;
                    color: #47535F;
                    line-height: 43px;
                    margin-left: 4px;
                    :focus-visible {
                        outline: solid 2px lightseagreen;
                    }
                }
            }
            .right_ {
                margin-left: 6px;
                .text_ {
                    color: #6A737E;
                    letter-spacing: 0.01em;
                    font-weight: 600;
                    font-size: 16px;
                    line-height: 25px;
                    :focus-visible {
                        outline: solid 2px lightseagreen;
                    }
                }
            }
        }
    }
`

function SpecialOfferTool(props) {
    return (
        <StyledSpecialOffer className="special-offer-wrapper">
            <div   
                suppressContentEditableWarning={true} 
                contentEditable={true}
                data-value-content 
                data-key="heading"
                className="special-offer-title">
                    SPECIAL OFFER</div>
            <div className="special-offer-information-block">
                <p
                    suppressContentEditableWarning={true} 
                    contentEditable={true}
                    data-value-content 
                    data-key="slogan"
                    className="special-offer-promo">
                        Promo text
                </p>
                <p
                    suppressContentEditableWarning={true} 
                    contentEditable={true}
                    data-value-content 
                    data-key="description">
                        Up to 600 ads for 6 months
                </p>
                <div 
                    className="special-offer-price price_"
                    data-special-offer-price>
                        <div className="left_">
                            <span 
                                suppressContentEditableWarning={true} 
                                contentEditable={true} 
                                tabIndex={0}
                                className='currency_'>{props.prices[0].currency}</span>
                            <span 
                                suppressContentEditableWarning={true} 
                                contentEditable={true}  
                                tabIndex={0} 
                                className='value_'>{props.prices[0].value}</span>
                        </div>
                        <div className="right_">
                            <span
                                suppressContentEditableWarning={true} 
                                contentEditable={true} 
                                tabIndex={0}
                                className='text_'>{props.prices[0].text}</span>
                        </div>
                </div>
            </div>
        </StyledSpecialOffer>
    )
}

export default SpecialOfferTool