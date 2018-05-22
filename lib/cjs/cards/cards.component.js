'use strict';

exports.__esModule = true;
exports.Cards = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactPerfectScrollbar = require('@opuscapita/react-perfect-scrollbar');

var _reactPerfectScrollbar2 = _interopRequireDefault(_reactPerfectScrollbar);

require('./cards.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable import/prefer-default-export */
/* eslint-disable react/no-find-dom-node */


var Cards = exports.Cards = function (_React$Component) {
  _inherits(Cards, _React$Component);

  function Cards() {
    _classCallCheck(this, Cards);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Cards.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props.showOnlyCard || !this.props.showOnlyCard && prevProps.showOnlyCard) {
      _reactDom2.default.findDOMNode(this).scrollTop = 0;
    }
  };

  Cards.prototype.render = function render() {
    var _this2 = this;

    return _react2.default.createElement(
      _reactPerfectScrollbar2.default,
      null,
      _react2.default.createElement(
        'div',
        { className: 'oc-cards' },
        _react2.default.Children.map(this.props.children, function (child) {
          if (_this2.props.showOnlyCard && child.props && child.props.id !== _this2.props.showOnlyCard) {
            return null;
          }
          if (_this2.props.setExpanded) {
            return _react2.default.cloneElement(child, {
              setExpanded: _this2.props.setExpanded
            });
          }
          return child;
        })
      )
    );
  };

  return Cards;
}(_react2.default.Component);

Cards.defaultProps = {
  setExpanded: null,
  showOnlyCard: ''
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jYXJkcy9jYXJkcy5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIkNhcmRzIiwiY29tcG9uZW50RGlkVXBkYXRlIiwicHJldlByb3BzIiwicHJvcHMiLCJzaG93T25seUNhcmQiLCJSZWFjdERPTSIsImZpbmRET01Ob2RlIiwic2Nyb2xsVG9wIiwicmVuZGVyIiwiUmVhY3QiLCJDaGlsZHJlbiIsIm1hcCIsImNoaWxkcmVuIiwiY2hpbGQiLCJpZCIsInNldEV4cGFuZGVkIiwiY2xvbmVFbGVtZW50IiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7Ozs7OytlQVBBO0FBQ0E7OztJQVNhQSxLLFdBQUFBLEs7Ozs7Ozs7OztrQkFDWEMsa0IsK0JBQW1CQyxTLEVBQVc7QUFDNUIsUUFBSSxLQUFLQyxLQUFMLENBQVdDLFlBQVgsSUFDQSxDQUFDLEtBQUtELEtBQUwsQ0FBV0MsWUFBWixJQUE0QkYsVUFBVUUsWUFEMUMsRUFDeUQ7QUFDdkRDLHlCQUFTQyxXQUFULENBQXFCLElBQXJCLEVBQTJCQyxTQUEzQixHQUF1QyxDQUF2QztBQUNEO0FBQ0YsRzs7a0JBRURDLE0scUJBQVM7QUFBQTs7QUFDUCxXQUNFO0FBQUMscUNBQUQ7QUFBQTtBQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsVUFBZjtBQUNJQyx3QkFBTUMsUUFBTixDQUFlQyxHQUFmLENBQW1CLEtBQUtSLEtBQUwsQ0FBV1MsUUFBOUIsRUFBd0MsVUFBQ0MsS0FBRCxFQUFXO0FBQ25ELGNBQUksT0FBS1YsS0FBTCxDQUFXQyxZQUFYLElBQTJCUyxNQUFNVixLQUFqQyxJQUNBVSxNQUFNVixLQUFOLENBQVlXLEVBQVosS0FBbUIsT0FBS1gsS0FBTCxDQUFXQyxZQURsQyxFQUNnRDtBQUM5QyxtQkFBTyxJQUFQO0FBQ0Q7QUFDRCxjQUFJLE9BQUtELEtBQUwsQ0FBV1ksV0FBZixFQUE0QjtBQUMxQixtQkFBT04sZ0JBQU1PLFlBQU4sQ0FBbUJILEtBQW5CLEVBQTBCO0FBQy9CRSwyQkFBYSxPQUFLWixLQUFMLENBQVdZO0FBRE8sYUFBMUIsQ0FBUDtBQUdEO0FBQ0QsaUJBQU9GLEtBQVA7QUFDRCxTQVhDO0FBREo7QUFERixLQURGO0FBa0JELEc7OztFQTNCd0JKLGdCQUFNUSxTOztBQThCakNqQixNQUFNa0IsWUFBTixHQUFxQjtBQUNuQkgsZUFBYSxJQURNO0FBRW5CWCxnQkFBYztBQUZLLENBQXJCIiwiZmlsZSI6ImNhcmRzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLWZpbmQtZG9tLW5vZGUgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgUGVyZmVjdFNjcm9sbGJhciBmcm9tICdAb3B1c2NhcGl0YS9yZWFjdC1wZXJmZWN0LXNjcm9sbGJhcic7XG5cbmltcG9ydCAnLi9jYXJkcy5zY3NzJztcblxuXG5leHBvcnQgY2xhc3MgQ2FyZHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuc2hvd09ubHlDYXJkIHx8XG4gICAgICAgKCF0aGlzLnByb3BzLnNob3dPbmx5Q2FyZCAmJiBwcmV2UHJvcHMuc2hvd09ubHlDYXJkKSkge1xuICAgICAgUmVhY3RET00uZmluZERPTU5vZGUodGhpcykuc2Nyb2xsVG9wID0gMDtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxQZXJmZWN0U2Nyb2xsYmFyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9jLWNhcmRzXCI+XG4gICAgICAgICAgeyBSZWFjdC5DaGlsZHJlbi5tYXAodGhpcy5wcm9wcy5jaGlsZHJlbiwgKGNoaWxkKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5zaG93T25seUNhcmQgJiYgY2hpbGQucHJvcHMgJiZcbiAgICAgICAgICAgICAgICBjaGlsZC5wcm9wcy5pZCAhPT0gdGhpcy5wcm9wcy5zaG93T25seUNhcmQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5zZXRFeHBhbmRlZCkge1xuICAgICAgICAgICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7XG4gICAgICAgICAgICAgICAgc2V0RXhwYW5kZWQ6IHRoaXMucHJvcHMuc2V0RXhwYW5kZWQsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgICAgICAgIH0pIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1BlcmZlY3RTY3JvbGxiYXI+XG4gICAgKTtcbiAgfVxufVxuXG5DYXJkcy5kZWZhdWx0UHJvcHMgPSB7XG4gIHNldEV4cGFuZGVkOiBudWxsLFxuICBzaG93T25seUNhcmQ6ICcnLFxufTtcblxuQ2FyZHMucHJvcFR5cGVzID0ge1xuICBzZXRFeHBhbmRlZDogUHJvcFR5cGVzLmZ1bmMsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICBzaG93T25seUNhcmQ6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuIl19