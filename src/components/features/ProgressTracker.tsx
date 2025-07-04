import React from 'react';
import { TrendingUp, Award, BookOpen } from 'lucide-react';
import { LearningProgress } from '../../types';
import { useLanguage } from '../../contexts/LanguageContext';

interface ProgressTrackerProps {
  progress: LearningProgress;
}

const ProgressTracker: React.FC<ProgressTrackerProps> = ({ progress }) => {
  const { t } = useLanguage();
  
  return (
    <div className="bg-white shadow-sm rounded-lg p-4">
      <h3 className="text-lg font-medium text-gray-900 mb-4">
        {t('yourProgress')}
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-primary-50 p-4 rounded-lg flex items-center">
          <BookOpen className="h-8 w-8 text-primary-500 mr-3" />
          <div>
            <p className="text-sm text-gray-500">{t('wordsLearned')}</p>
            <p className="text-xl font-bold text-primary-700">{progress.wordsLearned}</p>
          </div>
        </div>
        
        <div className="bg-secondary-50 p-4 rounded-lg flex items-center">
          <Award className="h-8 w-8 text-secondary-500 mr-3" />
          <div>
            <p className="text-sm text-gray-500">{t('lessonsCompleted')}</p>
            <p className="text-xl font-bold text-secondary-700">{progress.lessonsCompleted}</p>
          </div>
        </div>
        
        <div className="bg-green-50 p-4 rounded-lg flex items-center">
          <TrendingUp className="h-8 w-8 text-green-500 mr-3" />
          <div>
            <p className="text-sm text-gray-500">{t('quizzesTaken')}</p>
            <p className="text-xl font-bold text-green-700">{progress.quizzesTaken}</p>
          </div>
        </div>
        
        <div className="bg-amber-50 p-4 rounded-lg flex items-center">
          <div className="relative flex justify-center items-center h-8 w-8 text-amber-500 mr-3">
            <div className="absolute top-0 right-0 -mt-1 -mr-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
            </div>
            <span className="text-sm font-bold">{progress.streak}</span>
          </div>
          <div>
            <p className="text-sm text-gray-500">{t('dayStreak')}</p>
            <p className="text-xl font-bold text-amber-700">{progress.streak} {t('days')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressTracker;