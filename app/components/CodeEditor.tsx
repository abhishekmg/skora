'use client';

import Editor from '@monaco-editor/react';
import { useCode } from '../contexts/CodeContext';

export default function CodeEditor() {
  const { code, setCode, language, setLanguage, resetCode, submitCode } = useCode();

  return (
    <div className="flex h-full flex-col bg-gray-900">
      {/* Editor Header */}
      <div className="border-b border-gray-700 bg-gray-800 px-6 py-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-white">Code Editor</h2>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value as any)}
            className="rounded-md border border-gray-600 bg-gray-700 px-3 py-1.5 text-sm text-white focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
            <option value="cpp">C++</option>
          </select>
        </div>
      </div>

      {/* Monaco Code Editor */}
      <div className="flex-1 overflow-hidden">
        <Editor
          height="100%"
          language={language}
          value={code}
          onChange={(value) => setCode(value || '')}
          theme="vs-dark"
          options={{
            fontSize: 14,
            minimap: { enabled: false },
            scrollBeyondLastLine: false,
            automaticLayout: true,
            tabSize: 2,
            wordWrap: 'on',
            formatOnPaste: true,
            formatOnType: true,
          }}
        />
      </div>

      {/* Editor Footer with Actions */}
      <div className="border-t border-gray-700 bg-gray-800 px-6 py-4">
        <div className="flex gap-3">
          <button className="rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800">
            Run Code
          </button>
          <button 
            onClick={submitCode}
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            Submit Solution
          </button>
          <button 
            onClick={resetCode}
            className="rounded-lg border border-gray-600 bg-gray-700 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

