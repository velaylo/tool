import React from 'react'
import styled from 'styled-components'
import removingTextTool from "../components/removingTextTool";

const StyledCreditsPrices = styled.div`
    width: 100%;
    max-width: 1160px;
    margin: 0 auto;
    padding-top: 100px;
    .credits-prices_heading {
        font-weight: 700;
        font-size: 24px;
        text-transform: capitalize;
        text-align: center;
        margin-bottom: 16px;
        color: #323F4B;
        line-height: 37px;
        :focus-visible {
            outline: solid 2px lightseagreen;
        }
    }
    .credits-prices_slogan {
        width: 100%;
        max-width: 768px;
        margin: 0 auto;
        font-weight: 400;
        font-family: "Source Sans Pro", sans-serif;
        text-align: center;
        position: relative;
        line-height: 28px;
        font-size: 18px;
        color: #47535F;
        :focus-visible {
            outline: solid 2px lightseagreen;
        }
    }
    .credits-prices_prices {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding-top: 24px;
        position: relative;
        .price-wrapper {
            width: 570px;
            padding-right: 100px;
            padding-left: 100px;
            position: relative;

            .price_ {
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding-top: 16px;
              padding-bottom: 16px;
              color: #323F4B;
              font-weight: bold;
              border-bottom: 1px solid #E3E8F1;
            
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
              .text_ {
                    font-size: 24px;
                    line-height: 37px;
                    font-weight: 700;
                    color: #323F4B;
                    :focus-visible {
                        outline: solid 2px lightseagreen;
                    }
              }
            }
        }
        .list-control-button {
            position: absolute;
            z-index: 2;
            background: #fff;
            font-size: 20px;
            font-weight: bold;
            border: 1px solid #ccc;
            display: none;
        }
        .remove_ {
            position: absolute;
            top: unset;
            right: -20px;
            left: unset;
        }
        &:hover {
            .add_ {
                display: flex;  
            }
        }
        .add_ {
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            top: 98%;
            &:hover {
                display: flex;  
            }
        }
        .is-visible {
            display: flex;
        }
    }
`

function initRemoveParagraphTool(event) {
    let  mainContainer = document.querySelector('#credits-price');

    return removingTextTool({
        wrapper: mainContainer,
        parent: `[data-credits-prices]`,
        focusedElem: event.target,
        getChild: function(_, focused) {
          return focused.closest('.price-wrapper');
        },
        focusEventCondition: function(target) {
          return target.closest('[data-credits-price-unit]');
        },
        watchRemoveButtonXAxis: true
    })();
}

function AddPrices(props) {
    let allPrices = props.prices;
    let listPrices = [];

    for(let key in allPrices) {
        listPrices[key] = AddSinglePrice(allPrices[key])
    }

    return <>{listPrices}</>
}

function AddSinglePrice(obj) {
    return (
        <div
            className='price-wrapper' 
            data-credits-price-unit 
            onClick={initRemoveParagraphTool}>
            <div className='price_'>
                <div className='left_'>
                    <span 
                        contentEditable={true}
                        tabIndex={0} 
                        className='currency_'
                        suppressContentEditableWarning={true}>
                            {obj.currency}
                    </span>
                    <span 
                        contentEditable={true} 
                        suppressContentEditableWarning={true} 
                        tabIndex={0} 
                        className='value_'>
                            {obj.value}
                    </span>
                </div>
                <div 
                    suppressContentEditableWarning={true}
                    contentEditable={true} 
                    tabIndex={0} 
                    className='text_'>
                        {obj.text}
                </div>
            </div>
        </div>
    )
}

function CreditsPricesTool(props) {

    // Adding paragraph tool
    function initAddParagraphTool(event) {
        let  mainContainer = document.querySelector('#credits-price');
        let button = mainContainer.querySelector('.add_');

        button.addEventListener('click', onAddParagraph(event))
    }


    function onAddParagraph(event) {
        let item = document.createElement('div');
        item.classList.add('price-wrapper');
        item.setAttribute("data-credits-price-unit", "true")
        item.addEventListener('click', initRemoveParagraphTool)
        item.innerHTML = addParagraph()

        console.log(item)
        let container = event.target.closest('div[data-credits-prices]');
  
        container.appendChild(item)
    }


    function addParagraph() {

        return (
            `
                <div class='price_'>
                    <div class='left_'>
                        <span 
                            contenteditable=${true} 
                            tabindex=${0}
                            class='currency_'>€</span>
                        <span 
                            contenteditable=${true} 
                            tabindex=${0} 
                            class='value_'>25</span>
                    </div>
                    <div
                        contenteditable=${true} 
                        tabindex=${0} 
                        class='text_'>500 credits</div>
                </div>
            `
        )
    }

    return (
        <StyledCreditsPrices id='credits-price'>
            <div className='credits-prices_wrapper'>
                <div
                    contentEditable={true} 
                    suppressContentEditableWarning={true}
                    className='credits-prices_heading'>
                        PRICES FOR CREDITS (PROMO)
                </div>
                <div 
                    contentEditable={true} 
                    suppressContentEditableWarning={true}
                    className='credits-prices_slogan slogan'
                    data-key="slogan">
                        Use your credits to promote your ads to the top of search results, to highlight your ads with color or advertising text to gain more attention
                </div>
                <div
                    className='credits-prices_prices' 
                    data-credits-prices>
                        <AddPrices prices={props.prices} />
                        <div 
                            className="list-control-button add_ cdx-settings-button" 
                            onClick={initAddParagraphTool}>
                                +
                        </div>
                </div>
            </div>
        </StyledCreditsPrices>
    )
}

export default CreditsPricesTool