import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { collections, getCollectionStories } from '../data/collections';
import { CollectionCard } from '../components/CollectionCard';
import { StoryCard } from '../components/StoryCard';
import { Home, ChevronLeft, Library } from 'lucide-react';
import { ThemeToggle } from '../components/ThemeToggle';
import type { Collection, Story } from '../types';

export const CollectionsPage = () => {
  const navigate = useNavigate();
  const [selectedCollection, setSelectedCollection] = useState<Collection | null>(null);

  const collectionStories = selectedCollection
    ? getCollectionStories(selectedCollection.id)
    : [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-400 via-purple-300 to-pink-300 dark:from-gray-900 dark:via-indigo-900 dark:to-gray-900 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8"
        >
          <div className="flex items-center gap-4">
            {selectedCollection ? (
              <button
                onClick={() => setSelectedCollection(null)}
                className="flex items-center gap-2 px-4 py-2 bg-white/90 dark:bg-gray-800/90 rounded-lg shadow-md hover:bg-white dark:hover:bg-gray-700 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 dark:text-white" />
                <span className="font-medium dark:text-white">Back</span>
              </button>
            ) : (
              <button
                onClick={() => navigate('/library')}
                className="flex items-center gap-2 px-4 py-2 bg-white/90 dark:bg-gray-800/90 rounded-lg shadow-md hover:bg-white dark:hover:bg-gray-700 transition-colors"
              >
                <Home className="w-5 h-5 dark:text-white" />
                <span className="font-medium dark:text-white">Library</span>
              </button>
            )}
          </div>

          <div className="text-center flex-1">
            <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
              {selectedCollection ? selectedCollection.title : 'Story Collections'}
            </h1>
            <p className="text-white/90 text-sm md:text-base mt-1 drop-shadow-md">
              {selectedCollection
                ? selectedCollection.description
                : 'Explore themed story adventures'}
            </p>
          </div>

          <ThemeToggle />
        </motion.div>

        <AnimatePresence mode="wait">
          {!selectedCollection ? (
            <motion.div
              key="collections"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
            >
              {collections.map((collection, index) => (
                <motion.div
                  key={collection.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: Math.min(index * 0.1, 0.5) }}
                >
                  <CollectionCard
                    collection={collection}
                    onClick={() => setSelectedCollection(collection)}
                  />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="stories"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Collection Badge */}
              <div className="flex justify-center mb-6">
                <div
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${selectedCollection.gradient} text-white shadow-lg`}
                >
                  <span className="text-xl">{selectedCollection.icon}</span>
                  <span className="font-medium">{collectionStories.length} Stories</span>
                </div>
              </div>

              {/* Stories Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {collectionStories.map((story, index) => (
                  <motion.div
                    key={(story as Story).id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: Math.min(index * 0.05, 0.5) }}
                  >
                    <StoryCard
                      story={story as Story}
                      onClick={() => navigate(`/story/${(story as Story).id}`)}
                    />
                  </motion.div>
                ))}
              </div>

              {collectionStories.length === 0 && (
                <div className="text-center py-12 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-xl">
                  <Library className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                  <p className="text-gray-600 dark:text-gray-300 text-lg">
                    No stories in this collection yet
                  </p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
