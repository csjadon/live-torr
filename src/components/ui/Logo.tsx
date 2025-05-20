import { IndianRupee } from 'lucide-react';

interface LogoProps {
  light?: boolean;
}

const Logo = ({ light = false }: LogoProps) => {
  const textColor = light ? 'text-white' : 'text-gray-900';
  const iconBgColor = light ? 'bg-white text-blue-900' : 'bg-blue-900 text-white';
  
  return (
    <div className="flex items-center">
      <div className={`${iconBgColor} p-2 rounded-full mr-2`}>
        <IndianRupee size={20} />
      </div>
      <span className={`${textColor} font-bold text-xl tracking-tight`}>
        One Rupee <span className="font-extrabold">Revolution</span>
      </span>
    </div>
  );
};

export default Logo;