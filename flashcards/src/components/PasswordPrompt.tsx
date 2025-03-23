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
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <div className={`p-8 rounded-lg shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} max-w-md w-full`}>
        <h2 className={`text-2xl font-bold mb-6 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Enter Password
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false);
              }}
              className={`w-full px-4 py-2 rounded-lg border ${
                error 
                  ? 'border-red-500' 
                  : darkMode 
                    ? 'border-gray-600 bg-gray-700 text-white' 
                    : 'border-gray-300 bg-white text-gray-900'
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              placeholder="Enter password"
            />
            {error && (
              <p className="text-red-500 text-sm mt-2">Incorrect password. Please try again.</p>
            )}
          </div>
          <button
            type="submit"
            className={`w-full py-2 px-4 rounded-lg ${
              darkMode 
                ? 'bg-blue-600 hover:bg-blue-700' 
                : 'bg-blue-500 hover:bg-blue-600'
            } text-white font-medium transition-colors duration-200`}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}; 