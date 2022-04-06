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
        this.data.contents = data.contents || {}
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

    renderSettings() {
      const wrapper = document.createElement('div');
      this.settings.forEach(tune => {
        let button = document.createElement('div');
        button.classList.add('cdx-settings-button');
        button.innerHTML = tune.icon;
        wrapper.appendChild(button);

        button.addEventListener('click', () => {
          this._toggleTune(tune.name);
        })
      });
      return wrapper;
    }

    _toggleTune(tuneName) {
      switch(tuneName) {
        case 'hideSlogan': this._toggleHideSlogan(); break;
      }
    }
  
    _toggleHideSlogan() {
      let slogan = this.wrapper.querySelector('.slogan');
      slogan.hidden = !slogan.hidden;
    }

  render() {
    const rootNode = document.createElement('div');
    rootNode.setAttribute('data-id', `${this.data.dataId || (`06-credits-prices-${btoa(Math.random()).slice(5, 12)}`)}`)
    this.wrapper = rootNode;
    
    ReactDOM.render(
        (
            <CreditsPricesTool data={this.data} />
        ),
        rootNode);
    
    return rootNode
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
      hideSlogan: el.querySelector('.slogan').hidden
    }
  }

}

export default creditsPrices