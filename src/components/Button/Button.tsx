import React from 'react';
import { ButtonProps } from './Button.types';
import './Button.styles';

export const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  onClick,
  'aria-pressed': ariaPressed,
  'aria-label': ariaLabel,
  disabled = false,
  ...props
}) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';

  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      onClick={onClick}
      aria-pressed={ariaPressed}
      aria-label={ariaLabel || label}
      aria-disabled={disabled}
      disabled={disabled}
      {...props}
    >
      {label}
    </button>
  );
};