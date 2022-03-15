import React from "react";
import ReactDom from 'react-dom';
import ServisePackagesPricelistTool from "../toolsComponents/servisePackagesPricelistTool";

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
        name: 'show_gold',
        icon: `<span class="rect-control orange" title="Показать/скрыть: Gold">G</span>`
      },
      {
        name: 'show_premium',
        icon: `<span class="rect-control green" title="Показать/скрыть: Premium">P</span>`
      },
      {
        name: 'show_standard',
        icon: `<span class="rect-control dark" title="Показать/скрыть: Standard">S</span>`
      },
      {
        name: 'premiumType=price_default',
        icon: `<span title="Премиум - без лого"><del>L</del></span>`
      },
      {
        name: 'premiumType=price_withLogo',
        icon: `<span title="Премиум - с лого"><ins>L</ins></span>`
      },
      {
        name: 'goldType=price_default',
        icon: `<span title="Gold - без баннера"><del>T1</del></span>`
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
        name: 'goldType=price_withoutLogo',
        icon: `<span title="Gold - без баннера и логотипа"><del>L</del></span>`
      }
    ];   
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