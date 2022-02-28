import React from 'react';
import ReactDOM from 'react-dom';
import CreditsPricesTool from '../toolsComponents/creditsPricesTool'

class creditsPrices extends React.Component {
    static get toolbox() {
        return {
          icon: '<span>CPR</span>',
          title: 'Prices for Credits (promo)'
        }
    }

    static get isReadOnlySupported() {
      return true;
    }

    static get enableLineBreaks() {
      return true;
    }

    constructor({ data }) {
        super()
        const _defaults = {
            prices: [
                {
                    value: 25,
                    currency: '€',
                    text: '500 credits'
                },  
                {   
                    value: 150,
                    currency: '€',
                    text: '5 000 credits'
                },  
                {   
                    value: 45,
                    currency: '€',
                    text: '1 000 credits'
                },  
                {   
                    value: 300,
                    currency: '€',
                    text: '10 000 credits'
                },  
                {   
                    value: 80,
                    currency: '€',
                    text: '2 000 credits'
                }
            ],
            hideSlogan: false,
            creditsWord: 'credits'
        }
        this.data = data || {};
        for (const key in _defaults) {
          if (!this.data[key]) {
            this.data[key] = _defaults[key];
          }
        };
        this.settings = [
          {
            name: 'hideSlogan',
            icon: '<span title="Скрыть/показать слоган">HS</span>'
          }
        ]
        this.wrapper = undefined;
        this.focusedEl = null;
  }

    render() {
        const rootNode = document.createElement('div');
        rootNode.setAttribute('class', 'credits-prices');
        this.wrapper = rootNode;


        ReactDOM.render(
            (
                <CreditsPricesTool prices={this.data.prices} />
            ),
            rootNode);
        
        return rootNode
    }
}

export default creditsPrices