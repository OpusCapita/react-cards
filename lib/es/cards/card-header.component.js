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
          width: 17,
          height: 17,
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
          width: 17,
          height: 17,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jYXJkcy9jYXJkLWhlYWRlci5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiSWNvbiIsIkNhcmRIZWFkZXIiLCJnZXRFeHBhbmRDb2xsYXBzZSIsInByb3BzIiwic2V0RXhwYW5kZWQiLCJleHBhbmRlZCIsImNvbGxhcHNlQnRuVG9vbHRpcCIsImlkIiwiZXhwYW5kQnRuVG9vbHRpcCIsInJlbmRlciIsImNoaWxkcmVuIiwib25seUNoaWxkIiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCOztBQUVBLFNBQVNDLElBQVQsUUFBcUIseUJBQXJCOztBQUVBLE9BQU8sb0JBQVA7O0FBR0EsV0FBYUMsVUFBYjtBQUFBOztBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBLHdKQUNFQyxpQkFERixHQUNzQixZQUFNO0FBQ3hCLFVBQUksQ0FBQyxNQUFLQyxLQUFMLENBQVdDLFdBQWhCLEVBQTZCO0FBQzNCLGVBQU8sSUFBUDtBQUNEOztBQUVELGFBQ0UsTUFBS0QsS0FBTCxDQUFXRSxRQUFYLEdBQ0U7QUFBQTtBQUFBO0FBQ0UsaUJBQU8sTUFBS0YsS0FBTCxDQUFXRyxrQkFEcEI7QUFFRSxtQkFBUyxtQkFBTTtBQUNiLGtCQUFLSCxLQUFMLENBQVdDLFdBQVgsQ0FBdUIsTUFBS0QsS0FBTCxDQUFXSSxFQUFsQyxFQUFzQyxLQUF0QztBQUNEO0FBSkg7QUFNRSw0QkFBQyxJQUFEO0FBQ0UsaUJBQU8sRUFEVDtBQUVFLGtCQUFRLEVBRlY7QUFHRSxnQkFBSyxXQUhQO0FBSUUsZ0JBQUs7QUFKUDtBQU5GLE9BREYsR0FjRTtBQUFBO0FBQUE7QUFDRSxpQkFBTyxNQUFLSixLQUFMLENBQVdLLGdCQURwQjtBQUVFLG1CQUFTLG1CQUFNO0FBQ2Isa0JBQUtMLEtBQUwsQ0FBV0MsV0FBWCxDQUF1QixNQUFLRCxLQUFMLENBQVdJLEVBQWxDLEVBQXNDLElBQXRDO0FBQ0Q7QUFKSDtBQU1FLDRCQUFDLElBQUQ7QUFDRSxpQkFBTyxFQURUO0FBRUUsa0JBQVEsRUFGVjtBQUdFLGdCQUFLLFdBSFA7QUFJRSxnQkFBSztBQUpQO0FBTkYsT0FmSjtBQTZCRCxLQW5DSDtBQUFBOztBQUFBLHVCQXFDRUUsTUFyQ0YscUJBcUNXO0FBQ1AsV0FDRTtBQUFBO0FBQUEsUUFBSyxXQUFVLGdCQUFmO0FBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxTQUFmO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSxVQUFmO0FBQ0csZUFBS04sS0FBTCxDQUFXTztBQURkLFNBREY7QUFJRTtBQUFBO0FBQUEsWUFBSyxXQUFVLGlCQUFmO0FBQ0csZUFBS1AsS0FBTCxDQUFXUSxTQUFYLEdBQXVCLEVBQXZCLEdBQTRCLEtBQUtULGlCQUFMO0FBRC9CO0FBSkY7QUFERixLQURGO0FBWUQsR0FsREg7O0FBQUE7QUFBQSxFQUFnQ0osTUFBTWMsU0FBdEM7O0FBcURBWCxXQUFXWSxZQUFYLEdBQTBCO0FBQ3hCTixNQUFJLElBRG9CO0FBRXhCRyxZQUFVLEVBRmM7QUFHeEJDLGFBQVcsS0FIYTtBQUl4Qk4sWUFBVSxLQUpjO0FBS3hCRCxlQUFhLElBTFc7QUFNeEJJLG9CQUFrQixRQU5NO0FBT3hCRixzQkFBb0I7QUFQSSxDQUExQiIsImZpbGUiOiJjYXJkLWhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHsgSWNvbiB9IGZyb20gJ0BvcHVzY2FwaXRhL3JlYWN0LWljb25zJztcblxuaW1wb3J0ICcuL2NhcmQtaGVhZGVyLnNjc3MnO1xuXG5cbmV4cG9ydCBjbGFzcyBDYXJkSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgZ2V0RXhwYW5kQ29sbGFwc2UgPSAoKSA9PiB7XG4gICAgaWYgKCF0aGlzLnByb3BzLnNldEV4cGFuZGVkKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5wcm9wcy5leHBhbmRlZCA/XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICB0aXRsZT17dGhpcy5wcm9wcy5jb2xsYXBzZUJ0blRvb2x0aXB9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5zZXRFeHBhbmRlZCh0aGlzLnByb3BzLmlkLCBmYWxzZSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICB3aWR0aD17MTd9XG4gICAgICAgICAgICBoZWlnaHQ9ezE3fVxuICAgICAgICAgICAgdHlwZT1cImluZGljYXRvclwiXG4gICAgICAgICAgICBuYW1lPVwibWludXNcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvYnV0dG9uPiA6XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICB0aXRsZT17dGhpcy5wcm9wcy5leHBhbmRCdG5Ub29sdGlwfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc2V0RXhwYW5kZWQodGhpcy5wcm9wcy5pZCwgdHJ1ZSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICB3aWR0aD17MTd9XG4gICAgICAgICAgICBoZWlnaHQ9ezE3fVxuICAgICAgICAgICAgdHlwZT1cImluZGljYXRvclwiXG4gICAgICAgICAgICBuYW1lPVwicGx1c1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJvYy1jYXJkLWhlYWRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoaWxkcmVuXCI+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlLWV4cGFuZFwiPlxuICAgICAgICAgICAge3RoaXMucHJvcHMub25seUNoaWxkID8gJycgOiB0aGlzLmdldEV4cGFuZENvbGxhcHNlKCl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5DYXJkSGVhZGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgaWQ6IG51bGwsXG4gIGNoaWxkcmVuOiBbXSxcbiAgb25seUNoaWxkOiBmYWxzZSxcbiAgZXhwYW5kZWQ6IGZhbHNlLFxuICBzZXRFeHBhbmRlZDogbnVsbCxcbiAgZXhwYW5kQnRuVG9vbHRpcDogJ2V4cGFuZCcsXG4gIGNvbGxhcHNlQnRuVG9vbHRpcDogJ2NvbGxhcHNlJyxcbn07XG5cbkNhcmRIZWFkZXIucHJvcFR5cGVzID0ge1xuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBvbmx5Q2hpbGQ6IFByb3BUeXBlcy5ib29sLFxuICBleHBhbmRlZDogUHJvcFR5cGVzLmJvb2wsXG4gIHNldEV4cGFuZGVkOiBQcm9wVHlwZXMuZnVuYyxcbiAgZXhwYW5kQnRuVG9vbHRpcDogUHJvcFR5cGVzLnN0cmluZyxcbiAgY29sbGFwc2VCdG5Ub29sdGlwOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcbiJdfQ==