import React, { useState } from 'react';
import styled from "styled-components";
import BannerList from "../components/bannerItem";

const StyledBanners = styled.div`
    padding-top: 60px;
    padding-bottom: 60px;
    border-bottom: 1px solid #E3E8F1;
    width: 100%;
    max-width: 1170px;
    margin: 0 auto;
    .heading {
        color: #323F4B;
        font-weight: 700;
        font-size: 24px;
        line-height: 37px;
        text-align: center;
        letter-spacing: 0.01em;
        text-decoration: uppercase;
        :focus-visible {
            outline: solid 2px lightseagreen;
        }
    }
    .banner--items {
        padding-top: 40px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
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
        .remove_ {
            position: absolute;
            top: unset;
            right: -20px;
            left: unset;
        }
        .is-visible {
            display: flex;
        }
    }
    .banner-footer {
        margin-top: 60px;
        font-weight: 400;
        font-size: 18px;
        line-height: 28px;
        color: #47535F;
        text-align: center;
        font-family: "Source Sans Pro", sans-serif;
        :focus-visible {
            outline: solid 2px lightseagreen;
        }
    }
`

function BannersTool(props) {

    const [banner, setBanner] = useState([]);
    
    function addBanner() {
        setBanner(banner => banner.concat(<BannerList prices={props.prices[0]} />))
    }

    return(
        <StyledBanners className="banner--wrapper">
            <div 
                className="heading" 
                suppressContentEditableWarning={true} 
                contentEditable={true}
                data-value-content 
                data-key="heading">
                    BANNERS
            </div>
            <div className="banner--items">
                {props.prices.map((item) => {
                    return (<BannerList prices={item}/>)
                })}
                {banner.map((item) => {
                    return item
                })}
                <div 
                    className="list-control-button add_ cdx-settings-button" 
                    onClick={addBanner}>
                        +
                </div>
            </div>
            <div 
                className="banner-footer" 
                suppressContentEditableWarning={true} 
                contentEditable={true}
                data-value-content 
                data-key="text-footer">
                    Your company's banner, logo or vehicles can be placed on our main page or category page
            </div>
        </StyledBanners>
    )
}

export default BannersTool