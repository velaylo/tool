function initRemoveTool(options) {
  let { 
      wrapper, 
      parent, 
      focusedElem, 
      getChild, 
      focusEventCondition,
      watchRemoveButtonXAxis
  } = options;
  if (!getChild) {
      getChild = function(_, focusedElem) { return focusedElem; };
  }
  if (!focusEventCondition) {
      focusEventCondition = function(target) {
        return target.tagName === 'P';
      }
  }
console.log('jk')
  return function() {
    let container = wrapper.querySelector(parent);
    let button;

    if(!container.querySelector('.list-control-button.remove_')) {
      button = document.createElement('div');
      button.classList.add('list-control-button', 'remove_', 'cdx-settings-button')
      button.textContent = '✖';
    } else {
      button = container.querySelector('.list-control-button.remove_');
    }

    let onFocus = event => {  
      focusedElem = event.target;
      let child = (getChild(container, focusedElem) || focusedElem);
      button.classList.add('is-visible');
      button.style.bottom = `${container.offsetHeight - child.offsetTop - 30}px`;
      if (watchRemoveButtonXAxis) {
        button.style.right = `${container.offsetWidth - (child.offsetLeft + child.offsetWidth - 30)}px`;
      }
    };
    let onBlur = () => {
      focusedElem = null;
      button.classList.remove('is-visible');
    };
    let onDelete = (event) => {
        event.stopPropagation();
        event.stopImmediatePropagation();
        container.removeChild(getChild(container, focusedElem) || focusedElem);
        focusedElem = null;
        button.classList.remove('is-visible');
    };

    container.appendChild(button);
    button.addEventListener('click', onDelete);
    window.addEventListener('click', event => {
      let target = event.target;
      if (target.closest(parent)) {
        if (focusEventCondition(target)) {
          onFocus(event);
        } else {
          onBlur();
        }
      } else {
        if (focusedElem) {
          onBlur();
        }
      }
    });
  }
}

export default initRemoveTool