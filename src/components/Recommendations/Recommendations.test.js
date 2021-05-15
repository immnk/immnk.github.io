import React from 'react';
import { shallow } from 'enzyme';

import Recommendations from './Recommendations';

const renderRecommendations = (props) => {
  const defaultProps = {
    className: 'my-classname'
  };

  return <Recommendations {...defaultProps} {...props} />;
};

const shallowRenderRecommendations = (props) => shallow(renderRecommendations(props));

describe('Test Recommendations', () => {
  it('render app', () => {
    const actual = shallowRenderRecommendations();
    expect(actual).toMatchSnapshot();
  });
});
