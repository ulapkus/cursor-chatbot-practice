# Devil's Advocate Chatbot

A specialized AI chatbot designed to challenge your statements and beliefs by presenting thoughtful counterarguments. The chatbot consistently takes the opposing viewpoint while maintaining intellectual rigor and avoiding personal attacks.

## Features

- 🎭 **Devil's Advocate Mode**: AI always takes the opposing viewpoint
- 🎚️ **Three Intensity Levels**: Choose how forcefully the AI challenges you
- 📋 **Structured Responses**: Consistent format with acknowledgment, counterargument, evidence, and questions
- ⚡ **Streaming Responses**: Real-time AI responses
- 🎨 **Beautiful UI**: Clean, modern interface with intensity-based color coding

## Intensity Levels

### 😊 Mild

Gentle counterpoints with a soft, inquisitive tone:

- "Have you considered..."
- "Another perspective might be..."
- "While I understand your point, it's worth noting..."

### 🤔 Moderate

Firm but respectful opposition with clear, assertive language:

- "I disagree because..."
- "The evidence suggests otherwise..."
- "That position overlooks..."

### 🔥 Intense

Strong, passionate counterarguments with forceful, direct language:

- "That's completely wrong because..."
- "Your argument fails to account for..."
- "This fundamentally misunderstands..."

## Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Add OpenAI API Key

Create a `.env.local` file in the project root:

```bash
OPENAI_API_KEY=your_openai_api_key_here
```

Get your API key from: https://platform.openai.com/api-keys

### 3. Run Development Server

```bash
npm run dev
```

### 4. Open in Browser

Navigate to: http://localhost:3000

## Usage

1. **Select Intensity Level**: Choose Mild, Moderate, or Intense
2. **Type Your Statement**: Express your opinion or belief
3. **Receive Challenge**: The AI will present counterarguments
4. **Continue Debate**: Keep the conversation going with follow-ups

## How It Works

### Response Structure

Every AI response follows this format:

1. **Acknowledgment**: Brief recognition of your position
2. **Counter Position**: The opposing viewpoint
3. **Supporting Arguments**: Logical reasoning and evidence
4. **Thought-Provoking Question**: Challenge to deepen the debate

### Rules of Engagement

- ✅ Always focused on the topic
- ✅ Supported by logical reasoning
- ✅ Tone matches selected intensity
- ✅ No personal attacks at any level
- ✅ Addresses most significant points
- ✅ Cites relevant examples when appropriate

## Technical Stack

- **Framework**: Next.js 15
- **AI SDK**: Vercel AI SDK with OpenAI integration
- **Model**: GPT-4o
- **Styling**: Tailwind CSS
- **Language**: TypeScript

## Files Modified

- `app/api/chat/route.ts` - API endpoint with devil's advocate system prompts
- `app/page.tsx` - Main chat UI with intensity selection
- `app/layout.tsx` - Page metadata
- `app/globals.css` - Custom styling for intensity UI

## Environment Variables

| Variable         | Description         | Required |
| ---------------- | ------------------- | -------- |
| `OPENAI_API_KEY` | Your OpenAI API key | Yes      |

## Features in Detail

### Intensity Persistence

Once you select an intensity level at the start, it persists throughout the entire conversation session. The system prompt is built with your chosen intensity and applied to all AI responses.

### Streaming

Responses stream in real-time as the AI generates them. You can stop generation at any time using the Stop button.

### Error Handling

If an error occurs, you'll see a retry button to regenerate the last response.

### Responsive Design

The UI adapts to different screen sizes for optimal viewing on desktop and mobile devices.

## Development

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Lint Code

```bash
npm run lint
```

## License

MIT

## Credits

Built with the Vercel AI SDK and OpenAI's GPT-4o model.
# cursor-chatbot-practice
