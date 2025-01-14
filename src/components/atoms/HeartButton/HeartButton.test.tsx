import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import * as stories from './HeartButton.stories';

describe('HeartButton', () => {
  const { Default, Active, Hover } = composeStories(stories);
  it('should match snapshot Default', () => {
    const { container } = render(<Default />);
    expect(container).toMatchSnapshot();
  });
  it('should match snapshot Active', () => {
    const { container } = render(<Active />);
    expect(container).toMatchSnapshot();
  });
  it('should match snapshot Hover', () => {
    const { container } = render(<Hover />);
    expect(container).toMatchSnapshot();
  });
});
