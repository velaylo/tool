import React from "react";
import ReactDOM from 'react-dom';
import BannersTool from '../toolsComponents/bannersTool'

class Banners extends React.Component {
  static get toolbox() {
    return {
      icon: '<span>B</span>',
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
          showPromoText: false,
          showLeft: true,
          showRight: true,
          showCrossed: true,
          showDivider: true,
          showBottomRow: true,
          // rightColor: 'blue'
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
          showPromoText: false,
          showLeft: true,
          showRight: true,
          showCrossed: true,
          showDivider: true,
          showBottomRow: true,
          // rightColor: 'blue'
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
}

export default Banners