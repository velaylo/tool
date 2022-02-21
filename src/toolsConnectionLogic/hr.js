import React from "react";
import ReactDOM from 'react-dom';
import HrTool from "../toolsComponents/hrTool";

class Hr extends React.Component {
    static get toolbox() {
        return {
            icon: '<span>HR</span>',
            title: 'Разделительная полоса'
        };
    }

    static get isReadOnlySupported() {
        return true;
    }

    render() {
        const rootNode = document.createElement('div');
        rootNode.setAttribute('class', 'hr');

        ReactDOM.render(
            (
                <HrTool/>
            ),
            rootNode);
        
        return rootNode
    }
}

export default Hr