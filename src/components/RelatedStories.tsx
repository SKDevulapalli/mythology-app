import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getRelatedStories } from '../data/stories';
import { Sparkles } from 'lucide-react';

interface RelatedStoriesProps {
  currentStoryId: string;
}

export const RelatedStories = ({ currentStoryId }: RelatedStoriesProps) => {
  const navigate = useNavigate();
  const relatedStories = getRelatedStories(currentStoryId, 4);

  if (relatedStories.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-2xl shadow-xl p-6"
    >
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="w-5 h-5 text-purple-500" />
        <h2 className="text-xl font-bold text-gray-800 dark:text-white">
          You Might Also Like
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {relatedStories.map((story, index) => (
          <motion.button
            key={story.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate(`/story/${story.id}`)}
            className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 rounded-xl p-3 text-left hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-2 mb-2">
              {story.illustration.startsWith('/') ? (
                <img
                  src={story.illustration}
                  alt={story.character}
                  className="w-10 h-10 rounded-full object-cover"
                />
              ) : (
                <span className="text-2xl">{story.illustration}</span>
              )}
            </div>
            <h3 className="text-sm font-semibold text-gray-800 dark:text-white line-clamp-2 mb-1">
              {story.title}
            </h3>
            <div className="flex flex-wrap gap-1">
              <span className="text-xs px-2 py-0.5 bg-purple-100 dark:bg-purple-800 text-purple-700 dark:text-purple-200 rounded-full">
                {story.character}
              </span>
            </div>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};
