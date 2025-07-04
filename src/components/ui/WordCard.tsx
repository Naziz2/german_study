import React, { useState } from 'react';
import { Volume as VolumeUp } from 'lucide-react';
import { Word } from '../../types';
import { useLanguage } from '../../contexts/LanguageContext';

interface WordCardProps {
  word: Word;
  showExample?: boolean;
  flippable?: boolean;
}

const WordCard: React.FC<WordCardProps> = ({ 
  word, 
  showExample = false,
  flippable = true 
}) => {
  const [flipped, setFlipped] = useState(false);
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  const handleFlip = () => {
    if (flippable) {
      setFlipped(!flipped);
    }
  };

  const playPronunciation = (e: React.MouseEvent) => {
    e.stopPropagation();
    // In a real app, this would trigger audio playback
    console.log('Playing pronunciation for:', word.german);
  };

  return (
    <div 
      className={`relative ${isArabic ? 'font-arabic' : ''} w-full max-w-xs h-56 perspective-1000 cursor-pointer mx-auto`}
      onClick={handleFlip}
    >
      <div 
        className={`relative w-full h-full transition-transform duration-500 preserve-3d ${flipped ? 'rotate-y-180' : ''}`}
      >
        {/* Front of card (German) */}
        <div 
          className={`absolute w-full h-full backface-hidden rounded-xl shadow-md p-6 flex flex-col justify-between ${flipped ? 'hidden' : 'block'} bg-white border-2 border-primary-100`}
          dir={isArabic ? 'rtl' : 'ltr'}
        >
          <div className="flex justify-between items-start">
            <span className="inline-block px-2 py-1 text-xs rounded-full bg-secondary-100 text-secondary-700">
              {word.level}
            </span>
            <button 
              onClick={playPronunciation}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label={isArabic ? "استمع إلى النطق" : "Listen to pronunciation"}
            >
              <VolumeUp size={20} className="text-primary-500" />
            </button>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{word.german}</h3>
            <p className="text-sm text-gray-600">{isArabic ? word.pronunciation : ''}</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-500">{isArabic ? 'انقر للترجمة' : 'Click for translation'}</p>
          </div>
        </div>

        {/* Back of card (Arabic) */}
        <div 
          className={`absolute w-full h-full backface-hidden rounded-xl shadow-md p-6 flex flex-col justify-between ${flipped ? 'block' : 'hidden'} bg-secondary-50 border-2 border-secondary-100 rotate-y-180`}
          dir={isArabic ? 'rtl' : 'ltr'}
        >
          <div className="flex justify-between items-start">
            <span className="inline-block px-2 py-1 text-xs rounded-full bg-primary-100 text-primary-700">
              {word.category}
            </span>
            <button
              onClick={playPronunciation}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label={isArabic ? "استمع إلى النطق" : "Listen to pronunciation"}
            >
              <VolumeUp size={20} className="text-primary-500" />
            </button>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{word.arabic}</h3>
            {showExample && (
              <p className="text-sm text-gray-700 mt-2 italic">{word.example}</p>
            )}
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-500">{isArabic ? 'انقر للعودة' : 'Click to flip back'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordCard;