import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import MuiTableHead from './MuiTableHead';

function setup() {
  const props = {
    content: [
      {
        component: 'MuiTableRow',
        content: [
          {
            component: 'MuiTableCell',
            content: [
              {
                component: 'MuiTypography',
                content: [
                  {
                    component: 'MuiText',
                    text: 'wooo',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  };

  const comp = shallow(<MuiTableHead {...props} />);
  return { comp, props };
}

describe('<MuiTableHead />', () => {
  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(
      <MemoryRouter>
        <MuiTableHead {...props} />
      </MemoryRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('should render MuiTableHead', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });
});
