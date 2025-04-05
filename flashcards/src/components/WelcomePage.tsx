import { useState, useEffect } from 'react';
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import { auth, googleProvider } from '../utils/firebase'; // Adjust the path if needed
import { FlashcardSet } from '../data/flashcards';

interface WelcomePageProps {
  onCategorySelect: (category: string) => void;
  darkMode?: boolean;
  selectedCategory?: FlashcardSet | null;
}

export const WelcomePage = ({ onCategorySelect, darkMode = false, selectedCategory }: WelcomePageProps) => {
  const [user, setUser] = useState<any>(null); // Store the logged-in user

  // Listen for authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  // Handle Google login
  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Google login failed:", error);
    }
  };

  const categories = [
    { id: 'general', name: 'Člověk a společnost', color: darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600' },
    { id: 'pravo-politologie', name: 'Právo a politologie', color: darkMode ? 'bg-green-600 hover:bg-green-700' : 'bg-green-500 hover:bg-green-600' },
    { id: 'historie-ekonomie', name: 'Moderní historie a ekonomie', color: darkMode ? 'bg-purple-600 hover:bg-purple-700' : 'bg-purple-500 hover:bg-purple-600' },
  ];

  // If the user is not logged in, show the login button
  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)]">
        <h2 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'} mb-8`}>
          Vítejte ve Flashcards!
        </h2>
        <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-12`}>
          Přihlaste se pro začátek učení
        </p>
        <button
          onClick={handleGoogleLogin}
          className={`${
            darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'
          } text-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1`}
        >
          Přihlásit se přes Google
        </button>
      </div>
    );
  }

  // If a category is selected, show subcategories
  if (selectedCategory) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)]">
        <h2 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'} mb-8`}>
          {selectedCategory.name}
        </h2>
        <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-12`}>
          Vyberte si podkategorii pro studium
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {selectedCategory.subcategories.map((subcategory) => (
            <button
              key={subcategory.id}
              onClick={() => onCategorySelect(subcategory.id)}
              className={`
                group relative overflow-hidden
                rounded-xl p-6 shadow-lg 
                transition-all duration-300 ease-out
                transform hover:scale-[1.02]
                ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'}
              `}
            >
              <div className="relative z-10 flex flex-col h-full">
                <h3 className={`text-2xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {subcategory.name}
                </h3>

                <div className={`flex items-center gap-2 mt-auto ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                  <span className="text-lg font-medium">{subcategory.cards.length} kartiček</span>
                </div>
              </div>

              {/* Subtle decorative element */}
              <div
                className={`
                  absolute bottom-0 left-0 right-0 h-1 
                  transform origin-left transition-transform duration-300
                  ${darkMode ? 'bg-blue-500' : 'bg-blue-600'}
                  scale-x-0 group-hover:scale-x-100
                `}
              ></div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // If logged in but no category is selected, show the category selection
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)]">
      <h2 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'} mb-8`}>
        Vítejte, {user.displayName}!
      </h2>
      <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-12`}>
        Vyberte si kategorii pro začátek učení
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategorySelect(category.id)}
            className={`${category.color} text-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1`}
          >
            <h3 className="text-2xl font-semibold mb-4">{category.name}</h3>
            <p className="text-white/90">Začít učení {category.name.toLowerCase()}</p>
          </button>
        ))}
      </div>

      <button
        onClick={() => auth.signOut()}
        className={`mt-8 ${
          darkMode ? 'bg-red-600 hover:bg-red-700' : 'bg-red-500 hover:bg-red-600'
        } text-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1`}
      >
        Odhlásit se
      </button>
    </div>
  );
};