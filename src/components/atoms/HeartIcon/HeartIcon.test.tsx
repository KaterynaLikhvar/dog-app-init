import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import * as stories from './HeartIcon.stories';

describe('HeartIcon', () => {
  const { Default, Hover } = composeStories(stories);
  it('should match snapshot Default', () => {
    const { container } = render(<Default />);
    expect(container).toMatchSnapshot();
  });
  it('should match snapshot Hover', () => {
    const { container } = render(<Hover />);
    expect(container).toMatchSnapshot();
  });
});
