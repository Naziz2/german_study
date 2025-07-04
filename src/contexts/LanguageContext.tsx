import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations } from '../data/translations';

type Language = 'de' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('de');

  useEffect(() => {
    // Apply RTL class to document when language is Arabic
    if (language === 'ar') {
      document.documentElement.dir = 'rtl';
      document.body.classList.add('font-arabic');
    } else {
      document.documentElement.dir = 'ltr';
      document.body.classList.remove('font-arabic');
    }

    // Update page title when language changes
    const defaultTitle = document.title;
    if (language === 'ar') {
      document.title = 'دويتش لِيرن - تعلم الألمانية بسهولة';
    } else {
      document.title = 'DeutschLernen - Learn German Easily';
    }

    return () => {
      document.title = defaultTitle;
    };
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(language === 'de' ? 'ar' : 'de');
  };

  const t = (key: string): string => {
    return translations[language]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};