import React, { useEffect } from "react";
import ServicePackagesList from '../components/servicePackagesList'
import styled from 'styled-components';

const StyledServisePackagesPricelist = styled.div`
    width: 100%;
    max-width: 1160px;
    margin: 0 auto;
    padding-top: 40px;
    .heading {
        font-weight: 700;
        font-size: 24px;
        text-align: center;
        text-transform: uppercase;
        color: #323F4B;
        margin-bottom: 16px;
        :focus-visible {
            outline: solid 2px lightseagreen;
        }
    }
    .packages-pricelist--title {
        font-family: "Source Sans Pro", sans-serif;
        font-weight: 400;
        font-size: 18px;
        text-align: center;
        color: #47535F;
        :focus-visible {
            outline: solid 2px lightseagreen;
        }
    }
`

function ServisePackagesPricelist(props) {

    useEffect(() => props.this._renderPrices(), []) 

    return (
        <StyledServisePackagesPricelist className='packages-pricelist--wrapper'>
            <div
                className='heading'
                contentEditable={true} 
                suppressContentEditableWarning={true}
                data-value-content
                data-key="heading">
                    {props.data.contents.heading || 'Service Packages'}
            </div>
            <p 
                className='packages-pricelist--title'
                contentEditable={true} 
                suppressContentEditableWarning={true}
                data-value-content
                data-key="title">
                    {props.data.contents.title || 'Truck1 is the best option for those who value the quality of services and work efficiency'}
            </p>
            <ServicePackagesList 
                this={props.this} 
                lists={props.lists} 
                addPriceModals={props.addPriceModals}
                data={props.data} />
        </StyledServisePackagesPricelist>
    )
}

export default ServisePackagesPricelist