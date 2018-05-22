'use strict';

exports.__esModule = true;
exports.CardContent = CardContent;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./card-content.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CardContent(props) {
  return _react2.default.createElement(
    'div',
    { className: 'oc-card-content' },
    props.expanded ? props.children : ''
  );
} /* eslint-disable import/prefer-default-export */

CardContent.defaultProps = {
  expanded: false,
  children: []
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jYXJkcy9jYXJkLWNvbnRlbnQuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJDYXJkQ29udGVudCIsInByb3BzIiwiZXhwYW5kZWQiLCJjaGlsZHJlbiIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7O1FBUWdCQSxXLEdBQUFBLFc7O0FBTmhCOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUdPLFNBQVNBLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQTRCO0FBQ2pDLFNBQ0U7QUFBQTtBQUFBLE1BQUssV0FBVSxpQkFBZjtBQUNJQSxVQUFNQyxRQUFOLEdBQ0FELE1BQU1FLFFBRE4sR0FDaUI7QUFGckIsR0FERjtBQU1ELEMsQ0FmRDs7QUFpQkFILFlBQVlJLFlBQVosR0FBMkI7QUFDekJGLFlBQVUsS0FEZTtBQUV6QkMsWUFBVTtBQUZlLENBQTNCIiwiZmlsZSI6ImNhcmQtY29udGVudC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgJy4vY2FyZC1jb250ZW50LnNjc3MnO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBDYXJkQ29udGVudChwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwib2MtY2FyZC1jb250ZW50XCI+XG4gICAgICB7IHByb3BzLmV4cGFuZGVkID9cbiAgICAgICAgcHJvcHMuY2hpbGRyZW4gOiAnJyB9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbkNhcmRDb250ZW50LmRlZmF1bHRQcm9wcyA9IHtcbiAgZXhwYW5kZWQ6IGZhbHNlLFxuICBjaGlsZHJlbjogW10sXG59O1xuXG5DYXJkQ29udGVudC5wcm9wVHlwZXMgPSB7XG4gIGV4cGFuZGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxufTtcbiJdfQ==