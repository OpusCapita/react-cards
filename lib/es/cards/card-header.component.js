function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable import/prefer-default-export */
import React from 'react';
import PropTypes from 'prop-types';

import { Icon } from '@opuscapita/react-icons';

import './card-header.scss';

export var CardHeader = function (_React$Component) {
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

      return _this.props.expanded ? React.createElement(
        'button',
        {
          title: _this.props.collapseBtnTooltip,
          onClick: function onClick() {
            _this.props.setExpanded(_this.props.id, false);
          }
        },
        React.createElement(Icon, {
          type: 'indicator',
          name: 'minus'
        })
      ) : React.createElement(
        'button',
        {
          title: _this.props.expandBtnTooltip,
          onClick: function onClick() {
            _this.props.setExpanded(_this.props.id, true);
          }
        },
        React.createElement(Icon, {
          type: 'indicator',
          name: 'plus'
        })
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  CardHeader.prototype.render = function render() {
    return React.createElement(
      'div',
      { className: 'oc-card-header' },
      React.createElement(
        'div',
        { className: 'content' },
        React.createElement(
          'div',
          { className: 'children' },
          this.props.children
        ),
        React.createElement(
          'div',
          { className: 'collapse-expand' },
          this.props.onlyChild ? '' : this.getExpandCollapse()
        )
      )
    );
  };

  return CardHeader;
}(React.Component);

CardHeader.defaultProps = {
  id: null,
  children: [],
  onlyChild: false,
  expanded: false,
  setExpanded: null,
  expandBtnTooltip: 'expand',
  collapseBtnTooltip: 'collapse'
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jYXJkcy9jYXJkLWhlYWRlci5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiSWNvbiIsIkNhcmRIZWFkZXIiLCJnZXRFeHBhbmRDb2xsYXBzZSIsInByb3BzIiwic2V0RXhwYW5kZWQiLCJleHBhbmRlZCIsImNvbGxhcHNlQnRuVG9vbHRpcCIsImlkIiwiZXhwYW5kQnRuVG9vbHRpcCIsInJlbmRlciIsImNoaWxkcmVuIiwib25seUNoaWxkIiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCOztBQUVBLFNBQVNDLElBQVQsUUFBcUIseUJBQXJCOztBQUVBLE9BQU8sb0JBQVA7O0FBR0EsV0FBYUMsVUFBYjtBQUFBOztBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBLHdKQUNFQyxpQkFERixHQUNzQixZQUFNO0FBQ3hCLFVBQUksQ0FBQyxNQUFLQyxLQUFMLENBQVdDLFdBQWhCLEVBQTZCO0FBQzNCLGVBQU8sSUFBUDtBQUNEOztBQUVELGFBQ0UsTUFBS0QsS0FBTCxDQUFXRSxRQUFYLEdBQ0U7QUFBQTtBQUFBO0FBQ0UsaUJBQU8sTUFBS0YsS0FBTCxDQUFXRyxrQkFEcEI7QUFFRSxtQkFBUyxtQkFBTTtBQUNiLGtCQUFLSCxLQUFMLENBQVdDLFdBQVgsQ0FBdUIsTUFBS0QsS0FBTCxDQUFXSSxFQUFsQyxFQUFzQyxLQUF0QztBQUNEO0FBSkg7QUFNRSw0QkFBQyxJQUFEO0FBQ0UsZ0JBQUssV0FEUDtBQUVFLGdCQUFLO0FBRlA7QUFORixPQURGLEdBWUU7QUFBQTtBQUFBO0FBQ0UsaUJBQU8sTUFBS0osS0FBTCxDQUFXSyxnQkFEcEI7QUFFRSxtQkFBUyxtQkFBTTtBQUNiLGtCQUFLTCxLQUFMLENBQVdDLFdBQVgsQ0FBdUIsTUFBS0QsS0FBTCxDQUFXSSxFQUFsQyxFQUFzQyxJQUF0QztBQUNEO0FBSkg7QUFNRSw0QkFBQyxJQUFEO0FBQ0UsZ0JBQUssV0FEUDtBQUVFLGdCQUFLO0FBRlA7QUFORixPQWJKO0FBeUJELEtBL0JIO0FBQUE7O0FBQUEsdUJBaUNFRSxNQWpDRixxQkFpQ1c7QUFDUCxXQUNFO0FBQUE7QUFBQSxRQUFLLFdBQVUsZ0JBQWY7QUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLFNBQWY7QUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLFVBQWY7QUFDRyxlQUFLTixLQUFMLENBQVdPO0FBRGQsU0FERjtBQUlFO0FBQUE7QUFBQSxZQUFLLFdBQVUsaUJBQWY7QUFDRyxlQUFLUCxLQUFMLENBQVdRLFNBQVgsR0FBdUIsRUFBdkIsR0FBNEIsS0FBS1QsaUJBQUw7QUFEL0I7QUFKRjtBQURGLEtBREY7QUFZRCxHQTlDSDs7QUFBQTtBQUFBLEVBQWdDSixNQUFNYyxTQUF0Qzs7QUFpREFYLFdBQVdZLFlBQVgsR0FBMEI7QUFDeEJOLE1BQUksSUFEb0I7QUFFeEJHLFlBQVUsRUFGYztBQUd4QkMsYUFBVyxLQUhhO0FBSXhCTixZQUFVLEtBSmM7QUFLeEJELGVBQWEsSUFMVztBQU14Qkksb0JBQWtCLFFBTk07QUFPeEJGLHNCQUFvQjtBQVBJLENBQTFCIiwiZmlsZSI6ImNhcmQtaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3QtaWNvbnMnO1xuXG5pbXBvcnQgJy4vY2FyZC1oZWFkZXIuc2Nzcyc7XG5cblxuZXhwb3J0IGNsYXNzIENhcmRIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBnZXRFeHBhbmRDb2xsYXBzZSA9ICgpID0+IHtcbiAgICBpZiAoIXRoaXMucHJvcHMuc2V0RXhwYW5kZWQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICB0aGlzLnByb3BzLmV4cGFuZGVkID9cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIHRpdGxlPXt0aGlzLnByb3BzLmNvbGxhcHNlQnRuVG9vbHRpcH1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLnNldEV4cGFuZGVkKHRoaXMucHJvcHMuaWQsIGZhbHNlKTtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPEljb25cbiAgICAgICAgICAgIHR5cGU9XCJpbmRpY2F0b3JcIlxuICAgICAgICAgICAgbmFtZT1cIm1pbnVzXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2J1dHRvbj4gOlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgdGl0bGU9e3RoaXMucHJvcHMuZXhwYW5kQnRuVG9vbHRpcH1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLnNldEV4cGFuZGVkKHRoaXMucHJvcHMuaWQsIHRydWUpO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgdHlwZT1cImluZGljYXRvclwiXG4gICAgICAgICAgICBuYW1lPVwicGx1c1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJvYy1jYXJkLWhlYWRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoaWxkcmVuXCI+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlLWV4cGFuZFwiPlxuICAgICAgICAgICAge3RoaXMucHJvcHMub25seUNoaWxkID8gJycgOiB0aGlzLmdldEV4cGFuZENvbGxhcHNlKCl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5DYXJkSGVhZGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgaWQ6IG51bGwsXG4gIGNoaWxkcmVuOiBbXSxcbiAgb25seUNoaWxkOiBmYWxzZSxcbiAgZXhwYW5kZWQ6IGZhbHNlLFxuICBzZXRFeHBhbmRlZDogbnVsbCxcbiAgZXhwYW5kQnRuVG9vbHRpcDogJ2V4cGFuZCcsXG4gIGNvbGxhcHNlQnRuVG9vbHRpcDogJ2NvbGxhcHNlJyxcbn07XG5cbkNhcmRIZWFkZXIucHJvcFR5cGVzID0ge1xuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBvbmx5Q2hpbGQ6IFByb3BUeXBlcy5ib29sLFxuICBleHBhbmRlZDogUHJvcFR5cGVzLmJvb2wsXG4gIHNldEV4cGFuZGVkOiBQcm9wVHlwZXMuZnVuYyxcbiAgZXhwYW5kQnRuVG9vbHRpcDogUHJvcFR5cGVzLnN0cmluZyxcbiAgY29sbGFwc2VCdG5Ub29sdGlwOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcbiJdfQ==