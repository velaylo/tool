import React from 'react';
import ReactDOM from 'react-dom';
import ServisePackagesTextTool from '../toolsComponents/servisePackagesTextTool'


class ServisePackagesText extends React.Component {
    static get toolbox() {
        return {
            icon: '<span>SPT</span>',
            title: 'Servise Packages Text'
        };
    }

    static get isReadOnlySupported() {
        return true;
    }

    constructor({ data }) {
        super();
        const _defaults = {
          text: {
            left: [
              {
                title: 'Ad views', 
                content: 'You can see the quantity of views in your control panel'
              },
              {
                title: 'Buyers calls', 
                content: 'You can get the quantity of clicks on your phone numbers in your control panel, or from your personal manager'
              },
              {
                title: 'Direct requests', 
                content: `Buyers' requests on definite ads will be sent to your email and saved in your control panel`
              },
              {
                title: '"Wanted" Messages', 
                content: 'Messages from buyers intented in buying some kind of equipment, for example "I want to buy MAN TGX 26.480 under 70000$"'
              }
            ],
            right: [
              {
                title: 'Personal business card', 
                content: 'Everything is included in the price, no extra charges: your own page with full contacts, logo, link to your website, photos, video and promotional text about your company. Also you’ll get detailed stats for your stock and every ad, direct promotion of your vehicles with Google Adwords and support of the personal account manager'
              },
              {
                title: 'Automatic update', 
                content: 'No additional charges for placing and updating your ads. We’ll import your stock using the source of your choice: your website, 3rd party website, zip, xml or any other data file'
              }
            ]
          }
        }
    
        this.data = data || {};
        for (const key in _defaults) {
          if (!this.data[key]) {
            this.data[key] = _defaults[key];
          }
        }

        this.data.contents = data.contents || {}

        this.wrapper = undefined;
        this.focusedEl = null;
    }

  render() {
      const rootNode = document.createElement('div');
      rootNode.setAttribute('data-id', `${this.data.dataId || (`04-service-packages-text-${btoa(Math.random()).slice(5, 12)}`)}`)
      this.wrapper = rootNode;

      ReactDOM.render(
          (
              <ServisePackagesTextTool 
                content={this.data.text}
                data={this.data} />
          ),
          rootNode);
      
      return rootNode
  }

  save(el) {
    const contents = [ ...el.querySelectorAll('[data-value-content][data-key]') ].reduce((acc, elem) => {
      acc[elem.dataset['key']] = elem.textContent;
      return acc;
    }, {});

    const textReducer = (acc, el) => {
      acc.push({
        title: el.querySelector('.title_').textContent,
        content: el.querySelector('.content_').textContent
      });
      return acc;
    }

    return {
      dataId: el.getAttribute('data-id'),
      contents,
      text: {
        left: [ ...el.querySelectorAll('.left .item_') ].reduce(textReducer, []),
        right: [ ...el.querySelectorAll('.right .item_') ].reduce(textReducer, [])
      }
    }
  }
}

export default ServisePackagesText