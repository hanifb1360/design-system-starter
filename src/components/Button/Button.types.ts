
export interface ButtonProps {
    label: string;
    /** Optional click handler */
    onClick?: () => void;
    /** Sets the button to primary style */
    primary?: boolean;
    /** Optional background color */
    backgroundColor?: string;
    /** Button size options */
    size?: 'small' | 'medium' | 'large';
  }