import { motion } from 'framer-motion';
import type { Story } from '../types';
import { useProgress } from '../hooks/useProgress';
import { CheckCircle2, Lock } from 'lucide-react';

interface StoryCardProps {
  story: Story;
  onClick: () => void;
}

export const StoryCard = ({ story, onClick }: StoryCardProps) => {
  const { isStoryComplete } = useProgress();
  const completed = isStoryComplete(story.id);
  const isLocked = !story.unlocked;

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`relative rounded-2xl overflow-hidden shadow-lg cursor-pointer flex flex-col h-full ${
        isLocked ? 'opacity-60' : ''
      }`}
      onClick={!isLocked ? onClick : undefined}
    >
      <div
        className="h-48 flex items-center justify-center text-8xl flex-shrink-0"
        style={{
          background: `linear-gradient(135deg, ${
            story.character === 'Krishna' ? '#FF6B6B, #FFE66D' :
            story.character === 'Ganesha' ? '#4ECDC4, #95E1D3' :
            story.character === 'Hanuman' ? '#F8B500, #FFE66D' :
            story.character === 'Rama' ? '#6C5CE7, #AA96DA' :
            story.character === 'Shiva' ? '#2C3E50, #34495E' :
            story.character === 'Vishnu' ? '#3498DB, #5DADE2' :
            story.character === 'Lakshmi' ? '#F39C12, #F7DC6F' :
            story.character === 'Saraswati' ? '#8E44AD, #BB8FCE' :
            story.character === 'Durga' ? '#E74C3C, #EC7063' :
            '#6C5CE7, #AA96DA'
          })`
        }}
      >
        <img
          src={story.illustration}
          alt={story.character}
          className="w-32 h-32 object-contain drop-shadow-lg"
        />
      </div>
      
      <div className="p-4 bg-white flex flex-col flex-grow">
        <div className="flex items-start justify-between mb-2 min-h-[3rem]">
          <h3 className="text-xl font-bold text-gray-800 flex-1 pr-2">{story.title}</h3>
          <div className="flex-shrink-0">
            {completed && (
              <CheckCircle2 className="w-6 h-6 text-green-500" />
            )}
            {isLocked && !completed && (
              <Lock className="w-6 h-6 text-gray-400" />
            )}
          </div>
        </div>
        
        <p className="text-sm text-gray-600 mb-3 line-clamp-2 min-h-[2.5rem]">{story.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-3 min-h-[2rem]">
          <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
            Ages {story.ageRange}
          </span>
          {story.values.slice(0, 2).map((value) => (
            <span
              key={value}
              className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium"
            >
              {value}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between text-xs text-gray-500 mt-auto pt-2">
          <span>⏱️ {story.estimatedMinutes} min</span>
          <span className="font-semibold">👤 {story.character}</span>
        </div>
      </div>
      
      {isLocked && (
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="bg-white rounded-lg p-4 text-center">
            <Lock className="w-8 h-8 mx-auto mb-2 text-gray-400" />
            <p className="text-sm font-medium text-gray-700">Complete other stories to unlock</p>
          </div>
        </div>
      )}
    </motion.div>
  );
};
