import React, { useState } from 'react';
import { Check, X, HelpCircle } from 'lucide-react';
import { QuizQuestion } from '../../types';
import { useLanguage } from '../../contexts/LanguageContext';

interface QuizComponentProps {
  questions: QuizQuestion[];
}

const QuizComponent: React.FC<QuizComponentProps> = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  
  const { language, t } = useLanguage();
  const isArabic = language === 'ar';
  
  const currentQuestion = questions[currentQuestionIndex];
  
  const handleSelectAnswer = (answerIndex: number) => {
    if (selectedAnswer !== null) return; // Prevent changing answer
    
    setSelectedAnswer(answerIndex);
    
    if (answerIndex === currentQuestion.correctAnswer) {
      setCorrectAnswers(correctAnswers + 1);
    }
  };
  
  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setShowExplanation(false);
    
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  };
  
  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setCorrectAnswers(0);
    setQuizCompleted(false);
  };
  
  if (quizCompleted) {
    const score = Math.round((correctAnswers / questions.length) * 100);
    
    return (
      <div className="max-w-lg mx-auto bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-bold text-center mb-6">{t('quizCompleted')}</h2>
        
        <div className="text-center">
          <div className="inline-block p-4 rounded-full bg-primary-100 mb-4">
            <span className="text-4xl font-bold text-primary-700">{score}%</span>
          </div>
          
          <p className="mb-2">
            {t('youAnswered')} <span className="font-bold">{correctAnswers}</span> {t('outOf')} <span className="font-bold">{questions.length}</span> {t('questionsCorrectly')}
          </p>
          
          {score >= 80 ? (
            <p className="text-green-600">{t('excellentWork')}</p>
          ) : score >= 60 ? (
            <p className="text-amber-600">{t('goodJob')}</p>
          ) : (
            <p className="text-rose-600">{t('keepPracticing')}</p>
          )}
        </div>
        
        <button
          onClick={handleRestartQuiz}
          className="mt-8 w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        >
          {t('restartQuiz')}
        </button>
      </div>
    );
  }
  
  return (
    <div className="max-w-lg mx-auto bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">{t('quiz')}</h2>
        <span className="text-sm text-gray-500">
          {currentQuestionIndex + 1} / {questions.length}
        </span>
      </div>
      
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-4">
          {isArabic ? currentQuestion.questionArabic : currentQuestion.question}
        </h3>
        
        <div className="space-y-3">
          {(isArabic ? currentQuestion.optionsArabic : currentQuestion.options).map((option, index) => (
            <button
              key={index}
              onClick={() => handleSelectAnswer(index)}
              disabled={selectedAnswer !== null}
              className={`w-full text-left p-3 rounded-md border transition-colors ${
                selectedAnswer === null
                  ? 'border-gray-300 hover:border-primary-400'
                  : selectedAnswer === index
                    ? index === currentQuestion.correctAnswer
                      ? 'border-green-500 bg-green-50'
                      : 'border-rose-500 bg-rose-50'
                    : index === currentQuestion.correctAnswer
                      ? 'border-green-500 bg-green-50'
                      : 'border-gray-300 opacity-70'
              }`}
            >
              <div className="flex items-center">
                <span className="mr-2">{['A', 'B', 'C', 'D'][index]}.</span>
                <span>{option}</span>
                
                {selectedAnswer !== null && index === currentQuestion.correctAnswer && (
                  <Check className="ml-auto h-5 w-5 text-green-600" />
                )}
                
                {selectedAnswer === index && index !== currentQuestion.correctAnswer && (
                  <X className="ml-auto h-5 w-5 text-rose-600" />
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
      
      {selectedAnswer !== null && (
        <div>
          {currentQuestion.explanation && (
            <div className="mb-4">
              {showExplanation ? (
                <div className="p-3 bg-gray-50 rounded-md text-sm">
                  <p>{currentQuestion.explanation}</p>
                </div>
              ) : (
                <button
                  onClick={() => setShowExplanation(true)}
                  className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700"
                >
                  <HelpCircle className="mr-1 h-4 w-4" />
                  {t('showExplanation')}
                </button>
              )}
            </div>
          )}
          
          <button
            onClick={handleNextQuestion}
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            {currentQuestionIndex < questions.length - 1 ? t('nextQuestion') : t('finishQuiz')}
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizComponent;