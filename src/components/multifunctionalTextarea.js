import React, { useState } from "react";
import { useRef } from "react";
import styled from "styled-components";

const StyledTextarea = styled.textarea`
    outline: none;
    resize: none;
    border: none;
    background-color: #fcfcfc;
    font-family: "Roboto", sans-serif;
    ::-webkit-scrollbar{
        width: 0px;
    }
`
const StyledwrapperTextarea = styled.div`
    position: relative;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    width: 100%;
    .list-control-btn {
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #FFFFFF;
        box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
        border-radius: 3px;
        cursor: pointer;
        z-index: 50;
    }
    .addList {
        font-size: 26px;
        line-height: 26px;
        padding-bottom: 4px;
        display: none;
    }
    
    .multifunctional-textarea_container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        #textarea {
            position: relative;
            :focus {
                outline: solid 2px lightseagreen;
            }
        }
        .remove {
            position: absolute;
            right: -32px;
            display: none;
        }
    }


`

function MultifunctionalTextarea(props) {
    const [value, setValue] = useState(props.title)

    const textareaRef = useRef(null);

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const textareaHeightChange = (event) => {
        const textarea = event.target.closest("#textarea")
        textarea.style.height =props.textareaHeight;
        let scHeight = event.target.scrollHeight;
        textarea.style.height = scHeight + 'px';
    }

    const removeTextareaLine = (removeListBtn) => {
        removeListBtn.addEventListener("click", () => {
            removeListBtn.closest(".multifunctional-textarea_wrapper").remove()
        })
        removeListBtn.style.display = "none";
    }

    const addTextareaLine = (addListBtn) => {
        const mainWrapper = addListBtn.closest("#multifunctional-textarea")
        addListBtn.addEventListener("click", () => {
            let listContainer = addListBtn.closest(".multifunctional-textarea_wrapper").cloneNode(true);
            listContainer.addEventListener('click', onFocus)
            mainWrapper.appendChild(listContainer);
        })
        addListBtn.style.display = "none";
    }

    const onFocus = (event) => {
        const textareaWrapper = event.currentTarget.closest(".multifunctional-textarea_wrapper");
        let removeListBtn = textareaWrapper.querySelector("div.remove");
        let addListBtn = textareaWrapper.querySelector("div.addList");

        removeTextareaLine(removeListBtn);
        addTextareaLine(addListBtn);

        removeListBtn.style.display = "flex";
        addListBtn.style.display = "flex";
    } 

    const onBlur = (event) => {
        const textareaWrapper = event.currentTarget.closest(".multifunctional-textarea_wrapper");
        let removeListBtn = textareaWrapper.querySelector("div.remove");
        let addListBtn = textareaWrapper.querySelector("div.addList");

       
    }

    return (
        <div id="multifunctional-textarea">
            <StyledwrapperTextarea className="multifunctional-textarea_wrapper">
                <div className="multifunctional-textarea_container">
                    <StyledTextarea 
                        ref={textareaRef} 
                        id="textarea" 
                        onKeyUp={textareaHeightChange} 
                        onChange={handleChange} 
                        onFocus={onFocus} 
                        onBlur={onBlur}
                        type='text' 
                        value={value} 
                        textareaHeight />
                    <div className="list-control-btn remove">✖</div>
                </div>
                <div className="list-control-btn addList">+</div>
            </StyledwrapperTextarea>
        </div>
    ) 
}


export default MultifunctionalTextarea