import React from "react";
import ReactDOM from 'react-dom';
import BannersTool from '../toolsComponents/bannersTool'

class Banners extends React.Component {
  static get toolbox() {
    return {
      icon: '<span><b>B</b></span>',
      title: 'Banners'
    };
  }
    
  static get isReadOnlySupported() {
    return true;
  }

  constructor({ data }) {
    super();
    const _defaults = {
      isSingleColumn: false,
      prices: [
        {
          left: {
            currency: '€',
            topText: 'Banner T1 for 6 months',
            priceValue: '100',
            priceText: ' / mo. (total 600€)'
          },
          right: {
            currency: '€',
            topText: 'Banner T1 for 12 months',
            priceValue: '200',
            priceText: ' / mo. (total 1200€)'
          },
          showLeft: true,
          showRight: true,
        },
        {
          left: {
            currency: '€',
            topText: 'Categories for 6 months',
            priceValue: '100',
            priceText: ' / mo. (total 600€)'
          },
          right: {
            currency: '€',
            topText: 'Categories for 12 months',
            priceValue: '100',
            priceText: ' / mo. (total 1200€)'
          },
          showLeft: true,
          showRight: true,
        }
      ]
    };
    this.data = data || {};
    for (const key in _defaults) {
      if (!this.data[key]) {
        this.data[key] = _defaults[key];
      }
    }
    this.wrapper = undefined;
    this.lastActivePrice = null;
    this.toolbar = null;
  }

  render() {
    const rootNode = document.createElement('div');
    rootNode.setAttribute('data-id', `${this.data.dataId || (`10-banners-${btoa(Math.random()).slice(5, 12)}`)}`)
        
    this.wrapper = rootNode
        
    ReactDOM.render(
      (
        <BannersTool prices={this.data.prices} />
      ), rootNode
    )

    return this.wrapper
  }

  save(el) {
    const contents = [ ...el.querySelectorAll('[data-value-content][data-key]') ].reduce((acc, elem) => {
      acc[elem.dataset['key']] = elem.textContent;
      return acc;
    }, {});

    const priceReducer = (acc, item) => {
      let toPush = { left: {}, right: {} };
      toPush.showLeft = !item.querySelector('.side_.left_').hidden;
      toPush.showRight = !item.querySelector('.side_.right_').hidden;

      ['left', 'right'].forEach(s => {
        let side = item.querySelector(`.${s}_`);
        let sideObj = toPush[s];
        sideObj.currency = side.querySelector('.currency_').textContent;
        sideObj.topText = side.querySelector('.top-text_').textContent;
        sideObj.priceValue = side.querySelector('.price-main_:not(.crossed_) .value_').textContent;
        sideObj.priceText = side.querySelector('.price-main_:not(.crossed_) .text_').textContent;
      });

      acc.push(toPush);
      return acc;
    };

    return {
      dataId: el.getAttribute('data-id'),
      contents,
      prices: [ ...el.querySelectorAll('.price-item') ].reduce(priceReducer, [])
    }
  }
}

export default Banners