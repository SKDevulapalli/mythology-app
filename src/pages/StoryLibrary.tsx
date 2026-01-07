import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { stories } from '../data/stories';
import { StoryCard } from '../components/StoryCard';
import type { Story, AgeRange, Character, Value } from '../types';
import { Filter, BookOpen, MessageSquare, Settings } from 'lucide-react';

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
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-300 to-orange-300 p-4 md:p-8">
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
              <BookOpen className="w-10 h-10 text-white" />
              <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
                Story Library
              </h1>
            </div>
            <div className="flex items-center gap-2 flex-1 justify-end">
              <button
                onClick={() => navigate('/chat')}
                className="px-4 py-2 bg-white/90 rounded-lg shadow-md hover:bg-white transition-colors flex items-center gap-2"
              >
                <MessageSquare className="w-5 h-5" />
                <span className="hidden md:inline font-medium">Chat</span>
              </button>
              <button
                onClick={() => navigate('/parent')}
                className="px-4 py-2 bg-white/90 rounded-lg shadow-md hover:bg-white transition-colors flex items-center gap-2"
              >
                <Settings className="w-5 h-5" />
                <span className="hidden md:inline font-medium">Parent</span>
              </button>
            </div>
          </div>
          <p className="text-white text-lg md:text-xl drop-shadow-md">
            Discover amazing stories from Hindu mythology!
          </p>
        </motion.div>

        {/* Find Your Story */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 md:p-6 mb-8 shadow-xl"
        >
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-5 h-5 text-purple-600" />
            <h2 className="text-lg font-semibold text-gray-800">Find Your Perfect Story! ✨</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Age Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">👶 Perfect for My Age</label>
              <select
                value={selectedAge}
                onChange={(e) => setSelectedAge(e.target.value as AgeRange | 'all')}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
              <label className="block text-sm font-medium text-gray-700 mb-2">🦸 My Favorite Hero</label>
              <select
                value={selectedCharacter}
                onChange={(e) => setSelectedCharacter(e.target.value as Character | 'all')}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
              <label className="block text-sm font-medium text-gray-700 mb-2">💎 What I Want to Learn</label>
              <select
                value={selectedValue}
                onChange={(e) => setSelectedValue(e.target.value as Value | 'all')}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {filteredStories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex"
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
            className="text-center py-12 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl"
          >
            <p className="text-gray-600 text-lg">No stories found! Try choosing different options above! 🎯</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};
