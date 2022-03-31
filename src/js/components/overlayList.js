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
  const api = endpoint => `https://www.truck1.eu/t1api/comOffer/${endpoint}&T1Db_logged=c928cc422c32acc3bd9b03e4351c6b1b`;

  const clearOffersList =  () => {
    document.querySelectorAll('[data-list-loaded] .list-item').forEach(item => {
      item.removeEventListener('click', loadOffer);
      if (!!item.querySelector('button[data-id]')) {
        item.querySelector('button[data-id]').removeEventListener('click', deleteOffer);
      }
      item.parentNode.removeChild(item);
    });
    document.querySelector('[data-list-loaded]').setAttribute('data-list-loaded', "0");
  }

  function loadOffer(event) {
    let id = 'id' in event.target.dataset ? event.target.dataset['id'] : event.target.closest('.list-item').dataset['id'];
    fetch(api(`load?offer_id=${id}`))
    .then(r => r.json())
    .then(json => {
      console.log(json);
      props.render(json.data)
    });
  }

  function deleteOffer(event) {
    event.stopPropagation();
    event.stopImmediatePropagation();
    let { id } = event.target.dataset;
    fetch(api(`delete?offer_id=${id}`))
    .then(r => r.text())
    .then(_ => {
      let list = event.target.closest('.list');
      let item = event.target.parentNode;
      item.removeEventListener('click', loadOffer);
      event.target.removeEventListener('click', deleteOffer);
      list.removeChild(item);
    });
  }

  const closeOverlayList = (event) => {
    const listContainer = document.querySelector('.list.modal');
    
    const target = event.target;
    const itsListContainer = target == listContainer || listContainer.contains(target);
    const isListContainerActive = listContainer.hidden
    if(!itsListContainer && !isListContainerActive) {
        listContainer.closest('#overlay-list').hidden = true;
    }
  }

  const closeList = (event) => {
    clearOffersList();
    closeOverlayList(event)
  }

  return(
    <StyledOverlayList 
    className='overlay' 
    id='overlay-list' 
    hidden
    onClick={closeList}>
      <div
        className="list modal" 
        data-list-loaded="0">
      </div>
    </StyledOverlayList>
  )
}

export default OverlayList