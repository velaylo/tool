import React from "react";
import ReactDOM from 'react-dom';
import SpecialOfferTool from '../toolsComponents/specialOfferTool'

class SpecialOffer extends React.Component {
    static get toolbox() {
        return {
          icon: '<span>SO</span>',
          title: 'Special offer'
        };
    }
    
    static get isReadOnlySupported() {
        return true;
    }

    constructor({ data }) {
        super();
        const _defaults = {
          prices: [
            {
                value: 200,
                currency: '€',
                text: `/ mo. (total 1200€)`,
            }
          ]
        }
        this.data = data || {};
        this.data.contents = data.contents || {}

        for (const key in _defaults) {
          if (!this.data[key]) {
            this.data[key] = _defaults[key];
          }
        }

        this.wrapper = undefined;
    }

    render() {
        const rootNode = document.createElement('div');
        rootNode.setAttribute('data-id', `${this.data.dataId || (`09-special-offer-${btoa(Math.random()).slice(5, 12)}`)}`)
        
        this.wrapper = rootNode

        ReactDOM.render(
            (
                <SpecialOfferTool
                  data={this.data}
                  prices={this.data.prices} />
            ), rootNode
        )

        return this.wrapper
    }

    save(el) {
        const contents = [ ...el.querySelectorAll('[data-value-content][data-key]') ].reduce((acc, elem) => {
            acc[elem.dataset['key']] = elem.textContent;
            return acc;
        }, {});

        const prices = [ ...el.querySelectorAll('.price_') ].map(x => {
            return {
              value: x.querySelector('.value_').textContent,
              currency: x.querySelector('.currency_').textContent,
              text: x.querySelector('.text_').textContent
            }
        });

        return {
            dataId: el.getAttribute('data-id'),
            contents,
            prices,
        }
    }

}

export default SpecialOffer 