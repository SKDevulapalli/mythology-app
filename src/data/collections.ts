import type { Collection } from '../types';
import { stories } from './stories';

export const collections: Collection[] = [
  {
    id: 'tales-of-courage',
    title: 'Tales of Courage',
    description: 'Stories of brave heroes who faced their fears and overcame great challenges',
    icon: '⚔️',
    gradient: 'from-red-500 via-orange-500 to-yellow-500',
    theme: 'courage',
    storyIds: [
      'hanuman-ocean',
      'durga-mahishasura',
      'arjuna-focus',
      'draupadi-strength',
      'narasimha-protection',
      'kali-protection',
      'hanuman-strength',
      'krishna-kaliya',
      'indra-vritra',
      'durga-creation'
    ]
  },
  {
    id: 'wisdom-and-learning',
    title: 'Wisdom & Learning',
    description: 'Discover the power of knowledge, patience, and thoughtful decisions',
    icon: '📚',
    gradient: 'from-purple-500 via-indigo-500 to-blue-500',
    theme: 'wisdom',
    storyIds: [
      'ganesha-mahabharata',
      'saraswati-knowledge',
      'buddha-compassion',
      'ganesha-obstacle',
      'ganesha-race',
      'saraswati-swan',
      'hanuman-humility',
      'buddha-elephant',
      'saraswati-voice',
      'arjuna-ekalavya'
    ]
  },
  {
    id: 'divine-devotion',
    title: 'Divine Devotion',
    description: 'Heartwarming stories about faith, love, and connection with the divine',
    icon: '🙏',
    gradient: 'from-amber-500 via-orange-400 to-yellow-400',
    theme: 'devotion',
    storyIds: [
      'prahlada-narasimha',
      'parvati-devotion',
      'krishna-sudama',
      'rama-squirrel',
      'krishna-govardhan',
      'rama-promise',
      'parvati-teej',
      'hanuman-ring'
    ]
  },
  {
    id: 'epic-adventures',
    title: 'Epic Adventures',
    description: 'Journey through thrilling tales of heroes, quests, and legendary feats',
    icon: '🏹',
    gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
    theme: 'adventure',
    storyIds: [
      'rama-bow',
      'hanuman-sanjeevani',
      'vishnu-vamana',
      'vishnu-kurma',
      'vishnu-matsya',
      'vishnu-varaha',
      'narasimha-evening',
      'shiva-ganga'
    ]
  },
  {
    id: 'family-bonds',
    title: 'Family Bonds',
    description: 'Stories celebrating the love between parents, siblings, and friends',
    icon: '❤️',
    gradient: 'from-pink-500 via-rose-500 to-red-400',
    theme: 'family',
    storyIds: [
      'krishna-butter',
      'sita-forest',
      'lakshmana-loyalty',
      'lakshmana-sleep',
      'sita-birth',
      'shiva-necklace',
      'ganesha-moon'
    ]
  },
  {
    id: 'nature-stories',
    title: 'Nature & Animals',
    description: 'Magical tales featuring rivers, mountains, and animal friends',
    icon: '🦚',
    gradient: 'from-green-500 via-emerald-500 to-teal-400',
    theme: 'nature',
    storyIds: [
      'karthikeya-peacock',
      'indra-rain',
      'lakshmi-owl',
      'shiva-ganga',
      'krishna-kaliya',
      'krishna-govardhan',
      'rama-squirrel'
    ]
  },
  {
    id: 'festival-tales',
    title: 'Festival Tales',
    description: 'Stories behind our favorite celebrations and traditions',
    icon: '🪔',
    gradient: 'from-yellow-400 via-amber-500 to-orange-500',
    theme: 'festival',
    storyIds: [
      'lakshmi-diwali',
      'parvati-teej',
      'lakshmi-emergence',
      'durga-mahishasura',
      'ganesha-obstacle',
      'krishna-flute'
    ]
  }
];

export const getCollectionById = (id: string): Collection | undefined => {
  return collections.find(collection => collection.id === id);
};

export const getCollectionStories = (collectionId: string) => {
  const collection = getCollectionById(collectionId);
  if (!collection) return [];
  return collection.storyIds
    .map(storyId => stories.find(s => s.id === storyId))
    .filter(Boolean);
};

export const getCollectionsForStory = (storyId: string): Collection[] => {
  return collections.filter(collection => collection.storyIds.includes(storyId));
};
