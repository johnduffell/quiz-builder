import bean from 'bean';
import merge from 'lodash-node/modern/object/merge';
import filter from 'lodash-node/modern/collection/filter';
import forEach from 'lodash-node/modern/collection/forEach';
import React from 'react';

/**
 * Usage: ensure that you style both .elastic-text-area__textarea and
 * .elastic-text-area__grow-box under your provided class name the same insofar as 
 * anything that affects the content size (margins, padding, font styling, etc.)
 */
export default class ElasticTextArea extends React.Component {    
    render() {
        const props = merge({}, this.props, {
            style: this.state,
            className: ' elastic-text-area__textarea'
        });
        
        return React.DOM.div({
            className: 'elastic-text-area__container ' + this.props.className
        },
            React.DOM.pre({
                className: 'elastic-text-area__grow-box'
            }, React.DOM.span({className: 'elastic-text-area__text-box'}, props.value || ''), React.DOM.br()),
            React.DOM.textarea(props)
        );
    }
}