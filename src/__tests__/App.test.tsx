import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

describe('App', () => {
  it('renders the navigation bar', () => {
    const { getByText } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(getByText('Home')).toBeDefined();
    expect(getByText('Restaurants')).toBeDefined();
    expect(getByText('Cart')).toBeDefined();
  });
});
