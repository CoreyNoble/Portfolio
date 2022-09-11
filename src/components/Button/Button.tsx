import React from 'react';
import './Button.scss';

export interface ButtonProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes {}

export const Button: React.FC<ButtonProps> = (props) => {
  const { className = '', children, ...rest } = props;

  return <button className={`${className}`} {...rest}>{children}</button>;
};
