import React, { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  icon?: ReactNode;
  href?: string;
  onClick?: () => void;
  fullWidth?: boolean;
  className?: string;
}

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  icon,
  href,
  onClick,
  fullWidth = false,
  className = '',
}: ButtonProps) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-full font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-yellow-500 hover:bg-yellow-600 text-gray-900 focus:ring-yellow-500',
    secondary: 'bg-blue-700 hover:bg-blue-800 text-white focus:ring-blue-700',
    outline: 'bg-transparent border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white focus:ring-blue-900',
  };
  
  const sizeClasses = {
    small: 'text-sm py-1.5 px-4',
    medium: 'text-base py-2 px-6',
    large: 'text-lg py-3 px-8',
  };
  
  const widthClass = fullWidth ? 'w-full' : '';
  
  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`;
  
  const content = (
    <>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </>
  );
  
  if (href) {
    return (
      <a href={href} className={buttonClasses} onClick={onClick}>
        {content}
      </a>
    );
  }
  
  return (
    <button className={buttonClasses} onClick={onClick}>
      {content}
    </button>
  );
};

export default Button;