import React from "react";
import styled from "styled-components";

const StyledTextarea = styled.textarea`
    outline: none;
    resize: none;
    border: none;
    background-color: #fcfcfc;
    font-family: "Roboto", sans-serif;
    :focus {
        outline: solid 2px lightseagreen;
    }
    ::-webkit-scrollbar{
        width: 0px;
    }
`

class EditableTextBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: this.props.title};

        this.handleChange = this.handleChange.bind(this);
        this.textareaHeightChange = this.textareaHeightChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    textareaHeightChange(event) {
        const textarea = event.target.closest("#textarea")
        textarea.style.height =this.props.textareaHeight;
        let scHeight = event.target.scrollHeight;
        textarea.style.height = scHeight + 'px';
    }

    render() {
        return <StyledTextarea id="textarea" onKeyUp={this.textareaHeightChange} onChange={this.handleChange} type='text' value={this.state.value} textareaHeight />
    }
}


export default EditableTextBlock