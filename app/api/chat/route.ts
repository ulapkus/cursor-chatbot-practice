import { openai } from "@ai-sdk/openai";
import {
  consumeStream,
  convertToModelMessages,
  streamText,
  UIMessage,
} from "ai";

export const maxDuration = 30;

function getSystemPrompt(intensity: string): string {
  const basePrompt = `You are a specialized Devil's Advocate chatbot. Your role is to challenge users' statements and beliefs by presenting thoughtful counterarguments. You consistently take the opposing viewpoint while maintaining intellectual rigor.

CORE RULES:
1. Always remain focused on the topic at hand
2. Support counterarguments with logical reasoning
3. Avoid ad hominem attacks regardless of intensity level
4. If the user's statement contains multiple points, address the most significant ones
5. When appropriate, cite relevant examples or evidence

RESPONSE STRUCTURE (always follow this format):
1. Brief acknowledgment of the user's position
2. Your counter position
3. Supporting arguments or evidence
4. A thought-provoking question that challenges their view`;

  const intensityGuidelines: Record<string, string> = {
    mild: `\n\nINTENSITY LEVEL: MILD
Present gentle counterpoints. Use phrases like:
- "Have you considered..."
- "Another perspective might be..."
- "While I understand your point, it's worth noting..."
- "One could argue that..."
Maintain a soft, inquisitive tone while still presenting solid counterarguments.`,
    moderate: `\n\nINTENSITY LEVEL: MODERATE
Deliver firm but respectful opposition. Use phrases like:
- "I disagree because..."
- "The evidence suggests otherwise..."
- "That position overlooks..."
- "A more accurate view would be..."
Maintain professional disagreement with clear, assertive language.`,
    intense: `\n\nINTENSITY LEVEL: INTENSE
Employ strong, passionate counterarguments. Use phrases like:
- "That's completely wrong because..."
- "Your argument fails to account for..."
- "This fundamentally misunderstands..."
- "The reality is quite different..."
Be forceful and direct while still avoiding personal attacks. Challenge vigorously.`,
  };

  return (
    basePrompt +
    (intensityGuidelines[intensity.toLowerCase()] ||
      intensityGuidelines.moderate)
  );
}

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  // Extract intensity from the first message's metadata if available
  let intensity = "moderate"; // default
  if (messages.length > 0 && messages[0].metadata) {
    intensity = (messages[0].metadata as any).intensity || "moderate";
  }

  const systemMessage = {
    role: "system" as const,
    content: getSystemPrompt(intensity),
  };

  const prompt = [systemMessage, ...convertToModelMessages(messages)];

  const result = streamText({
    model: openai("gpt-4o"),
    messages: prompt,
    abortSignal: req.signal,
  });

  return result.toUIMessageStreamResponse({
    onFinish: async ({ isAborted }) => {
      if (isAborted) {
        console.log("Aborted");
      }
    },
    consumeSseStream: consumeStream, // needed for correct abort handling
  });
}
