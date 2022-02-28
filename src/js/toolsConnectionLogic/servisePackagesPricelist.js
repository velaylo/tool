import React from "react";
import ReactDom from 'react-dom';
import ServisePackagesPricelistTool from "../toolsComponents/ServisePackagesPricelistTool";

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
        const _defaults = {
            lists: {
                list_standard: [
                  'Ads in all 31 language versions',
                  'Up to 20 photos per ad',
                  'Profile of the company',
                  'Detailed statistics',
                  'Personal account manager'
                ],
                list_premium: [
                  'All services of Standard package',
                  'Possibility to upload the video for each ad',
                  '"Reliable" and "Official Dealer" statuses',
                  'Automatic transfer of your stock',
                  'Links to your social media and personal website',
                  'Premium promotion',
                  'Logo in "Top Sellers"'
                ],
                list_gold: [
                  'All services of Standard and Premium packages',
                  'Profile of the company + Article',
                  'Additonal promotion in our social media (Instagram, Facebook)',
                  '360-degree video of the vehicle',
                  'Scanner of the stock from personal website',
                  'Banner'
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
}