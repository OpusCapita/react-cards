'use strict';

exports.__esModule = true;
exports.CardHeader = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactIcons = require('@opuscapita/react-icons');

require('./card-header.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable import/prefer-default-export */


var CardHeader = exports.CardHeader = function (_React$Component) {
  _inherits(CardHeader, _React$Component);

  function CardHeader() {
    var _temp, _this, _ret;

    _classCallCheck(this, CardHeader);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.getExpandCollapse = function () {
      if (!_this.props.setExpanded) {
        return null;
      }

      return _this.props.expanded ? _react2.default.createElement(
        'button',
        {
          title: _this.props.collapseBtnTooltip,
          onClick: function onClick() {
            _this.props.setExpanded(_this.props.id, false);
          }
        },
        _react2.default.createElement(_reactIcons.Icon, {
          type: 'indicator',
          name: 'minus'
        })
      ) : _react2.default.createElement(
        'button',
        {
          title: _this.props.expandBtnTooltip,
          onClick: function onClick() {
            _this.props.setExpanded(_this.props.id, true);
          }
        },
        _react2.default.createElement(_reactIcons.Icon, {
          type: 'indicator',
          name: 'plus'
        })
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  CardHeader.prototype.render = function render() {
    return _react2.default.createElement(
      'div',
      { className: 'oc-card-header' },
      _react2.default.createElement(
        'div',
        { className: 'content' },
        _react2.default.createElement(
          'div',
          { className: 'children' },
          this.props.children
        ),
        _react2.default.createElement(
          'div',
          { className: 'collapse-expand' },
          this.props.onlyChild ? '' : this.getExpandCollapse()
        )
      )
    );
  };

  return CardHeader;
}(_react2.default.Component);

CardHeader.defaultProps = {
  id: null,
  children: [],
  onlyChild: false,
  expanded: false,
  setExpanded: null,
  expandBtnTooltip: 'expand',
  collapseBtnTooltip: 'collapse'
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jYXJkcy9jYXJkLWhlYWRlci5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIkNhcmRIZWFkZXIiLCJnZXRFeHBhbmRDb2xsYXBzZSIsInByb3BzIiwic2V0RXhwYW5kZWQiLCJleHBhbmRlZCIsImNvbGxhcHNlQnRuVG9vbHRpcCIsImlkIiwiZXhwYW5kQnRuVG9vbHRpcCIsInJlbmRlciIsImNoaWxkcmVuIiwib25seUNoaWxkIiwiUmVhY3QiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOztBQUVBOzs7Ozs7OzsrZUFOQTs7O0lBU2FBLFUsV0FBQUEsVTs7Ozs7Ozs7Ozs7O3dKQUNYQyxpQixHQUFvQixZQUFNO0FBQ3hCLFVBQUksQ0FBQyxNQUFLQyxLQUFMLENBQVdDLFdBQWhCLEVBQTZCO0FBQzNCLGVBQU8sSUFBUDtBQUNEOztBQUVELGFBQ0UsTUFBS0QsS0FBTCxDQUFXRSxRQUFYLEdBQ0U7QUFBQTtBQUFBO0FBQ0UsaUJBQU8sTUFBS0YsS0FBTCxDQUFXRyxrQkFEcEI7QUFFRSxtQkFBUyxtQkFBTTtBQUNiLGtCQUFLSCxLQUFMLENBQVdDLFdBQVgsQ0FBdUIsTUFBS0QsS0FBTCxDQUFXSSxFQUFsQyxFQUFzQyxLQUF0QztBQUNEO0FBSkg7QUFNRSxzQ0FBQyxnQkFBRDtBQUNFLGdCQUFLLFdBRFA7QUFFRSxnQkFBSztBQUZQO0FBTkYsT0FERixHQVlFO0FBQUE7QUFBQTtBQUNFLGlCQUFPLE1BQUtKLEtBQUwsQ0FBV0ssZ0JBRHBCO0FBRUUsbUJBQVMsbUJBQU07QUFDYixrQkFBS0wsS0FBTCxDQUFXQyxXQUFYLENBQXVCLE1BQUtELEtBQUwsQ0FBV0ksRUFBbEMsRUFBc0MsSUFBdEM7QUFDRDtBQUpIO0FBTUUsc0NBQUMsZ0JBQUQ7QUFDRSxnQkFBSyxXQURQO0FBRUUsZ0JBQUs7QUFGUDtBQU5GLE9BYko7QUF5QkQsSzs7O3VCQUVERSxNLHFCQUFTO0FBQ1AsV0FDRTtBQUFBO0FBQUEsUUFBSyxXQUFVLGdCQUFmO0FBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxTQUFmO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSxVQUFmO0FBQ0csZUFBS04sS0FBTCxDQUFXTztBQURkLFNBREY7QUFJRTtBQUFBO0FBQUEsWUFBSyxXQUFVLGlCQUFmO0FBQ0csZUFBS1AsS0FBTCxDQUFXUSxTQUFYLEdBQXVCLEVBQXZCLEdBQTRCLEtBQUtULGlCQUFMO0FBRC9CO0FBSkY7QUFERixLQURGO0FBWUQsRzs7O0VBOUM2QlUsZ0JBQU1DLFM7O0FBaUR0Q1osV0FBV2EsWUFBWCxHQUEwQjtBQUN4QlAsTUFBSSxJQURvQjtBQUV4QkcsWUFBVSxFQUZjO0FBR3hCQyxhQUFXLEtBSGE7QUFJeEJOLFlBQVUsS0FKYztBQUt4QkQsZUFBYSxJQUxXO0FBTXhCSSxvQkFBa0IsUUFOTTtBQU94QkYsc0JBQW9CO0FBUEksQ0FBMUIiLCJmaWxlIjoiY2FyZC1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7IEljb24gfSBmcm9tICdAb3B1c2NhcGl0YS9yZWFjdC1pY29ucyc7XG5cbmltcG9ydCAnLi9jYXJkLWhlYWRlci5zY3NzJztcblxuXG5leHBvcnQgY2xhc3MgQ2FyZEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGdldEV4cGFuZENvbGxhcHNlID0gKCkgPT4ge1xuICAgIGlmICghdGhpcy5wcm9wcy5zZXRFeHBhbmRlZCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMucHJvcHMuZXhwYW5kZWQgP1xuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgdGl0bGU9e3RoaXMucHJvcHMuY29sbGFwc2VCdG5Ub29sdGlwfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc2V0RXhwYW5kZWQodGhpcy5wcm9wcy5pZCwgZmFsc2UpO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgdHlwZT1cImluZGljYXRvclwiXG4gICAgICAgICAgICBuYW1lPVwibWludXNcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvYnV0dG9uPiA6XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICB0aXRsZT17dGhpcy5wcm9wcy5leHBhbmRCdG5Ub29sdGlwfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc2V0RXhwYW5kZWQodGhpcy5wcm9wcy5pZCwgdHJ1ZSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICB0eXBlPVwiaW5kaWNhdG9yXCJcbiAgICAgICAgICAgIG5hbWU9XCJwbHVzXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9jLWNhcmQtaGVhZGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hpbGRyZW5cIj5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2UtZXhwYW5kXCI+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5vbmx5Q2hpbGQgPyAnJyA6IHRoaXMuZ2V0RXhwYW5kQ29sbGFwc2UoKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkNhcmRIZWFkZXIuZGVmYXVsdFByb3BzID0ge1xuICBpZDogbnVsbCxcbiAgY2hpbGRyZW46IFtdLFxuICBvbmx5Q2hpbGQ6IGZhbHNlLFxuICBleHBhbmRlZDogZmFsc2UsXG4gIHNldEV4cGFuZGVkOiBudWxsLFxuICBleHBhbmRCdG5Ub29sdGlwOiAnZXhwYW5kJyxcbiAgY29sbGFwc2VCdG5Ub29sdGlwOiAnY29sbGFwc2UnLFxufTtcblxuQ2FyZEhlYWRlci5wcm9wVHlwZXMgPSB7XG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIG9ubHlDaGlsZDogUHJvcFR5cGVzLmJvb2wsXG4gIGV4cGFuZGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgc2V0RXhwYW5kZWQ6IFByb3BUeXBlcy5mdW5jLFxuICBleHBhbmRCdG5Ub29sdGlwOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjb2xsYXBzZUJ0blRvb2x0aXA6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuIl19