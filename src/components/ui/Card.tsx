import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
  bordered?: boolean;
  elevated?: boolean;
}

const Card = ({
  children,
  className = '',
  hoverable = false,
  bordered = false,
  elevated = false,
}: CardProps) => {
  const baseClasses = 'bg-white rounded-lg overflow-hidden';
  const hoverClasses = hoverable ? 'transform transition-transform duration-300 hover:-translate-y-2' : '';
  const borderClasses = bordered ? 'border border-gray-200' : '';
  const shadowClasses = elevated ? 'shadow-lg' : 'shadow-md';
  
  return (
    <div className={`${baseClasses} ${hoverClasses} ${borderClasses} ${shadowClasses} ${className}`}>
      {children}
    </div>
  );
};

export default Card;