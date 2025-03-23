import React from 'react';

interface CompletionModalProps {
  darkMode: boolean;
  onClose: () => void;
  totalCards: number;
}

export const CompletionModal: React.FC<CompletionModalProps> = ({ darkMode, onClose, totalCards }) => {
  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className={`
        ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}
        max-w-md w-full rounded-xl shadow-2xl p-6 sm:p-8
        transform transition-all duration-300 ease-out
        animate-bounce-once
      `}>
        <div className="space-y-6 text-center">
          <div className="flex justify-center">
            <div className={`w-16 h-16 rounded-full ${darkMode ? 'bg-green-900' : 'bg-green-100'} flex items-center justify-center`}>
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-10 w-10 ${darkMode ? 'text-green-300' : 'text-green-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-2">Congratulations! 🎉</h2>
            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              You've mastered all {totalCards} cards in this deck!
            </p>
          </div>

          <div className={`p-4 rounded-lg ${darkMode ? 'bg-blue-900/30' : 'bg-blue-50'}`}>
            <p className={`text-sm ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
              Great job! You've demonstrated a strong understanding of this topic. 
              Keep reviewing periodically to maintain your knowledge.
            </p>
          </div>

          <div className="flex justify-center pt-4">
            <button
              onClick={onClose}
              className={`
                px-6 py-3 rounded-lg text-sm font-medium
                transition-all duration-200
                transform hover:scale-[1.02] active:scale-[0.98]
                ${darkMode 
                  ? 'bg-green-600 hover:bg-green-700 text-white' 
                  : 'bg-green-500 hover:bg-green-600 text-white'}
              `}
            >
              Continue Learning
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}; 