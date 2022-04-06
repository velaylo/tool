import React from 'react';
import ReactDOM from 'react-dom';
import CreditsInfoTool from '../toolsComponents/creditsInfoTool';

class CreditsInfo extends React.Component {
  static get toolbox() {
    return {
      icon: '<span>CI</span>',
      title: 'INFO ABOUT CREDITS'
    }
  }
    
  static get isReadOnlySupported() {
    return true;
  }

  constructor({ data, api }) {
    super()
    const _defaults = {
      text: [
        {
          def: 'TOP ad is placed first in results list. If more than one TOP ad appears in the results, random ad is shown.',
          price: `30 credits per day per ad`
        },
        {
          def: 'Ads with CUSTOM TEXT are good to announce special proposals, for example sales, discounts etc.',
          price: `20 credits per day per ad`
        },
        {
          def: 'COLOR ads are marked with contrast background color to attract more attention.',
          price: `20 credits per day per ad`
        }
      ]
    };
  
    this.data = data || {};
    this.data.contents = data.contents || {}
    this.api = api;
    for (const key in _defaults) {
      if (!this.data[key]) {
        this.data[key] = _defaults[key];
      }
    }
    this.wrapper = undefined;
  }

  render() {
    const rootNode = document.createElement('div');
    rootNode.setAttribute('data-id', `${this.data.dataId || (`07-credits-info-${btoa(Math.random()).slice(5, 12)}`)}`)
    this.wrapper = rootNode;

    ReactDOM.render(
        (
            <CreditsInfoTool data={this.data}/>
        ),
        rootNode);
    
    return rootNode
  }

  _clean(text) {
    const sanitizerConfig = {
      span: function(el) {
        return /orange|green|blue/.test([ ...el.classList ].join(' '));
      }
    }

    return this.api.sanitizer.clean(text, sanitizerConfig);
  }

  save(el) {
    const contents = [ ...el.querySelectorAll('[data-value-content][data-key]') ].reduce((acc, elem) => {
      acc[elem.dataset['key']] = elem.textContent;
      return acc;
    }, {});

    let clean = this._clean.bind(this);

    const textReducer = (acc, el) => {
      acc.push({
        def: clean(el.querySelector('.def_').innerHTML),
        price: clean(el.querySelector('.price_').innerHTML)
      });
      return acc;
    };

    return {
      dataId: el.getAttribute('data-id'),
      contents,
      text: [ ...el.querySelectorAll('.info-item') ].reduce(textReducer, [])
    }
  }
}

export default CreditsInfo