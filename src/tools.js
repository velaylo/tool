import Paragraph from '@editorjs/paragraph';
import HelloText from './js/toolsConnectionLogic/helloText';
import Hr from './js/toolsConnectionLogic/hr';
import HelloScreen from './js/toolsConnectionLogic/helloScreen';
import ServisePackagesText from './js/toolsConnectionLogic/servisePackagesText';
import CreditsNotice from './js/toolsConnectionLogic/creditsNotice';
import CreditsPrices from './js/toolsConnectionLogic/creditsPrices';
import CreditsInfo from './js/toolsConnectionLogic/creditsInfo';
import PricesMain from './js/toolsConnectionLogic/pricesMain';
import ServisePackagesPricelist from './js/toolsConnectionLogic/servisePackagesPricelist';
import SpecialOffer from './js/toolsConnectionLogic/specialOffer';
import Banners from './js/toolsConnectionLogic/banners'

export const EDITOR_JS_TOOLS = {
    paragraph: {
        class: Paragraph,
        inlineToolbar: true
    },
    hr: {
        class: Hr,
    },
    helloScreen: {
        class: HelloScreen
    },
    helloText: {
        class: HelloText,
        inlineToolbar: ['link']
    },
    ServisePackagesPricelist: {
        class: ServisePackagesPricelist
    },
    ServisePackagesText: {
        class: ServisePackagesText
    },
    CreditsNoticeTool: {
        class: CreditsNotice
    },
    CreditsPricesTool: {
        class: CreditsPrices
    },
    CreditsInfoTool: {
        class: CreditsInfo,
        inlineToolbar: true
    },
    PricesMain: {
        class: PricesMain
    },
    SpecialOffer: {
        class: SpecialOffer
    },
    Banners: {
        class: Banners
    }
}