import { ReactNode } from 'react';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  withContainer?: boolean;
  withPadding?: boolean;
  background?: 'white' | 'light' | 'dark' | 'blue' | 'gradient';
}

const Section = ({
  id,
  children,
  className = '',
  withContainer = true,
  withPadding = true,
  background = 'white',
}: SectionProps) => {
  const backgroundClasses = {
    white: 'bg-white',
    light: 'bg-gray-50',
    dark: 'bg-gray-900 text-white',
    blue: 'bg-blue-900 text-white',
    gradient: 'bg-gradient-to-b from-blue-900 to-blue-700 text-white',
  };
  
  const paddingClasses = withPadding ? 'py-16 md:py-24' : '';
  const sectionClasses = `${backgroundClasses[background]} ${paddingClasses} ${className}`;
  
  return (
    <section id={id} className={sectionClasses}>
      {withContainer ? (
        <div className="container mx-auto px-4">
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  );
};

export default Section;