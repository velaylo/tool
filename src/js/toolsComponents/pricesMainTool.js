import React from 'react'
import styled from 'styled-components'

const StyledPricesMain = styled.div`
    padding-top: 60px;
    padding-bottom: 60px;
    width: 100%;
    max-width: 1170px;
    margin: 0 auto;
    .heading {
        font-weight: bold;
        font-size: 24px;
        text-transform: capitalize;
        text-align: center;
        color: #323F4B;
        line-height: 1.55;
        :focus-visible {
            outline: solid 2px lightseagreen;
        }
    }
    .prices-main_item {
        padding-top: 60px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        -moz-column-gap: 30px;
        column-gap: 30px;
        row-gap: 60px;
        position: relative;
        align-items: start;
    }
`

function AddPricesBlocks(props) {
    let allPrices = props.pricesInformation;

}

function PricesMainTool(props) {
    return (
        <StyledPricesMain>
            <div className='prices-main_wrapper'>
                <div contentEditable={true} className='heading'>PRICES</div>
                <div className='prices-main_item'>
                    <AddPricesBlocks pricesInformation={props.pricesInformation} />
                </div>
            </div>
        </StyledPricesMain>
    )
}

export default PricesMainTool