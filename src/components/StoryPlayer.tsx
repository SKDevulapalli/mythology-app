import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import type { Story, Chapter, DecisionPoint, QuizQuestion } from '../types';
import { useProgress } from '../hooks/useProgress';
import { CheckCircle, XCircle, Info, Home } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { RelatedStories } from './RelatedStories';

interface StoryPlayerProps {
  story: Story;
}

/**
 * StoryPlayer - Displays full story on a single page (no pagination)
 * Shows all chapters with their interactive elements, decision points, and quizzes
 */
export const StoryPlayer = ({ story }: StoryPlayerProps) => {
  const navigate = useNavigate();
  const { setCurrentStory, markStoryComplete, clearCurrentStory } = useProgress();
  const [selectedDecisions, setSelectedDecisions] = useState<Record<number, string>>({});
  const [showDecisionConsequences, setShowDecisionConsequences] = useState<Record<number, boolean>>({});
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [showQuizResults, setShowQuizResults] = useState<Record<number, boolean>>({});
  const [startTime] = useState(Date.now());
  const [interactiveElements, setInteractiveElements] = useState<Record<string, boolean>>({});
  const [storyCompleted, setStoryCompleted] = useState(false);

  useEffect(() => {
    setCurrentStory(story.id, 0);
  }, [story.id, setCurrentStory]);

  const handleDecisionSelect = (chapterIndex: number, optionId: string) => {
    setSelectedDecisions(prev => ({ ...prev, [chapterIndex]: optionId }));
    setShowDecisionConsequences(prev => ({ ...prev, [chapterIndex]: true }));
  };

  const handleQuizAnswer = (questionId: string, answerIndex: number) => {
    setQuizAnswers(prev => ({ ...prev, [questionId]: answerIndex }));
  };

  const handleQuizSubmit = (chapterIndex: number) => {
    setShowQuizResults(prev => ({ ...prev, [chapterIndex]: true }));
  };

  const calculateQuizScore = (quiz: QuizQuestion[]): number => {
    let correct = 0;
    quiz.forEach((q) => {
      if (quizAnswers[q.id] === q.correctAnswer) {
        correct++;
      }
    });
    return Math.round((correct / quiz.length) * 100);
  };

  const toggleInteractiveElement = (elementId: string) => {
    setInteractiveElements(prev => ({ ...prev, [elementId]: !prev[elementId] }));
  };

  const getDecisionOption = (decisionPoint: DecisionPoint, optionId: string) => {
    return decisionPoint.options.find(opt => opt.id === optionId);
  };

  const completeStory = () => {
    const timeSpent = Math.round((Date.now() - startTime) / 1000 / 60);
    const decisionsMade = Object.values(selectedDecisions);

    // Calculate average quiz score across all chapters with quizzes
    const chaptersWithQuizzes = story.chapters.filter(ch => ch.quiz);
    let avgQuizScore: number | undefined;
    if (chaptersWithQuizzes.length > 0) {
      const totalScore = chaptersWithQuizzes.reduce((sum, ch) => {
        return sum + (ch.quiz ? calculateQuizScore(ch.quiz) : 0);
      }, 0);
      avgQuizScore = Math.round(totalScore / chaptersWithQuizzes.length);
    }

    markStoryComplete(story.id, timeSpent, decisionsMade, avgQuizScore);
    clearCurrentStory();
    setStoryCompleted(true);
  };

  // Check if all required interactions are complete
  const canCompleteStory = () => {
    for (let i = 0; i < story.chapters.length; i++) {
      const chapter = story.chapters[i];
      if (chapter.decisionPoint && !selectedDecisions[i]) return false;
      if (chapter.quiz && !showQuizResults[i]) return false;
    }
    return true;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-300 to-pink-300 dark:from-gray-900 dark:via-blue-900 dark:to-gray-900 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => navigate('/library')}
            className="flex items-center gap-2 px-4 py-2 bg-white/90 dark:bg-gray-800/90 rounded-lg shadow-md hover:bg-white dark:hover:bg-gray-700 transition-colors"
          >
            <Home className="w-5 h-5 dark:text-white" />
            <span className="font-medium dark:text-white">Library</span>
          </button>
          <div className="flex items-center gap-4">
            <div className="text-sm font-medium text-white drop-shadow-lg">
              {story.chapters.length} Chapters
            </div>
            <ThemeToggle />
          </div>
        </div>

        {/* Story Content - Single Block */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 md:p-8 mb-6"
        >
          {/* Story Header with Image */}
          <div className="text-center mb-6">
            {story.illustration && story.illustration.startsWith('/') ? (
              <img
                src={story.illustration}
                alt={story.character}
                className="w-32 h-32 mx-auto rounded-full object-cover shadow-lg mb-4"
              />
            ) : (
              <div className="text-8xl mb-4">{story.illustration}</div>
            )}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
              {story.title}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">{story.description}</p>
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {story.values.map((value) => (
                <span
                  key={value}
                  className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium"
                >
                  {value}
                </span>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 dark:border-gray-700 my-8" />

          {/* All Story Content in Single Block */}
          {story.chapters.map((chapter: Chapter, chapterIndex: number) => (
            <div key={chapterIndex} className={chapterIndex > 0 ? 'mt-8' : ''}>
              {/* Chapter Content */}
              <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6 whitespace-pre-line">
                {chapter.content}
              </div>

              {/* Interactive Elements */}
              {chapter.interactiveElements && chapter.interactiveElements.length > 0 && (
                <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <Info className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <p className="font-semibold text-blue-800 dark:text-blue-300">Tap to explore!</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {chapter.interactiveElements.map((element) => (
                      <button
                        key={element.id}
                        onClick={() => toggleInteractiveElement(element.id)}
                        className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                          interactiveElements[element.id]
                            ? 'bg-blue-600 text-white'
                            : 'bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-700'
                        }`}
                      >
                        {element.title}
                      </button>
                    ))}
                  </div>
                  <AnimatePresence>
                    {chapter.interactiveElements.map((element) => (
                      interactiveElements[element.id] && (
                        <motion.div
                          key={element.id}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-4 p-4 bg-white dark:bg-gray-700 rounded-lg border-2 border-blue-200 dark:border-blue-600"
                        >
                          <h4 className="font-bold text-lg mb-2 dark:text-white">{element.title}</h4>
                          <p className="text-gray-700 dark:text-gray-300">{element.content}</p>
                        </motion.div>
                      )
                    ))}
                  </AnimatePresence>
                </div>
              )}

              {/* Decision Point */}
              {chapter.decisionPoint && !showDecisionConsequences[chapterIndex] && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="my-6 p-6 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 rounded-xl border-2 border-purple-300 dark:border-purple-600"
                >
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                    {chapter.decisionPoint.question}
                  </h3>
                  <div className="space-y-3">
                    {chapter.decisionPoint.options.map((option) => (
                      <motion.button
                        key={option.id}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleDecisionSelect(chapterIndex, option.id)}
                        className="w-full p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow text-left border-2 border-transparent hover:border-purple-400"
                      >
                        <span className="font-medium text-gray-800 dark:text-white">{option.text}</span>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Decision Consequence */}
              {showDecisionConsequences[chapterIndex] && selectedDecisions[chapterIndex] && chapter.decisionPoint && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="my-6 p-6 bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/50 dark:to-blue-900/50 rounded-xl border-2 border-green-300 dark:border-green-600"
                >
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">What happened:</h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                    {getDecisionOption(chapter.decisionPoint, selectedDecisions[chapterIndex])?.consequence}
                  </p>
                  <div className="p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg border-l-4 border-yellow-400">
                    <p className="font-semibold text-yellow-800 dark:text-yellow-300 mb-1">Lesson:</p>
                    <p className="text-yellow-700 dark:text-yellow-200">
                      {getDecisionOption(chapter.decisionPoint, selectedDecisions[chapterIndex])?.lesson}
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Quiz */}
              {chapter.quiz && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="my-6 p-6 bg-gradient-to-r from-orange-100 to-yellow-100 dark:from-orange-900/50 dark:to-yellow-900/50 rounded-xl border-2 border-orange-300 dark:border-orange-600"
                >
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Quick Quiz!</h3>
                  {chapter.quiz.map((question: QuizQuestion) => (
                    <div key={question.id} className="mb-6">
                      <p className="font-semibold text-lg text-gray-800 dark:text-white mb-3">{question.question}</p>
                      <div className="space-y-2">
                        {question.options.map((option, index) => (
                          <button
                            key={index}
                            onClick={() => handleQuizAnswer(question.id, index)}
                            disabled={showQuizResults[chapterIndex]}
                            className={`w-full p-3 rounded-lg text-left transition-colors ${
                              quizAnswers[question.id] === index
                                ? 'bg-orange-500 text-white'
                                : 'bg-white dark:bg-gray-700 hover:bg-orange-50 dark:hover:bg-gray-600 dark:text-white'
                            } ${showQuizResults[chapterIndex] ? 'cursor-default' : ''}`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                  {!showQuizResults[chapterIndex] && (
                    <button
                      onClick={() => handleQuizSubmit(chapterIndex)}
                      className="px-6 py-3 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-colors"
                    >
                      Check Answers
                    </button>
                  )}
                  {showQuizResults[chapterIndex] && (
                    <div className="mt-4">
                      <div className="text-center mb-4">
                        <p className="text-2xl font-bold text-gray-800 dark:text-white">
                          Score: {calculateQuizScore(chapter.quiz)}%
                        </p>
                      </div>
                      {chapter.quiz.map((question: QuizQuestion) => {
                        const userAnswer = quizAnswers[question.id];
                        const isCorrect = userAnswer === question.correctAnswer;
                        return (
                          <div key={question.id} className="mb-4 p-4 bg-white dark:bg-gray-700 rounded-lg">
                            <div className="flex items-start gap-3 mb-2">
                              {isCorrect ? (
                                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                              ) : (
                                <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                              )}
                              <div className="flex-1">
                                <p className="font-semibold dark:text-white">{question.question}</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                  Correct answer: {question.options[question.correctAnswer]}
                                </p>
                                <p className="text-sm text-blue-600 dark:text-blue-400 mt-2">{question.explanation}</p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </motion.div>
              )}
            </div>
          ))}
        </motion.div>

        {/* Complete Story Button */}
        {!storyCompleted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mb-8"
          >
            <button
              onClick={completeStory}
              disabled={!canCompleteStory()}
              className={`px-8 py-4 rounded-xl font-bold text-lg transition-all ${
                canCompleteStory()
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl'
                  : 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'
              }`}
            >
              {canCompleteStory() ? 'Complete Story!' : 'Complete all activities to finish'}
            </button>
          </motion.div>
        )}

        {/* Story Completed Message */}
        {storyCompleted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl p-8 text-center text-white mb-8"
          >
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-3xl font-bold mb-2">Story Complete!</h2>
            <p className="text-lg mb-6">Great job exploring this amazing tale!</p>
            <button
              onClick={() => navigate('/library')}
              className="px-6 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Back to Library
            </button>
          </motion.div>
        )}

        {/* Related Stories */}
        <RelatedStories currentStoryId={story.id} />
      </div>
    </div>
  );
};
