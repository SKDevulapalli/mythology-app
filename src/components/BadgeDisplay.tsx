import { motion } from 'framer-motion';
import type { Achievement } from '../types';
import { CheckCircle2 } from 'lucide-react';

interface BadgeDisplayProps {
  achievement: Achievement;
  unlocked: boolean;
}

export const BadgeDisplay = ({ achievement, unlocked }: BadgeDisplayProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1, rotate: 5 }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`relative p-4 rounded-xl border-2 transition-all ${
        unlocked
          ? 'bg-gradient-to-br from-yellow-100 to-orange-100 border-yellow-400 shadow-lg'
          : 'bg-gray-100 border-gray-300 opacity-50'
      }`}
    >
      <div className="text-center">
        <div className="text-5xl mb-2">{achievement.icon}</div>
        <h3 className="font-bold text-lg text-gray-800 mb-1">{achievement.title}</h3>
        <p className="text-sm text-gray-600">{achievement.description}</p>
      </div>
      {unlocked && (
        <div className="absolute top-2 right-2">
          <CheckCircle2 className="w-6 h-6 text-green-500" />
        </div>
      )}
    </motion.div>
  );
};
