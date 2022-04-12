import React from "react";
import ReactDOM from 'react-dom';
import AddImgTool from "../toolsComponents/addImgTool";

class AddImg extends React.Component {
    static get toolbox() {
        return {
            icon: '<span><b>IMG</b></span>',
            title: 'Добавление картинки'
        };
    }

    static get isReadOnlySupported() {
        return true;
    }

    constructor({ data} ) {
        super();
        this.data = data || {};
        this.data.contents = data.contents || {};
    }

    render() {
        const rootNode = document.createElement('div');
        rootNode.setAttribute('data-id', `${this.data.dataId || (`11-add-img-${btoa(Math.random()).slice(5, 12)}`)}`);
        
        this.wrapper = rootNode

        ReactDOM.render(
            (
                <AddImgTool data={this.data} />
            ),
            rootNode);
        
        return this.wrapper
    }

    save(el) {
        const contents = [ ...el.querySelectorAll('[data-value-content][data-key]') ].reduce((acc, elem) => {
            acc[elem.dataset['key']] = elem.getAttribute('src');
            return acc;
        }, {});

        return {
            dataId: el.getAttribute('data-id'),
            contents
        }
    }
}

export default AddImg