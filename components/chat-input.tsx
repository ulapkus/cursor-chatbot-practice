import { useState } from "react";

export default function ChatInput({
  status,
  onSubmit,
  stop,
}: {
  status: string;
  onSubmit: (text: string) => void;
  stop?: () => void;
}) {
  const [text, setText] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (text.trim() === "") return;
        onSubmit(text);
        setText("");
      }}
      className="relative"
    >
      <div className="relative">
        <input
          className="w-full px-5 py-4 pr-14 bg-input/50 backdrop-blur-sm border border-border/30 rounded-2xl 
                   text-foreground placeholder:text-muted-foreground
                   focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary/30
                   disabled:opacity-50 disabled:cursor-not-allowed
                   transition-all duration-200
                   shadow-card"
          placeholder="Share your thoughts to be challenged..."
          disabled={status !== "ready"}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          type="submit"
          disabled={status !== "ready" || text.trim() === ""}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2.5 rounded-xl
                   bg-primary text-primary-foreground
                   hover:bg-primary/90 active:scale-95
                   disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-primary
                   transition-all duration-200
                   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          aria-label="Send message"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
          </svg>
        </button>
      </div>
    </form>
  );
}
