// src/components/Button/Button.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button Component', () => {
  it('renders the button with the given label', () => {
    render(<Button label="Test Button" />);
    const buttonElement = screen.getByText(/Test Button/i);
    expect(buttonElement).toBeInTheDocument();
  });

  it('triggers onClick event when clicked', () => {
    const handleClick = jest.fn();
    render(<Button label="Click Me" onClick={handleClick} />);
    const buttonElement = screen.getByText(/Click Me/i);
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies primary class when primary prop is true', () => {
    render(<Button label="Primary Button" primary />);
    const buttonElement = screen.getByText(/Primary Button/i);
    expect(buttonElement).toHaveClass('storybook-button--primary');
  });

  it('applies correct size class', () => {
    render(<Button label="Large Button" size="large" />);
    const buttonElement = screen.getByText(/Large Button/i);
    expect(buttonElement).toHaveClass('storybook-button--large');
  });
});