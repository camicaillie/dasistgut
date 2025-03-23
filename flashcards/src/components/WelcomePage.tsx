import { FlashcardSet } from '../data/flashcards';

interface WelcomePageProps {
  onCategorySelect: (category: string) => void;
  darkMode?: boolean;
  selectedCategory?: FlashcardSet | null;
}

export const WelcomePage = ({ onCategorySelect, darkMode = false, selectedCategory }: WelcomePageProps) => {
  const categories = [
    { id: 'general', name: 'Člověk a společnost', color: darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600' },
    { id: 'pravo-politologie', name: 'Právo a politologie', color: darkMode ? 'bg-green-600 hover:bg-green-700' : 'bg-green-500 hover:bg-green-600' },
    { id: 'historie-ekonomie', name: 'Moderní historie a ekonomie', color: darkMode ? 'bg-purple-600 hover:bg-purple-700' : 'bg-purple-500 hover:bg-purple-600' },
  ];

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
              className={`${darkMode ? 'bg-gray-800' : 'bg-white'} text-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1`}
            >
              <h3 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {subcategory.name}
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <p>Karet: {subcategory.stats.cardsStudied}/{subcategory.stats.totalCards}</p>
                <p>Úspěšnost: {Math.round(subcategory.stats.averageSuccessRate)}%</p>
                <p>Úroveň: {subcategory.stats.masteryLevel}</p>
                {subcategory.stats.lastStudyDate && (
                  <p>Poslední studium: {new Date(subcategory.stats.lastStudyDate).toLocaleDateString()}</p>
                )}
                <p>Celkový čas: {Math.round(subcategory.stats.totalStudyTime)} min</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)]">
      <h2 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'} mb-8`}>
        Vítejte ve Flashcards!
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
    </div>
  );
}; 