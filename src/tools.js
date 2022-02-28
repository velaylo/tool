import Paragraph from '@editorjs/paragraph';
import List from '@editorjs/list';
import HelloText from './js/toolsConnectionLogic/helloText';
import Hr from './js/toolsConnectionLogic/hr';
import HelloScreen from './js/toolsConnectionLogic/helloScreen';
import ServisePackagesText from './js/toolsConnectionLogic/servisePackagesText';
import CreditsNotice from './js/toolsConnectionLogic/creditsNotice';
import CreditsPrices from './js/toolsConnectionLogic/creditsPrices';
import CreditsInfo from './js/toolsConnectionLogic/creditsInfo';
import PricesMain from './js/toolsConnectionLogic/pricesMain';

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
    list: List,
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
        class: CreditsInfo
    },
    PricesMain: {
        class: PricesMain
    }
}