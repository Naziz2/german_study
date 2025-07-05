import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Languages } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { language, t } = useLanguage();
  const isArabic = language === 'ar';
  
  return (
    <footer 
      className="bg-gray-900 text-white py-10"
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and description */}
          <div>
            <div className="flex items-center">
              <Languages className="h-8 w-8 text-secondary-400" />
              <span className={`${isArabic ? 'mr-2' : 'ml-2'} font-bold text-xl`}>
                {isArabic ? 'دويتش لِيرن' : 'DeutschLernen'}
              </span>
            </div>
            <p className="mt-4 text-gray-300 text-sm">
              {t('footerDescription')}
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">{t('quickLinks')}</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/vocabulary" className="text-gray-300 hover:text-white transition-colors">
                  {t('vocabulary')}
                </Link>
              </li>
              <li>
                <Link to="/grammar" className="text-gray-300 hover:text-white transition-colors">
                  {t('grammar')}
                </Link>
              </li>
              <li>
                <Link to="/verb-conjugation" className="text-gray-300 hover:text-white transition-colors">
                  {t('verbConjugation')}
                </Link>
              </li>
              <li>
                <Link to="/practice" className="text-gray-300 hover:text-white transition-colors">
                  {t('practice')}
                </Link>
              </li>
              <li>
                <Link to="/dictionary" className="text-gray-300 hover:text-white transition-colors">
                  {t('dictionary')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">{t('contact')}</h3>
            <p className="mt-4 text-gray-300">
              {t('contactText')}
            </p>
            <a href="mailto:contact@deutschlernen.com" className="mt-2 block text-secondary-400 hover:text-secondary-300 transition-colors">
              contact@deutschlernen.com
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>© 2025 DeutschLernen. {t('allRightsReserved')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;