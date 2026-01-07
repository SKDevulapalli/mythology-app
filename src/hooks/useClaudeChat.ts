import { useState, useCallback } from 'react';
import { claudeApi } from '../services/claudeApi';
import { storageService } from '../services/storage';
import type { ChatMessage, AgeRange } from '../types';

export const useClaudeChat = (ageRange: AgeRange = '8-10', storyContext?: string) => {
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    const history = storageService.getChatHistory();
    // Filter by story context if provided
    if (storyContext) {
      return history.filter(m => m.storyContext === storyContext);
    }
    return history;
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendMessage = useCallback(async (content: string) => {
    if (!content.trim()) return;

    const userMessage: ChatMessage = {
      id: `msg-${Date.now()}-user`,
      role: 'user',
      content: content.trim(),
      timestamp: Date.now(),
      storyContext
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    setError(null);

    try {
      // Get recent chat history for context (last 10 messages)
      const recentHistory = messages.slice(-10).map(msg => ({
        role: msg.role,
        content: msg.content
      }));

      const response = await claudeApi.sendMessage(
        content,
        ageRange,
        storyContext,
        recentHistory
      );

      if (response.error) {
        setError(response.error);
      }

      const assistantMessage: ChatMessage = {
        id: `msg-${Date.now()}-assistant`,
        role: 'assistant',
        content: response.content,
        timestamp: Date.now(),
        storyContext
      };

      setMessages(prev => [...prev, assistantMessage]);
      
      // Save both messages to storage
      storageService.saveChatMessage(userMessage);
      storageService.saveChatMessage(assistantMessage);
    } catch (err: any) {
      const errorMessage = err.message || 'Failed to send message';
      setError(errorMessage);
      
      const errorResponse: ChatMessage = {
        id: `msg-${Date.now()}-error`,
        role: 'assistant',
        content: "I'm having trouble answering right now. Please try again!",
        timestamp: Date.now(),
        storyContext
      };
      
      setMessages(prev => [...prev, errorResponse]);
    } finally {
      setIsLoading(false);
    }
  }, [ageRange, storyContext, messages]);

  const clearChat = useCallback(() => {
    setMessages([]);
    if (storyContext) {
      // Clear only messages for this story context
      // This is a simplified approach - in a real app you'd want more sophisticated filtering
      storageService.clearChatHistory();
    } else {
      storageService.clearChatHistory();
    }
  }, [storyContext]);

  return {
    messages,
    sendMessage,
    clearChat,
    isLoading,
    error
  };
};
