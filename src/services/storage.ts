import type { Progress, Achievement, ChatMessage, StoryCompletion } from '../types';

const STORAGE_KEY = 'hindu_mythology_progress';
const CHAT_HISTORY_KEY = 'hindu_mythology_chat';
const COMPLETIONS_KEY = 'hindu_mythology_completions';

const defaultProgress: Progress = {
  completedStories: [],
  achievements: [],
  dailyStreak: 0,
  lastActivityDate: '',
  totalTimeSpent: 0,
  chatHistory: []
};

export const storageService = {
  // Progress management
  getProgress(): Progress {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        return { ...defaultProgress };
      }
      return JSON.parse(stored);
    } catch (error) {
      console.error('Error reading progress:', error);
      return { ...defaultProgress };
    }
  },

  saveProgress(progress: Progress): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (error) {
      console.error('Error saving progress:', error);
    }
  },

  updateProgress(updates: Partial<Progress>): Progress {
    const current = this.getProgress();
    const updated = { ...current, ...updates };
    this.saveProgress(updated);
    return updated;
  },

  // Story completion
  markStoryComplete(storyId: string, timeSpent: number, decisionsMade: string[] = [], quizScore?: number): void {
    const progress = this.getProgress();
    if (!progress.completedStories.includes(storyId)) {
      progress.completedStories.push(storyId);
    }
    progress.totalTimeSpent += timeSpent;
    
    // Save completion details
    const completions = this.getCompletions();
    completions.push({
      storyId,
      completedAt: Date.now(),
      timeSpent,
      decisionsMade,
      quizScore
    });
    localStorage.setItem(COMPLETIONS_KEY, JSON.stringify(completions));
    
    this.saveProgress(progress);
  },

  isStoryComplete(storyId: string): boolean {
    const progress = this.getProgress();
    return progress.completedStories.includes(storyId);
  },

  getCompletions(): StoryCompletion[] {
    try {
      const stored = localStorage.getItem(COMPLETIONS_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  },

  // Achievements
  unlockAchievement(achievementId: string): void {
    const progress = this.getProgress();
    const alreadyUnlocked = progress.achievements.some(a => a.id === achievementId);
    
    if (!alreadyUnlocked) {
      const achievement: Achievement = {
        id: achievementId,
        type: 'knowledge_star', // Will be properly set by caller
        title: '',
        description: '',
        icon: '',
        unlockedAt: Date.now()
      };
      progress.achievements.push(achievement);
      this.saveProgress(progress);
    }
  },

  getUnlockedAchievements(): Achievement[] {
    const progress = this.getProgress();
    return progress.achievements.filter(a => a.unlockedAt !== undefined);
  },

  // Daily streak
  updateDailyStreak(): number {
    const progress = this.getProgress();
    const today = new Date().toISOString().split('T')[0];
    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
    
    if (progress.lastActivityDate === today) {
      // Already updated today
      return progress.dailyStreak;
    } else if (progress.lastActivityDate === yesterday) {
      // Consecutive day
      progress.dailyStreak += 1;
    } else if (progress.lastActivityDate === '') {
      // First time
      progress.dailyStreak = 1;
    } else {
      // Streak broken
      progress.dailyStreak = 1;
    }
    
    progress.lastActivityDate = today;
    this.saveProgress(progress);
    return progress.dailyStreak;
  },

  // Chat history
  saveChatMessage(message: ChatMessage): void {
    const history = this.getChatHistory();
    history.push(message);
    // Keep only last 100 messages
    const recentHistory = history.slice(-100);
    localStorage.setItem(CHAT_HISTORY_KEY, JSON.stringify(recentHistory));
    
    // Also update in progress
    const progress = this.getProgress();
    progress.chatHistory = recentHistory;
    this.saveProgress(progress);
  },

  getChatHistory(): ChatMessage[] {
    try {
      const stored = localStorage.getItem(CHAT_HISTORY_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  },

  clearChatHistory(): void {
    localStorage.removeItem(CHAT_HISTORY_KEY);
    const progress = this.getProgress();
    progress.chatHistory = [];
    this.saveProgress(progress);
  },

  // Time limits
  setTimeLimit(minutes: number): void {
    const progress = this.getProgress();
    progress.timeLimit = minutes;
    this.saveProgress(progress);
  },

  getTimeLimit(): number | undefined {
    const progress = this.getProgress();
    return progress.timeLimit;
  },

  // Current story tracking
  setCurrentStory(storyId: string, chapterIndex: number): void {
    const progress = this.getProgress();
    progress.currentStory = { storyId, chapterIndex };
    this.saveProgress(progress);
  },

  getCurrentStory(): { storyId: string; chapterIndex: number } | undefined {
    const progress = this.getProgress();
    return progress.currentStory;
  },

  clearCurrentStory(): void {
    const progress = this.getProgress();
    progress.currentStory = undefined;
    this.saveProgress(progress);
  },

  // Reset all data (for testing/debugging)
  resetAll(): void {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(CHAT_HISTORY_KEY);
    localStorage.removeItem(COMPLETIONS_KEY);
  }
};
