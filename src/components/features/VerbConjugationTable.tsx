import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { verbConjugations, VerbConjugation } from '../../data/verbConjugations';
import { useLanguage } from '../../contexts/LanguageContext';

const VerbConjugationTable: React.FC = () => {
  const [selectedVerb, setSelectedVerb] = useState<VerbConjugation | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<string>('');
  const [filterLevel, setFilterLevel] = useState<string>('');
  const { language, t } = useLanguage();
  const isArabic = language === 'ar';

  const filteredVerbs = verbConjugations.filter(verb => {
    const matchesSearch = searchQuery.trim() === '' ? true : 
      verb.infinitive.toLowerCase().includes(searchQuery.toLowerCase()) || 
      verb.arabic.includes(searchQuery);
    const matchesType = filterType === '' ? true : verb.type === filterType;
    const matchesLevel = filterLevel === '' ? true : verb.level === filterLevel;
    return matchesSearch && matchesType && matchesLevel;
  });

  const tenses = [
    { key: 'present', name: isArabic ? 'المضارع' : 'Present', nameArabic: 'المضارع' },
    { key: 'past', name: isArabic ? 'الماضي' : 'Past', nameArabic: 'الماضي' },
    { key: 'perfect', name: isArabic ? 'الماضي التام' : 'Perfect', nameArabic: 'الماضي التام' },
    { key: 'future', name: isArabic ? 'المستقبل' : 'Future', nameArabic: 'المستقبل' }
  ];

  const pronouns = [
    { key: 'ich', name: 'ich', arabic: 'أنا' },
    { key: 'du', name: 'du', arabic: 'أنت' },
    { key: 'er_sie_es', name: 'er/sie/es', arabic: 'هو/هي' },
    { key: 'wir', name: 'wir', arabic: 'نحن' },
    { key: 'ihr', name: 'ihr', arabic: 'أنتم' },
    { key: 'sie_Sie', name: 'sie/Sie', arabic: 'هم/حضرتك' }
  ];

  return (
    <div className="space-y-6">
      {/* Search and Filter Controls */}
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <div className="flex flex-wrap gap-4">
          {/* Search input */}
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder={isArabic ? 'ابحث عن الأفعال' : 'Search verbs'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-sm ${isArabic ? 'text-right' : 'text-left'}`}
            />
          </div>
          
          {/* Type filter */}
          <div className="relative">
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className={`block w-full px-3 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-sm ${isArabic ? 'text-right' : 'text-left'}`}
            >
              <option value="">{isArabic ? 'جميع الأنواع' : 'All Types'}</option>
              <option value="regular">{isArabic ? 'منتظم' : 'Regular'}</option>
              <option value="irregular">{isArabic ? 'شاذ' : 'Irregular'}</option>
              <option value="modal">{isArabic ? 'مساعد' : 'Modal'}</option>
              <option value="separable">{isArabic ? 'منفصل' : 'Separable'}</option>
            </select>
          </div>

          {/* Level filter */}
          <div className="relative">
            <select
              value={filterLevel}
              onChange={(e) => setFilterLevel(e.target.value)}
              className={`block w-full px-3 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-sm ${isArabic ? 'text-right' : 'text-left'}`}
            >
              <option value="">{isArabic ? 'جميع المستويات' : 'All Levels'}</option>
              <option value="A1">A1</option>
              <option value="A2">A2</option>
              <option value="B1">B1</option>
              <option value="B2">B2</option>
              <option value="C1">C1</option>
              <option value="C2">C2</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Verb List */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">
              {isArabic ? 'قائمة الأفعال' : 'Verb List'}
            </h3>
          </div>
          <div className="max-h-96 overflow-y-auto">
            {filteredVerbs.map((verb) => (
              <div
                key={verb.infinitive}
                onClick={() => setSelectedVerb(verb)}
                className={`p-3 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors ${
                  selectedVerb?.infinitive === verb.infinitive ? 'bg-primary-50 border-primary-200' : ''
                }`}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium text-gray-900">{verb.infinitive}</h4>
                    <p className={`text-sm text-gray-600 ${isArabic ? 'font-arabic' : ''}`}>
                      {verb.arabic}
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      {verb.level}
                    </span>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-secondary-100 text-secondary-800">
                      {verb.type}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Conjugation Table */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">
              {selectedVerb ? (
                <>
                  {isArabic ? 'تصريف الفعل:' : 'Conjugation of:'} <span className="text-primary-600">{selectedVerb.infinitive}</span>
                </>
              ) : (
                isArabic ? 'اختر فعلاً لرؤية تصريفه' : 'Select a verb to see its conjugation'
              )}
            </h3>
          </div>
          
          {selectedVerb ? (
            <div className="p-4 space-y-6">
              {/* Verb Info */}
              <div className="bg-gray-50 p-3 rounded-md">
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <span className="font-medium">{isArabic ? 'المصدر:' : 'Infinitive:'}</span> {selectedVerb.infinitive}
                  </div>
                  <div>
                    <span className="font-medium">{isArabic ? 'النوع:' : 'Type:'}</span> {selectedVerb.type}
                  </div>
                  <div>
                    <span className="font-medium">{isArabic ? 'المعنى:' : 'Meaning:'}</span> {selectedVerb.arabic}
                  </div>
                  <div>
                    <span className="font-medium">{isArabic ? 'المستوى:' : 'Level:'}</span> {selectedVerb.level}
                  </div>
                </div>
              </div>

              {/* Tense Tables */}
              {tenses.map((tense) => (
                <div key={tense.key} className="space-y-2">
                  <h4 className="font-medium text-gray-900">{tense.name}</h4>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            {isArabic ? 'الضمير' : 'Pronoun'}
                          </th>
                          <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            {isArabic ? 'التصريف' : 'Conjugation'}
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {pronouns.map((pronoun) => (
                          <tr key={pronoun.key}>
                            <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                              {pronoun.name} <span className="text-gray-500">({pronoun.arabic})</span>
                            </td>
                            <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                              {selectedVerb[tense.key as keyof VerbConjugation][pronoun.key as keyof typeof selectedVerb.present]}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}

              {/* Imperative */}
              <div className="space-y-2">
                <h4 className="font-medium text-gray-900">{isArabic ? 'صيغة الأمر' : 'Imperative'}</h4>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          {isArabic ? 'الضمير' : 'Pronoun'}
                        </th>
                        <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          {isArabic ? 'صيغة الأمر' : 'Imperative'}
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">du</td>
                        <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                          {selectedVerb.imperative.du}
                        </td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">ihr</td>
                        <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                          {selectedVerb.imperative.ihr}
                        </td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">Sie</td>
                        <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                          {selectedVerb.imperative.Sie}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Participles */}
              <div className="space-y-2">
                <h4 className="font-medium text-gray-900">{isArabic ? 'اسم الفاعل واسم المفعول' : 'Participles'}</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium">{isArabic ? 'اسم الفاعل:' : 'Present Participle:'}</span> {selectedVerb.participle.present}
                  </div>
                  <div>
                    <span className="font-medium">{isArabic ? 'اسم المفعول:' : 'Past Participle:'}</span> {selectedVerb.participle.past}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-8 text-center text-gray-500">
              <p>{isArabic ? 'اختر فعلاً من القائمة لرؤية تصريفه الكامل' : 'Select a verb from the list to see its complete conjugation'}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VerbConjugationTable;