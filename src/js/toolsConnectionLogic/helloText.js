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
        this.wrapper = undefined;
        this.isFocusedP = null;
    }

    

    render() {
        const rootNode = document.createElement('div');
        rootNode.setAttribute('data-id', `${this.data.dataId || (`02-hello-text-${btoa(Math.random()).slice(5, 12)}`)}`)
        
        this.wrapper = rootNode

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
                   type='construction'
                    />
            ),
            rootNode);
        
        return this.wrapper
    }

    save(el) {
        const contents = [ ...el.querySelectorAll('[data-value-content][data-key]') ].reduce((acc, elem) => {
            acc[elem.dataset['key']] = elem.textContent;
            return acc;
        }, {});

        return {
            dataId: el.getAttribute('data-id'),
            contents,
            text: [ ...el.querySelectorAll('p.hello-text--p') ].map(p => p.innerHTML),
            regLink: {
              word: el.querySelector('[data-hello-reglink] a').textContent,
              url: el.querySelector('[data-hello-reglink] a').getAttribute('href')
            }
        }
    }
}
  
export default HelloText;