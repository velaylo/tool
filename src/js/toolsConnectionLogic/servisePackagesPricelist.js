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
          'Ваши объявления на 30 языковых версиях',
          'До 15 фотографий на каждое объявление ',
          'Визитная карточка компании на сайте',
          'Базовая статистика',
          'Персональный аккаунт-менеджер',
          'Ручное добавление объявлений'
        ],
        list_premium: [
          'Все услуги пакета STANDARD',
          'До 20 фотографий на каждое объявление',
          'Возможность загружать видео в каждом объявлении',
          'Статус "надежный"',
          'Статус официального дилера',
          'Автоматический перенос данных',
          'Автоматическое обновление',
          'Ссылки на все ваши соц.сети',
          'Ссылка на Ваш корпоративный веб-сайт',
          'Ссылка на Ваш YouTube-канал или видео о фирме'
        ],
        list_premium_plus: [
          'Все услуги пакета PREMIUM',
          'Неограниченное количество фотографий на каждое объявление',
          'Базовая статистика + рассылка',
          'Ремаркетинг',
          'Премиум-продвижение (кредиты)',
          'Дополнительное продвижение Вашей компании в наших соц.сетях',
          'Баннерная реклама',
          'Разработка персонального сканера с Вашего корпоративного веб-сайта',
          'Доступ к объявлениям “Заказы техники”',
          'Текстовая реклама для 5 объявлений',
          'Специльные условия на разработку сайта',
          'Экспорт-файл со стоком Used machine integration for your website',
          '-90% на банеры на сайтах сателлитах',
          'Текстовая реклама в Google для ваших объявлений (5)'
        ],
        list_gold: [
          'Все услуги пакета PREMIUM PLUS',
          'Расширенная статистика + рассылка',
          'Приоритетное обслуживание',
          'Ремаркетинг 10K',
          'Ваш логотип в рубрике «Ведущие продавцы» ',
          'Визитная карточка + статья на сайте',
          'Разработка персональной страницы дилера на специальных условиях',
          'Консьерж объявлений (напоминание о старых объявлениях)',
          'Текстовая реклама в Google для ваших объявлений',
          'Доступ к КП с нескольких Email / менеджеров аккауната',
          'Логотип в листингее',
          'Услуги seo аудита'
        ],
        list_platinum: [
          'Все услуги пакета GOLD',
          'Дополнительный имиджевый статус',
          'Доступ к специальным рекламным возможностям',
          'Ремаркетинг 30K',
          'Текстовая реклама в Google для ваших объявлений (12)',
          'Оформление персонализированной страницы дилера',
          'Приоритетный доступ к новым рекламным возможностям',
          'Анализ техники (бизнес анализ)'
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
        name: 'add_premium-plus',
        icon: `<span class="rect-control" data-package="premium-plus" title="Показать/скрыть: Premium Plus">PP</span>`
      },
      {
        name: 'add_gold',
        icon: `<span class="rect-control" data-package="gold" title="Показать/скрыть: Gold">G</span>`
      },
      {
        name: 'add_platinum',
        icon: `<span class="rect-control" data-package="platinum" title="Показать/скрыть: Platinum">Pl</span>`
      },
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
    console.log(priceObj)
    //priceObj = this._normalizePriceObj(priceObj, id);
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
        li.setAttribute('data-price-id', 'id')

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

  renderSettings() {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = `
      <div class='subwrapper'>
        <div class='tunes-title' style="text-align: center; font-size:18px; line-height:19px;">Добавить пакеты</div>
        <form class="tunes_" data-tune-type="add">
          <button class='add-type-list' type='submit'>Добавить</button>
        </form>
      </div>
    `
    this.settings.forEach(tune => {
      let buttonLabel = document.createElement('label')
      buttonLabel.classList.add('cdx-settings-button',  `${tune.name.split('_')[1]}`);
      
      let button = document.createElement('input');
      button.setAttribute('type', 'checkbox')
      button.setAttribute('value', `${tune.name.split('_')[1]}`)

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

    })
  
    return wrapper
  }

  render() {
    const rootNode = document.createElement('div');
    rootNode.setAttribute('data-id', `${this.data.dataId || (`03-packages-pricelist-${btoa(Math.random()).slice(5, 12)}`)}`)

    this.wrapper = rootNode;

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
      let key = list.dataset['list'];
      let vals = [ ...list.querySelectorAll('li') ].map(li => li.textContent);
      acc[key] = vals;
      return acc;
    }, {});

    //const prices = this._savePrices();

    return {
      dataId: el.getAttribute('data-id'),
      contents,
      lists,
      //prices,
      //show_standard: !(el.querySelector('[data-package=standard]').hidden),
      //show_premium: !(el.querySelector('[data-package=premium]').hidden),
      //show_gold: !(el.querySelector('[data-package=gold]').hidden)
      // todo: add props
    }
  }

}

export default ServisePackagesPricelist