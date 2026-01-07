import { useState, useEffect, useCallback } from 'react';
import { storageService } from '../services/storage';
import type { Progress, Achievement } from '../types';
import { achievements } from '../data/achievements';
import { stories } from '../data/stories';

export const useProgress = () => {
  const [progress, setProgress] = useState<Progress>(() => storageService.getProgress());

  useEffect(() => {
    // Update daily streak on mount
    const newStreak = storageService.updateDailyStreak();
    setProgress(prev => ({ ...prev, dailyStreak: newStreak }));
  }, []);

  const markStoryComplete = useCallback((storyId: string, timeSpent: number, decisionsMade: string[] = [], quizScore?: number) => {
    storageService.markStoryComplete(storyId, timeSpent, decisionsMade, quizScore);
    const updated = storageService.getProgress();
    
    // Check for achievement unlocks
    const newAchievements: Achievement[] = [];
    
    // Character badge
    const characterName = storyId.split('-')[0].toLowerCase();
    const characterBadge = achievements.find(a => 
      a.type === 'character_badge' && 
      a.character?.toLowerCase() === characterName
    );
    if (characterBadge && !updated.achievements.some(a => a.id === characterBadge.id)) {
      newAchievements.push({ ...characterBadge, unlockedAt: Date.now() });
    }
    
    // Value gems - unlock based on story values
    const story = stories.find(s => s.id === storyId);
    if (story) {
      story.values.forEach(value => {
        const valueGem = achievements.find(a => 
          a.type === 'value_gem' && 
          a.value === value
        );
        if (valueGem && !updated.achievements.some(a => a.id === valueGem.id)) {
          newAchievements.push({ ...valueGem, unlockedAt: Date.now() });
        }
      });
    }
    
    // First story achievement
    if (updated.completedStories.length === 1) {
      const firstStoryAchievement = achievements.find(a => a.id === 'star-first-story');
      if (firstStoryAchievement && !updated.achievements.some(a => a.id === firstStoryAchievement.id)) {
        newAchievements.push({ ...firstStoryAchievement, unlockedAt: Date.now() });
      }
    }
    
    // All stories achievement (if we have 3 stories)
    if (updated.completedStories.length >= 3) {
      const allStoriesAchievement = achievements.find(a => a.id === 'star-all-stories');
      if (allStoriesAchievement && !updated.achievements.some(a => a.id === allStoriesAchievement.id)) {
        newAchievements.push({ ...allStoriesAchievement, unlockedAt: Date.now() });
      }
    }
    
    // Streak achievements
    if (updated.dailyStreak === 3) {
      const streak3 = achievements.find(a => a.id === 'streak-3');
      if (streak3 && !updated.achievements.some(a => a.id === streak3.id)) {
        newAchievements.push({ ...streak3, unlockedAt: Date.now() });
      }
    } else if (updated.dailyStreak === 7) {
      const streak7 = achievements.find(a => a.id === 'streak-7');
      if (streak7 && !updated.achievements.some(a => a.id === streak7.id)) {
        newAchievements.push({ ...streak7, unlockedAt: Date.now() });
      }
    } else if (updated.dailyStreak === 30) {
      const streak30 = achievements.find(a => a.id === 'streak-30');
      if (streak30 && !updated.achievements.some(a => a.id === streak30.id)) {
        newAchievements.push({ ...streak30, unlockedAt: Date.now() });
      }
    }
    
    // Add new achievements
    if (newAchievements.length > 0) {
      updated.achievements.push(...newAchievements);
      storageService.saveProgress(updated);
    }
    
    setProgress(updated);
    return newAchievements;
  }, []);

  const unlockAchievement = useCallback((achievementId: string) => {
    storageService.unlockAchievement(achievementId);
    setProgress(storageService.getProgress());
  }, []);

  const setCurrentStory = useCallback((storyId: string, chapterIndex: number) => {
    storageService.setCurrentStory(storyId, chapterIndex);
    setProgress(storageService.getProgress());
  }, []);

  const clearCurrentStory = useCallback(() => {
    storageService.clearCurrentStory();
    setProgress(storageService.getProgress());
  }, []);

  const refreshProgress = useCallback(() => {
    setProgress(storageService.getProgress());
  }, []);

  return {
    progress,
    markStoryComplete,
    unlockAchievement,
    setCurrentStory,
    clearCurrentStory,
    refreshProgress,
    isStoryComplete: (storyId: string) => storageService.isStoryComplete(storyId)
  };
};
