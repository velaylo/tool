import styled from "styled-components";
import React from "react";

const StyledOverlayList = styled.div`
    position: fixed;
    z-index: 9999;
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 0;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.7);
    &:not([hidden]) {
        display: flex;
    }
    .modal {
        max-width: 800px;
        min-width: 500px;
        padding: 30px;
        border-radius: 10px;
        background-color: #fcfcfc;
        max-height: 550px;
        overflow-y: auto;
    }
    .list {
        .list-item {
            border-radius: 8px;
            padding: 8px;
            padding-right: 80px;
            margin-bottom: 20px;
            border: 1px solid #eaeaea;
            overflow: hidden;
            position: relative;
            cursor: pointer;

            .id_ {
              position: relative;
              margin-right: 12px;
              color: #fff;

              &::before {
                content: '';
                position: absolute;
                width: calc(100% + 16px);
                height: calc(100% + 23px);
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                background-color: #363E4A;
              }

              span {
                position: relative;
                z-index: 2;
              }
            }

            button[data-id] {
              position: absolute;
              z-index: 3;
              right: 5px;
              top: 50%;
              transform: translateY(-50%);
            }

            &:hover {
              background-color: #fff;
            }
        }
    }
`

function OverlayList(props) {

    const closeOverlayList = (event) => {
        const listContainer = document.querySelector('.list.modal');
        
        const target = event.target;
        const itsListContainer = target == listContainer || listContainer.contains(target);
        const isListContainerActive = listContainer.hidden

        if(!itsListContainer && !isListContainerActive) {
            listContainer.closest('#overlay-list').hidden = true;
        }
    }

    return(
        <StyledOverlayList 
        className='overlay' 
        id='overlay-list' 
        hidden
        onClick={closeOverlayList}>
            <div className="list modal" data-list-loaded="0"></div>
        </StyledOverlayList>
    )
}

export default OverlayList