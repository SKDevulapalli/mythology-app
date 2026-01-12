import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { stories } from '../data/stories';
import { StoryCard } from '../components/StoryCard';
import type { Story, AgeRange, Character, Value } from '../types';
import { Filter, Settings, Layers } from 'lucide-react';
import { ThemeToggle } from '../components/ThemeToggle';

export const StoryLibrary = () => {
  const navigate = useNavigate();
  const [selectedAge, setSelectedAge] = useState<AgeRange | 'all'>('all');
  const [selectedCharacter, setSelectedCharacter] = useState<Character | 'all'>('all');
  const [selectedValue, setSelectedValue] = useState<Value | 'all'>('all');

  const filteredStories = useMemo(() => {
    return stories.filter((story: Story) => {
      if (selectedAge !== 'all' && story.ageRange !== selectedAge) return false;
      if (selectedCharacter !== 'all' && story.character !== selectedCharacter) return false;
      if (selectedValue !== 'all' && !story.values.includes(selectedValue)) return false;
      return true;
    });
  }, [selectedAge, selectedCharacter, selectedValue]);

  const ageRanges: AgeRange[] = ['5-7', '8-10', '11-12'];
  const characters: Character[] = ['Krishna', 'Ganesha', 'Hanuman', 'Rama', 'Prahlada', 'Shiva', 'Vishnu', 'Lakshmi', 'Saraswati', 'Durga', 'Arjuna', 'Draupadi', 'Sita', 'Lakshmana', 'Karthikeya', 'Narasimha', 'Buddha', 'Kali', 'Parvati', 'Indra'];
  const values: Value[] = ['honesty', 'wisdom', 'courage', 'faith', 'dharma', 'compassion', 'perseverance', 'devotion', 'patience', 'respect', 'justice', 'love'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-300 to-orange-300 dark:from-gray-900 dark:via-purple-900 dark:to-gray-900 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex-1" />
            <div className="flex items-center justify-center gap-3 flex-1">
              <img
                src="/images/itihasa.png"
                alt="Itihasa for Kids"
                className="w-16 h-16 object-cover rounded-full shadow-lg border-2 border-orange-200"
              />
              <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg" style={{ fontFamily: "'Tiro Devanagari Hindi', serif" }}>
                <span className="bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
                  Itihasa for Kids
                </span>
              </h1>
            </div>
            <div className="flex items-center gap-2 flex-1 justify-end">
              <ThemeToggle />
              <button
                onClick={() => navigate('/collections')}
                className="px-4 py-2 bg-white/90 dark:bg-gray-800/90 rounded-lg shadow-md hover:bg-white dark:hover:bg-gray-700 transition-colors flex items-center gap-2"
              >
                <Layers className="w-5 h-5 dark:text-white" />
                <span className="hidden md:inline font-medium dark:text-white">Collections</span>
              </button>
              <button
                onClick={() => navigate('/parent')}
                className="px-4 py-2 bg-white/90 dark:bg-gray-800/90 rounded-lg shadow-md hover:bg-white dark:hover:bg-gray-700 transition-colors flex items-center gap-2"
              >
                <Settings className="w-5 h-5 dark:text-white" />
                <span className="hidden md:inline font-medium dark:text-white">Parent</span>
              </button>
            </div>
          </div>
          <p className="text-lg md:text-xl font-medium tracking-wide drop-shadow-md">
            <span className="bg-gradient-to-r from-amber-200 via-orange-100 to-amber-200 bg-clip-text text-transparent">
              Explore the timeless wisdom of ancient India
            </span>
          </p>
        </motion.div>

        {/* Find Your Story */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-4 md:p-6 mb-8 shadow-xl"
        >
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-5 h-5 text-orange-500 dark:text-orange-400" />
            <h2 className="text-lg font-bold tracking-wide">
              <span className="bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600 bg-clip-text text-transparent">
                Choose Your Adventure
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Age Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">👶 Perfect for My Age</label>
              <select
                value={selectedAge}
                onChange={(e) => setSelectedAge(e.target.value as AgeRange | 'all')}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 dark:text-white"
              >
                <option value="all">All Ages</option>
                {ageRanges.map((age) => (
                  <option key={age} value={age}>
                    Ages {age}
                  </option>
                ))}
              </select>
            </div>

            {/* Character Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">🦸 My Favorite Hero</label>
              <select
                value={selectedCharacter}
                onChange={(e) => setSelectedCharacter(e.target.value as Character | 'all')}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 dark:text-white"
              >
                <option value="all">All Heroes</option>
                {characters.map((char) => (
                  <option key={char} value={char}>
                    {char}
                  </option>
                ))}
              </select>
            </div>

            {/* Value Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">💎 What I Want to Learn</label>
              <select
                value={selectedValue}
                onChange={(e) => setSelectedValue(e.target.value as Value | 'all')}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 dark:text-white"
              >
                <option value="all">All Lessons</option>
                {values.map((value) => (
                  <option key={value} value={value}>
                    {value.charAt(0).toUpperCase() + value.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredStories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.min(index * 0.05, 0.5) }}
            >
              <StoryCard
                story={story}
                onClick={() => navigate(`/story/${story.id}`)}
              />
            </motion.div>
          ))}
        </div>

        {filteredStories.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-xl"
          >
            <p className="text-gray-600 dark:text-gray-300 text-lg">No stories found! Try choosing different options above! 🎯</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};
