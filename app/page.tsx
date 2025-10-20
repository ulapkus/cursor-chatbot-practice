"use client";

import { useChat } from "@ai-sdk/react";
import ChatInput from "@/components/chat-input";
import DevilAdvocateIcon from "@/components/devil-advocate-icon";
import { useState } from "react";

type IntensityLevel = "mild" | "moderate" | "intense";

export default function Chat() {
  const [intensitySelected, setIntensitySelected] = useState(false);
  const [intensity, setIntensity] = useState<IntensityLevel>("moderate");

  const { error, status, sendMessage, messages, regenerate, stop } = useChat({
    initialMessages: [],
  });

  const handleIntensitySelect = (selectedIntensity: IntensityLevel) => {
    setIntensity(selectedIntensity);
    setIntensitySelected(true);
  };

  const handleSendMessage = (text: string) => {
    // Include intensity in the first message metadata
    if (messages.length === 0) {
      sendMessage({ text, experimental_metadata: { intensity } });
    } else {
      sendMessage({ text });
    }
  };

  // Show intensity selector if not yet selected and no messages
  if (!intensitySelected && messages.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-gradient-purple">
        <div className="max-w-2xl w-full text-center">
          <h1 className="text-5xl font-bold mb-3 bg-gradient-to-r from-primary via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Devil's Advocate
          </h1>
          <p className="text-lg text-muted-foreground mb-10 max-w-lg mx-auto">
            I'm here to challenge your statements and beliefs with thoughtful
            counterarguments. Select your preferred debate intensity:
          </p>

          <div className="space-y-3">
            <button
              onClick={() => handleIntensitySelect("mild")}
              className="intensity-btn intensity-btn-mild w-full group"
            >
              <div className="font-semibold text-lg mb-1.5 text-foreground group-hover:text-emerald-200 transition-colors">
                😊 Mild
              </div>
              <div className="text-sm text-muted-foreground">
                Gentle counterpoints with phrases like "Have you considered..."
              </div>
            </button>

            <button
              onClick={() => handleIntensitySelect("moderate")}
              className="intensity-btn intensity-btn-moderate w-full group"
            >
              <div className="font-semibold text-lg mb-1.5 text-foreground group-hover:text-amber-200 transition-colors">
                🤔 Moderate
              </div>
              <div className="text-sm text-muted-foreground">
                Firm but respectful opposition using "I disagree because..."
              </div>
            </button>

            <button
              onClick={() => handleIntensitySelect("intense")}
              className="intensity-btn intensity-btn-intense w-full group"
            >
              <div className="font-semibold text-lg mb-1.5 text-foreground group-hover:text-rose-200 transition-colors">
                🔥 Intense
              </div>
              <div className="text-sm text-muted-foreground">
                Strong, passionate counterarguments that challenge vigorously
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-purple">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-card/80 backdrop-blur-lg border-b border-border/50 shadow-card">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
            🎭 Devil's Advocate
          </h1>
          <div className={`intensity-badge intensity-badge-${intensity}`}>
            {intensity.charAt(0).toUpperCase() + intensity.slice(1)}
          </div>
        </div>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto px-4 py-6 space-y-4">
          {messages.length === 0 && (
            <div className="flex items-center justify-center h-full min-h-[400px]">
              <div className="text-center max-w-md">
                <div className="flex justify-center mb-6">
                  <DevilAdvocateIcon className="w-32 h-32" />
                </div>
                <h2 className="text-xl font-semibold text-foreground mb-2">
                  Ready to Challenge Your Ideas?
                </h2>
                <p className="text-muted-foreground">
                  Share any statement or belief below, and I'll present
                  thoughtful counterarguments in{" "}
                  <span className="text-amber-300 font-medium">
                    {intensity}
                  </span>{" "}
                  mode.
                </p>
              </div>
            </div>
          )}
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex ${
                m.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[85%] rounded-2xl p-4 shadow-card transition-all duration-200 ${
                  m.role === "user"
                    ? "bg-primary/20 border border-primary/30 backdrop-blur-sm"
                    : "bg-card/60 border border-border/50 backdrop-blur-sm"
                }`}
              >
                <div className="font-semibold mb-2 text-sm flex items-center gap-2">
                  <span>{m.role === "user" ? "👤" : "🎭"}</span>
                  <span className="text-muted-foreground">
                    {m.role === "user" ? "You" : "Devil's Advocate"}
                  </span>
                </div>
                <div className="whitespace-pre-wrap text-foreground leading-relaxed">
                  {m.parts.map((part, index) => {
                    if (part.type === "text") {
                      return <span key={index}>{part.text}</span>;
                    }
                  })}
                </div>
              </div>
            </div>
          ))}

          {(status === "submitted" || status === "streaming") && (
            <div className="flex justify-start">
              <div className="max-w-[85%] rounded-2xl p-4 bg-card/60 border border-border/50 backdrop-blur-sm shadow-card">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <div className="flex gap-1">
                    <div
                      className="w-2 h-2 bg-primary rounded-full animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-primary rounded-full animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-primary rounded-full animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    ></div>
                  </div>
                  <span className="text-sm">Thinking...</span>
                </div>
                <button
                  type="button"
                  className="mt-3 px-3 py-1.5 text-sm text-primary border border-primary/50 rounded-lg hover:bg-primary/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  onClick={stop}
                >
                  Stop
                </button>
              </div>
            </div>
          )}

          {error && (
            <div className="flex justify-center">
              <div className="rounded-2xl p-4 bg-destructive/10 border border-destructive/30 backdrop-blur-sm shadow-card">
                <div className="text-destructive-foreground mb-3 flex items-center gap-2">
                  <span>⚠️</span>
                  <span>An error occurred</span>
                </div>
                <button
                  type="button"
                  className="px-4 py-2 text-sm bg-destructive text-destructive-foreground rounded-lg hover:bg-destructive/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  onClick={() => regenerate()}
                >
                  Retry
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Input Area */}
      <div className="sticky bottom-0 bg-card/80 backdrop-blur-lg border-t border-border/50 shadow-card">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <ChatInput status={status} onSubmit={handleSendMessage} />
        </div>
      </div>
    </div>
  );
}
