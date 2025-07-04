import React, { useState } from 'react';
import { Filter, Search } from 'lucide-react';
import { Word } from '../../types';
import WordCard from '../ui/WordCard';
import { categories } from '../../data/vocabulary';
import { useLanguage } from '../../contexts/LanguageContext';

interface VocabularyListProps {
  words: Word[];
}

const VocabularyList: React.FC<VocabularyListProps> = ({ words }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const { language, t } = useLanguage();
  const isArabic = language === 'ar';

  const filteredWords = words.filter(word => {
    const matchesCategory = selectedCategory ? word.category === selectedCategory : true;
    const matchesSearch = searchQuery.trim() === '' ? true : 
      word.german.toLowerCase().includes(searchQuery.toLowerCase()) || 
      word.arabic.includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-6">
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <div className="flex flex-wrap gap-4">
          {/* Search input */}
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder={t('searchWords')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-sm ${isArabic ? 'text-right' : 'text-left'}`}
            />
          </div>
          
          {/* Category filter */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Filter className="h-5 w-5 text-gray-400" />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className={`block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-sm ${isArabic ? 'text-right' : 'text-left'}`}
            >
              <option value="">{t('allCategories')}</option>
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {isArabic ? category.nameArabic : category.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {filteredWords.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">{t('noWordsFound')}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWords.map((word) => (
            <div key={word.id} className="transition-all duration-200 hover:shadow-md rounded-xl">
              <WordCard word={word} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default VocabularyList;