'use client';

import { createContext, useContext, useState, useRef, ReactNode } from 'react';

const defaultCode = {
  javascript: `// Write your solution here
function solution() {
  // Your code goes here
  
}`,
  python: `# Write your solution here
def solution():
    # Your code goes here
    pass`,
  java: `// Write your solution here
class Solution {
    public void solution() {
        // Your code goes here
        
    }
}`,
  cpp: `// Write your solution here
#include <iostream>
using namespace std;

int main() {
    // Your code goes here
    
    return 0;
}`,
};

type Language = 'javascript' | 'python' | 'java' | 'cpp';

interface CodeContextType {
  code: string;
  setCode: (code: string) => void;
  language: Language;
  setLanguage: (language: Language) => void;
  resetCode: () => void;
  submitCode: () => void;
  setOnSubmit: (callback: () => void) => void;
}

const CodeContext = createContext<CodeContextType | undefined>(undefined);

export function CodeProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('javascript');
  const [code, setCode] = useState(defaultCode.javascript);
  const onSubmitCallbackRef = useRef<(() => void) | null>(null);

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    setCode(defaultCode[newLanguage]);
  };

  const resetCode = () => {
    setCode(defaultCode[language]);
  };

  const submitCode = () => {
    if (onSubmitCallbackRef.current) {
      onSubmitCallbackRef.current();
    }
  };

  const setOnSubmit = (callback: () => void) => {
    onSubmitCallbackRef.current = callback;
  };

  return (
    <CodeContext.Provider
      value={{
        code,
        setCode,
        language,
        setLanguage,
        resetCode,
        submitCode,
        setOnSubmit,
      }}
    >
      {children}
    </CodeContext.Provider>
  );
}

export function useCode() {
  const context = useContext(CodeContext);
  if (context === undefined) {
    throw new Error('useCode must be used within a CodeProvider');
  }
  return context;
}

