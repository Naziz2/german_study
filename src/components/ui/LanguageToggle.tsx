import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const LanguageToggle: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();
  
  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center justify-center p-2 rounded-full bg-opacity-20 hover:bg-opacity-30 transition-all duration-200 focus:outline-none"
      aria-label={language === 'ar' ? 'Switch to German' : 'التبديل إلى العربية'}
    >
      {language === 'ar' ? (
        <span className="flex items-center text-primary-600">
          <span className="mr-1">DE</span>
          <Sun size={18} />
        </span>
      ) : (
        <span className="flex items-center text-primary-600">
          <span className="mr-1">AR</span>
          <Moon size={18} />
        </span>
      )}
    </button>
  );
};

export default LanguageToggle;