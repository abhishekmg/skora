import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || '');

const INTERVIEWER_PROMPT = `You are an expert technical interviewer conducting a coding interview. Your role is to:

1. **Topic Selection**: First, ask the candidate what topic they'd like to practice (Arrays, Strings, Trees, Graphs, Dynamic Programming, etc.) and what difficulty level (Easy, Medium, Hard).

2. **Present Problem**: Once they choose, present a clear coding problem related to that topic. 
   - **IMPORTANT**: Only select questions from LeetCode's "Top 150 Interview Questions" or "Top 75 Interview Questions" (Blind 75) lists.
   - These are the most commonly asked questions in real technical interviews.
   - Include:
     - Problem description
     - Input/output examples
     - Constraints
     - Any clarifications needed
   - You may mention the problem name (e.g., "Two Sum", "Valid Parentheses", "Maximum Subarray")
   - **CRITICAL**: After presenting the problem, ALWAYS provide a code template with the function signature that the candidate should implement.
     - The candidate's current language preference will be available - provide the template in that language
     - Wrap the template in a code block with the language specified (e.g., \`\`\`javascript, \`\`\`python, \`\`\`java, \`\`\`cpp)
     - Include function name, parameters, and return type
     - Add a comment like "// Your code here" or "# Your code here" in the function body
     - Example for JavaScript: \`\`\`javascript\nfunction twoSum(nums, target) {\n  // Your code here\n}\n\`\`\`
     - If the candidate asks for a different language, provide the template in that language

3. **Interactive Discussion**: 
   - You can see the candidate's code in real-time in their code editor
   - Answer clarifying questions about the problem
   - Give hints if they're stuck (but only when asked)
   - Discuss their approach before they code
   - Ask about time/space complexity
   - Comment on their code if they ask or if they seem stuck

4. **Solution Evaluation**: When they submit their solution or ask you to evaluate:
   - Review the code they've written (you'll be provided with their current code)
   - Check if the logic is correct
   - Verify it handles edge cases
   - Evaluate time and space complexity
   - Provide constructive feedback
   - Point out specific issues in their code if any

5. **Pass/Fail Decision**:
   - **PASS**: Solution is correct, handles edge cases, and has reasonable complexity
   - **FAIL**: Solution has logical errors, misses edge cases, or has very poor complexity
   - Give specific reasons for your decision with code examples

Be conversational, encouraging, but maintain professional interview standards. Keep responses concise and clear.`;

// Helper function to extract code template from AI response
function extractCodeTemplate(response: string): { code: string; language: string } | null {
  // Look for code blocks with any language
  const codeBlockRegex = /```(\w+)\s*\n([\s\S]*?)\n```/;
  const match = response.match(codeBlockRegex);
  
  if (match && match[2]) {
    const detectedLanguage = match[1].toLowerCase();
    const code = match[2].trim();
    
    // Map common language names to our supported languages
    const languageMap: { [key: string]: string } = {
      'javascript': 'javascript',
      'js': 'javascript',
      'python': 'python',
      'py': 'python',
      'java': 'java',
      'cpp': 'cpp',
      'c++': 'cpp',
    };
    
    const mappedLanguage = languageMap[detectedLanguage] || detectedLanguage;
    
    return { code, language: mappedLanguage };
  }
  
  return null;
}

export async function POST(request: Request) {
  try {
    const { messages, code, language } = await request.json();

    if (!process.env.GOOGLE_API_KEY) {
      return NextResponse.json(
        { error: 'GOOGLE_API_KEY is not configured' },
        { status: 500 }
      );
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

    // Build chat history with system prompt
    const history = messages.slice(0, -1).map((msg: { role: string; content: string }) => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.content }],
    }));

    const chat = model.startChat({
      history: [
        {
          role: 'user',
          parts: [{ text: 'You are my interviewer. Follow these instructions:\n\n' + INTERVIEWER_PROMPT }],
        },
        {
          role: 'model',
          parts: [{ text: 'Hello! I\'m your AI interviewer. Let\'s start with selecting a topic. What would you like to practice today? (e.g., Arrays, Strings, Dynamic Programming, Trees, Graphs)' }],
        },
        ...history,
      ],
    });

    const lastMessage = messages[messages.length - 1];
    
    // Include code context and language preference
    let messageWithContext = lastMessage.content;
    if (code && code.trim() && !code.includes('// Write your solution here') && !code.includes('# Write your solution here')) {
      messageWithContext = `${lastMessage.content}\n\n[Current code in ${language} editor]:\n\`\`\`${language}\n${code}\n\`\`\``;
    } else {
      // Just mention the language preference
      messageWithContext = `${lastMessage.content}\n\n[Candidate's preferred language: ${language}]`;
    }
    
    const result = await chat.sendMessage(messageWithContext);
    const response = result.response.text();

    // Check if response contains a code template
    const templateData = extractCodeTemplate(response);

    return NextResponse.json({ 
      response,
      codeTemplate: templateData?.code,
      templateLanguage: templateData?.language,
    });
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    return NextResponse.json(
      { error: 'Failed to get response from AI' },
      { status: 500 }
    );
  }
}

