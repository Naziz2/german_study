import React from 'react';
import { BookOpen, ChevronRight } from 'lucide-react';
import { GrammarLesson } from '../../types';
import { useLanguage } from '../../contexts/LanguageContext';

interface GrammarLessonListProps {
  lessons: GrammarLesson[];
}

const GrammarLessonList: React.FC<GrammarLessonListProps> = ({ lessons }) => {
  const { language, t } = useLanguage();
  const isArabic = language === 'ar';
  
  return (
    <div className="space-y-4">
      {lessons.map((lesson) => (
        <div 
          key={lesson.id}
          className="bg-white shadow-sm rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-200"
        >
          <div className="p-5">
            <div className="flex justify-between items-start">
              <div className="flex items-center">
                <BookOpen className="h-6 w-6 text-primary-500 mr-3" />
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {isArabic ? lesson.titleArabic : lesson.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    {isArabic ? lesson.descriptionArabic : lesson.description}
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary-100 text-secondary-800">
                {lesson.level}
              </span>
            </div>
            
            <div className="mt-4">
              <h4 className="text-sm font-medium text-gray-900 mb-2">
                {t('examples')}:
              </h4>
              <ul className="space-y-2">
                {lesson.examples.map((example, index) => (
                  <li key={index} className="bg-gray-50 p-3 rounded-md text-sm">
                    <p className="text-gray-800 mb-1">{example.german}</p>
                    <p className={`text-gray-600 ${isArabic ? 'font-arabic' : ''}`}>{example.arabic}</p>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-4 flex justify-end">
              <button
                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
              >
                {isArabic ? (
                  <>
                    {t('practiceLesson')} 
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </>
                ) : (
                  <>
                    {t('practiceLesson')}
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GrammarLessonList;