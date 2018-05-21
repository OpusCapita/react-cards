/* eslint-disable prefer-arrow-callback */

import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import { Card, CardContent, CardHeader } from '../../src/index';


describe('Card component', function describe() {
  it('should render correctly', () => {
    const props = {
      id: 'my-card',
      expanded: true,
    };
    // with one child
    let wrapper = mount(
      <Card {...props}>
        <CardContent className="only-child" />
      </Card>,
    );
    expect(wrapper.at(0).props().id).to.eql('my-card');


    // with multiple children
    wrapper = mount( // eslint-disable-line
      <Card {...props}>
        <CardHeader />
        <CardContent className="only-child" />
      </Card>);

    expect(wrapper.at(0).props().id).to.eql('my-card');
    expect(wrapper.at(0).props().expanded).to.eql(true);
  });
});
