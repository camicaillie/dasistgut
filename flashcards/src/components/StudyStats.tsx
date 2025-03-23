import { useEffect, useState } from 'react';

interface StudySession {
  date: string;
  cardsReviewed: number;
  performance: {
    easy: number;
    medium: number;
    hard: number;
  };
  category: string;
}

interface StudyStatsProps {
  darkMode?: boolean;
  onClose: () => void;
}

export const StudyStats = ({ darkMode = false, onClose }: StudyStatsProps) => {
  const [studySessions, setStudySessions] = useState<StudySession[]>([]);
  const [showAllSessions, setShowAllSessions] = useState(false);
  const [totalStats, setTotalStats] = useState({
    cardsReviewed: 0,
    easy: 0,
    medium: 0,
    hard: 0,
    categories: new Set<string>(),
    sessionsCompleted: 0,
  });

  // Load study data from localStorage
  useEffect(() => {
    const savedSessions = localStorage.getItem('flashcards-study-sessions');
    if (savedSessions) {
      const sessions = JSON.parse(savedSessions) as StudySession[];
      setStudySessions(sessions);
      
      // Calculate total statistics
      const stats = {
        cardsReviewed: 0,
        easy: 0,
        medium: 0,
        hard: 0,
        categories: new Set<string>(),
        sessionsCompleted: sessions.length,
      };
      
      sessions.forEach(session => {
        stats.cardsReviewed += session.cardsReviewed;
        stats.easy += session.performance.easy;
        stats.medium += session.performance.medium;
        stats.hard += session.performance.hard;
        stats.categories.add(session.category);
      });
      
      setTotalStats(stats);
    }
  }, []);

  // Function to get the date in a readable format
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  return (
    <div className={`fixed inset-0 ${darkMode ? 'bg-black/70' : 'bg-black/50'} z-50 flex items-start sm:items-center justify-center p-2 sm:p-4 overflow-y-auto`}>
      <div className={`w-full max-w-4xl ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} rounded-xl shadow-xl overflow-hidden my-2 sm:my-0`}>
        <div className="flex justify-between items-center p-4 sm:p-6 border-b border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold">Study Statistics</h2>
          <button 
            onClick={onClose}
            className={`p-1.5 sm:p-2 rounded-full ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-4 sm:p-6">
          {/* Total statistics */}
          <section className="mb-6 sm:mb-8">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Overall Progress</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              <div className={`p-3 sm:p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                <p className="text-xs sm:text-sm text-gray-500">Sessions</p>
                <p className="text-xl sm:text-2xl font-bold">{totalStats.sessionsCompleted}</p>
              </div>
              <div className={`p-3 sm:p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                <p className="text-xs sm:text-sm text-gray-500">Cards</p>
                <p className="text-xl sm:text-2xl font-bold">{totalStats.cardsReviewed}</p>
              </div>
              <div className={`p-3 sm:p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                <p className="text-xs sm:text-sm text-gray-500">Categories</p>
                <p className="text-xl sm:text-2xl font-bold">{totalStats.categories.size}</p>
              </div>
              <div className={`p-3 sm:p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                <p className="text-xs sm:text-sm text-gray-500">Mastery</p>
                <p className="text-xl sm:text-2xl font-bold">
                  {totalStats.cardsReviewed > 0 
                    ? Math.round((totalStats.easy / totalStats.cardsReviewed) * 100) 
                    : 0}%
                </p>
              </div>
            </div>
          </section>

          {/* Performance distribution */}
          <section className="mb-6 sm:mb-8">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Performance Distribution</h3>
            <div className={`h-3 sm:h-4 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} overflow-hidden`}>
              {totalStats.cardsReviewed > 0 && (
                <div className="flex h-full">
                  <div 
                    className="bg-green-500 h-full"
                    style={{ width: `${(totalStats.easy / totalStats.cardsReviewed) * 100}%` }}
                  />
                  <div 
                    className="bg-yellow-500 h-full"
                    style={{ width: `${(totalStats.medium / totalStats.cardsReviewed) * 100}%` }}
                  />
                  <div 
                    className="bg-red-500 h-full"
                    style={{ width: `${(totalStats.hard / totalStats.cardsReviewed) * 100}%` }}
                  />
                </div>
              )}
            </div>
            <div className="flex flex-col sm:flex-row justify-between mt-2 text-xs sm:text-sm text-gray-500 gap-1 sm:gap-0">
              <span>Easy: {totalStats.easy} ({totalStats.cardsReviewed > 0 ? Math.round((totalStats.easy / totalStats.cardsReviewed) * 100) : 0}%)</span>
              <span>Medium: {totalStats.medium} ({totalStats.cardsReviewed > 0 ? Math.round((totalStats.medium / totalStats.cardsReviewed) * 100) : 0}%)</span>
              <span>Hard: {totalStats.hard} ({totalStats.cardsReviewed > 0 ? Math.round((totalStats.hard / totalStats.cardsReviewed) * 100) : 0}%)</span>
            </div>
          </section>

          {/* Recent sessions */}
          <section>
            <div className="flex justify-between items-center mb-3 sm:mb-4">
              <h3 className="text-base sm:text-lg font-semibold">Recent Study Sessions</h3>
              {studySessions.length > 4 && (
                <button
                  onClick={() => setShowAllSessions(!showAllSessions)}
                  className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm
                    ${darkMode 
                      ? 'bg-gray-700 hover:bg-gray-600 text-gray-300' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}`}
                >
                  {showAllSessions ? (
                    <>
                      Show Less
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                      </svg>
                    </>
                  ) : (
                    <>
                      Show More
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </>
                  )}
                </button>
              )}
            </div>
            {studySessions.length === 0 ? (
              <p className={`text-center py-6 sm:py-8 text-sm sm:text-base ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                You haven't completed any study sessions yet.
              </p>
            ) : (
              <>
                {/* Mobile view - cards */}
                <div className="sm:hidden space-y-3">
                  {studySessions
                    .slice()
                    .reverse()
                    .slice(0, showAllSessions ? undefined : 2)
                    .map((session, idx) => (
                      <div 
                        key={idx} 
                        className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <div className="text-xs">
                            <div className="font-medium mb-1">{formatDate(session.date)}</div>
                            <div className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{session.category}</div>
                          </div>
                          <div className="text-xs font-medium">
                            {session.cardsReviewed} cards
                          </div>
                        </div>
                        <div className="flex justify-between text-xs">
                          <div>
                            <span className="text-green-500">{session.performance.easy} Easy</span>
                          </div>
                          <div>
                            <span className="text-yellow-500">{session.performance.medium} Medium</span>
                          </div>
                          <div>
                            <span className="text-red-500">{session.performance.hard} Hard</span>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>

                {/* Desktop view - table */}
                <div className="hidden sm:block">
                  <div className={`border ${darkMode ? 'border-gray-700' : 'border-gray-200'} rounded-lg overflow-hidden`}>
                    <table className="w-full">
                      <thead className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                        <tr>
                          <th className="px-4 py-3 text-left text-sm">Date</th>
                          <th className="px-4 py-3 text-left text-sm">Category</th>
                          <th className="px-4 py-3 text-right text-sm">Cards</th>
                          <th className="px-4 py-3 text-right text-sm">Easy</th>
                          <th className="px-4 py-3 text-right text-sm">Medium</th>
                          <th className="px-4 py-3 text-right text-sm">Hard</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {studySessions
                          .slice()
                          .reverse()
                          .slice(0, showAllSessions ? undefined : 2)
                          .map((session, idx) => (
                            <tr key={idx} className={`${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}`}>
                              <td className="px-4 py-3 text-sm">{formatDate(session.date)}</td>
                              <td className="px-4 py-3 text-sm">{session.category}</td>
                              <td className="px-4 py-3 text-sm text-right">{session.cardsReviewed}</td>
                              <td className="px-4 py-3 text-sm text-right text-green-500">{session.performance.easy}</td>
                              <td className="px-4 py-3 text-sm text-right text-yellow-500">{session.performance.medium}</td>
                              <td className="px-4 py-3 text-sm text-right text-red-500">{session.performance.hard}</td>
                            </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {!showAllSessions && studySessions.length > 4 && (
                  <div className={`text-center py-2 sm:py-3 ${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'} mt-2 rounded-lg`}>
                    <span className={`text-xs sm:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {studySessions.length - 4} more sessions hidden
                    </span>
                  </div>
                )}
              </>
            )}
          </section>
        </div>
        
        <div className="p-4 sm:p-6 border-t border-gray-200 flex justify-end">
          <button
            onClick={onClose}
            className={`px-4 sm:px-6 py-1.5 sm:py-2 text-sm sm:text-base ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} rounded-lg transition-colors duration-200`}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}; 