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
        name: 'add_premium_plus',
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
        console.log(checkedValue)
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
    rootNode.setAttribute('class', 'packages-pricelist');

    this.wrapper = rootNode;

    ReactDom.render(
      (
        <ServisePackagesPricelistTool lists={this.data.lists} />
      ), rootNode);

    return rootNode;
  }

}

export default ServisePackagesPricelist