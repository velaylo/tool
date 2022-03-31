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
    const [toolbar, setToolbar] = useState(false);
    const [lastActivePrice, setLastActivePrice] = useState(null);
    const [leftSize, setLeftSize] = useState(0);
    const [topSize, setTopSize] = useState(0);



    function addPrice() {
        setPrice(price => price.concat(<PriceList prices={props.prices[0]} />))
    }

    function _onFoucsIn(event) {
        let t = event.target;
        let item = t.closest('.price-item');
        if (!item || item === lastActivePrice) {
          return;
        }

        setLeftSize(`${item.offsetLeft + (item.offsetWidth / 2)}px`);
        setTopSize(`${item.offsetTop + item.offsetHeight - 5}px`);


        setToolbar(true)
        setLastActivePrice(item);
        console.log(toolbar)
    }

    let _destroyToolbar = (container) => {
        if (toolbar) {
          //for (const event of Object.keys(props.toolbarEvents)) {
          //  let button = toolbar.querySelector(`.button.${event}`);
          //  //if (this[`on_${event}`]) {
          //  //  button.removeEventListener('click', this[`on_${event}`]);
          //  //  this[`on_${event}`] = null;
          //  //}
          //}
    
          //container.removeChild(toolbar);
          setToolbar(false);
        }
    }

    function _onFoucsOut(event) {
        console.log(event.relatedTarget)
        if (!!event.relatedTarget && event.relatedTarget.closest('.price-toolbar')) {
            return setTimeout(function() {
              let toBeFocused = lastActivePrice.querySelector('.side_:not([hidden]) [tabindex]:not([hidden])');
              console.log(lastActivePrice)
              toBeFocused.focus();
            }, 100);
        }
        if (!lastActivePrice) {
            return;
        }
        const container = document.querySelector('.prices-main--items');
        let t = event.target;
        let item = t.closest('.price-item');
        if (!!item && item === lastActivePrice) {
            _destroyToolbar(container, item);
            setLastActivePrice(null)
        }
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
                onBlur={_onFoucsOut}>
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
                    {toolbar ? <ToolbarPrice leftSize={leftSize} topSize={topSize} toolbarEvents={props.toolbarEvents} /> : '' }
            </div>
        </StyledPricesMain>
    )
}

export default PricesMainTool