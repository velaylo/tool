import styled from "styled-components";
import React from "react";

const StyledServicePackagesList = styled.div`
    width: 368px;
    margin-left: 16px;
    margin-right: 16px;
    .package {
        display: flex;
        flex-direction: column;
        height: 100%;
        border-radius: 16px;
        box-shadow: 4px 4px 10px #EAEAEA;
        background: #FFFFFF;
        .package-header {
            text-align: center;
            padding: 12px 0;
            text-transform: uppercase;
            font-size: 24px;
            font-weight: 700;
            line-height: 37px;
            border-top-left-radius: 16px;
            letter-spacing: 0.01em;
            border-top-right-radius: 16px;
            &[data-package="standard"] {
                color: #47535F;
                background-color: #FFF;
            }
            &[data-package="premium"] {
                color: #FFF;
                background: linear-gradient(254.34deg, #2DD652 21.89%, #ABF40F 78.11%);
            }
            &[data-package="premium-plus"] {
                color: #FFF;
                background: linear-gradient(91.57deg, #07C8F9 0%, #0D41E1 100%);
            }
            &[data-package="gold"] {
                color: #323F4B;
                background: linear-gradient(91.57deg, #F7F779 0%, #FBD07C 100%);
            }
            &[data-package="platinum"] {
                color: #FFF;
                background: linear-gradient(91.57deg, #08203E 0%, #557C93 100%);
            }
        }
        .package-slogan {
            padding: 16px 0;
            font-weight: 600;
            font-size: 18px;
            line-height: 28px;
            text-align: center;
            color: #47535F;
            text-transform: uppercase;
            font-family: "Source Sans Pro", sans-serif;
        }
        .package-content {
            border-top: 1px solid #E3E8F1;
            margin: 0 24px;
            padding-top: 16px;
            &[data-package="standard"] {
                ul {
                    li {
                        &:first-child {
                            font-weight: 400;
                        }
                    }
                }
            }
            ul {
                padding-inline-start: 20px;
                li {
                    font-family: "Source Sans Pro", sans-serif;
                    color: #47535F;
                    line-height: 25px;
                    font-weight: 400;
                    font-size: 16px;
                    letter-spacing: 0.01em;
                    &:first-child {
                        font-weight: 600;
                    }
                }
            }
        }
    }
`

function List(props) {
    let listContainer = []

    for(let key in props.list) {
        listContainer[key] = <li>{props.list[key]}</li>
    }


    return <>{listContainer}</>
}

function PackagesList(props) {

    return (
        <StyledServicePackagesList className="package-wrapper">
            <div className="package">
                <div
                    className="package-header" 
                    data-package={props.dataPackage}>
                        {props.packageType}
                </div>
                <div 
                    className="package-slogan">{props.slogan}</div>
                <div className="package-content" data-package={props.dataPackage}>
                    <ul>
                        <List list={props.list} />
                    </ul>
                </div>
                <div className="package-prices">prices</div>
            </div>
        </StyledServicePackagesList>
    )
}

export default PackagesList