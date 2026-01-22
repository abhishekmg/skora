'use client';

import { useState } from 'react';
import { useProgress, getTotalProblemsFromCategories, type CategoryWithProblems } from '../contexts/ProgressContext';
import { useAuth } from '../contexts/AuthContext';
import AuthModal from './AuthModal';
import { cn } from '@/lib/utils';

function DifficultyBadge({ difficulty }: { difficulty: string }) {
  const colors: Record<string, string> = {
    Easy: 'bg-emerald-500/20 text-emerald-400',
    Medium: 'bg-amber-500/20 text-amber-400',
    Hard: 'bg-red-500/20 text-red-400',
  };

  return (
    <span className={cn('rounded px-1.5 py-0.5 text-[10px] font-medium', colors[difficulty] || 'bg-slate-500/20 text-slate-400')}>
      {difficulty}
    </span>
  );
}

function CategorySection({ category }: { category: CategoryWithProblems }) {
  const [isOpen, setIsOpen] = useState(false);
  const { isCompleted, selectedProblem, setSelectedProblem, markComplete, markIncomplete } = useProgress();

  const completedInCategory = category.problems.filter((p) => isCompleted(p.id)).length;
  const totalInCategory = category.problems.length;
  const progress = totalInCategory > 0 ? (completedInCategory / totalInCategory) * 100 : 0;

  return (
    <div className="border-b border-slate-800/60">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center gap-2 px-3 py-2.5 text-left transition hover:bg-slate-800/50"
      >
        <span className="text-base">{category.icon}</span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <span className="truncate text-sm font-medium text-zinc-200">{category.name}</span>
            <span className="shrink-0 text-xs text-zinc-500">
              {completedInCategory}/{totalInCategory}
            </span>
          </div>
          <div className="mt-1 h-1 w-full overflow-hidden rounded-full bg-slate-800">
            <div
              className="h-full rounded-full bg-emerald-500 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
        <svg
          className={cn(
            'h-4 w-4 shrink-0 text-zinc-500 transition-transform',
            isOpen && 'rotate-180'
          )}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="bg-slate-900/50 py-1">
          {category.problems.map((problem) => {
            const completed = isCompleted(problem.id);
            const isSelected = selectedProblem?.id === problem.id;

            return (
              <div
                key={problem.id}
                onClick={() =>
                  setSelectedProblem({
                    ...problem,
                    categoryId: category.id,
                    categoryName: category.name,
                  })
                }
                className={cn(
                  'flex w-full cursor-pointer items-center gap-2 px-4 py-2 text-left transition',
                  isSelected
                    ? 'bg-blue-600/20 text-blue-400'
                    : 'hover:bg-slate-800/50 text-zinc-300'
                )}
              >
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent selecting the problem when clicking the status icon
                    if (completed) {
                      markIncomplete(problem.id);
                    } else {
                      markComplete(problem.id);
                    }
                  }}
                  className={cn(
                    'flex h-4 w-4 shrink-0 cursor-pointer items-center justify-center rounded-full border text-[10px] transition hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1',
                    completed
                      ? 'border-emerald-500 bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30'
                      : 'border-slate-600 hover:border-slate-500'
                  )}
                  title={completed ? 'Click to mark as incomplete' : 'Click to mark as complete'}
                  aria-label={completed ? 'Mark as incomplete' : 'Mark as complete'}
                >
                  {completed && '✓'}
                </button>
                <span className="flex-1 truncate text-sm">{problem.title}</span>
                <DifficultyBadge difficulty={problem.difficulty} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function Sidebar() {
  const { mode, setMode, getCompletedCount, setSelectedProblem, categories, isLoadingData } = useProgress();
  const { user, signOut, isLoading: isAuthLoading } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  
  const totalProblems = getTotalProblemsFromCategories(categories);
  const completedCount = getCompletedCount();

  return (
    <>
      <aside className="flex h-full w-72 shrink-0 flex-col border-r border-slate-800/60 bg-slate-950">
        {/* User section */}
        <div className="shrink-0 border-b border-slate-800/60 px-4 py-3">
          {isAuthLoading ? (
            <div className="h-10 animate-pulse rounded bg-slate-800" />
          ) : user ? (
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 min-w-0">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-medium text-white">
                  {user.email?.[0]?.toUpperCase() || 'U'}
                </div>
                <span className="truncate text-sm text-zinc-300">{user.email}</span>
              </div>
              <button
                onClick={signOut}
                className="shrink-0 text-xs text-zinc-500 hover:text-zinc-300"
              >
                Sign out
              </button>
            </div>
          ) : (
            <button
              onClick={() => setShowAuthModal(true)}
              className="flex w-full items-center justify-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-500"
            >
              Sign in to save progress
            </button>
          )}
        </div>

        {/* Tabs */}
        <div className="flex shrink-0 border-b border-slate-800/60">
          <button
            onClick={() => setMode('roadmap')}
            className={cn(
              'flex-1 px-4 py-3 text-sm font-medium transition',
              mode === 'roadmap'
                ? 'border-b-2 border-blue-500 text-blue-400'
                : 'text-zinc-400 hover:text-zinc-200'
            )}
          >
            Roadmap
          </button>
          <button
            onClick={() => {
              setMode('interview');
              setSelectedProblem(null);
            }}
            className={cn(
              'flex-1 px-4 py-3 text-sm font-medium transition',
              mode === 'interview'
                ? 'border-b-2 border-blue-500 text-blue-400'
                : 'text-zinc-400 hover:text-zinc-200'
            )}
          >
            Interview
          </button>
        </div>

        {mode === 'roadmap' ? (
          <>
            {/* Progress summary */}
            <div className="shrink-0 border-b border-slate-800/60 px-4 py-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-zinc-400">Progress</span>
                <span className="font-medium text-zinc-200">
                  {completedCount} / {totalProblems}
                </span>
              </div>
              <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-800">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-blue-500 transition-all duration-300"
                  style={{ width: `${totalProblems > 0 ? (completedCount / totalProblems) * 100 : 0}%` }}
                />
              </div>
            </div>

            {/* Categories */}
            <div className="flex-1 overflow-y-auto">
              {isLoadingData ? (
                <div className="flex flex-col gap-2 p-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="h-12 animate-pulse rounded bg-slate-800" />
                  ))}
                </div>
              ) : categories.length === 0 ? (
                <div className="p-4 text-center text-sm text-zinc-500">
                  No problems found
                </div>
              ) : (
                categories.map((category) => (
                  <CategorySection key={category.id} category={category} />
                ))
              )}
            </div>
          </>
        ) : (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 p-6 text-center">
            <div className="rounded-full bg-blue-500/10 p-4">
              <svg
                className="h-8 w-8 text-blue-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-zinc-200">Interview Mode</h3>
              <p className="mt-1 text-sm text-zinc-500">
                Chat with the AI interviewer to practice coding problems. Pick a topic and difficulty,
                and the AI will guide you through a real interview experience.
              </p>
            </div>
          </div>
        )}
      </aside>

      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </>
  );
}
