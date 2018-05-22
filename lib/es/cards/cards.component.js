function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable import/prefer-default-export */
/* eslint-disable react/no-find-dom-node */
import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import PerfectScrollbar from '@opuscapita/react-perfect-scrollbar';

import './cards.scss';

export var Cards = function (_React$Component) {
  _inherits(Cards, _React$Component);

  function Cards() {
    _classCallCheck(this, Cards);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Cards.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props.showOnlyCard || !this.props.showOnlyCard && prevProps.showOnlyCard) {
      ReactDOM.findDOMNode(this).scrollTop = 0;
    }
  };

  Cards.prototype.render = function render() {
    var _this2 = this;

    return React.createElement(
      PerfectScrollbar,
      null,
      React.createElement(
        'div',
        { className: 'oc-cards' },
        React.Children.map(this.props.children, function (child) {
          if (_this2.props.showOnlyCard && child.props && child.props.id !== _this2.props.showOnlyCard) {
            return null;
          }
          if (_this2.props.setExpanded) {
            return React.cloneElement(child, {
              setExpanded: _this2.props.setExpanded
            });
          }
          return child;
        })
      )
    );
  };

  return Cards;
}(React.Component);

Cards.defaultProps = {
  setExpanded: null,
  showOnlyCard: ''
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jYXJkcy9jYXJkcy5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiUmVhY3RET00iLCJQZXJmZWN0U2Nyb2xsYmFyIiwiQ2FyZHMiLCJjb21wb25lbnREaWRVcGRhdGUiLCJwcmV2UHJvcHMiLCJwcm9wcyIsInNob3dPbmx5Q2FyZCIsImZpbmRET01Ob2RlIiwic2Nyb2xsVG9wIiwicmVuZGVyIiwiQ2hpbGRyZW4iLCJtYXAiLCJjaGlsZHJlbiIsImNoaWxkIiwiaWQiLCJzZXRFeHBhbmRlZCIsImNsb25lRWxlbWVudCIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsUUFBUCxNQUFxQixXQUFyQjtBQUNBLE9BQU9DLGdCQUFQLE1BQTZCLHFDQUE3Qjs7QUFFQSxPQUFPLGNBQVA7O0FBR0EsV0FBYUMsS0FBYjtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQSxrQkFDRUMsa0JBREYsK0JBQ3FCQyxTQURyQixFQUNnQztBQUM1QixRQUFJLEtBQUtDLEtBQUwsQ0FBV0MsWUFBWCxJQUNBLENBQUMsS0FBS0QsS0FBTCxDQUFXQyxZQUFaLElBQTRCRixVQUFVRSxZQUQxQyxFQUN5RDtBQUN2RE4sZUFBU08sV0FBVCxDQUFxQixJQUFyQixFQUEyQkMsU0FBM0IsR0FBdUMsQ0FBdkM7QUFDRDtBQUNGLEdBTkg7O0FBQUEsa0JBUUVDLE1BUkYscUJBUVc7QUFBQTs7QUFDUCxXQUNFO0FBQUMsc0JBQUQ7QUFBQTtBQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsVUFBZjtBQUNJWCxjQUFNWSxRQUFOLENBQWVDLEdBQWYsQ0FBbUIsS0FBS04sS0FBTCxDQUFXTyxRQUE5QixFQUF3QyxVQUFDQyxLQUFELEVBQVc7QUFDbkQsY0FBSSxPQUFLUixLQUFMLENBQVdDLFlBQVgsSUFBMkJPLE1BQU1SLEtBQWpDLElBQ0FRLE1BQU1SLEtBQU4sQ0FBWVMsRUFBWixLQUFtQixPQUFLVCxLQUFMLENBQVdDLFlBRGxDLEVBQ2dEO0FBQzlDLG1CQUFPLElBQVA7QUFDRDtBQUNELGNBQUksT0FBS0QsS0FBTCxDQUFXVSxXQUFmLEVBQTRCO0FBQzFCLG1CQUFPakIsTUFBTWtCLFlBQU4sQ0FBbUJILEtBQW5CLEVBQTBCO0FBQy9CRSwyQkFBYSxPQUFLVixLQUFMLENBQVdVO0FBRE8sYUFBMUIsQ0FBUDtBQUdEO0FBQ0QsaUJBQU9GLEtBQVA7QUFDRCxTQVhDO0FBREo7QUFERixLQURGO0FBa0JELEdBM0JIOztBQUFBO0FBQUEsRUFBMkJmLE1BQU1tQixTQUFqQzs7QUE4QkFmLE1BQU1nQixZQUFOLEdBQXFCO0FBQ25CSCxlQUFhLElBRE07QUFFbkJULGdCQUFjO0FBRkssQ0FBckIiLCJmaWxlIjoiY2FyZHMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvbm8tZmluZC1kb20tbm9kZSAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBQZXJmZWN0U2Nyb2xsYmFyIGZyb20gJ0BvcHVzY2FwaXRhL3JlYWN0LXBlcmZlY3Qtc2Nyb2xsYmFyJztcblxuaW1wb3J0ICcuL2NhcmRzLnNjc3MnO1xuXG5cbmV4cG9ydCBjbGFzcyBDYXJkcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5zaG93T25seUNhcmQgfHxcbiAgICAgICAoIXRoaXMucHJvcHMuc2hvd09ubHlDYXJkICYmIHByZXZQcm9wcy5zaG93T25seUNhcmQpKSB7XG4gICAgICBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKS5zY3JvbGxUb3AgPSAwO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFBlcmZlY3RTY3JvbGxiYXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2MtY2FyZHNcIj5cbiAgICAgICAgICB7IFJlYWN0LkNoaWxkcmVuLm1hcCh0aGlzLnByb3BzLmNoaWxkcmVuLCAoY2hpbGQpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnNob3dPbmx5Q2FyZCAmJiBjaGlsZC5wcm9wcyAmJlxuICAgICAgICAgICAgICAgIGNoaWxkLnByb3BzLmlkICE9PSB0aGlzLnByb3BzLnNob3dPbmx5Q2FyZCkge1xuICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnNldEV4cGFuZGVkKSB7XG4gICAgICAgICAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgICAgICAgICAgICBzZXRFeHBhbmRlZDogdGhpcy5wcm9wcy5zZXRFeHBhbmRlZCxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgICAgICAgfSkgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvUGVyZmVjdFNjcm9sbGJhcj5cbiAgICApO1xuICB9XG59XG5cbkNhcmRzLmRlZmF1bHRQcm9wcyA9IHtcbiAgc2V0RXhwYW5kZWQ6IG51bGwsXG4gIHNob3dPbmx5Q2FyZDogJycsXG59O1xuXG5DYXJkcy5wcm9wVHlwZXMgPSB7XG4gIHNldEV4cGFuZGVkOiBQcm9wVHlwZXMuZnVuYyxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gIHNob3dPbmx5Q2FyZDogUHJvcFR5cGVzLnN0cmluZyxcbn07XG4iXX0=