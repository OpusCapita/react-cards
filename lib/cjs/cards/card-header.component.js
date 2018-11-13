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
          width: 17,
          height: 17,
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
          width: 17,
          height: 17,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jYXJkcy9jYXJkLWhlYWRlci5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIkNhcmRIZWFkZXIiLCJnZXRFeHBhbmRDb2xsYXBzZSIsInByb3BzIiwic2V0RXhwYW5kZWQiLCJleHBhbmRlZCIsImNvbGxhcHNlQnRuVG9vbHRpcCIsImlkIiwiZXhwYW5kQnRuVG9vbHRpcCIsInJlbmRlciIsImNoaWxkcmVuIiwib25seUNoaWxkIiwiUmVhY3QiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOztBQUVBOzs7Ozs7OzsrZUFOQTs7O0lBU2FBLFUsV0FBQUEsVTs7Ozs7Ozs7Ozs7O3dKQUNYQyxpQixHQUFvQixZQUFNO0FBQ3hCLFVBQUksQ0FBQyxNQUFLQyxLQUFMLENBQVdDLFdBQWhCLEVBQTZCO0FBQzNCLGVBQU8sSUFBUDtBQUNEOztBQUVELGFBQ0UsTUFBS0QsS0FBTCxDQUFXRSxRQUFYLEdBQ0U7QUFBQTtBQUFBO0FBQ0UsaUJBQU8sTUFBS0YsS0FBTCxDQUFXRyxrQkFEcEI7QUFFRSxtQkFBUyxtQkFBTTtBQUNiLGtCQUFLSCxLQUFMLENBQVdDLFdBQVgsQ0FBdUIsTUFBS0QsS0FBTCxDQUFXSSxFQUFsQyxFQUFzQyxLQUF0QztBQUNEO0FBSkg7QUFNRSxzQ0FBQyxnQkFBRDtBQUNFLGlCQUFPLEVBRFQ7QUFFRSxrQkFBUSxFQUZWO0FBR0UsZ0JBQUssV0FIUDtBQUlFLGdCQUFLO0FBSlA7QUFORixPQURGLEdBY0U7QUFBQTtBQUFBO0FBQ0UsaUJBQU8sTUFBS0osS0FBTCxDQUFXSyxnQkFEcEI7QUFFRSxtQkFBUyxtQkFBTTtBQUNiLGtCQUFLTCxLQUFMLENBQVdDLFdBQVgsQ0FBdUIsTUFBS0QsS0FBTCxDQUFXSSxFQUFsQyxFQUFzQyxJQUF0QztBQUNEO0FBSkg7QUFNRSxzQ0FBQyxnQkFBRDtBQUNFLGlCQUFPLEVBRFQ7QUFFRSxrQkFBUSxFQUZWO0FBR0UsZ0JBQUssV0FIUDtBQUlFLGdCQUFLO0FBSlA7QUFORixPQWZKO0FBNkJELEs7Ozt1QkFFREUsTSxxQkFBUztBQUNQLFdBQ0U7QUFBQTtBQUFBLFFBQUssV0FBVSxnQkFBZjtBQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsU0FBZjtBQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVUsVUFBZjtBQUNHLGVBQUtOLEtBQUwsQ0FBV087QUFEZCxTQURGO0FBSUU7QUFBQTtBQUFBLFlBQUssV0FBVSxpQkFBZjtBQUNHLGVBQUtQLEtBQUwsQ0FBV1EsU0FBWCxHQUF1QixFQUF2QixHQUE0QixLQUFLVCxpQkFBTDtBQUQvQjtBQUpGO0FBREYsS0FERjtBQVlELEc7OztFQWxENkJVLGdCQUFNQyxTOztBQXFEdENaLFdBQVdhLFlBQVgsR0FBMEI7QUFDeEJQLE1BQUksSUFEb0I7QUFFeEJHLFlBQVUsRUFGYztBQUd4QkMsYUFBVyxLQUhhO0FBSXhCTixZQUFVLEtBSmM7QUFLeEJELGVBQWEsSUFMVztBQU14Qkksb0JBQWtCLFFBTk07QUFPeEJGLHNCQUFvQjtBQVBJLENBQTFCIiwiZmlsZSI6ImNhcmQtaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3QtaWNvbnMnO1xuXG5pbXBvcnQgJy4vY2FyZC1oZWFkZXIuc2Nzcyc7XG5cblxuZXhwb3J0IGNsYXNzIENhcmRIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBnZXRFeHBhbmRDb2xsYXBzZSA9ICgpID0+IHtcbiAgICBpZiAoIXRoaXMucHJvcHMuc2V0RXhwYW5kZWQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICB0aGlzLnByb3BzLmV4cGFuZGVkID9cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIHRpdGxlPXt0aGlzLnByb3BzLmNvbGxhcHNlQnRuVG9vbHRpcH1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLnNldEV4cGFuZGVkKHRoaXMucHJvcHMuaWQsIGZhbHNlKTtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPEljb25cbiAgICAgICAgICAgIHdpZHRoPXsxN31cbiAgICAgICAgICAgIGhlaWdodD17MTd9XG4gICAgICAgICAgICB0eXBlPVwiaW5kaWNhdG9yXCJcbiAgICAgICAgICAgIG5hbWU9XCJtaW51c1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9idXR0b24+IDpcbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIHRpdGxlPXt0aGlzLnByb3BzLmV4cGFuZEJ0blRvb2x0aXB9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5zZXRFeHBhbmRlZCh0aGlzLnByb3BzLmlkLCB0cnVlKTtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPEljb25cbiAgICAgICAgICAgIHdpZHRoPXsxN31cbiAgICAgICAgICAgIGhlaWdodD17MTd9XG4gICAgICAgICAgICB0eXBlPVwiaW5kaWNhdG9yXCJcbiAgICAgICAgICAgIG5hbWU9XCJwbHVzXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9jLWNhcmQtaGVhZGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hpbGRyZW5cIj5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2UtZXhwYW5kXCI+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5vbmx5Q2hpbGQgPyAnJyA6IHRoaXMuZ2V0RXhwYW5kQ29sbGFwc2UoKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkNhcmRIZWFkZXIuZGVmYXVsdFByb3BzID0ge1xuICBpZDogbnVsbCxcbiAgY2hpbGRyZW46IFtdLFxuICBvbmx5Q2hpbGQ6IGZhbHNlLFxuICBleHBhbmRlZDogZmFsc2UsXG4gIHNldEV4cGFuZGVkOiBudWxsLFxuICBleHBhbmRCdG5Ub29sdGlwOiAnZXhwYW5kJyxcbiAgY29sbGFwc2VCdG5Ub29sdGlwOiAnY29sbGFwc2UnLFxufTtcblxuQ2FyZEhlYWRlci5wcm9wVHlwZXMgPSB7XG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIG9ubHlDaGlsZDogUHJvcFR5cGVzLmJvb2wsXG4gIGV4cGFuZGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgc2V0RXhwYW5kZWQ6IFByb3BUeXBlcy5mdW5jLFxuICBleHBhbmRCdG5Ub29sdGlwOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjb2xsYXBzZUJ0blRvb2x0aXA6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuIl19