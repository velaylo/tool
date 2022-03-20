import styled from "styled-components";
import React, { useEffect } from "react";
import PackagesList from "./packageList"

const StyledServicePackagesList = styled.div`
    display: flex;
    justify-content: space-around;
    margin-left: -15px;
    margin-right: -15px;
    padding-top: 40px;
    &:hover {
        .list-control-button.add_ {
            display: flex;
        }
    }
    .list-control-button.add_ {
        position: absolute;
        z-index: 2;
        background: #fff;
        font-size: 20px;
        font-weight: bold;
        border: 1px solid #ccc;
        position: absolute;
        bottom: -30px;
        left: 50%;
        transform: translateX(-50%);
        display: none;
    }
`

function ServicePackagesList(props) {
    let _renderPrices = () => {
        _initAddPriceTool(document.querySelector('.packages-pricelist--content'));
    }

    let _initAddPriceTool = (container) => {
        console.log(container)
        let button = document.createElement('div');
        button.textContent = '+';
        button.classList.add('list-control-button', 'add_', 'cdx-settings-button') 
        
        container.appendChild(button);

        button.addEventListener('click', _onAdd())
    }

    let _onAdd = () => {
        return function(event) {
            let target = event.target;
            let formWrapper = document.createElement('div');
            formWrapper.classList.add('addprice-form-wrapper');

            let form = document.createElement('form');
            form.classList.add('addprice-form');

            formWrapper.appendChild(form);
            target.appendChild(formWrapper);
            formWrapper.addEventListener('click', (event) => event.stopImmediatePropagation());
      
            //form.addEventListener('submit', this.add_SubmitHandler = this._add_submitHandler(form).bind(this));

            //props._addPriceModals.l.construct.call(this, form);
          }
    }

    useEffect(() => _renderPrices(), []) 

    return (
        <StyledServicePackagesList className="packages-pricelist--content">
            <PackagesList
                list={props.lists['list_standard']} 
                slogan='Starting out' 
                packageType='Standard'
                dataPackage="standard"
                />
            <PackagesList 
                list={props.lists['list_premium']} 
                slogan='Most popular plan' 
                packageType='Premium'
                dataPackage="premium" />
            <PackagesList 
                list={props.lists['list_premium_plus']} 
                slogan='All you ever need' 
                packageType='Premium Plus'
                dataPackage="premium-plus" />
            <PackagesList 
                list={props.lists['list_gold']} 
                slogan='All you ever need' 
                packageType='Gold'
                dataPackage="gold" />
            <PackagesList 
                list={props.lists['list_platinum']} 
                slogan='All you ever need' 
                packageType='Platinum'
                dataPackage="platinum" />
        </StyledServicePackagesList>
    )
}

export default ServicePackagesList