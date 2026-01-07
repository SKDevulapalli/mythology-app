import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import type { Story, Chapter, DecisionPoint, QuizQuestion } from '../types';
import { useProgress } from '../hooks/useProgress';
import { ArrowRight, ArrowLeft, CheckCircle, XCircle, Info, Home } from 'lucide-react';

interface StoryPlayerProps {
  story: Story;
}

export const StoryPlayer = ({ story }: StoryPlayerProps) => {
  const navigate = useNavigate();
  const { setCurrentStory, markStoryComplete, clearCurrentStory } = useProgress();
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
  const [selectedDecision, setSelectedDecision] = useState<string | null>(null);
  const [showDecisionConsequence, setShowDecisionConsequence] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [showQuizResult, setShowQuizResult] = useState(false);
  const [startTime] = useState(Date.now());
  const [interactiveElement, setInteractiveElement] = useState<string | null>(null);

  const currentChapter: Chapter = story.chapters[currentChapterIndex];
  const isLastChapter = currentChapterIndex === story.chapters.length - 1;

  useEffect(() => {
    setCurrentStory(story.id, currentChapterIndex);
  }, [story.id, currentChapterIndex, setCurrentStory]);

  const handleDecisionSelect = (optionId: string) => {
    setSelectedDecision(optionId);
    setShowDecisionConsequence(true);
  };

  const handleDecisionContinue = () => {
    setShowDecisionConsequence(false);
    if (isLastChapter && currentChapter.quiz) {
      // Show quiz if it's the last chapter
    } else {
      nextChapter();
    }
  };

  const handleQuizAnswer = (questionId: string, answerIndex: number) => {
    setQuizAnswers(prev => ({ ...prev, [questionId]: answerIndex }));
  };

  const handleQuizSubmit = () => {
    setShowQuizResult(true);
  };

  const calculateQuizScore = (): number => {
    if (!currentChapter.quiz) return 0;
    let correct = 0;
    currentChapter.quiz.forEach((q) => {
      if (quizAnswers[q.id] === q.correctAnswer) {
        correct++;
      }
    });
    return Math.round((correct / currentChapter.quiz.length) * 100);
  };

  const nextChapter = () => {
    if (isLastChapter) {
      completeStory();
    } else {
      setCurrentChapterIndex(prev => prev + 1);
      setSelectedDecision(null);
      setShowDecisionConsequence(false);
      setQuizAnswers({});
      setShowQuizResult(false);
    }
  };

  const prevChapter = () => {
    if (currentChapterIndex > 0) {
      setCurrentChapterIndex(prev => prev - 1);
      setSelectedDecision(null);
      setShowDecisionConsequence(false);
      setQuizAnswers({});
      setShowQuizResult(false);
    }
  };

  const completeStory = () => {
    const timeSpent = Math.round((Date.now() - startTime) / 1000 / 60); // minutes
    const decisionsMade = selectedDecision ? [selectedDecision] : [];
    const quizScore = currentChapter.quiz ? calculateQuizScore() : undefined;
    
    markStoryComplete(story.id, timeSpent, decisionsMade, quizScore);
    clearCurrentStory();
    navigate('/library');
  };

  const getDecisionOption = (decisionPoint: DecisionPoint, optionId: string) => {
    return decisionPoint.options.find(opt => opt.id === optionId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-300 to-pink-300 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => navigate('/library')}
            className="flex items-center gap-2 px-4 py-2 bg-white/90 rounded-lg shadow-md hover:bg-white transition-colors"
          >
            <Home className="w-5 h-5" />
            <span className="font-medium">Library</span>
          </button>
          <div className="text-sm font-medium text-white drop-shadow-lg">
            Chapter {currentChapterIndex + 1} of {story.chapters.length}
          </div>
        </div>

        {/* Story Content Card */}
        <motion.div
          key={currentChapterIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 md:p-8 mb-6"
        >
          {/* Illustration */}
          {currentChapter.illustration && (
            <div className="text-center text-8xl mb-6">
              {currentChapter.illustration}
            </div>
          )}

          {/* Chapter Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {currentChapter.title}
          </h2>

          {/* Chapter Content */}
          <div className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 whitespace-pre-line">
            {currentChapter.content}
          </div>

          {/* Interactive Elements */}
          {currentChapter.interactiveElements && currentChapter.interactiveElements.length > 0 && (
            <div className="mb-6 p-4 bg-blue-50 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <Info className="w-5 h-5 text-blue-600" />
                <p className="font-semibold text-blue-800">Tap to explore!</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {currentChapter.interactiveElements.map((element) => (
                  <button
                    key={element.id}
                    onClick={() => setInteractiveElement(interactiveElement === element.id ? null : element.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      interactiveElement === element.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                    }`}
                  >
                    {element.title}
                  </button>
                ))}
              </div>
              <AnimatePresence>
                {interactiveElement && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 p-4 bg-white rounded-lg border-2 border-blue-200"
                  >
                    {currentChapter.interactiveElements?.find(e => e.id === interactiveElement) && (
                      <div>
                        <h4 className="font-bold text-lg mb-2">
                          {currentChapter.interactiveElements.find(e => e.id === interactiveElement)?.title}
                        </h4>
                        <p className="text-gray-700">
                          {currentChapter.interactiveElements.find(e => e.id === interactiveElement)?.content}
                        </p>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}

          {/* Decision Point */}
          {currentChapter.decisionPoint && !showDecisionConsequence && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-6 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl border-2 border-purple-300"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {currentChapter.decisionPoint.question}
              </h3>
              <div className="space-y-3">
                {currentChapter.decisionPoint.options.map((option) => (
                  <motion.button
                    key={option.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleDecisionSelect(option.id)}
                    className="w-full p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow text-left border-2 border-transparent hover:border-purple-400"
                  >
                    <span className="font-medium text-gray-800">{option.text}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Decision Consequence */}
          {showDecisionConsequence && selectedDecision && currentChapter.decisionPoint && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-6 p-6 bg-gradient-to-r from-green-100 to-blue-100 rounded-xl border-2 border-green-300"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-3">What happened:</h3>
              <p className="text-lg text-gray-700 mb-4">
                {getDecisionOption(currentChapter.decisionPoint, selectedDecision)?.consequence}
              </p>
              <div className="p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                <p className="font-semibold text-yellow-800 mb-1">Lesson:</p>
                <p className="text-yellow-700">
                  {getDecisionOption(currentChapter.decisionPoint, selectedDecision)?.lesson}
                </p>
              </div>
              <button
                onClick={handleDecisionContinue}
                className="mt-4 px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center gap-2"
              >
                Continue
                <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          )}

          {/* Quiz */}
          {currentChapter.quiz && !showDecisionConsequence && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-6 bg-gradient-to-r from-orange-100 to-yellow-100 rounded-xl border-2 border-orange-300"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quick Quiz!</h3>
              {currentChapter.quiz.map((question: QuizQuestion) => (
                <div key={question.id} className="mb-6">
                  <p className="font-semibold text-lg text-gray-800 mb-3">{question.question}</p>
                  <div className="space-y-2">
                    {question.options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleQuizAnswer(question.id, index)}
                        className={`w-full p-3 rounded-lg text-left transition-colors ${
                          quizAnswers[question.id] === index
                            ? 'bg-orange-500 text-white'
                            : 'bg-white hover:bg-orange-50'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
              {!showQuizResult && (
                <button
                  onClick={handleQuizSubmit}
                  className="px-6 py-3 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-colors"
                >
                  Check Answers
                </button>
              )}
              {showQuizResult && (
                <div className="mt-4">
                  <div className="text-center mb-4">
                    <p className="text-2xl font-bold text-gray-800">
                      Score: {calculateQuizScore()}%
                    </p>
                  </div>
                  {currentChapter.quiz.map((question: QuizQuestion) => {
                    const userAnswer = quizAnswers[question.id];
                    const isCorrect = userAnswer === question.correctAnswer;
                    return (
                      <div key={question.id} className="mb-4 p-4 bg-white rounded-lg">
                        <div className="flex items-start gap-3 mb-2">
                          {isCorrect ? (
                            <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                          ) : (
                            <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                          )}
                          <div className="flex-1">
                            <p className="font-semibold">{question.question}</p>
                            <p className="text-sm text-gray-600 mt-1">
                              Correct answer: {question.options[question.correctAnswer]}
                            </p>
                            <p className="text-sm text-blue-600 mt-2">{question.explanation}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </motion.div>
          )}
        </motion.div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <button
            onClick={prevChapter}
            disabled={currentChapterIndex === 0}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors ${
              currentChapterIndex === 0
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-white/90 hover:bg-white shadow-md'
            }`}
          >
            <ArrowLeft className="w-5 h-5" />
            Previous
          </button>

          {!currentChapter.decisionPoint || showDecisionConsequence ? (
            !currentChapter.quiz || showQuizResult ? (
              <button
                onClick={isLastChapter ? completeStory : nextChapter}
                className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors shadow-md"
              >
                {isLastChapter ? 'Finish Story' : 'Next Chapter'}
                <ArrowRight className="w-5 h-5" />
              </button>
            ) : null
          ) : null}
        </div>
      </div>
    </div>
  );
};
