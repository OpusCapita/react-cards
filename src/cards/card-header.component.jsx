/* eslint-disable import/prefer-default-export */
import React from 'react';
import PropTypes from 'prop-types';

import { Icon } from '@opuscapita/react-icons';

import './card-header.scss';


export class CardHeader extends React.Component {
  getExpandCollapse = () => {
    if (!this.props.setExpanded) {
      return null;
    }

    return (
      this.props.expanded ?
        <button
          title={this.props.collapseBtnTooltip}
          onClick={() => {
            this.props.setExpanded(this.props.id, false);
          }}
        >
          <Icon
            width={17}
            height={17}
            type="indicator"
            name="minus"
          />
        </button> :
        <button
          title={this.props.expandBtnTooltip}
          onClick={() => {
            this.props.setExpanded(this.props.id, true);
          }}
        >
          <Icon
            width={17}
            height={17}
            type="indicator"
            name="plus"
          />
        </button>
    );
  }

  render() {
    return (
      <div className="oc-card-header">
        <div className="content">
          <div className="children">
            {this.props.children}
          </div>
          <div className="collapse-expand">
            {this.props.onlyChild ? '' : this.getExpandCollapse()}
          </div>
        </div>
      </div>
    );
  }
}

CardHeader.defaultProps = {
  id: null,
  children: [],
  onlyChild: false,
  expanded: false,
  setExpanded: null,
  expandBtnTooltip: 'expand',
  collapseBtnTooltip: 'collapse',
};

CardHeader.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node,
  onlyChild: PropTypes.bool,
  expanded: PropTypes.bool,
  setExpanded: PropTypes.func,
  expandBtnTooltip: PropTypes.string,
  collapseBtnTooltip: PropTypes.string,
};
