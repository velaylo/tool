import React, { useState } from 'react';
import styled from 'styled-components'
import PriceList from '../components/priceList'
import ToolbarPrice from '../components/toolbarPrice'

const StyledPricesMain = styled.div`
    padding-top: 60px;
    padding-bottom: 60px;
    width: 100%;
    max-width: 1160px;
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
    .prices-main--items {
        padding-top: 60px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        -moz-column-gap: 30px;
        column-gap: 30px;
        row-gap: 60px;
        position: relative;
        align-items: start;
        &.single-column {
            max-width: 570px;
            grid-template-columns: 1fr;
            margin: 0 auto;
        }
        &:hover {
            .add_ {
                display: flex;  
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
    }
`

function PricesMainTool(props) {

    const [price, setPrice] = useState([]);
    const [leftSize, setLeftSize] = useState(0);
    const [topSize, setTopSize] = useState(0);
    const [targetOpen, setTarget] = useState();
    
    function addPrice() {
        setPrice(price => price.concat(<PriceList prices={props.prices[0]} />))
    }

    function _onFoucsIn(event) {
        let target = event.target;
        let item = target.closest('.price-item')
        setTarget(item)

        setLeftSize(`${item.offsetLeft + (item.offsetWidth / 2)}px`);
        setTopSize(`${item.offsetTop + item.offsetHeight - 5}px`);

        props.context.lastActivePrice = item;

        document.querySelector('.price-toolbar').style.display = 'flex'
    }

    function _onBlur(event) {

        if(!event.relatedTarget.closest('.price-toolbar')) {
            document.querySelector('.price-toolbar').style.display = 'none'
        }
        //if (!!event.relatedTarget && event.relatedTarget.closest('.price-toolbar')) {}
        //if(!event.target.closest('.price-item')) {
        //    setTimeout(() => {
        //        document.querySelector('.price-toolbar').style.display = 'none'
        //    }, 200)
        //}
    }

    return (
        <StyledPricesMain className='prices-main--wrapper'>
            <div 
                contentEditable={true} 
                suppressContentEditableWarning={true} 
                className='heading'
                data-value-content 
                data-key="heading">
                    PRICES
            </div>
            <div 
                className='prices-main--items'
                onFocus={_onFoucsIn}
                onBlur={_onBlur}>
                    {props.prices.map((item) => {
                        return (<PriceList prices={item} />)
                    })}
                    {price.map((item) => {
                        return item
                    })}
                    <div 
                        className="list-control-button add_ cdx-settings-button" 
                        onClick={addPrice}>
                            +
                    </div>
                    <ToolbarPrice leftSize={leftSize} topSize={topSize} toolbarEvents={props.toolbarEvents} target={targetOpen} />
            </div>
        </StyledPricesMain>
    )
}

export default PricesMainTool