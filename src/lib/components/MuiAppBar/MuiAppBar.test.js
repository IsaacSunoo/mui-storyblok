import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import MuiAppBar from './MuiAppBar';

function setup() {
  const props = {
    content: [{
      component: 'MuiButtonRedirect',
      redirectRoute: '',
      button: [{
        component: 'MuiButton',
        buttonText: 'here',
      }],
    }],
  };
  const comp = shallow(<MuiAppBar {...props} />);
  return { comp, props };
}

describe('<MuiAppBar />', () => {
  it('renders MuiAppBar', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create((
      <MemoryRouter>
        <MuiAppBar {...props} />
      </MemoryRouter>
    ));
    expect(tree).toMatchSnapshot();
  });
});
