# Quick Start Guide

Get your AI Chatbot up and running in 5 minutes!

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Get Your API Key

1. Visit [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy the generated key

## Step 3: Configure API Key

Open `src/environments/environment.ts` and replace `YOUR_API_KEY_HERE` with your actual API key:

```typescript
export const environment = {
  production: false,
  geminiApiKey: 'YOUR_ACTUAL_KEY_HERE',
  geminiApiUrl: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent'
};
```

## Step 4: Run the App

```bash
ng serve
```

Open your browser to `http://localhost:4200/`

## Step 5: Test It Out

1. Type a message in the input box (e.g., "Hello, how are you?")
2. Press Enter or click Send
3. Wait for the AI response
4. Your conversation is automatically saved!

## Common Issues

**App won't start?**
- Make sure you ran `npm install`
- Check that Node.js v18+ is installed: `node --version`

**API not responding?**
- Verify your API key is correct
- Check your internet connection
- Ensure you haven't exceeded the free tier limit (60 requests/min)

**Messages not saving?**
- Check that localStorage is enabled in your browser
- Try clearing browser cache

## Next Steps

- **Customize the UI** - Edit the CSS files to match your style
- **Deploy to Netlify** - Run `npm run build` then drag the `dist` folder to Netlify
- **Add features** - Check the main README for feature roadmap ideas

## Need Help?

- Check the main [README.md](README.md) for detailed documentation
- Review the [AI-CHATBOT-DOCUMENTATION.md](../AI-CHATBOT-DOCUMENTATION.md) for comprehensive guide
- Open an issue if you encounter problems

---

Happy chatting with AI!
