import styled from "styled-components";
import React from "react";
import PackagesList from "./packageList"

const StyledServicePackagesList = styled.div`
    display: flex;
    justify-content: space-around;
    margin-left: -15px;
    margin-right: -15px;
    padding-top: 40px;
`

function ServicePackagesList(props) {
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