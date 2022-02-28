import React from 'react'
import styled from 'styled-components'

const StyledCreditsPrices = styled.div`
    width: 100%;
    max-width: 1170px;
    margin: 0 auto;
    padding-top: 100px;
    .credits-prices_heading {
        font-weight: bold;
        font-size: 24px;
        text-transform: capitalize;
        text-align: center;
        margin-bottom: 20px;
        color: #323F4B;
        line-height: 1.55;
        :focus-visible {
            outline: solid 2px lightseagreen;
        }
    }
    .credits-prices_slogan {
        width: 100%;
        max-width: 684px;
        margin: 0 auto;
        font-family: "Source Sans Pro", sans-serif;
        text-align: center;
        position: relative;
        padding-right: 21px;
        padding-left: 21px;
        line-height: 1.55;
        font-size: 18px;
        color: #6b6b6b;
        :focus-visible {
            outline: solid 2px lightseagreen;
        }

        &::before, &::after {
          content: '—';
          position: absolute;
          top: 0;
        }

        &::before {
          left: 0;
        }

        &::after {
          right: 0;
        }
    }
    .credits-prices_prices {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding-top: 20px;
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
              padding-top: 40px;
              padding-bottom: 40px;
              color: #323F4B;
              font-weight: bold;
              border-bottom: 1px solid #EAEEF4;
            
              .left_ {
                .currency_ {
                    vertical-align: super;
                    font-size: 16px;
                    line-height: 1.55;
                        :focus-visible {
                            outline: solid 2px lightseagreen;
                        }
                }
                .value_ {
                    font-size: 28px;
                    line-height: 1.55;
                    :focus-visible {
                        outline: solid 2px lightseagreen;
                    }
                }
              }
              .text_ {
                    font-size: 24px;
                    line-height: 1.55;
                    :focus-visible {
                        outline: solid 2px lightseagreen;
                    }
              }
            }
        }
    }
`

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
        <div className='price-wrapper'>
            <div className='price_'>
                <div className='left_'>
                    <span contentEditable={true} tabIndex={0} className='currency_'>{obj.currency}</span>
                    <span contentEditable={true} tabIndex={0} className='value_'>{obj.value}</span>
                </div>
                <div contentEditable={true} tabIndex={0} className='text_'>{obj.text}</div>
            </div>
        </div>
    )
}

function CreditsPricesTool(props) {
    return (
        <StyledCreditsPrices>
            <div className='credits-prices_wrapper'>
                <div contentEditable={true} className='credits-prices_heading'>PRICES FOR CREDITS (PROMO)</div>
                <div contentEditable={true} className='credits-prices_slogan'>Use your credits to promote your ads to the top of search results, to highlight your ads with color or advertising text to gain more attention</div>
                <div className='credits-prices_prices'>
                    <AddPrices prices={props.prices} />
                </div>
            </div>
        </StyledCreditsPrices>
    )
}

export default CreditsPricesTool