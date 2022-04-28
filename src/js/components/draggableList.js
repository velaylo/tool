import React, { useState } from 'react';
import DraggableListItem from './draggableListItem'

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
        let ulContainer = event.target.closest('ul')
        let copyArr = [...ulContainer.querySelectorAll('li[draggable="true"]')];
        let textArr = copyArr.map((item) => item.textContent)
        
        textArr.push('Text');
        setData(textArr)
    }

    function removeItem(button, item) {
        let textArr = [...data]
        let index = item.getAttribute('index')
        textArr.splice(index, 1)
        setData(textArr)

        button.classList.remove("is-visible")
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
                            removeItem={removeItem}
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
                    draggable={false}
                    hiddenClass='hidden-class'
                    onDrop={(index) => onDrop(index)}
                />
                {/* add button */}
                <div 
                    className="list-control-button add_ cdx-settings-button" 
                    onClick={(event) => initAddParagraphTool(event)}>
                        +
                </div>
                <div 
                    className='list-control-button remove_ cdx-settings-button'
                    >
                        ✖
                </div>
        </ul>
    )
}

export default DraggableList