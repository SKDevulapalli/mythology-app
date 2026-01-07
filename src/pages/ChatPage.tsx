import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChatInterface } from '../components/ChatInterface';
import type { AgeRange } from '../types';
import { Home } from 'lucide-react';

export const ChatPage = () => {
  const navigate = useNavigate();
  const [ageRange, setAgeRange] = useState<AgeRange>('8-10');

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-300 to-orange-300 p-4 md:p-8">
      <div className="max-w-4xl mx-auto h-[calc(100vh-4rem)] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => navigate('/library')}
            className="flex items-center gap-2 px-4 py-2 bg-white/90 rounded-lg shadow-md hover:bg-white transition-colors"
          >
            <Home className="w-5 h-5" />
            <span className="font-medium">Library</span>
          </button>
          
          <div className="flex items-center gap-2">
            <label className="text-white font-medium">Age:</label>
            <select
              value={ageRange}
              onChange={(e) => setAgeRange(e.target.value as AgeRange)}
              className="px-3 py-2 bg-white/90 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500"
            >
              <option value="5-7">5-7</option>
              <option value="8-10">8-10</option>
              <option value="11-12">11-12</option>
            </select>
          </div>
        </div>

        {/* Chat Interface */}
        <div className="flex-1">
          <ChatInterface ageRange={ageRange} />
        </div>
      </div>
    </div>
  );
};
