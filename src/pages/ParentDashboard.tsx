import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useProgress } from '../hooks/useProgress';
import { storageService } from '../services/storage';
import { stories } from '../data/stories';
import { achievements } from '../data/achievements';
import { ProgressMap } from '../components/ProgressMap';
import { BadgeDisplay } from '../components/BadgeDisplay';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Home, Clock, MessageSquare, BookOpen, Trophy, Settings } from 'lucide-react';

export const ParentDashboard = () => {
  const navigate = useNavigate();
  const { progress, refreshProgress } = useProgress();
  const [timeLimit, setTimeLimit] = useState<number>(progress.timeLimit || 60);

  const completions = storageService.getCompletions();
  const chatHistory = storageService.getChatHistory();

  // Calculate statistics
  const totalStories = stories.length;
  const completedCount = progress.completedStories.length;
  const completionRate = totalStories > 0 ? (completedCount / totalStories) * 100 : 0;

  // Time spent data
  const timeData = completions.map(comp => ({
    story: stories.find(s => s.id === comp.storyId)?.title || comp.storyId,
    time: comp.timeSpent
  }));

  // Achievement data
  const achievementData = [
    { name: 'Unlocked', value: progress.achievements.length },
    { name: 'Locked', value: achievements.length - progress.achievements.length }
  ];

  const COLORS = ['#10B981', '#E5E7EB'];

  const handleTimeLimitChange = (minutes: number) => {
    setTimeLimit(minutes);
    storageService.setTimeLimit(minutes);
    refreshProgress();
  };

  const discussionPrompts = [
    "What was your favorite part of the story?",
    "What did you learn about [value] from this story?",
    "How would you have handled the situation differently?",
    "What questions do you have about the characters?",
    "Can you think of a time when you showed [value] like the character did?"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-400 via-purple-300 to-pink-300 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg mb-2">
              Parent Dashboard
            </h1>
            <p className="text-white text-lg drop-shadow-md">
              Track your child's learning journey
            </p>
          </div>
          <button
            onClick={() => navigate('/library')}
            className="flex items-center gap-2 px-4 py-2 bg-white/90 rounded-lg shadow-md hover:bg-white transition-colors"
          >
            <Home className="w-5 h-5" />
            <span className="font-medium">Back to Library</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-8 h-8 text-blue-600" />
              <h2 className="text-xl font-bold text-gray-800">Stories</h2>
            </div>
            <p className="text-3xl font-bold text-gray-800 mb-1">
              {completedCount} / {totalStories}
            </p>
            <p className="text-sm text-gray-600">Completed</p>
            <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${completionRate}%` }}
                className="bg-blue-600 h-2 rounded-full"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-8 h-8 text-purple-600" />
              <h2 className="text-xl font-bold text-gray-800">Time Spent</h2>
            </div>
            <p className="text-3xl font-bold text-gray-800 mb-1">
              {Math.round(progress.totalTimeSpent)}
            </p>
            <p className="text-sm text-gray-600">Minutes</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <Trophy className="w-8 h-8 text-yellow-600" />
              <h2 className="text-xl font-bold text-gray-800">Streak</h2>
            </div>
            <p className="text-3xl font-bold text-gray-800 mb-1">
              {progress.dailyStreak}
            </p>
            <p className="text-sm text-gray-600">Days in a row</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Progress Map */}
          <ProgressMap />

          {/* Achievements */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Achievements</h2>
            <div className="grid grid-cols-2 gap-4 max-h-96 overflow-y-auto">
              {achievements.map((achievement) => {
                const unlocked = progress.achievements.some(a => a.id === achievement.id);
                return (
                  <BadgeDisplay
                    key={achievement.id}
                    achievement={achievement}
                    unlocked={unlocked}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Time Spent Chart */}
          {timeData.length > 0 && (
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Time Spent per Story</h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={timeData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="story" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="time" fill="#8B5CF6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}

          {/* Achievement Chart */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Achievement Progress</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={achievementData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${percent ? (percent * 100).toFixed(0) : 0}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {achievementData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chat History */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl mb-6">
          <div className="flex items-center gap-3 mb-4">
            <MessageSquare className="w-6 h-6 text-gray-600" />
            <h2 className="text-2xl font-bold text-gray-800">Recent Questions</h2>
          </div>
          <div className="space-y-3 max-h-64 overflow-y-auto">
            {chatHistory.slice(-10).reverse().map((message) => (
              message.role === 'user' && (
                <div key={message.id} className="p-3 bg-blue-50 rounded-lg">
                  <p className="text-gray-800">{message.content}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {new Date(message.timestamp).toLocaleString()}
                  </p>
                </div>
              )
            ))}
            {chatHistory.length === 0 && (
              <p className="text-gray-500 text-center py-4">No questions asked yet</p>
            )}
          </div>
        </div>

        {/* Discussion Prompts */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Discussion Prompts</h2>
          <p className="text-gray-600 mb-4">
            Use these questions to start meaningful conversations with your child:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {discussionPrompts.map((prompt, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200"
              >
                <p className="text-gray-700">{prompt}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Settings */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
          <div className="flex items-center gap-3 mb-4">
            <Settings className="w-6 h-6 text-gray-600" />
            <h2 className="text-2xl font-bold text-gray-800">Settings</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Daily Time Limit (minutes)
              </label>
              <input
                type="number"
                min="15"
                max="120"
                value={timeLimit}
                onChange={(e) => handleTimeLimitChange(parseInt(e.target.value) || 60)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <p className="text-sm text-gray-500 mt-1">
                Set a daily time limit for app usage
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
