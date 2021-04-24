import React from 'react';
import { shallow } from 'enzyme';

import AboutMe from './AboutMe';

const renderApp = (props) => {
  const defaultProps = {
    className: 'my-classname'
  };

  return <AboutMe {...defaultProps} {...props} />;
};

const shallowRenderApp = (props) => shallow(renderApp(props));

describe('Test App', () => {
  it('render app', () => {
    const actual = shallowRenderApp();
    expect(actual).toMatchSnapshot();
  });
});
