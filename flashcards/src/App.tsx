import { useState, useEffect } from 'react';
import { FlashcardDeck } from './components/FlashcardDeck';
import { WelcomePage } from './components/WelcomePage';
import { PasswordPrompt } from './components/PasswordPrompt';
import { WelcomeGuide } from './components/WelcomeGuide';
import { GuideTooltip } from './components/GuideTooltip';
import { flashcardSets, FlashcardSet } from './data/flashcards';

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  const [currentSet, setCurrentSet] = useState<FlashcardSet | null>(null);
  const [darkMode, setDarkMode] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showWelcomeGuide, setShowWelcomeGuide] = useState(false);
  const [hasSeenGuide, setHasSeenGuide] = useState(false);

  // Initialize dark mode and guide state from localStorage
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    const savedHasSeenGuide = localStorage.getItem('hasSeenGuide');
    
    if (savedDarkMode) {
      setDarkMode(savedDarkMode === 'true');
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(prefersDark);
    }

    if (savedHasSeenGuide) {
      setHasSeenGuide(true);
    }
  }, []);

  // Show welcome guide after authentication if not seen before
  useEffect(() => {
    if (isAuthenticated && !hasSeenGuide) {
      setShowWelcomeGuide(true);
    }
  }, [isAuthenticated, hasSeenGuide]);

  // Update localStorage and apply dark mode class
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.toString());
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleGuideClose = () => {
    setShowWelcomeGuide(false);
    setHasSeenGuide(true);
    localStorage.setItem('hasSeenGuide', 'true');
  };

  const handleShowGuide = () => {
    setShowWelcomeGuide(true);
  };

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    const selectedSet = flashcardSets.find(set => set.id === categoryId);
    setCurrentSet(selectedSet || null);
    setSelectedSubcategory(null);
  };

  const handleSubcategorySelect = (subcategoryId: string) => {
    setSelectedSubcategory(subcategoryId);
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
    setSelectedSubcategory(null);
    setCurrentSet(null);
  };

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  const renderHeader = () => (
    <header className={`${darkMode ? 'bg-gray-800 shadow-gray-900' : 'bg-white shadow-sm'} transition-colors duration-200 sticky top-0 z-10`}>
      <div className="max-w-7xl mx-auto py-4 sm:py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0">
          <div className="flex items-center justify-between">
            <GuideTooltip 
              text="Welcome to your flashcards app! Start by selecting a category below."
              darkMode={darkMode}
              position="bottom"
            >
              <h1 className={`text-2xl sm:text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} truncate flex items-center gap-2`}>
                Flashcards App
                <span className={`text-sm font-normal ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>v1.14</span>
              </h1>
            </GuideTooltip>
            <div className="flex items-center gap-2 sm:hidden">
              <GuideTooltip 
                text="Need help? Click to see the guide again"
                darkMode={darkMode}
                position="left"
              >
                <button
                  onClick={handleShowGuide}
                  className={`p-2 rounded-full ${
                    darkMode 
                      ? 'bg-gray-700 text-blue-400 hover:text-blue-300' 
                      : 'bg-gray-200 text-blue-600 hover:text-blue-700'
                  }`}
                  aria-label="Show help guide"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
              </GuideTooltip>
              <GuideTooltip 
                text="Toggle between light and dark mode for comfortable viewing"
                darkMode={darkMode}
                position="left"
              >
                <button
                  onClick={toggleDarkMode}
                  className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-700'}`}
                  aria-label="Toggle dark mode"
                >
                  {darkMode ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  )}
                </button>
              </GuideTooltip>
            </div>
          </div>
          <div className="flex items-center justify-end gap-4">
            <GuideTooltip 
              text="Need help? Click to see the guide again"
              darkMode={darkMode}
              position="bottom"
            >
              <button
                onClick={handleShowGuide}
                className={`hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-200 ${
                  darkMode 
                    ? 'bg-gray-700 text-blue-400 hover:text-blue-300' 
                    : 'bg-gray-200 text-blue-600 hover:text-blue-700'
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm">Help</span>
              </button>
            </GuideTooltip>
            <div className="hidden sm:block">
              <GuideTooltip 
                text="Toggle between light and dark mode for comfortable viewing"
                darkMode={darkMode}
                position="bottom"
              >
                <button
                  onClick={toggleDarkMode}
                  className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-700'}`}
                  aria-label="Toggle dark mode"
                >
                  {darkMode ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  )}
                </button>
              </GuideTooltip>
            </div>
            {selectedCategory && (
              <GuideTooltip 
                text="Return to the category selection screen"
                darkMode={darkMode}
                position="bottom"
              >
                <button
                  onClick={handleBackToCategories}
                  className={`w-full sm:w-auto px-4 py-2 ${
                    darkMode 
                      ? 'bg-gray-700 text-white hover:bg-gray-600' 
                      : 'bg-gray-500 text-white hover:bg-gray-600'
                  } rounded-lg transition-colors duration-200 text-sm sm:text-base`}
                >
                  Back to Categories
                </button>
              </GuideTooltip>
            )}
          </div>
        </div>
      </div>
    </header>
  );

  if (!isAuthenticated) {
    return (
      <div className={`min-h-screen transition-colors duration-200 ${darkMode ? 'dark bg-gray-900' : 'bg-gradient-to-b from-gray-50 to-gray-100'}`}>
        {renderHeader()}
        <main className="max-w-7xl mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
          <PasswordPrompt onCorrectPassword={() => setIsAuthenticated(true)} darkMode={darkMode} />
        </main>
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-colors duration-200 ${darkMode ? 'dark bg-gray-900' : 'bg-gradient-to-b from-gray-50 to-gray-100'}`}>
      {renderHeader()}
      <main className="max-w-7xl mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        {selectedCategory && currentSet ? (
          selectedSubcategory ? (
            <FlashcardDeck 
              cards={currentSet.subcategories.find(sub => sub.id === selectedSubcategory)?.cards || []} 
              darkMode={darkMode}
              categoryId={selectedCategory}
            />
          ) : (
            <WelcomePage 
              onCategorySelect={handleSubcategorySelect} 
              darkMode={darkMode}
              selectedCategory={currentSet}
            />
          )
        ) : (
          <WelcomePage onCategorySelect={handleCategorySelect} darkMode={darkMode} />
        )}
      </main>
      {showWelcomeGuide && (
        <WelcomeGuide darkMode={darkMode} onClose={handleGuideClose} />
      )}
    </div>
  );
}

export default App; 