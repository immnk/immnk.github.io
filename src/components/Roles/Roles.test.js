import React from 'react';
import { shallow } from 'enzyme';

import Roles from './Roles';

const renderApp = (props) => {
  const defaultProps = {
    className: 'my-classname'
  };

  return <Roles {...defaultProps} {...props} />;
};

const shallowRenderApp = (props) => shallow(renderApp(props));

describe('Test App', () => {
  it('render app', () => {
    const actual = shallowRenderApp();
    expect(actual).toMatchSnapshot();
  });
});
