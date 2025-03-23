import React, { useState } from 'react';

interface PasswordPromptProps {
  onCorrectPassword: () => void;
  darkMode: boolean;
}

export const PasswordPrompt: React.FC<PasswordPromptProps> = ({ onCorrectPassword, darkMode }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'fenomen') {
      onCorrectPassword();
    } else {
      setError(true);
      setPassword('');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 sm:px-6 lg:px-8">
      <div className={`p-6 sm:p-8 rounded-xl shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} w-full max-w-sm mx-auto`}>
        <h2 className={`text-xl sm:text-2xl font-bold mb-6 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Vítejte ve Flashcards
        </h2>
        <p className={`text-sm sm:text-base text-center mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          Pro pokračování zadejte heslo
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError(false);
                }}
                className={`w-full px-4 py-3 rounded-lg border text-base sm:text-lg ${
                  error 
                    ? 'border-red-500' 
                    : darkMode 
                      ? 'border-gray-600 bg-gray-700 text-white' 
                      : 'border-gray-300 bg-white text-gray-900'
                } focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200`}
                placeholder="Zadejte heslo"
                autoComplete="current-password"
              />
              {error && (
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <svg className="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              )}
            </div>
            {error && (
              <p className="text-red-500 text-sm mt-2 text-center">Nesprávné heslo. Zkuste to prosím znovu.</p>
            )}
          </div>
          <button
            type="submit"
            className={`w-full py-3 px-4 rounded-lg text-base sm:text-lg font-medium ${
              darkMode 
                ? 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800' 
                : 'bg-blue-500 hover:bg-blue-600 active:bg-blue-700'
            } text-white transition-colors duration-200 transform hover:scale-[1.02] active:scale-[0.98]`}
          >
            Vstoupit do aplikace
          </button>
        </form>
      </div>
    </div>
  );
}; 