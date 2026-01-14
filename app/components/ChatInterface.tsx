'use client';

import { useState, useEffect, useCallback } from 'react';
import { useCode } from '../contexts/CodeContext';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

export default function ChatInterface() {
  const { code, language, setOnSubmit, setCode, setLanguage } = useCode();
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hello! I\'m your AI interviewer. Let\'s start with selecting a topic. What would you like to practice today? (e.g., Arrays, Strings, Dynamic Programming, Trees, Graphs)',
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmitCode = useCallback(async () => {
    const submitMessage = 'Please evaluate my solution and let me know if I pass or fail the interview.';
    const newMessages = [...messages, { role: 'user' as const, content: submitMessage }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          messages: newMessages,
          code,
          language,
        }),
      });

      const data = await response.json();

      if (data.error) {
        setMessages([
          ...newMessages,
          {
            role: 'assistant',
            content: `Error: ${data.error}. Please check your API key configuration.`,
          },
        ]);
        setIsLoading(false);
        return;
      }

      setMessages([
        ...newMessages,
        {
          role: 'assistant',
          content: data.response,
        },
      ]);

      // If AI provided a code template, update the editor
      if (data.codeTemplate) {
        // Switch language if AI provided a different one
        if (data.templateLanguage && data.templateLanguage !== language) {
          setLanguage(data.templateLanguage as any);
        }
        setCode(data.codeTemplate);
      }
    } catch (error) {
      console.error('Error:', error);
      setMessages([
        ...newMessages,
        {
          role: 'assistant',
          content: 'Sorry, there was an error communicating with the AI. Please try again.',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }, [messages, code, language, setCode, setLanguage]);

  useEffect(() => {
    setOnSubmit(handleSubmitCode);
  }, [handleSubmitCode, setOnSubmit]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const newMessages = [...messages, { role: 'user' as const, content: input }];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      // Call the API route with code context
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          messages: newMessages,
          code,
          language,
        }),
      });

      const data = await response.json();

      if (data.error) {
        setMessages([
          ...newMessages,
          {
            role: 'assistant',
            content: `Error: ${data.error}. Please check your API key configuration.`,
          },
        ]);
        setIsLoading(false);
        return;
      }

      setMessages([
        ...newMessages,
        {
          role: 'assistant',
          content: data.response,
        },
      ]);

      // If AI provided a code template, update the editor
      if (data.codeTemplate) {
        // Switch language if AI provided a different one
        if (data.templateLanguage && data.templateLanguage !== language) {
          setLanguage(data.templateLanguage as any);
        }
        setCode(data.codeTemplate);
      }
    } catch (error) {
      console.error('Error:', error);
      setMessages([
        ...newMessages,
        {
          role: 'assistant',
          content: 'Sorry, there was an error communicating with the AI. Please try again.',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-full flex-col bg-gray-50 dark:bg-gray-900">
      {/* Chat Header */}
      <div className="border-b border-gray-200 bg-white px-6 py-4 dark:border-gray-700 dark:bg-gray-800">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          AI Interview Assistant
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Conversational coding interview
        </p>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.role === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`max-w-[80%] rounded-lg px-4 py-3 ${
                message.role === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-900 dark:bg-gray-800 dark:text-white border border-gray-200 dark:border-gray-700'
              }`}
            >
              <div 
                className={`prose prose-sm max-w-none ${
                  message.role === 'user' 
                    ? 'prose-invert prose-headings:text-white prose-p:text-white prose-strong:text-white prose-code:text-blue-200 prose-pre:bg-blue-700' 
                    : 'dark:prose-invert prose-pre:bg-gray-100 dark:prose-pre:bg-gray-900 prose-code:text-blue-600 dark:prose-code:text-blue-400'
                }`}
              >
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {message.content}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        ))}
        
        {/* Loading Indicator */}
        {isLoading && (
          <div className="flex justify-start">
            <div className="max-w-[80%] rounded-lg px-4 py-3 bg-white text-gray-900 dark:bg-gray-800 dark:text-white border border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">AI is thinking...</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="border-t border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type your message..."
            className="flex-1 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
          />
          <button
            onClick={handleSend}
            disabled={isLoading}
            className="rounded-lg bg-blue-600 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Sending...' : 'Send'}
          </button>
        </div>
      </div>
    </div>
  );
}


