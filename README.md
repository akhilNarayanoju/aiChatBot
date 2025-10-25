# AI Chatbot - Angular Application

An intelligent chatbot application built with Angular 19 and Google's Gemini AI, featuring real-time conversations, chat history persistence, and a modern, responsive UI.

## Features

- **Real-time AI Conversations** - Powered by Google's Gemini API
- **Chat History Persistence** - Conversations saved in browser localStorage
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **Modern UI** - Clean interface with Angular Material styling
- **Loading States** - Visual feedback during API calls
- **Error Handling** - Graceful error management with user-friendly messages
- **Auto-scroll** - Automatically scrolls to latest messages
- **Clear Chat** - Option to clear conversation history

## Tech Stack

- **Framework:** Angular 19 (Standalone Components)
- **UI Library:** Angular Material
- **AI API:** Google Gemini Pro
- **Language:** TypeScript
- **HTTP Client:** Angular HttpClient
- **Storage:** Browser localStorage
- **Animations:** CSS animations & Angular animations

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Google Gemini API key (free tier available)

## Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd ai-chatbot
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up API Key**
   - Get your free API key from [Google AI Studio](https://aistudio.google.com/app/apikey)
   - Update `src/environments/environment.ts`:
     ```typescript
     export const environment = {
       production: false,
       geminiApiKey: 'YOUR_API_KEY_HERE',
       geminiApiUrl: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent'
     };
     ```

## Development

Run the development server:

```bash
ng serve
```

Navigate to `http://localhost:4200/`. The app will automatically reload when you make changes.

## Build

Create a production build:

```bash
npm run build
```

Build artifacts will be stored in the `dist/ai-chatbot/browser/` directory.

## Deployment

### Netlify Deployment

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**
   ```bash
   netlify login
   ```

3. **Deploy**
   ```bash
   netlify deploy --prod
   ```

### Alternative: Netlify UI Deployment

1. Build your project: `npm run build`
2. Go to [Netlify](https://app.netlify.com)
3. Drag and drop the `dist/ai-chatbot/browser` folder
4. Your site is live!

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── chat/              # Main chat interface
│   │   │   ├── chat.component.ts
│   │   │   ├── chat.component.html
│   │   │   └── chat.component.css
│   │   └── message/           # Individual message display
│   │       ├── message.component.ts
│   │       ├── message.component.html
│   │       └── message.component.css
│   ├── services/
│   │   ├── gemini.service.ts  # Gemini API integration
│   │   └── storage.service.ts # localStorage management
│   ├── models/
│   │   └── message.model.ts   # TypeScript interfaces
│   ├── app.component.ts
│   └── app.config.ts
├── environments/
│   ├── environment.ts         # Development config
│   └── environment.prod.ts    # Production config
└── styles.css                 # Global styles
```

## How It Works

1. User types a message in the input field
2. Message is added to the chat with 'user' sender type
3. Gemini API is called with the user's message
4. AI response is received and added with 'ai' sender type
5. All messages are automatically saved to localStorage
6. On app reload, previous messages are restored

## Key Components

### GeminiService
Handles all communication with Google's Gemini API:
- `generateResponse(prompt: string)` - Sends prompt and receives AI response
- Error handling with retry logic
- Response parsing and validation

### StorageService
Manages chat history persistence:
- `saveMessages()` - Saves messages to localStorage
- `loadMessages()` - Retrieves messages on app load
- `clearMessages()` - Removes all stored messages
- `hasStoredMessages()` - Checks if history exists

### ChatComponent
Main interface for user interaction:
- Message sending and receiving
- Loading state management
- Auto-scroll to bottom
- Keyboard shortcuts (Enter to send)

### MessageComponent
Displays individual messages:
- Different styling for user vs AI messages
- Timestamp display
- Smooth animations

## Environment Variables

For production deployment, use environment variables instead of hardcoding the API key:

**Netlify:**
Set environment variable in Netlify dashboard under Site Settings > Environment Variables

**Local .env (not recommended for production):**
Create a `.env` file (add to `.gitignore`):
```
GEMINI_API_KEY=your_key_here
```

## Security Notes

- Never commit API keys to version control
- Use environment variables for production
- The current setup stores the API key in the frontend (acceptable for demos, but consider a backend proxy for production)
- Add `.env` to `.gitignore`

## Features Roadmap

- [ ] Dark/Light theme toggle
- [ ] Multiple conversation threads
- [ ] Export chat history (JSON/TXT)
- [ ] Voice input/output
- [ ] Code syntax highlighting
- [ ] Markdown rendering
- [ ] User authentication
- [ ] Cloud sync

## Troubleshooting

**Build Errors:**
- Delete `node_modules` and run `npm install` again
- Clear Angular cache: `ng cache clean`

**API Errors:**
- Verify API key is correct
- Check internet connection
- Ensure you haven't exceeded free tier limits (60 requests/min)

**Chat Not Persisting:**
- Check browser localStorage is enabled
- Clear browser cache and try again

## License

MIT License - Free to use for personal and commercial projects

## Author

Your Name

## Acknowledgments

- Built with Angular CLI
- Powered by Google Gemini AI
- UI inspired by modern chat applications

---

**Need Help?** Open an issue or reach out!

**Live Demo:** [Add your deployed URL here]
