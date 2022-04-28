import styled from "styled-components";
import React from "react";
import removingTextTool from "../components/removingTextTool";
import DraggableList from "./draggableList";

const StyledServicePackagesList = styled.div`
    width: 368px;
    margin-left: 16px;
    margin-right: 16px;
    &[data-package="gold"] {
        display: none;
    }
    &[data-package="platinum"] {
        display: none;
    }
    .package {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        border-radius: 16px;
        box-shadow: 4px 4px 10px #EAEAEA;
        background: #FFFFFF;
        .package-header {
            text-align: center;
            padding: 12px 0;
            text-transform: uppercase;
            font-size: 24px;
            font-weight: 700;
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
            &[data-package="premium_plus"] {
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

            :focus-visible {
                outline: solid 2px lightseagreen;
            }
        }
        .package-slogan {
            padding: 16px 0;
            font-weight: 600;
            font-size: 18px;
            text-align: center;
            color: #47535F;
            text-transform: uppercase;
            font-family: "Source Sans Pro", sans-serif;
            :focus-visible {
            outline: solid 2px lightseagreen;
        }
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
                position: relative;
                padding-inline-start: 20px;
                li {
                    font-family: "Source Sans Pro", sans-serif;
                    color: #47535F;
                    font-weight: 400;
                    font-size: 16px;
                    letter-spacing: 0.01em;
                    :focus-visible {
                        outline: solid 2px lightseagreen;
                    }
                }
                &:hover {
                    .add_ {
                        display: flex;  
                    }
                }
                .hidden-class {
                    overflow: hidden;
                }
                .list-control-button {
                    position: absolute;
                    z-index: 2;
                    background: #fff;
                    font-size: 20px;
                    font-weight: bold;
                    border: 1px solid #ccc;
                    display: none;
                    &:hover {
                        background: #eeeeee; 
                    }
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
                    margin-right: 0;
                }
                .move_ {
                    position: absolute;
                    top: unset;
                    right: -20px;
                    left: unset;
                    margin-right: 0;
                }
                .is-visible {
                    display: flex;
                }
                .draggable-list-item {
                    border-top: 2px solid transparent;
                }
                .draggable-list-item.dragover {
                    border-top-color: green;
                }
                .draggable-list-item.dragstart {
                    opacity: 0.5;
                }
            }
        }
        .package-prices {
            margin: auto 24px 0 24px;
            border-top: 1px solid #E3E8F1;
            ul {
                list-style: none;
                margin: 0;
                padding: 0;
            
                li {
                    padding-top: 30px;
                    padding-bottom: 30px;
                    text-align: center;
                    position: relative;

                    &:not(:last-child) {
                        border-bottom: 1px solid #E3E8F1;
                    }
                  
                    [data-price-toptext] {
                        color: #323F4B;
                        font-weight: 700;
                        letter-spacing: 0.01em;
                        margin-bottom: 4px;
                        :focus-visible {
                            outline: solid 2px lightseagreen;
                        }
                    }
                  
                    [data-price-currency] {
                        vertical-align: super;
                        font-family: "Source Sans Pro", sans-serif;
                        font-size: 16px;
                        font-weight: bold;
                        color: #47535F;
                        :focus-visible {
                            outline: solid 2px lightseagreen;
                        }
                    }
                  
                    [data-price-value] {
                        color: #47535F;
                        font-weight: bold;
                        font-size: 28px;
                        position: relative;
                        top: 2px;
                        :focus-visible {
                            outline: solid 2px lightseagreen;
                        }
                    }
                  
                    [data-price-text] {
                        font-family: "Source Sans Pro", sans-serif;
                        font-size: 16px;
                        font-weight: 600;
                        color: #6A737E;
                        :focus-visible {
                            outline: solid 2px lightseagreen;
                        }
                    }
                  
                    .crossed_ {
                        opacity: 0.85;
                        position: relative;
                        transform: scale(.85);

                        &::before, &::after {
                          content: '';
                          position: absolute;
                          z-index: 2;
                          height: 2px;
                          width: 80%;
                          background-color: red;
                          top: 50%;
                          left: 50%;
                        }
                      
                        &::before {
                          transform: translate(-50%, -50%) rotateZ(8deg);
                        }
                      
                        &::after {
                          transform: translate(-50%, -50%) rotateZ(-8deg);
                        }
                      
                        &.hidden_ {
                          visibility: hidden;
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
                        left: 0;
                        &:hover {
                            background: #eeeeee; 
                        }

                        &.remove_ {
                            bottom: 5px;;
                        }
                    
                        &.discount_ {
                          top: 5px;
                        }
                      
                        &.toggle-discount-visibility_ {
                          top: 50%;
                          transform: translateY(-50%);
                        }
                        .is-visible {
                            display: flex;
                        }
                    }
                  
                    &:hover .list-control-button {
                        display: flex;
                    }
                }
            }
        }
    }
`

function PackagesList(props) {
    return (
        <StyledServicePackagesList className="package-wrapper" data-package={props.dataPackage}>
            <div className="package">
                <div
                    className="package-header" 
                    contentEditable={true} 
                    suppressContentEditableWarning={true}
                    data-value-content
                    data-key={props.dataPackage + '_header'}
                    data-package={props.dataPackage}>
                        {props.packageType}
                </div>
                <div 
                    className="package-slogan"
                    contentEditable={true} 
                    data-value-content
                    data-key={props.dataPackage + '_slogan'}
                    suppressContentEditableWarning={true}>
                        {props.slogan}
                </div>
                <div className="package-content" data-package={props.dataPackage}>
                    <DraggableList 
                        data={props.list}
                        dataPackage={props.dataPackage}
                    />
                </div>
                <div className="package-prices">
                    <ul data-price={'price_' + props.dataPackage}></ul>
                </div>
            </div>
        </StyledServicePackagesList>
    )
}

export default PackagesList