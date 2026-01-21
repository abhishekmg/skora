'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Problem } from '../data/problems';

interface ProgressContextType {
  completedProblems: Set<string>;
  markComplete: (problemId: string) => void;
  markIncomplete: (problemId: string) => void;
  isCompleted: (problemId: string) => boolean;
  getCompletedCount: () => number;
  selectedProblem: (Problem & { categoryId: string; categoryName: string }) | null;
  setSelectedProblem: (problem: (Problem & { categoryId: string; categoryName: string }) | null) => void;
  mode: 'roadmap' | 'interview';
  setMode: (mode: 'roadmap' | 'interview') => void;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

const STORAGE_KEY = 'leetcode-progress';

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [completedProblems, setCompletedProblems] = useState<Set<string>>(new Set());
  const [selectedProblem, setSelectedProblem] = useState<(Problem & { categoryId: string; categoryName: string }) | null>(null);
  const [mode, setMode] = useState<'roadmap' | 'interview'>('roadmap');
  const [isHydrated, setIsHydrated] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setCompletedProblems(new Set(parsed));
      } catch (e) {
        console.error('Failed to parse progress from localStorage', e);
      }
    }
    setIsHydrated(true);
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...completedProblems]));
    }
  }, [completedProblems, isHydrated]);

  const markComplete = (problemId: string) => {
    setCompletedProblems((prev) => new Set([...prev, problemId]));
  };

  const markIncomplete = (problemId: string) => {
    setCompletedProblems((prev) => {
      const next = new Set(prev);
      next.delete(problemId);
      return next;
    });
  };

  const isCompleted = (problemId: string) => completedProblems.has(problemId);

  const getCompletedCount = () => completedProblems.size;

  return (
    <ProgressContext.Provider
      value={{
        completedProblems,
        markComplete,
        markIncomplete,
        isCompleted,
        getCompletedCount,
        selectedProblem,
        setSelectedProblem,
        mode,
        setMode,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
}
