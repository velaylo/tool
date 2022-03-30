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
    //const api = endpoint => window.location.hostname.indexOf('truck1.eu') !== -1 ? `https://www.truck1.eu/t1api/comOffer/${endpoint}` : `http://localhost/offer2/index.php/${endpoint}`;

    const api = (endpoint) => `https://www.truck1.eu/t1api/comOffer/${endpoint}&T1Db_logged=c928cc422c32acc3bd9b03e4351c6b1b`;

    let _renderPrices = () => {
        _initAddPriceTool(document.querySelector('.packages-pricelist--content'));
    }

    let _initAddPriceTool = (container) => {
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
      
            form.addEventListener('submit', add_SubmitHandler(form));

            props.addPriceModals.l.construct.call(props.this, form);
        }
    }

    let add_SubmitHandler = (form) => {
        return function(event) {
            event.preventDefault();
            let that = props.this

            let qs = new URLSearchParams(new FormData(event.target)).toString();
            let xhr = new XMLHttpRequest();
            console.log(qs)
            xhr.open('GET', api(`price?${qs}`));
            xhr.onreadystatechange = function() {
              if (xhr.readyState === 4) {
                if (xhr.status < 300) {
                    console.log(xhr.responseText)
                    that._renderSinglePriceRow(JSON.parse(xhr.responseText), ++that.pricesCurrentId);
                } else {
                  console.warn('XHR Status: ', xhr.status);
                }
              } 
            }
            xhr.send();

            form.removeEventListener('submit', add_SubmitHandler);
            form.parentNode.removeEventListener('click', (event) => event.stopImmediatePropagation());
            for (const _modal in props.addPriceModals) {
              if (_modal !== 'submit') {
                let modal = props.addPriceModals[_modal];
                modal.el.removeEventListener('click', modal.boundHandler);
                modal.el = null;
                modal.boundHandler = null;
                modal.exists = false;
              }
            }

            props.addPriceModals.submit.exists = false;
            form.parentNode.parentNode.removeChild(form.parentNode);
            this.add_SubmitHandler = null;

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
                dataPackage="premium_plus" />
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