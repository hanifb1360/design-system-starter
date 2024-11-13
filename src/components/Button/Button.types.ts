export interface ButtonProps {
    /** Button label text */
    label: string;
    /** Optional click handler */
    onClick?: () => void;
    /** Sets the button to primary style */
    primary?: boolean;
    /** Optional background color */
    backgroundColor?: string;
    /** Button size options */
    size?: 'small' | 'medium' | 'large';
    /** ARIA attribute for pressed state (useful for toggle buttons) */
    'aria-pressed'?: boolean;
    /** ARIA attribute to provide a more descriptive label */
    'aria-label'?: string;
    /** Indicates if the button is disabled */
    disabled?: boolean;
  }