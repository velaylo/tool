function makeRenderEl(id, data) {
    const rootEl = document.getElementById(id);
    let dataId = data.dataId || (`${rootEl.id}-${btoa(Math.random()).slice(5, 12)}`);
    const newEl = document.createElement('div');
    newEl.setAttribute('data-id', dataId);
    newEl.innerHTML = rootEl.innerHTML;

    //render predefined data
    if (data && typeof data === 'object' && Object.keys(data).length) {
        for (const key in data) {
            if (key === 'lists') {
                for (const listName in data.lists) {
                    let ul = newEl.querySelector(`ul[data-list=${listName}]`);
                    let list = data.lists[listName];
                    for (const item of list) {
                        let li = document.createElement(li);
                        li.textContent = item;
                        li.setAttribute('tabIndex', '0');
                        li.setAttribute('contenteditable', 'true')
                    
                        ul.appendChild(li);
                    };
                    initEditableList(ul)    
                }
            } else if (key != 'dataID' && key !== 'contents') {
                let target = newEl.querySelector(`[data-value-attr=${key}]`);
                if (target) {
                    target.setAttribute(`data-${key}`, data[key]);
                }
            } else if (key === 'contents') {
                for (const contentsKey in data.contents) {
                    let target = newEl.querySelector(`[data-value-content][data-key=${contentsKey}]`);
                    if (target) {
                        target.textContent = data.contents[contentsKey];
                    }
                }
            }
        }
    }
    return newEl;
}

function initEditableList(ul) {
    //add "Add List Item" button
    addListItemAddButton(ul);

    //add "Remove List Item" button
    addListItemRemoveButton(ul);
}

function addListItemAddButton(ul) {
    let _addLiHandler = event => {
        let newLi = document.createElement('li');
        newLi.setAttribute('contenteditable', 'true');

        let _data = ' ';
        newLi.appendChild(document.createTextNode(_data));

        ul.appendChild(newLi)
    }

    const button = document.createElement('div');
    button.textContent = '+';
    button.classList.add('list-control-button', 'add_', 'cdx-settings-button');
    button.setAttribute('contenteditable', 'false');
    ul.appendChild(button);
    button.addEventListener('click', _addLiHandler);
}

function addListItemRemoveButton(ul) {
    let isFoucsedLi = null;
    let button = document.createElement('div');
    button.textContent = '✖';
    button.classList.add('list-control-button', 'remove_', 'cdx-settings-button');

    let _foucsLiHandler = event => {
      isFoucsedLi = event.target;
      button.classList.add('is-visible');
      button.style.bottom = `${ul.offsetHeight - isFoucsedLi.offsetTop - 30}px`;
    }
    let _blurLiHandler = () => {
      isFoucsedLi = null;
      button.classList.remove('is-visible');
    }
    let _removeLiHandler = () => {
      isFoucsedLi.parentNode.removeChild(isFoucsedLi);
      isFoucsedLi = null;
      button.classList.remove('is-visible');
    }

    ul.appendChild(button);

    button.addEventListener('click', _removeLiHandler);
    window.addEventListener('click', event => {
      let target = event.target;
      if (target.closest(`ul[data-list=${ul.dataset.list}]`)) {
        if (event.target.tagName === 'LI') {
          _foucsLiHandler(event);
        } else {
          _blurLiHandler()
        }
      } else {
        if (isFoucsedLi && isFoucsedLi !== null) {
          _blurLiHandler()
        }
      }          
    });
}

export default makeRenderEl