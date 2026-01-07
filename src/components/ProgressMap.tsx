import { motion } from 'framer-motion';
import { stories } from '../data/stories';
import { useProgress } from '../hooks/useProgress';
import { CheckCircle2, Lock } from 'lucide-react';

export const ProgressMap = () => {
  const { isStoryComplete } = useProgress();

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Journey</h2>
      <div className="space-y-4">
        {stories.map((story, index) => {
          const completed = isStoryComplete(story.id);
          return (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`flex items-center gap-4 p-4 rounded-lg border-2 ${
                completed
                  ? 'bg-green-50 border-green-300'
                  : 'bg-gray-50 border-gray-200'
              }`}
            >
              <div className="text-4xl">{story.illustration}</div>
              <div className="flex-1">
                <h3 className="font-bold text-lg text-gray-800">{story.title}</h3>
                <p className="text-sm text-gray-600">{story.description}</p>
              </div>
              {completed ? (
                <CheckCircle2 className="w-8 h-8 text-green-500" />
              ) : (
                <Lock className="w-8 h-8 text-gray-400" />
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
