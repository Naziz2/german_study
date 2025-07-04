import React from 'react';
import { ChevronRight, BookOpen, Languages, Brain } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import WordOfTheDay from '../components/features/WordOfTheDay';
import ProgressTracker from '../components/features/ProgressTracker';
import { useLanguage } from '../contexts/LanguageContext';

// Mock data for progress
const mockProgress = {
  wordsLearned: 37,
  lessonsCompleted: 5,
  quizzesTaken: 8,
  correctAnswers: 45,
  streak: 3
};

const HomePage: React.FC = () => {
  const { language, t } = useLanguage();
  const isArabic = language === 'ar';
  const navigate = useNavigate();

  const handleStartLearning = () => {
    navigate('/vocabulary');
  };
  
  return (
    <div>
      {/* Hero section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div className={`mb-10 lg:mb-0 ${isArabic ? 'lg:order-2' : 'lg:order-1'}`}>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6">
                {t('welcomeTitle')}
              </h1>
              <p className="mt-3 max-w-md mx-auto text-lg text-white text-opacity-90 sm:text-xl md:mt-5 md:max-w-3xl">
                {t('welcomeSubtitle')}
              </p>
              <div className="mt-10">
                <button
                  onClick={handleStartLearning}
                  className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-primary-600 bg-white hover:bg-gray-50 transition-colors duration-150"
                >
                  {t('startLearning')}
                  <ChevronRight className={`${isArabic ? 'mr-2' : 'ml-2'} h-5 w-5`} />
                </button>
              </div>
            </div>
            <div className={`${isArabic ? 'lg:order-1' : 'lg:order-2'} flex justify-center lg:justify-end`}>
              <img
                className="h-56 w-auto sm:h-72 md:h-80 rounded-lg shadow-2xl"
                src="https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg"
                alt="Learning German"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-16">
            <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">
              {isArabic ? 'الميزات' : 'Features'}
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {isArabic ? 'تعلم الألمانية بطريقة أسهل' : 'Learn German the easier way'}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-primary-100 rounded-full p-3 text-primary-600 mr-4">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">
                  {isArabic ? 'تعلم المفردات' : 'Vocabulary Learning'}
                </h3>
              </div>
              <p className="text-gray-600">
                {isArabic 
                  ? 'تعلم المفردات الألمانية بسهولة مع بطاقات مخصصة للناطقين بالعربية.' 
                  : 'Learn German vocabulary effortlessly with flashcards tailored for Arabic speakers.'}
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-secondary-100 rounded-full p-3 text-secondary-600 mr-4">
                  <Languages className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">
                  {isArabic ? 'دروس القواعد' : 'Grammar Lessons'}
                </h3>
              </div>
              <p className="text-gray-600">
                {isArabic 
                  ? 'تعلم قواعد اللغة الألمانية بوضوح مع شروحات باللغة العربية وأمثلة عملية.' 
                  : 'Master German grammar with clear Arabic explanations and practical examples.'}
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-amber-100 rounded-full p-3 text-amber-600 mr-4">
                  <Brain className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">
                  {isArabic ? 'اختبارات تفاعلية' : 'Interactive Quizzes'}
                </h3>
              </div>
              <p className="text-gray-600">
                {isArabic 
                  ? 'اختبر معرفتك وعزز التعلم من خلال تمارين تفاعلية وتغذية راجعة فورية.' 
                  : 'Test your knowledge and reinforce learning through interactive exercises with immediate feedback.'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Progress and Word of the Day */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {isArabic ? 'تعلم كل يوم' : 'Learn Every Day'}
              </h3>
              <ProgressTracker progress={mockProgress} />
            </div>
            <div>
              <WordOfTheDay />
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">{t('testimonials')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex items-center mb-4">
                <img 
                  className="h-12 w-12 rounded-full" 
                  src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg" 
                  alt="Testimonial avatar"
                />
                <div className="ml-4">
                  <h4 className="text-lg font-bold">{isArabic ? 'سارة أحمد' : 'Sara Ahmed'}</h4>
                  <p className="text-gray-500 text-sm">{isArabic ? 'القاهرة، مصر' : 'Cairo, Egypt'}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                {isArabic 
                  ? 'أنا أحب الطريقة التي يشرح بها الموقع قواعد اللغة الألمانية. الأمثلة باللغة العربية تجعل الفهم أسهل بكثير!' 
                  : 'I love how the site explains German grammar. The Arabic examples make understanding so much easier!'}
              </p>
            </div>
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex items-center mb-4">
                <img 
                  className="h-12 w-12 rounded-full" 
                  src="https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg" 
                  alt="Testimonial avatar"
                />
                <div className="ml-4">
                  <h4 className="text-lg font-bold">{isArabic ? 'محمد الحسن' : 'Mohammed Al-Hassan'}</h4>
                  <p className="text-gray-500 text-sm">{isArabic ? 'دبي، الإمارات' : 'Dubai, UAE'}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                {isArabic 
                  ? 'كمتحدث عربي، كنت أجد صعوبة في تعلم الألمانية. لكن هذا الموقع جعل العملية سهلة وممتعة!' 
                  : 'As an Arabic speaker, I struggled with German. But this site made the process easy and enjoyable!'}
              </p>
            </div>
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex items-center mb-4">
                <img 
                  className="h-12 w-12 rounded-full" 
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" 
                  alt="Testimonial avatar"
                />
                <div className="ml-4">
                  <h4 className="text-lg font-bold">{isArabic ? 'يوسف الشمري' : 'Youssef Al-Shamri'}</h4>
                  <p className="text-gray-500 text-sm">{isArabic ? 'الرياض، السعودية' : 'Riyadh, Saudi Arabia'}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                {isArabic 
                  ? 'نظام التتبع يحفزني على التعلم كل يوم. لقد حققت تقدمًا أكبر مما كنت أتخيل!' 
                  : 'The tracking system motivates me to learn every day. I\'ve made more progress than I imagined!'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to action */}
      <div className="bg-primary-700 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            <span className="block">
              {isArabic ? 'مستعد لبدء رحلة تعلم اللغة الألمانية؟' : 'Ready to start your German learning journey?'}
            </span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <button
                onClick={handleStartLearning}
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-gray-50"
              >
                {t('startLearning')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;