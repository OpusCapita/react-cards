'use strict';

exports.__esModule = true;
exports.Card = Card;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./card.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Card(props) {
  return _react2.default.createElement(
    'div',
    {
      className: 'oc-card',
      disabled: props.disabled
    },
    _react2.default.Children.map(props.children, function (child) {
      return _react2.default.cloneElement(child, {
        id: props.id,
        onlyChild: _react2.default.Children.count(props.children) === 1,
        expanded: props.expanded,
        setExpanded: props.setExpanded
      });
    })
  );
} /* eslint-disable import/prefer-default-export */
/* eslint-disable react/no-unused-prop-types */


Card.defaultProps = {
  setExpanded: null,
  disabled: false
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jYXJkcy9jYXJkLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiQ2FyZCIsInByb3BzIiwiZGlzYWJsZWQiLCJSZWFjdCIsIkNoaWxkcmVuIiwibWFwIiwiY2hpbGRyZW4iLCJjbG9uZUVsZW1lbnQiLCJjaGlsZCIsImlkIiwib25seUNoaWxkIiwiY291bnQiLCJleHBhbmRlZCIsInNldEV4cGFuZGVkIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7UUFPZ0JBLEksR0FBQUEsSTs7QUFMaEI7Ozs7QUFDQTs7OztBQUVBOzs7O0FBRU8sU0FBU0EsSUFBVCxDQUFjQyxLQUFkLEVBQXFCO0FBQzFCLFNBQ0U7QUFBQTtBQUFBO0FBQ0UsaUJBQVUsU0FEWjtBQUVFLGdCQUFVQSxNQUFNQztBQUZsQjtBQUlJQyxvQkFBTUMsUUFBTixDQUFlQyxHQUFmLENBQW1CSixNQUFNSyxRQUF6QixFQUFtQztBQUFBLGFBQ25DSCxnQkFBTUksWUFBTixDQUFtQkMsS0FBbkIsRUFBMEI7QUFDeEJDLFlBQUlSLE1BQU1RLEVBRGM7QUFFeEJDLG1CQUFXUCxnQkFBTUMsUUFBTixDQUFlTyxLQUFmLENBQXFCVixNQUFNSyxRQUEzQixNQUF5QyxDQUY1QjtBQUd4Qk0sa0JBQVVYLE1BQU1XLFFBSFE7QUFJeEJDLHFCQUFhWixNQUFNWTtBQUpLLE9BQTFCLENBRG1DO0FBQUEsS0FBbkM7QUFKSixHQURGO0FBZUQsQyxDQXZCRDtBQUNBOzs7QUF3QkFiLEtBQUtjLFlBQUwsR0FBb0I7QUFDbEJELGVBQWEsSUFESztBQUVsQlgsWUFBVTtBQUZRLENBQXBCIiwiZmlsZSI6ImNhcmQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvbm8tdW51c2VkLXByb3AtdHlwZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgJy4vY2FyZC5zY3NzJztcblxuZXhwb3J0IGZ1bmN0aW9uIENhcmQocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9XCJvYy1jYXJkXCJcbiAgICAgIGRpc2FibGVkPXtwcm9wcy5kaXNhYmxlZH1cbiAgICA+XG4gICAgICB7IFJlYWN0LkNoaWxkcmVuLm1hcChwcm9wcy5jaGlsZHJlbiwgY2hpbGQgPT5cbiAgICAgICAgUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7XG4gICAgICAgICAgaWQ6IHByb3BzLmlkLFxuICAgICAgICAgIG9ubHlDaGlsZDogUmVhY3QuQ2hpbGRyZW4uY291bnQocHJvcHMuY2hpbGRyZW4pID09PSAxLFxuICAgICAgICAgIGV4cGFuZGVkOiBwcm9wcy5leHBhbmRlZCxcbiAgICAgICAgICBzZXRFeHBhbmRlZDogcHJvcHMuc2V0RXhwYW5kZWQsXG4gICAgICAgIH0pKVxuICAgICAgfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5DYXJkLmRlZmF1bHRQcm9wcyA9IHtcbiAgc2V0RXhwYW5kZWQ6IG51bGwsXG4gIGRpc2FibGVkOiBmYWxzZSxcbn07XG5cbkNhcmQucHJvcFR5cGVzID0ge1xuICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBleHBhbmRlZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgc2V0RXhwYW5kZWQ6IFByb3BUeXBlcy5mdW5jLFxuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxufTtcbiJdfQ==