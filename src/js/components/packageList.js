import styled from "styled-components";
import React from "react";
import removingTextTool from "../components/removingTextTool";

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

            :focus-visible {
                outline: solid 2px lightseagreen;
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
            :focus-visible {
            outline: solid 2px lightseagreen;
        }
        }
        .package-content {
            border-top: 1px solid #E3E8F1;
            margin: 0 24px;
            padding-top: 16px;
            padding-bottom: 16px;
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
                    &:first-child {
                        font-weight: 600;
                    }
                    font-family: "Source Sans Pro", sans-serif;
                    color: #47535F;
                    line-height: 25px;
                    font-weight: 400;
                    font-size: 16px;
                    letter-spacing: 0.01em;
                    &:first-child {
                        font-weight: 600;
                    }
                    :focus-visible {
                        outline: solid 2px lightseagreen;
                    }
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
        }
        .package-prices {
            margin: auto 24px 0 24px;
            border-top: 1px solid #E3E8F1;
        }
    }
`

function List(props) {
    let listContainer = []

    for(let key in props.list) {
        listContainer[key] = <li key={key} className='package-list' onClick={initRemoveParagraphTool} contentEditable={true} suppressContentEditableWarning={true}>{props.list[key]}</li>
    }


    return <>{listContainer}</>
}

function initRemoveParagraphTool(event) {
    let  mainContainer = document.querySelector('.packages-pricelist--wrapper');
    let typeContainer = event.target.closest('ul[data-list-type]');
    let type = typeContainer.getAttribute("data-list-type") 
    return removingTextTool({
        wrapper: mainContainer,
        parent: `.packages-pricelist--content ul.${type}`,
        focusedElem: event.trget,
        getChild: function(_, focused) {
          return focused;
        },
        focusEventCondition: function(target) {
          return target.parentNode.classList.contains('ul-list');
        }
    })();
}

function PackagesList(props) {

    // Adding paragraph tool
    function initAddParagraphTool(event) {
        let  mainContainer = document.querySelector('.package-wrapper');
        let button = mainContainer.querySelector('.add_');

        button.addEventListener('click', onAddParagraph(event))
    }


    function onAddParagraph(event) {
        let item = document.createElement('li');
        item.classList.add('package-list')
        item.setAttribute('contenteditable', 'true')
        item.addEventListener('click', initRemoveParagraphTool)
        let container = event.target.closest('ul');
  
        container.appendChild(item)

        let lastParagraph = getLastParagraph(event);
        lastParagraph.focus()
    }

    function getLastParagraph(event) {
        let  container = event.target.closest('ul');
        let item = container.querySelectorAll('li');

        return item[item.length - 1];
    }

    return (
        <StyledServicePackagesList className="package-wrapper" data-package={props.dataPackage}>
            <div className="package">
                <div
                    className="package-header" 
                    contentEditable={true} 
                    suppressContentEditableWarning={true}
                    data-package={props.dataPackage}>
                        {props.packageType}
                </div>
                <div 
                    className="package-slogan"
                    contentEditable={true} 
                    suppressContentEditableWarning={true}>
                        {props.slogan}
                </div>
                <div className="package-content" data-package={props.dataPackage}>
                    <ul className={'ul-list' + ' ' + props.dataPackage} data-list-type={props.dataPackage}>
                        <List list={props.list} />
                        <div 
                            className="list-control-button add_ cdx-settings-button" 
                            onClick={initAddParagraphTool}>
                                +
                    </div>
                    </ul>
                </div>
                <div className="package-prices"></div>
            </div>
        </StyledServicePackagesList>
    )
}

export default PackagesList