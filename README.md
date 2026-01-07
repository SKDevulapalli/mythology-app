# Hindu Mythology Kids App

An interactive web application that makes Hindu mythology engaging for kids (ages 5-12) through interactive stories and AI-powered learning.

## Features

- **Story Library**: Browse animated stories from Hindu mythology with filters by age, character, and values
- **Interactive Story Player**: Experience stories with decision points, quizzes, and interactive elements
- **AI Chat**: Ask questions about stories using Claude API with age-appropriate responses
- **Progress Tracking**: Collect achievements, track daily streaks, and monitor learning progress
- **Parent Dashboard**: View progress, chat history, and set time limits

## Tech Stack

- React + TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Claude API (Anthropic)
- React Router
- Recharts
- Lucide Icons

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory:
```
VITE_CLAUDE_API_KEY=your_claude_api_key_here
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Main app pages
├── data/          # Story content and achievements
├── services/      # API and storage services
├── hooks/         # Custom React hooks
├── types/         # TypeScript definitions
└── App.tsx        # Main app component with routing
```

## Stories Included

1. **Krishna and the Sweet Butter** (Ages 5-7) - Focus on honesty and sharing
2. **Ganesha and the Great Story** (Ages 8-10) - Focus on wisdom and perseverance
3. **Hanuman's Great Leap** (Ages 8-10) - Focus on courage and devotion

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## License

MIT
