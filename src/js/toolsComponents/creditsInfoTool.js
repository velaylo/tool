import React from 'react'
import styled from 'styled-components'

const StyledCreditsInfo = styled.div`
    padding-top: 60px;
    width: 100%;
    max-width: 1160px;
    margin: 0 auto;
    line-height: 1.55;
    font-size: 18px;
    color: #6b6b6b;
    .heading {
        font-weight: 700;
        font-size: 20px;
        color: #323F4B;
        margin-bottom: 40px;
        text-align: center;
        line-height: 31px;
        :focus-visible {
            outline: solid 2px lightseagreen;
        }
    }
    .credits-info--items {
        display: flex;
        justify-content: space-between;
        .info-item {
            width: 368px;
            padding: 24px;
            box-shadow: 4px 4px 10px #EAEAEA;
            border-radius: 16px;

            .def_, .price_ {
                font-size: 18px;
                font-weight: 400;
                margin-top: 0;
                line-height: 28px;
                color: #323F4B;
                .text-bold {
                  font-weight: bold;
                }
                .text-roboto {
                  font-family: "Roboto", sans-serif;
                }
                :focus-visible {
                    outline: solid 2px lightseagreen;
                }
            }

            .def_ {
                margin-bottom: 12px;
            }

            .price_ {
                color: #323F4B;
                font-weight: 600;
                margin-bottom: 0;
                font-family: "Source Sans Pro", sans-serif;
            }
        }
    }
`

function AddInformations(props) {
    let allInformation = props.information;
    let listInformation = [];

    for(let key in allInformation) {
        listInformation[key] = AddSingleInformation(allInformation[key], key)
    }

    return <>{listInformation}</>
}

function AddSingleInformation({ def, price }, key) {
    return (
        <div key={key} className='info-item'>
            <p 
                contentEditable={true} 
                suppressContentEditableWarning={true}
                tabIndex={0} 
                className='def_'>
                    {def}
            </p>
            <p 
                contentEditable={true}
                suppressContentEditableWarning={true} 
                tabIndex={0} 
                className='price_'>
                    {price}
            </p>
        </div>
    )
}


function CreditsInfoTool(props) {
    return (
        <StyledCreditsInfo className='credits-info--wrapper'>
            <div 
                className='heading' 
                contentEditable={true}
                suppressContentEditableWarning={true}
                data-value-content 
                data-key="heading">
                    INFO ABOUT CREDITS:
            </div>
            <div className='credits-info--items'>
                <AddInformations information={props.content} />
            </div>
        </StyledCreditsInfo>
    )
}

export default CreditsInfoTool