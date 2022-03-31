import React from "react";
import ReactDOM from 'react-dom';
import PricesMainTool from "../toolsComponents/pricesMainTool";
import ToolbarPrice from "../components/toolbarPrice";

class PricesMain extends React.Component {
  static get toolbox() {
    return {
      icon: '<span>P</span>',
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
            topText: '600 ads for 6 months',
            priceValue: '200',
            priceText: ' / mo. (total 1200€)',
            priceValue_crossed: '200',
            priceText_crossed: ' / mo. (total 1200€)',
            bottomRow: '1 month for free'
          },
          right: {
            currency: '€',
            topText: '600 ads for 12 months',
            priceValue: '200',
            priceText: ' / mo. (total 2400€)',
            priceValue_crossed: '200',
            priceText_crossed: ' / mo. (total 2400€)',
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
            topText: '3000 ads for 6 months',
            priceValue: '1000',
            priceText: ' / mo. (total 600€)',
            priceValue_crossed: '1000',
            priceText_crossed: ' / mo. (total 600€)',
            bottomRow: '1 month for free'
          },
          right: {
            currency: '€',
            topText: '3000 ads for 12 months',
            priceValue: '1000',
            priceText: ' / mo. (total 12000€)',
            priceValue_crossed: '1000',
            priceText_crossed: ' / mo. (total 12000€)',
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

    this.wrapper = undefined;
    this.lastActivePrice = null;
    this.toolbar = null;

    this.toolbarEvents = {
      togglePromo: function(target) {
        return function(event) {
          if (event.target.classList.contains('is-disabled')) {
            return false;
          }
          this.__toggler(event, target, '.promo-text_');
          let _toggleRight = this.toolbar.querySelector('.button.toggleRight');
          if (_toggleRight) {
            _toggleRight.classList.toggle('is-disabled');
            _toggleRight.classList.toggle('is-on-promo');
          }
          this._locateToolbar(event.target.parentNode, target);
        }
      },
      // toggleDivider: function(target) {
      //   return function(event) {
      //     this.__toggler(event, target, '.divider_');
      //     this._locateToolbar(event.target.parentNode, target);
      //   }
      // },
      toggleCrossed: function(target) {
        return function(event) {
          this.__toggler(event, target, '.price-main_.crossed_');
          this._locateToolbar(event.target.parentNode, target);
        }
      },
      toggleBottomRow: function(target) {
        return function(event) {
          this.__toggler(event, target, '.bottom_, .divider_');
          this._locateToolbar(event.target.parentNode, target);
        }
      },
      toggleLeft: function(event, target) {
        if (event.target.classList.contains('is-disabled')) {
          return false;
        }

        let elsToHide = target.querySelectorAll('.side_.left_');
        elsToHide.forEach(el => {
          el.hidden = !el.hidden;
        });
        event.target.classList.toggle('is-crossed');
        
        //this.__toggleDisabled(event, target);
      },
      toggleRight: function(target) {
        return function(event) {
          if (event.target.classList.contains('is-disabled')) {
            return false;
          }
          this.__toggler(event, target, '.side_.right_');
          this.__toggleDisabled(event, target);
        }
      },
      rColor_blue: function(target) {
        return function(event) {
          this.__bgClass(event, target, 'blue');
        }
      },
      rColor_orange: function(target) {
        return function(event) {
          this.__bgClass(event, target, 'orange');
        }
      },
      rColor_green: function(target) {
        return function(event) {
          this.__bgClass(event, target, 'green');
        }
      },
      // ptColor_blue: function(target) {
      //   return function(event) {
          
      //   }
      // },
      // ptColor_orange: function(target) {
      //   return function(event) {
          
      //   }
      // },
      // ptColor_green: function(target) {
      //   return function(event) {
          
      //   }
      // },
      applyToAll: function(target) {
        return function(event) {
          let targetStates = {
            showPromoText: target.querySelector('.promo-text_').hidden,
            showLeft: target.querySelector('.side_.left_').hidden,
            showRight: target.querySelector('.side_.right_').hidden,
            showCrossed: target.querySelector('.price-main_.crossed_').hidden,
            showBottomRow: target.querySelector('.bottom_').hidden
          };
          let items = target.parentNode.querySelectorAll('.price-item');
          items.forEach(item => {
            item.querySelector('.promo-text_').hidden = targetStates.showPromoText;
            item.querySelector('.side_.left_').hidden = targetStates.showLeft;
            item.querySelector('.side_.right_').hidden = targetStates.showRight;
            item.querySelectorAll('.price-main_.crossed_').forEach(i => {
              i.hidden = targetStates.showCrossed;
            });
            item.querySelectorAll('.bottom_, .divider_').forEach(i => {
              i.hidden = targetStates.showBottomRow;
            });
          });
        }
      },
      remove: function(target) {
        return function(event) {
          let container = target.parentNode;
          container.removeChild(target);
          this._destroyToolbar(container);
        }
      }
    };

    this.settings = [
      {
        name: 'single_column',
        icon: `<span title="В один ряд"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 20 20" width="100%" height="100%"><rect x="5" y="2" rx="1" width="10" height="4" stroke="#959595" fill="#e2e2e2" /><rect x="5" y="8" rx="1" width="10" height="4" stroke="#959595" fill="#e2e2e2" /><rect x="5" y="14" rx="1" width="10" height="4" stroke="#959595" fill="#e2e2e2" /></svg></span>`
      }
    ]
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
        button.classList.toggle('crossed');
      })
    });

    return wrapper;
  }

  _toggleTune(tuneName) {
    switch(tuneName) {
      case 'single_column': 
        this.wrapper.querySelector('.prices-main--items').classList.toggle('single-column');
    }
  }

  render() {
    const rootNode = document.createElement('div');
    rootNode.setAttribute('data-id', `${this.data.dataId || (`08-prices-main-${btoa(Math.random()).slice(5, 12)}`)}`)
        
    this.wrapper = rootNode

    ReactDOM.render(
      (
        <PricesMainTool 
          prices={this.data.prices}
          context = {this}
          toolbarEvents = {this.toolbarEvents}
          toolbar = {this.toolbar}
          />
      ),rootNode);
    
    return rootNode
  }
}

export default PricesMain