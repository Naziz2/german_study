import React, { useState } from 'react';
import { Search, Volume as VolumeUp } from 'lucide-react';
import { vocabulary } from '../../data/vocabulary';
import { useLanguage } from '../../contexts/LanguageContext';

const DictionarySearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<typeof vocabulary>([]);
  const { language, t } = useLanguage();
  const isArabic = language === 'ar';
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!searchTerm.trim()) {
      setSearchResults([]);
      return;
    }
    
    // Simple search against our vocabulary data
    // In a real app, this would be a more sophisticated dictionary API
    const results = vocabulary.filter(word => 
      word.german.toLowerCase().includes(searchTerm.toLowerCase()) ||
      word.arabic.includes(searchTerm)
    );
    
    setSearchResults(results);
  };
  
  const playPronunciation = (german: string) => {
    // This would trigger audio playback in a real implementation
    console.log('Playing pronunciation for:', german);
  };
  
  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <h2 className="text-xl font-bold mb-4">{t('germanArabicDictionary')}</h2>
        
        <form onSubmit={handleSearch} className="flex gap-2">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={t('searchGermanOrArabic')}
              className={`block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-sm ${isArabic ? 'text-right' : 'text-left'}`}
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            {t('search')}
          </button>
        </form>
      </div>
      
      {searchResults.length > 0 ? (
        <div className="bg-white rounded-lg shadow-sm divide-y">
          {searchResults.map(word => (
            <div key={word.id} className="p-4 hover:bg-gray-50 transition-colors">
              <div className="flex justify-between">
                <div>
                  <div className="flex items-center">
                    <h3 className="text-lg font-medium text-gray-900">{word.german}</h3>
                    <button 
                      onClick={() => playPronunciation(word.german)}
                      className="ml-2 text-gray-400 hover:text-primary-500"
                    >
                      <VolumeUp size={16} />
                    </button>
                    <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      {word.level}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">{isArabic ? word.pronunciation : ''}</p>
                </div>
                <div className={`text-right ${isArabic ? 'font-arabic' : ''}`}>
                  <p className="text-lg">{word.arabic}</p>
                  <p className="text-xs text-gray-500">{word.category}</p>
                </div>
              </div>
              {word.example && (
                <div className="mt-2 text-sm text-gray-600">
                  <p className="italic">{word.example}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : searchTerm ? (
        <div className="text-center py-12 bg-white rounded-lg shadow-sm">
          <p className="text-gray-500">{t('noWordsFound')}</p>
          <p className="text-sm text-gray-400 mt-1">{t('tryDifferentSearch')}</p>
        </div>
      ) : null}
    </div>
  );
};

export default DictionarySearch;