import React from "react";
import ReactDOM from 'react-dom';
import PricesMainTool from "../toolsComponents/pricesMainTool";

class PricesMain extends React.Component {
    static get toolbox() {
        return {
          icon: '<span><b>P</b></span>',
          title: 'Prices'
        }
    }
    
    static get isReadOnlySupported() {
        return true;
    }

    constructor({ data }) {
        super()

        const _defaults = {
            isSingleColumn: false,
            prices: [
              {
                left: {
                  promoText: 'Promo Text',
                  currency: '€',
                  topText: '100 ads for 6 month',
                  priceValue: '109',
                  priceText: ' / mo. (total 654€)',
                  priceValue_crossed: '109',
                  priceText_crossed: ' / mo. (total 654€)',
                  bottomRow: '1 month for free'
                },
                right: {
                  currency: '€',
                  topText: '100 ads for 12 month',
                  priceValue: '109',
                  priceText: ' / mo. (total 1308€)',
                  priceValue_crossed: '109',
                  priceText_crossed: ' / mo. (total 1308€)',
                  bottomRow: '2 months for free'
                },
                showPromoText: false,
                showLeft: true,
                showRight: true,
                showCrossed: true,
                showDivider: true,
                showBottomRow: true,
              },
              {
                left: {
                  promoText: 'Promo Text',
                  currency: '€',
                  topText: '150 ads for 6 month',
                  priceValue: '119',
                  priceText: ' / mo. (total 714€)',
                  priceValue_crossed: '119',
                  priceText_crossed: ' / mo. (total 714€)',
                  bottomRow: '1 month for free'
                },
                right: {
                  currency: '€',
                  topText: '150 ads for 12 month',
                  priceValue: '119',
                  priceText: ' / mo. (total 1428€)',
                  priceValue_crossed: '119',
                  priceText_crossed: ' / mo. (total 1428€)',
                  bottomRow: '2 months for free'
                },
                showPromoText: false,
                showLeft: true,
                showRight: true,
                showCrossed: true,
                showDivider: true,
                showBottomRow: true,
              }
            ]
        };
        this.data = data || {};
        for (const key in _defaults) {
          if (!this.data[key]) {
            this.data[key] = _defaults[key];
          }
        }
    }

    render() {
        const rootNode = document.createElement('div');
        rootNode.setAttribute('class', 'prices-main');
        this.wrapper = rootNode;


        ReactDOM.render(
            (
                <PricesMainTool pricesInformation={this.data.prices} />
            ),
            rootNode);
        
        return rootNode
    }
}

export default PricesMain