import React from 'react';
import ReactDOM from 'react-dom';
import CreditsNoticeTool from '../toolsComponents/creditsNoticeTool'

class CreditsNotice extends React.Component {
    static get toolbox() {
        return {
          icon: '<span>CN</span>',
          title: 'Credits Notice'
        }
    }
    
    static get isReadOnlySupported() {
        return true;
    }

    constructor({ data }) {
        super();
        this.data = data;
        if (!this.data.contents) {
          this.data.contents = {};
        }
        this._defaultText = 'You can use your credits to promote your ads to the top of search results, to highlight your ads with color or advertising text to gain more attention';
        this.wrapper = undefined;
    }

    render() {
        const rootNode = document.createElement('div');
        rootNode.setAttribute('class', 'credits-notice-text');
        this.wrapper = rootNode;


        ReactDOM.render(
            (
                <CreditsNoticeTool content={this._defaultText} />
            ),
            rootNode);
        
        return rootNode
    }
}

export default CreditsNotice