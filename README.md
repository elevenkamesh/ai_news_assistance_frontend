# GPT-Style Chat Interface

A beautiful, production-ready chat interface built with React, TypeScript, and Tailwind CSS that mimics the ChatGPT user experience. Features real-time messaging, session management, and a clean, responsive design.


## Features

- **Modern Chat UI** - Clean, responsive interface similar to ChatGPT
- **Real-time Messaging** - Send and receive messages with typing indicators
- **Session Management** - Unique UUID-based sessions with history persistence
- **Auto-scroll** - Automatically scrolls to newest messages
- **Keyboard Shortcuts** - Enter to send, Shift+Enter for new lines
- **Loading States** - Beautiful loading animations and error handling
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **TypeScript** - Full type safety throughout the application

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom animations
- **HTTP Client**: Native Fetch API
- **Session Management**: UUID v4

##  Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Backend API server running on configurable port

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd gpt-chat-interface
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure API endpoint**
   
   Edit `src/config/api.ts` to set your backend URL:
   ```typescript
   export const API_CONFIG = {
     BASE_URL: 'http://localhost:3000', // Change this to your API URL
     ENDPOINTS: {
       CHAT: '/chat',
       HISTORY: '/chat/history',
     }
   };
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173`

##  API Integration

The application expects a backend API with the following endpoints:

### Send Message
```http
POST /chat
Content-Type: application/json

{
  "question": "Hello, how are you?",
  "sessionId": "uuid-v4-string"
}
```

**Response:**
```json
{
  "status": true,
  "data": {
    "sessionId": "uuid-v4-string",
    "answer": "I'm doing well, thank you for asking!"
  }
}
```

### Get Chat History
```http
GET /chat/history/{sessionId}
```

**Response:**
```json
{
  "status": true,
  "data": {
    "sessionId": "uuid-v4-string",
    "history": [
      {
        "sender": "user",
        "text": "Hello, how are you?"
      },
      {
        "sender": "bot",
        "text": "I'm doing well, thank you for asking!"
      }
    ]
  }
}
```

### Clear Session
```http
DELETE /chat/history/{sessionId}
```

**Response:**
```json
{
  "status": true,
  "data": {
    "sessionId": "uuid-v4-string",
    "cleared": true
  }
}
```


## Customization

### Changing Colors
Edit the Tailwind classes in `src/App.tsx` to customize the color scheme:
- Primary color: `bg-blue-600`, `text-blue-600`, etc.
- User messages: `bg-blue-600 text-white`
- Bot messages: `bg-white text-gray-800`

### API Configuration
Update `src/config/api.ts` to change:
- Base URL for different environments
- Endpoint paths
- Add new endpoints



### Build for Production
```bash
npm run build
```

##  Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint



---

