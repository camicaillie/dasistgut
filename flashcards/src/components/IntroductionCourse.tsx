import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface IntroductionSlide {
  title: string;
  content: string;
}

interface IntroductionCourseProps {
  darkMode?: boolean;
  onComplete: () => void;
  slides: IntroductionSlide[];
}

export const IntroductionCourse = ({ darkMode = false, onComplete, slides }: IntroductionCourseProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide(prev => prev + 1);
        setIsAnimating(false);
      }, 300);
    } else {
      onComplete();
    }
  };

  const handlePrevious = () => {
    if (currentSlide > 0) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide(prev => prev - 1);
        setIsAnimating(false);
      }, 300);
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Enter') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrevious();
      } else if (e.key === 'Escape') {
        onComplete();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide]);

  const progress = ((currentSlide + 1) / slides.length) * 100;

  return (
    <div className={`fixed inset-0 ${darkMode ? 'bg-black/70' : 'bg-black/50'} z-50 flex items-center justify-center p-4`}>
      <div className={`w-full max-w-2xl ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} rounded-xl shadow-xl overflow-hidden`}>
        <div className="relative h-[60vh] flex flex-col">
          {/* Skip button */}
          <button
            onClick={onComplete}
            className={`absolute top-4 right-16 z-20 px-4 py-1.5 rounded-lg text-sm font-medium 
              transition-colors duration-200 flex items-center gap-2
              ${darkMode 
                ? 'text-gray-300 hover:text-white hover:bg-gray-700' 
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
          >
            Skip Course
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Progress bar */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gray-200">
            <motion.div
              className="h-full bg-blue-500"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Progress text */}
          <div className={`absolute top-4 right-4 text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            {currentSlide + 1} / {slides.length}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex-1 p-6 pt-12 overflow-y-auto"
            >
              <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {slides[currentSlide].title}
              </h2>
              <div className={`prose ${darkMode ? 'prose-invert' : ''} max-w-none whitespace-pre-wrap`}>
                {slides[currentSlide].content}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="border-t border-gray-200 p-4 flex justify-between items-center">
            {/* Slide indicators */}
            <div className="flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!isAnimating) {
                      setIsAnimating(true);
                      setTimeout(() => {
                        setCurrentSlide(index);
                        setIsAnimating(false);
                      }, 300);
                    }
                  }}
                  className={`h-2 rounded-full transition-all duration-200 ${
                    index === currentSlide
                      ? `w-8 ${darkMode ? 'bg-blue-500' : 'bg-blue-500'}`
                      : `w-2 ${darkMode ? 'bg-gray-600' : 'bg-gray-300'} hover:bg-blue-300`
                  }`}
                  disabled={isAnimating}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation buttons */}
            <div className="flex gap-4">
              <button
                onClick={handlePrevious}
                disabled={currentSlide === 0 || isAnimating}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center gap-2
                  ${currentSlide === 0
                    ? 'opacity-50 cursor-not-allowed'
                    : darkMode
                      ? 'text-gray-300 hover:text-white hover:bg-gray-700'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Previous
              </button>
              <button
                onClick={handleNext}
                disabled={isAnimating}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200
                  transform hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2
                  ${darkMode
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'bg-blue-500 hover:bg-blue-600 text-white'}`}
              >
                {currentSlide === slides.length - 1 ? 'Start Learning' : 'Next'}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 