import { motion } from 'framer-motion';
import type { Collection } from '../types';
import { useProgress } from '../hooks/useProgress';
import { CheckCircle2 } from 'lucide-react';

interface CollectionCardProps {
  collection: Collection;
  onClick: () => void;
}

export const CollectionCard = ({ collection, onClick }: CollectionCardProps) => {
  const { progress } = useProgress();

  const completedCount = collection.storyIds.filter(
    id => progress.completedStories.includes(id)
  ).length;

  const totalCount = collection.storyIds.length;
  const progressPercent = Math.round((completedCount / totalCount) * 100);
  const isComplete = completedCount === totalCount;

  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -3 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer"
      onClick={onClick}
    >
      <div
        className={`h-32 flex items-center justify-center bg-gradient-to-r ${collection.gradient}`}
      >
        <span className="text-5xl drop-shadow-lg">{collection.icon}</span>
      </div>

      <div className="p-4 bg-white dark:bg-gray-800">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-bold text-gray-800 dark:text-white">
            {collection.title}
          </h3>
          {isComplete && (
            <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
          )}
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">
          {collection.description}
        </p>

        <div className="space-y-2">
          <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
            <span>{totalCount} stories</span>
            <span>{completedCount}/{totalCount} completed</span>
          </div>

          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`h-full bg-gradient-to-r ${collection.gradient}`}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
