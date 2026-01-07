import Anthropic from '@anthropic-ai/sdk';
import type { AgeRange } from '../types';

const apiKey = import.meta.env.VITE_CLAUDE_API_KEY;

if (!apiKey) {
  console.warn('Claude API key not found. Please set VITE_CLAUDE_API_KEY in your .env file.');
}

const client = apiKey ? new Anthropic({ apiKey }) : null;

const getSystemPrompt = (ageRange: AgeRange, storyContext?: string): string => {
  const ageContext = ageRange === '5-7' 
    ? 'You are speaking to a young child aged 5-7. Use very simple words, short sentences, and lots of encouragement.'
    : ageRange === '8-10'
    ? 'You are speaking to a child aged 8-10. Use clear language, explain concepts simply, and be engaging.'
    : 'You are speaking to a child aged 11-12. You can use more complex ideas but keep explanations clear and relatable.';

  const storyContextText = storyContext 
    ? ` The child has just read a story about ${storyContext}. You can reference this story in your answers.`
    : '';

  return `You are a friendly and wise storyteller helping children learn about Hindu mythology. ${ageContext}${storyContextText}

IMPORTANT GUIDELINES:
- Always use age-appropriate language
- Be encouraging and positive
- Explain concepts in simple, relatable terms
- Use examples from everyday life when possible
- If asked about Sanskrit words, provide pronunciation help (e.g., "dharma (DAR-muh)")
- Keep answers concise but complete
- Never include any inappropriate, scary, or violent content
- Focus on positive values and lessons
- If you don't know something, say so honestly
- Use emojis sparingly and only when appropriate

Answer questions about Hindu mythology, values, characters, and stories in a way that helps children understand and appreciate these teachings.`;
};

export interface ChatResponse {
  content: string;
  error?: string;
}

export const claudeApi = {
  async sendMessage(
    message: string,
    ageRange: AgeRange = '8-10',
    storyContext?: string,
    chatHistory: Array<{ role: 'user' | 'assistant'; content: string }> = []
  ): Promise<ChatResponse> {
    if (!client) {
      return {
        content: "I'm sorry, but the AI assistant isn't available right now. Please make sure the API key is configured.",
        error: 'API key not configured'
      };
    }

    try {
      const systemPrompt = getSystemPrompt(ageRange, storyContext);
      
      // Convert chat history to Claude format
      const messages = chatHistory.map(msg => ({
        role: msg.role === 'user' ? 'user' : 'assistant' as const,
        content: msg.content
      }));

      // Add current message
      messages.push({
        role: 'user',
        content: message
      });

      const response = await client.messages.create({
        model: 'claude-3-5-sonnet-20241022',
        max_tokens: 1024,
        system: systemPrompt,
        messages: messages as any
      });

      // Extract text content from response
      const content = response.content
        .filter((block: any) => block.type === 'text')
        .map((block: any) => block.text)
        .join('\n');

      return { content };
    } catch (error: any) {
      console.error('Claude API error:', error);
      return {
        content: "I'm having trouble answering right now. Please try again in a moment!",
        error: error.message || 'Unknown error'
      };
    }
  },

  // Helper to extract Sanskrit words and provide pronunciation
  getSanskritPronunciation(word: string): string {
    const pronunciations: Record<string, string> = {
      'dharma': 'DAR-muh',
      'karma': 'KAR-muh',
      'moksha': 'MOK-shuh',
      'yoga': 'YO-guh',
      'puja': 'POO-juh',
      'mantra': 'MUN-truh',
      'avatar': 'UH-vuh-tar',
      'deva': 'DAY-vuh',
      'devi': 'DAY-vee',
      'ashram': 'USH-rum',
      'guru': 'GOO-roo',
      'namaste': 'nuh-MUS-tay',
      'om': 'OHM',
      'prasad': 'PRUH-sahd',
      'satsang': 'SUHT-sung'
    };

    const lowerWord = word.toLowerCase();
    return pronunciations[lowerWord] || '';
  },

  // Check if message contains Sanskrit words that might need pronunciation help
  extractSanskritWords(message: string): string[] {
    const sanskritWords = [
      'dharma', 'karma', 'moksha', 'yoga', 'puja', 'mantra',
      'avatar', 'deva', 'devi', 'ashram', 'guru', 'namaste',
      'om', 'prasad', 'satsang'
    ];

    const lowerMessage = message.toLowerCase();
    return sanskritWords.filter(word => lowerMessage.includes(word));
  }
};
