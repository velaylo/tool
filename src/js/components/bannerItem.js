import React from "react";
import styled from "styled-components";
import removingTextTool from "../components/removingTextTool";

const StyledBannerList = styled.div`
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
                    :focus-visible {
                        outline: solid 2px lightseagreen;
                    }
                }
            }
            &.left_ {
              background-color: #fff;
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

function BannerList(props) {

    function initRemoveBannerTool(event) {
        let  mainContainer = document.querySelector('.banner--wrapper');

        return removingTextTool({
            wrapper: mainContainer,
            parent: `.banner--items`,
            focusedElem: event.target,
            getChild: function(_, focused) {
              return focused.closest('.price-item');
            },
            focusEventCondition: function(target) {
              return target.closest('.banner--items');
            },
            watchRemoveButtonXAxis: true
        })();
        }

        

    return(
        <StyledBannerList className="price-item" onClick={initRemoveBannerTool}>
            <div className="inner_">
                <div className="side_ left_">
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
                </div>
            </div>
        </StyledBannerList>
    )
}

export default BannerList
