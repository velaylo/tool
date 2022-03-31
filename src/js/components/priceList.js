import React from "react";
import styled from "styled-components";

const StyledPriceList = styled.div`
    box-shadow: 4px 4px 10px #EAEAEA;
    border-radius: 16px;
    .inner_ {
        border-radius: 10px;
        display: flex;
        overflow: hidden;
        .side_ {
            flex-grow: 1;
            padding: 16px 20px;
            flex-grow: 1;
            .top-text_ {
                color: #323F4B;
                font-weight: 700;
                font-size: 16px;
                line-height: 25px;
                text-align: center;
                margin-bottom: 6px;
                :focus-visible {
                    outline: solid 2px lightseagreen;
                }
            }
            .price-main_ {
                .currency_ {
                    vertical-align: super;
                    font-size: 16px;
                    font-weight: 600;
                    line-height: 25px;
                    margin-top: -50%;
                    font-family: "Source Sans Pro", sans-serif;
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
                .text_ {
                    color: #6A737E;
                    letter-spacing: 0.01em;
                    font-weight: 600;
                    font-size: 16px;
                    line-height: 25px;
                    font-family: "Source Sans Pro", sans-serif;
                    :focus-visible {
                        outline: solid 2px lightseagreen;
                    }
                }
            }
            .crossed_ {
                position: relative;
                width: max-content;
                margin: 0 auto;
                &::after {
                    content: "";
                    position: absolute;
                    z-index: 2;
                    height: 1px;
                    width: 100%;
                    background-color: red;
                    top: 55%;
                    left: 0;
                }
                .currency_, .value_, .text_ {
                    color: #FF5151;
                }
            }
            .divider_ {
                width: 60px;
                height: 1px;
                background-color: #C9CFD9;
                margin: 10px auto;
            }
            .bottom_ {
                font-weight: 600;
                font-size: 18px;
                color: #47535F;
                line-height: 28px;
                font-family: "Source Sans Pro", sans-serif;
                :focus-visible {
                    outline: solid 2px lightseagreen;
                }
            }
            &.left_ {
              background-color: #fff;
            }
            &.right_ {
                .crossed_ {
                    &::after {
                        background-color: #fff;
                    }
                }
            }
            &.right_ * {
              color: #fff !important;
            }
            & > div {
              text-align: center;
            }
            &.bg-color-black {
                background-color: #171F27;
            }

        }
    }
`

function PriceList(props) {

    return(
        <StyledPriceList className="price-item">
            <div className="inner_">
                <div className="side_ left_">
                    <div
                        suppressContentEditableWarning={true} 
                        contentEditable={true}
                        tabIndex={0}
                        hidden
                        className="promo-text_">
                            {props.prices['left'].promoText}
                    </div>
                    <div
                        suppressContentEditableWarning={true} 
                        contentEditable={true}
                        tabIndex={0}
                        className="top-text_">
                            {props.prices['left'].topText}
                    </div>
                    <div className="price-main_">
                        <span 
                            suppressContentEditableWarning={true} 
                            contentEditable={true}
                            tabIndex={0}
                            data-price-currency
                            className="currency_">
                                {props.prices['left'].currency}
                        </span>
                        <span 
                            suppressContentEditableWarning={true} 
                            contentEditable={true}
                            tabIndex={0}
                            className="value_">
                                {props.prices['left'].priceValue}
                        </span>
                        <span 
                            suppressContentEditableWarning={true} 
                            contentEditable={true}
                            tabIndex={0}
                            className="text_">
                                {props.prices['left'].priceText}
                        </span>
                    </div>
                    <div className="price-main_ crossed_">
                        <span 
                            suppressContentEditableWarning={true} 
                            contentEditable={true}
                            tabIndex={0}
                            data-price-currency
                            className="currency_">
                                {props.prices['left'].currency}
                        </span>
                        <span 
                            suppressContentEditableWarning={true} 
                            contentEditable={true}
                            tabIndex={0}
                            className="value_">
                                {props.prices['left'].priceValue_crossed}
                        </span>
                        <span 
                            suppressContentEditableWarning={true} 
                            contentEditable={true}
                            tabIndex={0}
                            className="text_">
                                {props.prices['left'].priceText_crossed}
                        </span>
                    </div>
                    <div className="divider_"></div>
                    <div
                        suppressContentEditableWarning={true} 
                        contentEditable={true}
                        tabIndex={0}
                        className="bottom_">
                            {props.prices['left'].bottomRow}
                    </div>
                </div>
                <div className="side_ right_ bg-color-black">
                    <div
                        suppressContentEditableWarning={true} 
                        contentEditable={true}
                        tabIndex={0}
                        className="top-text_">
                            {props.prices['right'].topText}
                    </div>
                    <div className="price-main_">
                        <span 
                            suppressContentEditableWarning={true} 
                            contentEditable={true}
                            tabIndex={0}
                            data-price-currency
                            className="currency_">
                                {props.prices['right'].currency}
                        </span>
                        <span 
                            suppressContentEditableWarning={true} 
                            contentEditable={true}
                            tabIndex={0}
                            className="value_">
                                {props.prices['right'].priceValue}
                        </span>
                        <span 
                            suppressContentEditableWarning={true} 
                            contentEditable={true}
                            tabIndex={0}
                            className="text_">
                                {props.prices['right'].priceText}
                        </span>
                    </div>
                    <div className="price-main_ crossed_">
                        <span 
                            suppressContentEditableWarning={true} 
                            contentEditable={true}
                            tabIndex={0}
                            data-price-currency
                            className="currency_">
                                {props.prices['right'].currency}
                        </span>
                        <span 
                            suppressContentEditableWarning={true} 
                            contentEditable={true}
                            tabIndex={0}
                            className="value_">
                                {props.prices['right'].priceValue_crossed}
                        </span>
                        <span 
                            suppressContentEditableWarning={true} 
                            contentEditable={true}
                            tabIndex={0}
                            className="text_">
                                {props.prices['right'].priceText_crossed}
                        </span>
                    </div>
                    <div className="divider_"></div>
                    <div
                        suppressContentEditableWarning={true} 
                        contentEditable={true}
                        tabIndex={0}
                        className="bottom_">
                            {props.prices['right'].bottomRow}
                    </div>
                </div>
            </div>
        </StyledPriceList>
    )
}

export default PriceList
