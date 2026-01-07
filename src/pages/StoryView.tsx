import { useParams, Navigate } from 'react-router-dom';
import { getStoryById } from '../data/stories';
import { StoryPlayer } from '../components/StoryPlayer';

export const StoryView = () => {
  const { id } = useParams<{ id: string }>();
  const story = id ? getStoryById(id) : undefined;

  if (!story) {
    return <Navigate to="/library" replace />;
  }

  return <StoryPlayer story={story} />;
};
