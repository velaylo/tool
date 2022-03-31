import React from "react";
import ReactDom from 'react-dom';
import ServisePackagesPricelistTool from "../toolsComponents/servisePackagesPricelistTool";
import StyledServicePackagesList from "../components/packageList";

class ServisePackagesPricelist extends React.Component {
  static get toolbox() {
      return {
          icon: '<span>SPP</span>',
          title: 'Servise Packages PriceList'
      };
  }

  static get isReadOnlySupported() {
      return true;
  }

  constructor ({ data }) {
    super();
    const _defaults = {
      lists: {
        list_standard: [    
          'Your ads in 31 language versions',
          'Up to 15 photos per ad',
          'Profile of the company on the site',
          'Basic statistics',
          'Personal account manager',
          'Manual adding of ads'
        ],
        list_premium: [
          'Все услуги пакета STANDARD',
          'Up to 20 photos per ad',
          'Possibility to upload video for each ad',
          'Status "Reliable"',
          '"Official Dealer" status',
          'Automatic transfer of your stock (discussed individually)',
          'Automatic update (if possible technically)',
          'Links to your social media',
          'Link to your personal web-site',
          'Link to your Youtube chanel or video about the company'
        ],
        list_premium_plus: [
          'Все услуги пакета PREMIUM',
          'Unlim photos per each ad',
          'Basic statistics + mailing',
          'Remarketing, number of showings included 10000',
          'Premium promotion (credits)',
          'Additonal promotion in our social media (Instagram, Facebook)',
          'Banner',
          'Scanner of the stock from personal web-site (if possible technically)',
          `Access to "I'm looking for" messages`,
          'Special offer on website development',
          'Export file with stock - Used machine integration for your website',
          '-90% on banners on sites-satellites',
          'Text advertising in Google for your ads (5)'
        ],
        list_gold: [
          'Все услуги пакета PREMIUM PLUS',
          'Detailed statistics + mailing',
          'Priority Service',
          'Remarketing, number of showings included 20000',
          'Logo in "Top Sellers"',
          'Profile of the company + Article',
          'Personal dealer page design (special offer)',
          'Concierge of ads (old ad reminder)',
          'Text advertising in Google for your ads',
          'Access to account control panel for several emails / managers',
          'Logo in listing',
          'Услуги seo аудита'
        ],
        list_platinum: [
          'Все услуги пакета GOLD',
          'Дополнительный имиджевый статус',
          'Access to special promotion tools',
          'Remarketing, number of showings included 30000',
          'Text advertising in Google for your ads (12)',
          'Personalized dealer page design',
          'Приоритетный доступ к новым рекламным возможностям',
          'Stock analysis (business analysis)'
        ]
      },
      prices: [],
      show_gold: true,
      show_premium: true,
      show_standard: true

    }
    this.data = data;
    for (const key in _defaults) {
        if (!this.data[key]) {
            this.data[key] = _defaults[key];
        }
    }
      
    this.pricesCurrentId = Math.max(1, ...this.data.prices.map(({ id }) => id));
    this.wrapper = undefined;
    this.settings = [
      {
        name: 'add_standard',
        icon: `<span class="rect-control" data-package="standard" title="Показать/скрыть: Standard">S</span>`
      },
      {
        name: 'add_premium',
        icon: `<span class="rect-control" data-package="premium" title="Показать/скрыть: Premium">Pr</span>`
      },
      {
        name: 'add_premium_plus',
        icon: `<span class="rect-control" data-package="premium_plus" title="Показать/скрыть: Premium Plus">PP</span>`
      },
      {
        name: 'add_gold',
        icon: `<span class="rect-control" data-package="gold" title="Показать/скрыть: Gold">G</span>`
      },
      {
        name: 'add_platinum',
        icon: `<span class="rect-control" data-package="platinum" title="Показать/скрыть: Platinum">Pl</span>`
      },
      {
        name: 'goldType=price_withoutLogo',
        icon: `<span title="Gold - без логотипа"><del>NL</del></span>`
      },
      {
        name: 'goldType=price_withLogo',
        icon: `<span title="Gold - c логотипом"><del>L</del></span>`
      },
      {
        name: 'goldType=price_withBannerT1',
        icon: `<span title="Gold - с баннером T1"><ins>T1</ins></span>`
      },
      {
        name: 'goldType=price_withBannerT2',
        icon: `<span title="Gold - с баннером T2"><ins>T2</ins></span>`
      },
      {
        name: 'platinumType=price_withBannerT1',
        icon: `<span title="Platinum - с баннером T1"><ins>T1</ins></span>`
      },
      {
        name: 'platinumType=price_withBannerT2',
        icon: `<span title="Platinum - с баннером T2"><ins>T2</ins></span>`
      }
    ];  
    this._addPriceModals = {
      l: {
        exists: false,
        construct: function(form) {
          this._add_makeDetails({
            form,
            values: ['EN', 'DE', 'PL', 'FR', 'ES', 'IT', 'RU', 'TR'],
            summaryText: 'Язык',
            paramName: 'l',
            next: 'ads'
          });
        },
        boundHandler: null,
        el: null
      },
      ads: {
        exists: false,
        construct: function(form) {
          this._add_makeDetails({
            form,
            values: ['10', '15', '20', '25', '30', '35', '40', '50', '60', '70', '75', '80', '85', '90', '95', '100', '125', '130', '150', '175', '200', '300', '400', '500', '600', '750', '1000'],
            summaryText: 'Количество объявлений',
            paramName: 'ads',
            next: 'months'
          });
        },
        boundHandler: null,
        el: null
      },
      months: {
        exists: false,
        construct: function(form) {
          this._add_makeDetails({
            form,
            values: ['6', '12'],
            summaryText: 'Количество месяцев',
            paramName: 'months',
            next: 'section',
            onSelectCallback: function(value) {
              localStorage.setItem('offer2021_months_package', JSON.stringify(value));
            }
          });
        },
        boundHandler: null,
        el: null
      },
      section: {
        exists: false,
        construct: function(form) {
          this._add_makeDetails({
            form,
            values: ['tru', 'agr', 'frk', 'att', 'spr'],
            summaryText: 'Тип техники',
            paramName: 'section',
            next: 'submit'
          });
        },
        boundHandler: null,
        el: null
      },
      submit: {
        exists: false,
        construct: function(form) {
          let button = document.createElement('button')
          button.classList.add('co-btn');
          button.textContent = "Создать ценники"
          button.setAttribute('type', 'submit')

          form.appendChild(button);
          this._addPriceModals.submit.exists = true;
        }
      }
    };
  }

  _renderPrices() {
    this.data.prices.forEach(priceObj => {
      this._renderSinglePriceRow(priceObj);
    });
  }

  _priceDropdownHandler(details, form, next, callback) {
    return function(event) {
      if (event.target.tagName === 'INPUT' && !event.target.hasAttribute('data-bypass')) {
        let _val = details.querySelector('[data-selected]');
        _val.innerText = event.target.value;
        details.open = false;

        if (next) {
          let _next = this._addPriceModals[next];
          if (!_next.exists) {
            _next.construct.call(this, form);
          } else {
            details.nextElementSibling.tagName === 'DETAILS' && (details.nextElementSibling.open = true);
          }
        }

        if (callback) {
          callback(event.target.value);
        }
      }
    }
  }

  _add_makeDetails(opts) {
    let { form, summaryText, values, paramName, next, onSelectCallback, bypassSelect } = opts;
    let details = document.createElement('details');
    details.classList.add('addprice-details');
    details.setAttribute('open', 'true');
    form.appendChild(details);

    let summary = document.createElement('summary');
    summary.innerHTML = `${summaryText}: <span data-selected></span>`;
    details.appendChild(summary);

    let dropdown = document.createElement('div');
    dropdown.classList.add('addprice-dropdown');
    details.appendChild(dropdown);

    for (const value of values) {
      let label = document.createElement('label');
      label.classList.add('details-label');
      label.textContent = `${value}`;
      label.setAttribute('data-value', `${value}`)
      
      let btn = document.createElement('input');
      btn.setAttribute('type', 'radio');
      btn.setAttribute('name', `${paramName}`);
      btn.setAttribute('value', `${value}`);

      if (bypassSelect) {
        btn.setAttribute('data-bypass', '');
      }
      label.appendChild(btn);
      dropdown.appendChild(label);
    }

    // dropdown handler
    this._addPriceModals[paramName].boundHandler = this._priceDropdownHandler(details, form, next, onSelectCallback).bind(this);

    dropdown.addEventListener('click', this._addPriceModals[paramName].boundHandler);
    this._addPriceModals[paramName].el = dropdown;
    this._addPriceModals[paramName].exists = true; 
  }

  _renderSinglePriceRow(priceObj, id) {
    priceObj = this._normalizePriceObj(priceObj, id);

    let _render = (price, currency, isCrossed = false, enableCrossed = false) => `<div ${isCrossed ? 'class="crossed_" data-price-crossed' : 'data-price-default'}${isCrossed && !enableCrossed ? ' hidden' : ''}>
      <span data-price-currency contenteditable>${currency}</span>
      <span data-price-value contenteditable>${price.price_value}</span>
      <span data-price-text contenteditable>${price.price_text}</span>
    </div>
    `;

    for (const priceKey in priceObj.prices) {
      try {
        if (!id) {
          id = priceObj.id;
        }
        let { topText, currency, price_crossed } = priceObj.prices[priceKey];
        
        // premium and gold price type
        let price_default;
        if (priceKey === 'price_premium') {
          price_default = priceObj.prices[priceKey][this.premiumType] || priceObj.prices[priceKey].price_default;
        } else if (priceKey === 'price_gold') {
          price_default = priceObj.prices[priceKey][this.goldType] || priceObj.prices[priceKey].price_default;
        } else {
          price_default = priceObj.prices[priceKey].price_default;
        }

        let ul = this.wrapper.querySelector(`ul[data-price=${priceKey}]`);

        let li = document.createElement('li');
        li.classList.add('price');
        li.setAttribute('data-price-id', id)

        li.innerHTML = `<div data-price-toptext contenteditable>${topText}</div>
        ${_render(price_crossed, currency, true, priceObj.enableCrossed)}
        ${_render(price_default, currency)}        
        <div data-id="${id}" class="list-control-button remove_ cdx-settings-button">✖</div>
        <div class="list-control-button toggle-discount-visibility_ cdx-settings-button" title="скрыть скидку только в этом пакете">👁️</div>
        <div data-id="${id}" class="list-control-button discount_ cdx-settings-button">%</div>`;
        li._prices = priceObj.prices[priceKey];
        ul.appendChild(li);
        li.querySelector('.remove_').addEventListener('click', this.onPriceRemove = (this.onPriceRemove || this._onPriceRemove.bind(this)));
        li.querySelector('.discount_').addEventListener('click', this.onToggleDiscount = (this.onToggleDiscount || this._onToggleDiscount.bind(this)));
        li.querySelector('.toggle-discount-visibility_').addEventListener('click', this.toggleDiscountVisibility = (this.toggleDiscountVisibility || this._toggleDiscountVisibility.bind(this)));
      } catch (error) {
        console.error(error);
      }
    }
  }

  _onPriceRemove(event) {
    let target = event.target;
    let priceId = target.dataset['id'];
    let allPrices = this.wrapper.querySelectorAll(`li[data-price-id="${priceId}"]`);
    allPrices.forEach(li => {
      li.querySelector('.remove_').removeEventListener('click', this.onPriceRemove);
      li.querySelector('.discount_').removeEventListener('click', this.onToggleDiscount);
      li.querySelector('.toggle-discount-visibility_').removeEventListener('click', this.toggleDiscountVisibility);
      li.parentNode.removeChild(li);
    });
  }

  _onToggleDiscount(event) {
    let target = event.target;
    let priceId = target.dataset['id'];
    let allPrices = this.wrapper.querySelectorAll(`li[data-price-id="${priceId}"]`);
    allPrices.forEach(li => {
      li.querySelector('.crossed_').hidden = !li.querySelector('.crossed_').hidden;
    });
  }

  _toggleDiscountVisibility(event) {
    let target = event.target;
    let _crossed = target.closest(`li`).querySelector('.crossed_');
    _crossed.classList.toggle('hidden_');
  }

  _normalizePriceObj(priceObj, id) {
    if ('enableCrossed' in priceObj) {
      return priceObj;
    }

    // TODO: adapt for package prices (3 types)
    const { standard, premium, premium_plus, gold_nologo, gold_logo, gold_banner1, gold_banner2, platinum_banner1, platinum_banner2,  title, label_mo, label_total } = priceObj;
    let months = Number((JSON.parse(localStorage.getItem('offer2021_months_package'))) || "12");
    
    let returnObj = { 
      enableCrossed: false,  
      id,
      prices: {
        price_standard: {
          topText: title,
          currency: '€',
          price_default: {
            price_value: String((Math.ceil(standard * 10 / months)) / 10).replace(/(\.\d)/, `<small style="font-size: 0.6em;">$1</small>`),
            price_text: `/ ${label_mo} (${label_total} ${standard}€)`
          },
          price_crossed: {
            price_value: String((Math.ceil(standard * 10 / months)) / 10).replace(/(\.\d)/, `<small style="font-size: 0.6em;">$1</small>`),
            price_text: `/ ${label_mo} (${label_total} ${standard}€)`
          }
        },
        price_premium: {
          topText: title,
          currency: '€',
          price_default: {
            price_value: String((Math.ceil(premium * 10 / months)) / 10).replace(/(\.\d)/, `<small style="font-size: 0.6em;">$1</small>`),
            price_text: `/ ${label_mo} (${label_total} ${premium}€)`
          },
          price_crossed: {
            price_value: String((Math.ceil(premium * 10 / months)) / 10).replace(/(\.\d)/, `<small style="font-size: 0.6em;">$1</small>`),
            price_text: `/ ${label_mo} (${label_total} ${premium}€)`
          }
        },
        price_premium_plus: {
          topText: title,
          currency: '€',
          price_default: {
            price_value: String((Math.ceil(premium_plus * 10 / months)) / 10).replace(/(\.\d)/, `<small style="font-size: 0.6em;">$1</small>`),
            price_text: `/ ${label_mo} (${label_total} ${premium_plus}€)`
          },
          price_crossed: {
            price_value: String((Math.ceil(premium_plus * 10 / months)) / 10).replace(/(\.\d)/, `<small style="font-size: 0.6em;">$1</small>`),
            price_text: `/ ${label_mo} (${label_total} ${premium_plus}€)`
          }
        },
        price_gold: {
          topText: title,
          currency: '€',
          price_default: {
            price_value: String(Math.ceil(gold_nologo * 10 / months) / 10).replace(/(\.\d)/, `<small style="font-size: 0.6em;">$1</small>`),
            price_text: `/ ${label_mo} (${label_total} ${gold_nologo}€)`
          },
          price_crossed: {
            price_value: String(Math.ceil(gold_nologo * 10 / months) / 10).replace(/(\.\d)/, `<small style="font-size: 0.6em;">$1</small>`),
            price_text: `/ ${label_mo} (${label_total} ${gold_nologo}€)`
          },
          price_withLogo: {
            price_value: String(Math.ceil(gold_logo * 10 / months) / 10).replace(/(\.\d)/, `<small style="font-size: 0.6em;">$1</small>`),
            price_text: `/ ${label_mo} (${label_total} ${gold_logo}€)`
          },
          price_withoutLogo: {
            price_value: String(Math.ceil(gold_nologo * 10 / months) / 10).replace(/(\.\d)/, `<small style="font-size: 0.6em;">$1</small>`),
            price_text: `/ ${label_mo} (${label_total} ${gold_nologo}€)`
          },
          price_withBannerT1: {
            price_value: String(Math.ceil(gold_banner1 * 10 / months) / 10).replace(/(\.\d)/, `<small style="font-size: 0.6em;">$1</small>`),
            price_text: `/ ${label_mo} (${label_total} ${gold_banner1}€)`
          },
          price_withBannerT2: {
            price_value: String(Math.ceil(gold_banner2 * 10 / months) / 10).replace(/(\.\d)/, `<small style="font-size: 0.6em;">$1</small>`),
            price_text: `/ ${label_mo} (${label_total} ${gold_banner2}€)`
          }
        }, 
        price_platinum: {
          topText: title,
          currency: '€',
          price_default: {
            price_value: String((Math.ceil(platinum_banner1 * 10 / months)) / 10).replace(/(\.\d)/, `<small style="font-size: 0.6em;">$1</small>`),
            price_text: `/ ${label_mo} (${label_total} ${platinum_banner1}€)`
          },
          price_crossed: {
            price_value: String((Math.ceil(platinum_banner1 * 10 / months)) / 10).replace(/(\.\d)/, `<small style="font-size: 0.6em;">$1</small>`),
            price_text: `/ ${label_mo} (${label_total} ${platinum_banner1}€)`
          },
          price_withBannerT1: {
            price_value: String(Math.ceil(platinum_banner1 * 10 / months) / 10).replace(/(\.\d)/, `<small style="font-size: 0.6em;">$1</small>`),
            price_text: `/ ${label_mo} (${label_total} ${platinum_banner1}€)`
          },
          price_withBannerT2: {
            price_value: String(Math.ceil(platinum_banner2 * 10 / months) / 10).replace(/(\.\d)/, `<small style="font-size: 0.6em;">$1</small>`),
            price_text: `/ ${label_mo} (${label_total} ${platinum_banner2}€)`
          },
        }
      }
    };

    localStorage.removeItem('offer2021_months_package');
    return returnObj;
  }

  _savePrices() {
    let prices = [];
    let prices_standard = this.wrapper.querySelector('ul[data-price=price_standard]')
      , prices_premium = this.wrapper.querySelector('ul[data-price=price_premium]')
      , prices_gold = this.wrapper.querySelector('ul[data-price=price_gold]')
      , prices_premium_plus = this.wrapper.querySelector('ul[data-price=price_premium_plus]')
      , prices_platinum = this.wrapper.querySelector('ul[data-price=price_platinum]')
    
    let _countBase = prices_standard.querySelectorAll('li').length;

    let _handle = li => {
      return {
        topText: li.querySelector('[data-price-toptext]').textContent,
        currency: li.querySelector('[data-price-currency]').textContent,
        price_default: {
          price_value: li.querySelector('[data-price-default] [data-price-value]').textContent,
          price_text: li.querySelector('[data-price-default] [data-price-text]').textContent
        },
        price_crossed: li.querySelector('[data-price-crossed]:not([hidden])') ? {
          price_value: li.querySelector('[data-price-crossed] [data-price-value]').textContent,
          price_text: li.querySelector('[data-price-crossed] [data-price-text]').textContent
        } : { price_value: '...', price_text: '...' }
      };
    };

    for (let i = 0; i < _countBase; i++) {
      prices.push({
        id: Number(prices_standard.querySelectorAll(`li`)[i].dataset.priceId),
        enableCrossed: !!prices_standard.querySelectorAll(`li`)[i].querySelector('[data-price-crossed]:not([hidden])'),
        prices: {
          price_standard: _handle(prices_standard.querySelectorAll(`li`)[i]),
          price_premium: _handle(prices_premium.querySelectorAll(`li`)[i]),
          price_gold: _handle(prices_gold.querySelectorAll(`li`)[i]),
          price_premium_plus: _handle(prices_premium_plus.querySelectorAll(`li`)[i]),
          price_platinum: _handle(prices_platinum.querySelectorAll(`li`)[i]),
        }
      });
    }

    return prices;
  }

  renderSettings() {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = `
      <div class='subwrapper'>
        <div class='tunes-title' style="text-align: center; font-size:18px; line-height:19px;">Добавить пакеты</div>
        <form class="tunes_" data-tune-type="add">
          <button class='add-type-list' type='submit'>Добавить</button>
        </form>
      </div>
      <div class="subwrapper">
        <div class="tunes-title">Тип GOLD</div>
        <div class="tunes_" data-tune-type="goldType"></div>
      </div>
      <div class="subwrapper">
        <div class="tunes-title">Тип PLATINUM</div>
        <div class="tunes_" data-tune-type="platinumType"></div>
      </div>
    `
    this.settings.forEach(tune => {

      if(tune.name.includes('add_')) {
        let buttonLabel = document.createElement('label')
        buttonLabel.classList.add('cdx-settings-button',  `${tune.name.replace(/add_/gi, '')}`);
        
        let button = document.createElement('input');
        button.setAttribute('type', 'checkbox')
        button.setAttribute('value', `${tune.name.replace(/add_/gi, '')}`)

        buttonLabel.innerHTML = tune.icon
        buttonLabel.prepend(button)

        let subwrapper = [...wrapper.querySelectorAll('.tunes_')].find(sw => {
          let _name = tune.name.indexOf('=') === -1 ? tune.name.split('_')[0] : tune.name.split('=')[0];
          return sw.dataset['tuneType'].indexOf(_name) === 0;
        });

        subwrapper.prepend(buttonLabel);

        let checkedValue = []

        subwrapper.querySelector('button.add-type-list').addEventListener('click', getCheckedCheckBoxes)

        function getCheckedCheckBoxes(event) {
          event.preventDefault()
          let checkboxes = subwrapper.querySelectorAll('input[type="checkbox"]');
          let checkboxesChecked = [];
          for (let index = 0; index < checkboxes.length; index++) {
            if (checkboxes[index].checked) {
              checkboxesChecked.push(checkboxes[index].value);
            }
          }

          checkedValue=checkboxesChecked

          displayCheckedList(checkboxesChecked)
        }

        function displayCheckedList(checkedLists) {
          let mainWrapper = document.querySelector('.packages-pricelist--content')
          let wrapper = [...mainWrapper.querySelectorAll('.package-wrapper')]
          checkedLists.forEach(type => {
            wrapper.forEach(list => {
              if(list.getAttribute('data-package') === type) {
                list.style.display = 'flex'
              }
            })
          })

          wrapper.forEach(list => {
            list.style.display = 'none'
          })

          wrapper.forEach(list => {

            checkedLists.forEach(type => {
              if(list.getAttribute('data-package') === type) {
                list.style.display = 'flex'
              }
            })
          })
        }
      } else if(tune.name.includes('Type')) {
        let buttonPrice = document.createElement('div');
        buttonPrice.classList.add('cdx-settings-button');
        buttonPrice.innerHTML = tune.icon;

        let subwrapper = [...wrapper.querySelectorAll('.tunes_')].find(sw => {
          let _name = tune.name.indexOf('=') === -1 ? tune.name.split('_')[0] : tune.name.split('=')[0];
          return sw.dataset['tuneType'].indexOf(_name) === 0;
        });

        subwrapper.appendChild(buttonPrice)

        buttonPrice.addEventListener('click', () => {
          let activeButton = [...document.querySelectorAll('.active-settings-button')];
          activeButton.forEach(item => item.classList.remove('active-settings-button'))

          buttonPrice.classList.add('active-settings-button')
          this._toggleTune(tune.name);
          if (tune.name.indexOf('show') === 0) {
            buttonPrice.classList.toggle('crossed');
          }
        });
      }
    })
  
    return wrapper
  }

  _toggleTune(tuneName) {
    if (tuneName.indexOf('Type=') !== -1) {
      let [ priceTypeProp, priceTypeValue ] = tuneName.split('=');
      this[priceTypeProp] = priceTypeValue;
      this.wrapper.dispatchEvent(new CustomEvent('price-type-change', {
        detail: {
          changedPackage: priceTypeProp.split('Type')[0],
          value: priceTypeValue
        }
      }));
    }
  }

  _onPriceTypeChange(event) {
    const { changedPackage, value } = event.detail;
    const packagePrices = this.wrapper.querySelectorAll(`[data-package="${changedPackage}"] li.price`);
    console.log(packagePrices)
    packagePrices.forEach(li => {
      if (!('_prices' in li)) {
        console.warn('Price object has not been stored in li.price.');
        return false;
      }
      let newPrice = li._prices[value];
      li.querySelector('[data-price-default] [data-price-value]').innerHTML = newPrice.price_value;
      li.querySelector('[data-price-default] [data-price-text]').innerHTML = newPrice.price_text;
    });
  }

  render() {
    const rootNode = document.createElement('div');
    rootNode.setAttribute('data-id', `${this.data.dataId || (`03-packages-pricelist-${btoa(Math.random()).slice(5, 12)}`)}`)

    this.wrapper = rootNode;
    this.wrapper.addEventListener('price-type-change', this.onPriceTypeChange = this._onPriceTypeChange.bind(this));

    ReactDom.render(
      (
        <ServisePackagesPricelistTool
          lists={this.data.lists}
          this={this}
          addPriceModals={this._addPriceModals} />
      ), rootNode);

    return rootNode;
  }

  save(el) {
    const contents = [ ...el.querySelectorAll('[data-value-content][data-key]') ].reduce((acc, elem) => {
      acc[elem.dataset['key']] = elem.textContent;
      return acc;
    }, {});

    const lists = [ ...el.querySelectorAll('ul[data-list-type]') ].reduce((acc, list) => {
      let key = 'list_' + list.dataset.listType;
      let vals = [ ...list.querySelectorAll('li') ].map(li => li.textContent);
      acc[key] = vals;
      return acc;
    }, {});

    const prices = this._savePrices();

    return {
      dataId: el.getAttribute('data-id'),
      contents,
      lists,
      prices,
      show_standard: !(el.querySelector('[data-package=standard]').hidden),
      show_premium: !(el.querySelector('[data-package=premium]').hidden),
      show_premium_plus: !(el.querySelector('[data-package=premium_plus]').hidden)
      // todo: add props
    }
  }

}

export default ServisePackagesPricelist