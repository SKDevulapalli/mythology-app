import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { StoryLibrary } from './pages/StoryLibrary';
import { StoryView } from './pages/StoryView';
import { ChatPage } from './pages/ChatPage';
import { ParentDashboard } from './pages/ParentDashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/library" replace />} />
        <Route path="/library" element={<StoryLibrary />} />
        <Route path="/story/:id" element={<StoryView />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/parent" element={<ParentDashboard />} />
        <Route path="*" element={<Navigate to="/library" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
