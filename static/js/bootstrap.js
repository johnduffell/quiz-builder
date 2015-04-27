import React from 'react';
import qwery from 'qwery';
import QuizBuilder from './QuizBuilder.jsx!';

const el = qwery('.js-quiz-builder-placeholder')[0];

React.render(React.createElement(QuizBuilder, null), el);
