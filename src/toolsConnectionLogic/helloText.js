import React from "react";
import ReactDOM from 'react-dom';
import HelloTextTool from "../toolsComponents/helloTextTool"


class HelloText extends React.Component {
    static get toolbox() {
        return {
            icon: '<span>HT</span>',
            title: 'Hello Text'
        };
    }

    static get isReadOnlySupported() {
        return true;
    }

    constructor({ data, api }) {
        super();
        const _defaults = {
          text: ['Введите текст...'],
          regLink: {
            word: 'Register',
            url: 'https://www.truck1.eu/_TEN_registration.html'
          }
        }
        this.data = data || {};
        this.api = api;
        for (const key in _defaults) {
          if (!this.data[key]) {
            this.data[key] = _defaults[key];
          }
        }
        this.CSS = {
            wrapper: 'hello-text',
        };
        this.nodes = {
            holder: null,
        };
        this.wrapper = undefined;
        this.isFocusedP = null;
    }

    render() {
        const rootNode = document.createElement('div');
        rootNode.setAttribute('class', this.CSS.wrapper);
        this.nodes.holder = rootNode;

        const onDataChange = (newData) => {
            this.data = {
              ...newData
            };
        }

        ReactDOM.render(
            (
                <HelloTextTool
                   onDataChange={onDataChange}
                   data={this.data}
                    />
            ),
            rootNode);
        
        return this.nodes.holder
    }

    save() {
        return this.data;
    }
}
  
export default HelloText;