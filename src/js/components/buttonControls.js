import React from "react";
import styled from "styled-components";
import Output from 'editorjs-react-renderer';

const StyledMainControls = styled.div`
    position: fixed;
    left: 0;
    top: 100px;
    z-index: 999;
    @media print {
        display: none !important;
    }
    .co-panel {
        padding: 34px 10px 10px 34px;
        background-color: #ddd;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        list-style: none;
        box-shadow: 3px 3px 6px #EDEDED;

        &:not([open]) {
            .unfold_ {
              display: none;
            }
        }

        &[open] {
          display: flex;
          padding-top: 10px;
        
          .fold_ {
            display: none;
          }
        }

        summary {
            margin: 0;
            padding: 0;
            width: 24px;
            height: 24px;
            cursor: pointer;
            position: absolute;
            left: 10px;
            top: 10px;
            list-style: none;
            &::marker {
              content: "";
            }
            .burger {
                width: 24px;
                height: 24px;
                position: relative;
                span {
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                }
            }
        }

        .dropdown_ {
            display: flex;
            padding-left: 10px;
            .co-panel-btn {
                width: 24px;
                height: 24px;
                margin: 0 5px;
                border-radius: 4px;
                border: none;
                background: transparent;
                position: relative;
                cursor: pointer;

                &:hover {
                  background-color: #ccc;
                }

                &::before {
                  content: attr(data-tooltip);
                  position: absolute;
                  color: #fff;
                  padding: 3px;
                  left: 50%;
                  transform: translateX(-50%);
                  top: -30px;
                  font-size: 14px;
                  background-color: rgba(0, 0, 0, .7);
                  opacity: 0;
                  white-space: nowrap;
                }
            
                &:hover::before {
                  opacity: 1;
                }
            
                span.material-icons {
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%, -50%);
                }
            
                &:hover {
                  background: #ccc;
                }
            }
        }
    }
`



function ButtonControls(props) {
  const api = endpoint => `https://www.truck1.eu/t1api/comOffer/${endpoint}&T1Db_logged=c928cc422c32acc3bd9b03e4351c6b1b`;
  const apiList = `https://www.truck1.eu/t1api/comOffer/list?T1Db_logged=c928cc422c32acc3bd9b03e4351c6b1b`;

  const openList =() => {
    document.querySelector('#overlay-list').hidden = false;
    loadList(document.querySelector('#overlay-list [data-list-loaded]'))
  }

  function loadList(container, attachListItemEvents = true) {
    fetch(apiList)
    .then(r => r.json())
    .then(arr => {
      arr.forEach(item => {
        let _item = makeListItem(item, attachListItemEvents);
        !!_item && container.appendChild(_item);
      });        
    });
  }

  function makeListItem(item, attachEvents = true) {
    if (!attachEvents && Number(item.offer_id) <= 0) { return false; }
  
    let listItem = document.createElement('div');
    listItem.classList.add('list-item')
    let _deleteButton = id => `<button data-id="${id}">Удалить</button>`;
    listItem.innerHTML = `
    <span class="id_"><span>${item.offer_id}</span></span>
    <span class="name_">${item.name}</span>
    ${Number(item.offer_id) > 10 ? _deleteButton(item.offer_id) : ''}
    `;
    listItem.dataset.id = item.offer_id;
    if (attachEvents) {
      listItem.addEventListener('click', loadOffer);
      if (!!listItem.querySelector('button[data-id]')) {
        listItem.querySelector('button[data-id]').addEventListener('click', deleteOffer);
      }
    }
    return listItem;
  }

  function loadOffer(event) {
    let id = 'id' in event.target.dataset ? event.target.dataset['id'] : event.target.closest('.list-item').dataset['id'];
    
    fetch(api(`load?offer_id=${id}`))
    .then(r => r.json())
    .then(json => {
      console.log(json);
      props.render(JSON.parse(json.data))
    });
  }

  function closeList() {
    document.querySelector('#overlay-list').hidden = true;
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

  const openDataForm = () => {
    let overlay = document.querySelector('#overlay-contact');
    overlay.hidden = false;
  }

  const printPDF = () => {
    document.querySelector('#print .content').innerHTML = '';
    constructPrintPDF()
  }

  function constructPrintPDF() {
    const screen = document.querySelector('#editorjs');
    const printContent = document.querySelector('#print .content');
    printContent.parentNode.style.display = 'block';

    const blocks = [...screen.querySelectorAll('.ce-block')];
    for (const block of blocks) {
        let clone = block.cloneNode(true);
        printContent.appendChild(clone);

    }

    let height = printContent.clientHeight;
    let pageHeightStep = 1122.52; // magic number #1
    let pageHeightStep_screen = 1754;
    let footerHeight = 120; // height + 
    console.log(printContent)
    for (let i = 0, j = 1; i < height; i += pageHeightStep_screen, j++) {
      printContent.style.minHeight = `${pageHeightStep * j - 20}px`;
      let footer = addFooter(printContent, getContactData());
      footer.style.top = `${(pageHeightStep * j) - footerHeight}px`;
      console.log(footer.style.top)
    }

    printContent.parentNode.style.display = 'none';
    window.print();   
  }

  function getOldContactData() {
    let oldUser = localStorage.getItem('user');
    let newUser = {};
    if (oldUser) {
      oldUser = JSON.parse(oldUser);
      let possibleLangs = ['en', 'pl', 'tr', 'de', 'fr', 'it', 'es', 'ru'];
      for (const l of possibleLangs) {
        if (oldUser[l]) {
          for (const prop in oldUser[l]) {
            if (prop === 'name') {
              newUser.name = `${oldUser[l].name}${'surname' in oldUser[l] ? ' ' + oldUser[l].surname : ''}`;
            } else if (prop !== 'surname') {
              newUser[prop] = oldUser[l][prop];
            }
          }
          break;
        }
      }
    }
    return newUser;
  }

  function getContactData() {
    let user = localStorage.getItem('offer2021_user');
    if (user) {
        return JSON.parse(user);
    } else {
        return getOldContactData();
    }
  }

  function addFooter(page, managerObj) {
    const footerHtml = document.querySelector('#footer-pdf').innerHTML;
    const footer = document.createElement('footer');
    footer.classList.add('footer-pdf');
    footer.innerHTML = footerHtml;
    fillFooter(footer, managerObj);
    page.appendChild(footer);
    return footer;
  }

  function fillFooter(footer, obj) {
    // temp
    try {
      obj = obj || JSON.parse(localStorage.getItem('user'))['en'];
      let [ name, position, tel, email, whatsapp, linkedin ] = [ 'name', 'position', 'tel', 'email', 'whatsapp', 'linkedin' ].map(x => footer.querySelector(`[data-footer-${x}]`));
      name.innerHTML = obj.name;
      position.innerHTML = obj.position;
      tel.innerHTML = obj.phone;
      email.innerHTML = `<a href="mailto:${obj.email}">${obj.email}</a>`;
      if (obj.linkedin) {
        linkedin.innerHTML = `<a href="${obj.linkedin}" class="icon_ linkedin">${obj.linkedin}</a>`;
      }
      if (obj.whatsapp) {
        whatsapp.innerHTML = `<a href="https://api.whatsapp.com/send?phone=${obj.whatsapp}" class="icon_ whatsapp">${obj.whatsapp}</a>`
      }
    } catch (error) {
      console.log("Error: ", error)
    }
  }

  function openSave(event) {
    document.querySelector('#overlay-save').hidden = false;
    loadList(document.querySelector('#overlay-save [data-list-loaded]'), false);
  }


  return (
    <StyledMainControls>
      <details className="co-panel">
        <summary>
          <div className="burger_">
            <span className="material-icons fold_">menu</span>
            <span className="material-icons unfold_">menu_open</span>
          </div>
        </summary>
        <div className="dropdown_">
          <button className="co-panel-btn" id="list" data-tooltip="Открыть шаблон" onClick={openList}>
              <span className="material-icons">view_list</span>
          </button>
          <button className="co-panel-btn" id="test_save" data-tooltip="Сохранить шаблон" onClick={openSave}>
            <span className="material-icons">save_alt</span>
          </button>
          <button className="co-panel-btn" id="PDF" data-tooltip="Сохранить PDF" onClick={printPDF}>
            <span className="material-icons">picture_as_pdf</span>
          </button>
          <button className="co-panel-btn" id="contact_data" data-tooltip="Контактные данные" onClick={openDataForm}> 
            <span className="material-icons">manage_accounts</span>
          </button>
        </div>
      </details>
    </StyledMainControls>
  )
}

export default ButtonControls