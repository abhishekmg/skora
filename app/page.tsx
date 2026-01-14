import ChatInterface from './components/ChatInterface';
import CodeEditor from './components/CodeEditor';
import { CodeProvider } from './contexts/CodeContext';

export default function Home() {
  return (
    <CodeProvider>
      <div className="flex h-screen w-screen overflow-hidden">
        {/* Left Side - Chat Interface */}
        <div className="w-1/2 border-r border-gray-200 dark:border-gray-700">
          <ChatInterface />
        </div>

        {/* Right Side - Code Editor */}
        <div className="w-1/2">
          <CodeEditor />
        </div>
      </div>
    </CodeProvider>
  );
}
