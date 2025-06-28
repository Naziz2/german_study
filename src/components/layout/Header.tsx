import React from 'react';
import { Link } from 'react-router-dom';
import { Languages, BookOpen, Home, Menu, X } from 'lucide-react';
import LanguageToggle from '../ui/LanguageToggle';
import { useLanguage } from '../../contexts/LanguageContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { language, t } = useLanguage();
  const isArabic = language === 'ar';

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className="bg-white shadow-sm sticky top-0 z-50"
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <Languages className="h-8 w-8 text-primary-600" />
              <span className={`${isArabic ? 'mr-2' : 'ml-2'} font-bold text-xl text-gray-900`}>
                {isArabic ? 'دويتش لِيرن' : 'DeutschLernen'}
              </span>
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`text-gray-600 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out ${isArabic ? 'ml-4' : 'mr-4'}`}>
              {t('home')}
            </Link>
            <Link to="/vocabulary" className="text-gray-600 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out">
              {t('vocabulary')}
            </Link>
            <Link to="/grammar" className="text-gray-600 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out">
              {t('grammar')}
            </Link>
            <Link to="/practice" className="text-gray-600 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out">
              {t('practice')}
            </Link>
            <Link to="/dictionary" className="text-gray-600 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out">
              {t('dictionary')}
            </Link>
            <LanguageToggle />
          </nav>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <LanguageToggle />
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-primary-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
              aria-expanded="false"
            >
              <span className="sr-only">{t('openMenu')}</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1" dir={isArabic ? 'rtl' : 'ltr'}>
          <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50">
            {t('home')}
          </Link>
          <Link to="/vocabulary" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50">
            {t('vocabulary')}
          </Link>
          <Link to="/grammar" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50">
            {t('grammar')}
          </Link>
          <Link to="/practice" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50">
            {t('practice')}
          </Link>
          <Link to="/dictionary" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50">
            {t('dictionary')}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;