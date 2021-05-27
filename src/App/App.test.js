import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

jest.mock('react-ga');

const renderApp = (props) => shallow(<App {...props} />);

describe('Test App', () => {
  it('render app', () => {
    const actual = renderApp();
    expect(actual).toMatchSnapshot();
  });
});
