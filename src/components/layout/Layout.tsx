import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useLanguage } from '../../contexts/LanguageContext';

const Layout: React.FC = () => {
  const { language } = useLanguage();
  const isArabic = language === 'ar';
  
  return (
    <div 
      className={`min-h-screen flex flex-col ${isArabic ? 'font-arabic' : 'font-sans'}`}
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;