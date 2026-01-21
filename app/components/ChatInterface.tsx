 'use client';

import { useState, useEffect, useCallback, useRef } from "react";
import { useCode } from "../contexts/CodeContext";
import { useProgress } from "../contexts/ProgressContext";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";
import { Spinner } from "./ui/spinner";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const getInitialMessage = (mode: 'roadmap' | 'interview', problemTitle?: string, categoryName?: string): Message => {
  if (mode === 'roadmap' && problemTitle && categoryName) {
    return {
      role: "assistant",
      content: `Hey! Let's learn **${problemTitle}** from ${categoryName} together. 🎯\n\nI'm here as your mentor - feel free to ask me anything! If you're stuck or don't know how to approach this, just say so and I'll teach you the concepts step by step.\n\nWhen you're ready, say "let's start" and I'll present the problem!`,
    };
  }
  return {
    role: "assistant",
    content:
      "Hello! I'm your AI interviewer. Let's simulate a real coding interview. 💼\n\nPick a topic (Arrays, Strings, Trees, Graphs, DP, etc.) and difficulty level, and I'll give you a problem to solve under interview conditions.\n\nI'll evaluate your solution like a real interviewer would. Ready?",
  };
};

export default function ChatInterface() {
  const { code, language, setOnSubmit, setCode, setLanguage, resetCode } = useCode();
  const { selectedProblem, mode, markComplete } = useProgress();
  const prevProblemRef = useRef<string | null>(null);
  
  const [messages, setMessages] = useState<Message[]>([
    getInitialMessage('interview'),
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Reset chat when problem or mode changes
  useEffect(() => {
    const problemId = selectedProblem?.id ?? null;
    
    // Only reset if something actually changed
    if (problemId !== prevProblemRef.current) {
      prevProblemRef.current = problemId;
      
      if (mode === 'roadmap' && selectedProblem) {
        setMessages([getInitialMessage('roadmap', selectedProblem.title, selectedProblem.categoryName)]);
        resetCode();
      } else if (mode === 'interview') {
        setMessages([getInitialMessage('interview')]);
        resetCode();
      }
    }
  }, [selectedProblem, mode, resetCode]);

  const handleSubmitCode = useCallback(async () => {
    const problemContext = selectedProblem 
      ? `I'm solving the "${selectedProblem.title}" problem from ${selectedProblem.categoryName}.`
      : '';
    const submitMessage =
      `${problemContext} Please evaluate my solution and let me know if I pass or fail. Be specific about correctness, time complexity, and space complexity.`;
    const newMessages = [
      ...messages,
      { role: "user" as const, content: submitMessage },
    ];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: newMessages,
          code,
          language,
          problemContext: selectedProblem ? {
            title: selectedProblem.title,
            category: selectedProblem.categoryName,
            difficulty: selectedProblem.difficulty,
          } : null,
        }),
      });

      const data = await response.json();

      if (data.error) {
        setMessages([
          ...newMessages,
          {
            role: "assistant",
            content: `Error: ${data.error}. Please check your API key configuration.`,
          },
        ]);
        setIsLoading(false);
        return;
      }

      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content: data.response,
        },
      ]);

      // If AI says the solution passes and we have a selected problem, mark it complete
      if (data.passed && selectedProblem) {
        markComplete(selectedProblem.id);
      }

      if (data.codeTemplate) {
        if (data.templateLanguage && data.templateLanguage !== language) {
          setLanguage(data.templateLanguage);
        }
        setCode(data.codeTemplate);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content:
            "Sorry, there was an error communicating with the AI. Please try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }, [messages, code, language, setCode, setLanguage, selectedProblem, markComplete]);

  useEffect(() => {
    setOnSubmit(handleSubmitCode);
  }, [handleSubmitCode, setOnSubmit]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const newMessages = [
      ...messages,
      { role: "user" as const, content: input },
    ];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: newMessages,
          code,
          language,
          // Pass problem context for mentor mode
          problemContext: selectedProblem ? {
            title: selectedProblem.title,
            category: selectedProblem.categoryName,
            difficulty: selectedProblem.difficulty,
          } : null,
        }),
      });

      const data = await response.json();

      if (data.error) {
        setMessages([
          ...newMessages,
          {
            role: "assistant",
            content: `Error: ${data.error}. Please check your API key configuration.`,
          },
        ]);
        setIsLoading(false);
        return;
      }

      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content: data.response,
        },
      ]);

      // If AI says the solution passes and we have a selected problem, mark it complete
      if (data.passed && selectedProblem) {
        markComplete(selectedProblem.id);
      }

      if (data.codeTemplate) {
        if (data.templateLanguage && data.templateLanguage !== language) {
          setLanguage(data.templateLanguage);
        }
        setCode(data.codeTemplate);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content:
            "Sorry, there was an error communicating with the AI. Please try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const headerTitle = mode === 'roadmap' && selectedProblem 
    ? selectedProblem.title 
    : 'Mock Interview';
  
  const headerSubtitle = mode === 'roadmap' && selectedProblem
    ? `${selectedProblem.categoryName} • ${selectedProblem.difficulty} • Mentor Mode 🎓`
    : 'Interview Mode 💼';

  return (
    <div className="flex h-full flex-col bg-slate-950">
      <div className="shrink-0 border-b border-slate-800/60 px-4 py-3">
        <h2 className="text-sm font-semibold text-zinc-100">{headerTitle}</h2>
        <p className="text-xs text-zinc-500">{headerSubtitle}</p>
      </div>

      <div className="flex min-h-0 flex-1 flex-col">
        <ScrollArea className="flex-1 space-y-4 px-4 py-3">
          {messages.map((message) => (
            <div
              key={`${message.role}-${message.content.slice(0, 24)}`}
              className={`flex ${
                message.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[80%] overflow-hidden rounded-lg px-4 py-3 text-sm shadow-sm ${
                  message.role === "user"
                    ? "bg-blue-600 text-white"
                    : "border border-gray-200/80 bg-gray-100 text-gray-900 shadow-xs dark:border-gray-800/80 dark:bg-gray-900 dark:text-gray-50"
                }`}
              >
                <div
                  className={`chat-message-content prose prose-sm max-w-none overflow-x-auto ${
                    message.role === "user"
                      ? "prose-invert prose-headings:text-white prose-p:text-white prose-strong:text-white prose-code:text-blue-200 prose-pre:bg-blue-700"
                      : "dark:prose-invert prose-pre:bg-gray-100 dark:prose-pre:bg-gray-950 prose-code:text-blue-600 dark:prose-code:text-blue-400"
                  }`}
                >
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {message.content}
                  </ReactMarkdown>
                </div>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div className="max-w-[80%] rounded-lg border border-gray-200/80 bg-gray-100 px-4 py-3 text-gray-900 shadow-sm dark:border-gray-800/80 dark:bg-gray-900 dark:text-gray-50">
                <div className="flex items-center gap-2">
                  <Spinner className="h-4 w-4" />
                  <span className="text-xs font-medium text-gray-600 dark:text-gray-300">
                    Just a second...
                  </span>
                </div>
              </div>
            </div>
          )}
        </ScrollArea>
      </div>

      <div className="flex shrink-0 items-center gap-2 border-t border-slate-800/60 bg-slate-900/80 px-4 py-3">
        <Input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Ask a question or describe a problem..."
          className="flex-1 border-slate-700 bg-slate-900 text-zinc-100 placeholder:text-zinc-500"
        />
        <Button
          onClick={handleSend}
          disabled={isLoading}
          className="whitespace-nowrap"
        >
          {isLoading ? "Sending..." : "Send"}
        </Button>
      </div>
    </div>
  );
}


