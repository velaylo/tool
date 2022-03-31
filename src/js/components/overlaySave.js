import React from "react";
import styled from "styled-components";

const StyledOverlaySave = styled.div`
    position: fixed;
    z-index: 9999;
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 0;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, .7);

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
        p {
            &:first-child {
                margin-top: 0;
                margin-bottom: 18px;
            }
            font-family: "Roboto", sans-serif;
            line-height: 1.55;
            font-size: 18px;
            color: #6b6b6b;
            margin: 18px 0;
        }
        .list {
            overflow: auto;
            max-height: 280px;
            .list-item button[data-id] {
                display: none;
            }
        }
        hr {
            margin: 9px 0;
            border: none;
            height: 1px;
            background-color: #cacaca;
            box-sizing: border-box;
        }
        .co-input {
            margin-bottom: 10px;
            input {
                border: 1px solid #ccc;
                width: 100%;
                padding: 3px 5px;
                border-radius: 3px;
                font-family: "Source Sans Pro", sans-serif;
                color: #6b6b6b;
                font-size: 16px;
                background-color: #fff;
                :focus-visible {
                    outline: solid 2px lightseagreen;
                }
            }
        }
        .flex {
            display: flex;
            justify-content: space-between;
            .co-btn {
                border: 1px solid #ccc;
                padding: 4px 8px;
                border-radius: 3px;
                font-family: "Roboto", sans-serif;
                color: #6b6b6b;
                font-size: 16px;
                text-align: center;
                display: inline-block;
                margin-bottom: 5px;
                cursor: pointer;
                :focus-visible {
                    outline: solid 2px lightseagreen;
                }
            }
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
    }
`


function OverlaySaveBlock(props) {
    const api = endpoint => `https://www.truck1.eu/t1api/comOffer/${endpoint}&T1Db_logged=c928cc422c32acc3bd9b03e4351c6b1b`;
    const apiSave = `https://www.truck1.eu/t1api/comOffer/save?T1Db_logged=c928cc422c32acc3bd9b03e4351c6b1b`;

    let closeOverlaySave = () => {
        document.querySelector('#overlay-save').hidden = true;
    }

    function closeDataFormOutside(event) {
        const form = document.querySelector('#overlay-save .modal');
        
        const target = event.target;
        const itsForm = target == form || form.contains(target);
        const isFormActive = form.hidden

        if(!itsForm && !isFormActive) {
            form.closest('#overlay-save').hidden = true;
        }
    }

    function clearOffersList() {
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

    function save_makeRemoveIDButton(target, id, oldName) {
        let modal = target.closest('.modal');
        let input = modal.querySelector('input[data-template-name]');
        input.value = oldName;
        let buttonContainer = document.createElement('div');
        buttonContainer.setAttribute('style', 'margin: 5px 0');
        input.parentNode.appendChild(buttonContainer);
        let button = document.createElement('button');
        button.classList.add('co-btn');
        button.setAttribute('data-replace-id', `${id}`);
        button.textContent=`Не перезаписывать (ID: ${id})`;

        buttonContainer.appendChild(button);
        // TODO: make this handler global or delegated, 
        //       because this button can be removed not only from there
        let $handler = e => {
          e.target.removeEventListener('click', $handler);
          e.target.parentNode.parentNode.removeChild(e.target.parentNode);
        };
        button.addEventListener('click', $handler, { once: true });
      }

    function addSaveList(e) {
        if (e.target.closest('.list-item')) {
          let id = e.target.closest('.list-item').dataset.id;
          let oldName = e.target.closest('.list-item').querySelector('span.name_').textContent;
          let removeButton = document.querySelector('#overlay-save button[data-replace-id]');
          if (removeButton) { removeButton.parentNode.removeChild(removeButton); }
          save_makeRemoveIDButton(e.target, id, oldName);
        }
    };

    function saveData(event) {
        let name = document.querySelector('#overlay-save [data-template-name]').value;
        let id = document.querySelector('#overlay-save [data-replace-id]');

        if (id) {
            id = `&offer_id=${id.dataset['replaceId']}`;
        } else {
            id = '';
        }

        if (name) {
            props.save().then(data => {
                const xhr = new XMLHttpRequest();
                xhr.open('POST', apiSave);
                xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');
                xhr.onreadystatechange = function() {
                  if (xhr.readyState === 4 && xhr.status < 300) {
                    clearOffersList();
                    let removeButton = document.querySelector('#overlay-save button[data-replace-id]');
                    if (removeButton) { removeButton.parentNode.removeChild(removeButton); }
                    document.querySelector('#overlay-save').hidden = true;
                  }
                };
                xhr.send(`name=${name}&data=${encodeURIComponent(JSON.stringify(data))}${id}&timestamp=${Date.now()}`);
            });
        }
    }

    return (
        <StyledOverlaySave 
            className="overlay" 
            id="overlay-save" 
            hidden 
            onClick={closeDataFormOutside}>
                <div className="save_ modal">
                    <p>Перезаписать</p>
                    <div 
                        className="list" 
                        data-list-loaded="0"
                        onClick={addSaveList}
                        >
                    </div>
                    <hr/>
                    <p>Введите имя шаблона</p>
                    <div className="co-input" data-insert-id>
                        <input type="text" data-template-name />
                    </div>
                    <div className="flex flex-jcsb">
                        <button className="co-btn" data-save onClick={saveData}>Сохранить</button>
                        <button className="co-btn" data-cancel onClick={closeOverlaySave}>Отмена</button>
                    </div>
                </div>
        </StyledOverlaySave>
    )
}

export default OverlaySaveBlock