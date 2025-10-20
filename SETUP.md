# Quick Setup Guide

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

Create a file named `.env.local` in the root directory of this project with the following content:

```
OPENAI_API_KEY=your_actual_api_key_here
```

**How to get an OpenAI API key:**

1. Go to https://platform.openai.com/api-keys
2. Sign in or create an account
3. Click "Create new secret key"
4. Copy the key and paste it into your `.env.local` file

⚠️ **Important**: Never commit `.env.local` to version control. It's already in `.gitignore`.

### 3. Run the Development Server

```bash
npm run dev
```

### 4. Open Your Browser

Navigate to http://localhost:3000

## First Time Usage

1. You'll see the intensity selection screen
2. Choose your preferred debate intensity:
   - **Mild** 😊 - Gentle, inquisitive counterpoints
   - **Moderate** 🤔 - Firm but respectful opposition
   - **Intense** 🔥 - Strong, passionate challenges
3. Start typing your opinions and watch the AI challenge them!

## Troubleshooting

### "API key not found" error

- Make sure you created `.env.local` (not `.env`)
- Check that the file is in the root directory (same level as `package.json`)
- Verify the key starts with `OPENAI_API_KEY=`
- Restart the development server after creating the file

### Build errors

```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run dev
```

### Port already in use

```bash
# Run on a different port
PORT=3001 npm run dev
```

## Need Help?

Check the main README.md for detailed documentation.
