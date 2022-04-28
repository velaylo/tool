import React, { useRef } from 'react';
import removingTextTool from "../components/removingTextTool";

function DraggableListItem(props) {
    const  itemRef = useRef(null)

    function onDragStart(e) {
        //remove default drag ghost
        e.dataTransfer.effectedAllowed = 'move';
        e.dataTransfer.setDragImage(e.target, 50000, 50000);

        //custom drag ghost
        let ghostNode = e.target.cloneNode(true);
        ghostNode.style.position = "absolute";

        //show ghost add mouse pointer position
        ghostNode.style.top = (e.pageY - e.target.offsetHeight/2) + 'px';
        ghostNode.style.left = (e.pageX - e.target.offsetWidth/2) + 'px';

        //add width height to ghost node
        ghostNode.style.height = e.target.offsetHeight + 'px';
        ghostNode.style.width = e.target.offsetWidth + 'px';

        //add some style
        ghostNode.style.opacity = '0.8';
        ghostNode.style.pointerEvents = 'none';
        ghostNode.style.zIndex = '2';

        //add id 
        ghostNode.id = 'ghostNode'

        document.body.prepend(ghostNode)

        //identify selected item
        itemRef.current.classList.add('dragstart')

        if(props.onDragStart) {
            props.onDragStart(props.index)
        }
    }

    //event when dragging
    function onDrag(e) {
        //move ghost node width mouse
        let ghostNode = document.querySelector('#ghostNode');
        ghostNode.style.top = (e.pageY - e.target.offsetHeight/2) + 'px';
        ghostNode.style.left = (e.pageX - e.target.offsetWidth/2) + 'px';
    }

    //event when drag end
    function onDragEnd() {
        //remove ghost node
        document.querySelector('#ghostNode').remove();

        //remove selected item style
        itemRef.current.classList.remove('dragstart')
    }

    //event when drag over item
    function onDragEnter() {itemRef.current.classList.add('dragover')}

    //event when drag leave item
    function onDragLeave() {itemRef.current.classList.remove('dragover')}

    //add event for item can drop
    function onDragOver(e) {e.preventDefault()}

    //event when drop 
    function onDrop() {
        itemRef.current.classList.remove('dragover');
        itemRef.current.focus()

        let mainContainer = itemRef.current.closest('ul[data-list-type]')
        let removeButton = mainContainer.querySelector('div.remove_');
        removeButton.classList.remove('is-visible')
        
        props.onDrop(props.index);
    }

    //remove paragraph button
    function initRemoveParagraphTool(event) {
        if(event.target.classList.contains('hidden-class')) {
            return
        } else {
            let listItem = event.target;
            let typeContainer = event.target.closest('ul[data-list-type]');
            let buttonRemove = typeContainer.querySelector('.remove_')
            
            buttonRemove.style.bottom = `${typeContainer.offsetHeight - event.target.offsetTop - 30}px`
            buttonRemove.classList.add('is-visible')

            buttonRemove.removeEventListener('click', () => {props.removeItem(buttonRemove, event.target)})
            buttonRemove.addEventListener('click', () => {props.removeItem(buttonRemove, event.target)});
            
            document.addEventListener('click', (event) => {
                if(event.target !== listItem) {
                    buttonRemove.classList.remove('is-visible')
                } else {
                    buttonRemove.classList.add('is-visible')
                }
            })
        }
    }

    return(
        <li 
            ref={itemRef}
            index={props.index}
            className={props.hiddenClass ? `${props.hiddenClass} draggable-list-item package-list` : `draggable-list-item package-list`}
            contentEditable={props.draggable !== undefined ? props.draggable : true}
            suppressContentEditableWarning={true}
            onClick={initRemoveParagraphTool}
            draggable={props.draggable !== undefined ? props.draggable : true}
            onDragStart={onDragStart}
            onDrag={onDrag}
            onDragEnd={onDragEnd}
            onDragEnter={onDragEnter}
            onDragLeave={onDragLeave}
            onDragOver={onDragOver}
            onDrop={onDrop}
            > 
            {props.children}
        </li>
    )
}

export default DraggableListItem