import React, { useState } from 'react';
import DraggableListItem from './draggableListItem'
import removingTextTool from "../components/removingTextTool";

function DraggableList(props) {
    const [data, setData] = useState(props.data);
    const [dragStartIndex, setdragStartIndex] = useState(null);

    //get index of draged item
    function onDragStart(index) {setdragStartIndex(index)}

    //update list when item dropped 
    function onDrop(dropIndex) {
        //get draged item
        const dragItem = data[dragStartIndex];

        //delete draged item in list
        let list = [...data];
        list.splice(dragStartIndex, 1);

        //update list
        if(dragStartIndex < dropIndex) {
            setData([
                ...list.slice(0, dropIndex - 1),
                dragItem,
                ...list.slice(dropIndex - 1, list.length)
            ])
        } else {
            setData([
                ...list.slice(0, dropIndex),
                dragItem,
                ...list.slice(dropIndex, list.length)
            ])
        }
    }

    function initAddParagraphTool(event) {
        let  mainContainer = document.querySelector('.package-wrapper');
        let button = mainContainer.querySelector('.add_');

        button.addEventListener('click', onAddParagraph(event))
    }

    function onAddParagraph(event) {
        let item = document.createElement('li');
        item.classList.add('package-list');
        item.setAttribute('contenteditable', 'true');
        item.setAttribute('draggable', 'true');
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


    return(
        <ul 
            className={'ul-list' + ' ' + props.dataPackage + ' ' + 'draggable-list'}
            data-list-type={props.dataPackage}> 
                {
                    data.map((item, index) => (
                        <DraggableListItem 
                            key={index}
                            index={index}
                            onDragStart={(index) => onDragStart(index)}
                            onDrop={(index) => onDrop(index)}
                        >
                            {item}
                        </DraggableListItem>
                    ))
                }
                {/* 
                    add last item so you can drag item to last position 
                    last item dont need onDragStart because it can not be draged
                */}
                <DraggableListItem 
                    key={data.length}
                    index={data.length}
                    draggale={false}
                    onDrop={(index) => onDrop(index)}
                />

                {/* add button */}
                <div 
                    className="list-control-button add_ cdx-settings-button" 
                    onClick={initAddParagraphTool}>
                        +
                </div>
        </ul>
    )
}

export default DraggableList