import React from 'react'
import styled from 'styled-components'

const StyledCreditsInfo = styled.div`
    padding-top: 80px;
    width: 100%;
    max-width: 1160px;
    margin: 0 auto;
    line-height: 1.55;
    font-size: 18px;
    color: #6b6b6b;
    .heading {
        font-weight: 500;
        font-size: 20px;
        color: #323F4B;
        margin-bottom: 40px;
        text-align: center;
        line-height: 1.55;
        :focus-visible {
            outline: solid 2px lightseagreen;
        }
    }
    .credits-info_item {
        display: flex;
        justify-content: space-between;
        .info-item {
            width: 370px;
            padding: 30px;
            padding-right: 60px;
            box-shadow: -6px -6px 11px #ffffff, 6px 6px 11px #ededed;;
            border-radius: 10px;

            .def_, .price_ {
                font-family: "Source Sans Pro", sans-serif;
                font-size: 18px;
                margin-top: 0;
                line-height: 1.55;
                color: #6b6b6b;
                .text-orange {
                    color: #ff9447;
                }
                .text-green {
                  color: #50cd24;
                }
                .text-blue {
                  color: #4ec4f0;
                }
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
                margin-bottom: 18px;
            }

            .price_ {
                color: #323F4B;
                font-weight: 600;
                margin-bottom: 0;
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
            <p contentEditable={true} tabIndex={0} className='def_'>{def}</p>
            <p contentEditable={true} tabIndex={0} className='price_'>{price}</p>
        </div>
    )
}


function CreditsInfoTool(props) {
    return (
        <StyledCreditsInfo>
            <div className='credits-info_wrapper'>
                <div className='heading' contentEditable={true}>INFO ABOUT CREDITS:</div>
                <div className='credits-info_item'>
                    <AddInformations information={props.content} />
                </div>
            </div>
        </StyledCreditsInfo>
    )
}

export default CreditsInfoTool