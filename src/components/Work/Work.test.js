import React from 'react';
import { shallow } from 'enzyme';

import Work from './Work';

const renderWork = (props) => {
  const defaultProps = {
    className: 'my-classname'
  };

  return <Work {...defaultProps} {...props} />;
};

const shallowRenderWork = (props) => shallow(renderWork(props));

describe('Test Work', () => {
  it('render app', () => {
    const actual = shallowRenderWork();
    expect(actual).toMatchSnapshot();
  });
});
